#!/usr/bin/env python3
"""Renames the camera-numbered originals in portfolio/ to their painting titles.

The build derives every published filename, manifest id and URL from the source
filename, so renaming here flows through the whole site on the next
`npm run portfolio`. painting-details.json is keyed by filename stem, so its keys
are rewritten in step with the files.

Run with --apply to actually move files. Without it, prints the plan and exits.
Writes scripts/rename-map.json so the rename can be undone (--revert).
"""
import json
import os
import re
import sys
import unicodedata
from pathlib import Path

SRC = Path('portfolio')
DETAILS = Path('scripts/painting-details.json')
MAP = Path('scripts/rename-map.json')

# Illegal on macOS/HFS or genuinely painful in a URL.
ILLEGAL = str.maketrans({'/': '-', ':': '-', '\\': '-', '?': '', '#': '', '%': ''})


def title_to_filename(title):
    """The painting's own title, made safe to sit on disk and in a URL.

    Bilingual titles are written 'Gurmukhi / Latin'. The Latin half is used for the
    filename because a mixed-script filename is fragile across tools; the full title
    is untouched in painting-details.json and is what the site actually displays.
    """
    name = title.strip()
    if '/' in name:
        left, right = (p.strip() for p in name.split('/', 1))
        # Prefer whichever half is Latin; if both are, keep the right-hand one.
        def is_latin(s):
            return all(unicodedata.name(c, '').startswith(('LATIN', 'DIGIT'))
                       or not c.isalpha() for c in s)
        if is_latin(right) and right:
            name = right
        elif is_latin(left) and left:
            name = left
        else:
            name = name.replace('/', '-')          # neither half is Latin: keep both
    name = name.translate(ILLEGAL)
    name = re.sub(r'\s+', ' ', name).strip(' .')
    return name


def build_plan():
    details = json.load(open(DETAILS, encoding='utf-8'))['paintings']
    files = sorted(f for f in SRC.iterdir()
                   if f.is_file() and f.suffix.lower() in {'.jpg', '.jpeg', '.png'})

    plan, skipped, taken = [], [], set()
    for f in files:
        stem = f.stem
        entry = details.get(stem)
        title = (entry or {}).get('title')
        if not entry:
            skipped.append((f.name, 'no entry in painting-details.json'))
            continue
        if not title:
            skipped.append((f.name, 'no title recorded'))
            continue

        new_stem = title_to_filename(title)
        if not new_stem:
            skipped.append((f.name, 'title produced an empty filename'))
            continue

        # Two works sharing a title would collide; suffix rather than overwrite.
        base, n = new_stem, 2
        while new_stem.lower() in taken:
            new_stem = f'{base} ({n})'
            n += 1
        taken.add(new_stem.lower())

        if new_stem == stem:
            continue                                # already named for its title
        plan.append({'old': f.name, 'new': new_stem + f.suffix,
                     'oldStem': stem, 'newStem': new_stem, 'title': title})
    return plan, skipped, details


def move(src, dst):
    """Rename one file, tolerating a case-only change.

    macOS is case-insensitive, so 'not home yet.jpg' -> 'Not Home Yet.jpg' looks like
    a collision with itself. Detect that with samefile() and go via a temporary name,
    rather than refusing the move or clobbering a genuinely different file.
    """
    if dst.exists():
        if src.resolve() == dst.resolve() or (src.exists() and os.path.samefile(src, dst)):
            tmp = src.with_name(src.name + '.renaming')
            os.rename(src, tmp)
            os.rename(tmp, dst)
            return
        raise SystemExit(f"refusing to overwrite a different file: {dst}")
    os.rename(src, dst)


def apply(plan, details):
    for m in plan:
        move(SRC / m['old'], SRC / m['new'])
    rekey(plan)
    json.dump(plan, open(MAP, 'w', encoding='utf-8'), indent=2, ensure_ascii=False)


def rekey(plan=None):
    """Point painting-details.json keys at the on-disk filenames.

    Keys are matched through each entry's own title rather than through the rename
    plan, so this is correct even if the files were renamed in an earlier, partial run.
    """
    doc = json.load(open(DETAILS, encoding='utf-8'))
    on_disk = {f.stem for f in SRC.iterdir() if f.is_file()}
    rekeyed, moved = {}, 0
    for k, v in doc['paintings'].items():            # preserves original order
        title = v.get('title')
        want = title_to_filename(title) if title else None
        if want and want != k and want in on_disk and k not in on_disk:
            rekeyed[want] = v
            moved += 1
        else:
            rekeyed[k] = v
    doc['paintings'] = rekeyed
    json.dump(doc, open(DETAILS, 'w', encoding='utf-8'), indent=2, ensure_ascii=False)
    open(DETAILS, 'a', encoding='utf-8').write('\n')
    print(f'  re-keyed {moved} entries in {DETAILS}')


def revert():
    plan = json.load(open(MAP, encoding='utf-8'))
    for m in plan:
        src, dst = SRC / m['new'], SRC / m['old']
        if src.exists():
            os.rename(src, dst)
    doc = json.load(open(DETAILS, encoding='utf-8'))
    back = {m['newStem']: m['oldStem'] for m in plan}
    doc['paintings'] = {back.get(k, k): v for k, v in doc['paintings'].items()}
    json.dump(doc, open(DETAILS, 'w', encoding='utf-8'), indent=2, ensure_ascii=False)
    open(DETAILS, 'a', encoding='utf-8').write('\n')
    print(f'reverted {len(plan)} files')


if __name__ == '__main__':
    if '--revert' in sys.argv:
        revert()
        raise SystemExit
    if '--rekey-only' in sys.argv:
        rekey()
        raise SystemExit

    plan, skipped, details = build_plan()
    for m in plan:
        print(f"  {m['old']:44} ->  {m['new']}")
    print(f"\n  {len(plan)} to rename")
    if skipped:
        print(f"\n  {len(skipped)} left alone:")
        for name, why in skipped:
            print(f"    {name:42} ({why})")

    if '--apply' in sys.argv:
        apply(plan, details)
        print(f"\n  applied. undo with: python3 {sys.argv[0]} --revert")
    else:
        print("\n  dry run - nothing moved. Re-run with --apply.")
