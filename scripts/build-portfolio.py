#!/usr/bin/env python3
import os
import sys
import json
import html
import hashlib
from pathlib import Path
from PIL import Image, ImageOps

from flatpages import write_flat_pages

def ensure_exact_case(path):
    """Remove a file that differs from `path` only by case, before writing it.

    macOS filesystems are case-insensitive but case-PRESERVING: writing to
    'Not Home Yet.webp' when 'not home yet.webp' already exists replaces the bytes
    but keeps the original lowercase name. Everything then works locally and 404s on
    Netlify, which is case-sensitive. Deleting the old entry first forces the new
    name to stick.
    """
    parent = path.parent
    if not parent.exists():
        return
    for existing in parent.iterdir():
        if existing.name != path.name and existing.name.lower() == path.name.lower():
            existing.unlink()


def orient_size(size, photo_aspect):
    if not size:
        return None
    a, b = size
    if photo_aspect >= 1.0:
        height_in = min(a, b)
    else:
        height_in = max(a, b)
    width_in = round(height_in * photo_aspect, 2)
    return {"heightIn": height_in, "widthIn": width_in}

def main():
    src_dir = Path("portfolio")
    out_dir = Path("public/portfolio")
    thumbs_dir = out_dir / "thumbs"
    mid_dir = out_dir / "mid"
    
    out_dir.mkdir(parents=True, exist_ok=True)
    thumbs_dir.mkdir(parents=True, exist_ok=True)
    mid_dir.mkdir(parents=True, exist_ok=True)
    
    details_path = Path("scripts/painting-details.json")
    if details_path.exists():
        with open(details_path, "r", encoding="utf-8") as f:
            details = json.load(f).get("paintings", {})
    else:
        details = {}
        
    DEFAULT_LONG_EDGE_IN = 16
    MAX_EDGE = 1200
    # Ring-view tier. Paintings on the rings never occupy enough screen to justify
    # the 1200px master, and holding 50+ masters resident is what blew the texture
    # budget; 512 is the resolution the ring actually shows.
    MID_MAX_EDGE = 512
    THUMB_MAX_EDGE = 240
    
    valid_exts = {".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"}
    sources = sorted([f for f in src_dir.iterdir() if f.is_file() and f.suffix in valid_exts])
    
    if not sources:
        print("No images found in portfolio/")
        sys.exit(1)
        
    paintings = []
    total_orig_bytes = 0
    total_webp_bytes = 0
    total_jpg_bytes = 0
    total_thumb_bytes = 0
    total_mid_bytes = 0
    
    for src_path in sources:
        stem = src_path.stem
        jpg_name = f"{stem}.jpg"
        webp_name = f"{stem}.webp"
        mid_webp_name = f"{stem}.webp"
        mid_jpg_name = f"{stem}.jpg"
        thumb_webp_name = f"{stem}.webp"
        thumb_jpg_name = f"{stem}.jpg"
        
        orig_bytes = src_path.stat().st_size
        total_orig_bytes += orig_bytes
        
        try:
            with Image.open(src_path) as raw_im:
                im = ImageOps.exif_transpose(raw_im)
                im = im.convert("RGB")
                orig_w, orig_h = im.size
                aspect = round(orig_w / orig_h, 4)
                
                # 1. Full-Res WebP & JPEG (Max edge 1200px)
                im_full = im.copy()
                im_full.thumbnail((MAX_EDGE, MAX_EDGE), Image.Resampling.LANCZOS)
                
                out_webp = out_dir / webp_name
                out_jpg = out_dir / jpg_name
                
                ensure_exact_case(out_webp)
                ensure_exact_case(out_jpg)
                im_full.save(out_webp, "WEBP", quality=78, method=6)
                im_full.save(out_jpg, "JPEG", quality=65, optimize=True, progressive=True)
                
                # 2. Mid tier (Max edge 512px) - what the rings actually display
                im_mid = im.copy()
                im_mid.thumbnail((MID_MAX_EDGE, MID_MAX_EDGE), Image.Resampling.LANCZOS)

                mid_webp = mid_dir / mid_webp_name
                mid_jpg = mid_dir / mid_jpg_name

                ensure_exact_case(mid_webp)
                ensure_exact_case(mid_jpg)
                im_mid.save(mid_webp, "WEBP", quality=72, method=6)
                im_mid.save(mid_jpg, "JPEG", quality=62, optimize=True, progressive=True)

                # 3. LQIP Thumbnail (Max edge 240px)
                im_thumb = im.copy()
                im_thumb.thumbnail((THUMB_MAX_EDGE, THUMB_MAX_EDGE), Image.Resampling.LANCZOS)
                
                thumb_webp = thumbs_dir / thumb_webp_name
                thumb_jpg = thumbs_dir / thumb_jpg_name
                
                ensure_exact_case(thumb_webp)
                ensure_exact_case(thumb_jpg)
                im_thumb.save(thumb_webp, "WEBP", quality=60, method=6)
                im_thumb.save(thumb_jpg, "JPEG", quality=50, optimize=True)
                
                # Short content hash of the rendered master. Appended to every image
                # URL as ?v=, which is what makes the year-long immutable cache headers
                # and the service worker's cache-first strategy safe: repaint a canvas,
                # keep the same filename, and the URL still changes.
                version = hashlib.md5(out_webp.read_bytes()).hexdigest()[:8]

                w_bytes = out_webp.stat().st_size
                j_bytes = out_jpg.stat().st_size
                t_bytes = thumb_webp.stat().st_size
                m_bytes = mid_webp.stat().st_size
                
                total_webp_bytes += w_bytes
                total_jpg_bytes += j_bytes
                total_thumb_bytes += t_bytes
                total_mid_bytes += m_bytes
                
                detail = details.get(stem, {})
                measured = orient_size(detail.get("size"), aspect)
                
                if measured:
                    height_in = measured["heightIn"]
                    width_in = round(height_in * aspect, 2)
                else:
                    height_in = round(DEFAULT_LONG_EDGE_IN / aspect if aspect >= 1 else DEFAULT_LONG_EDGE_IN, 2)
                    width_in = round(height_in * aspect, 2)
                    
                paintings.append({
                    "id": stem,
                    "file": jpg_name,
                    "webp": webp_name,
                    "mid": f"mid/{mid_webp_name}",
                    "midJpg": f"mid/{mid_jpg_name}",
                    "thumb": f"thumbs/{thumb_webp_name}",
                    "thumbJpg": f"thumbs/{thumb_jpg_name}",
                    "width": orig_w,
                    "height": orig_h,
                    "aspect": aspect,
                    "heightIn": height_in,
                    "widthIn": width_in,
                    "measured": bool(measured),
                    "title": detail.get("title", ""),
                    "year": detail.get("year", None),
                    "medium": detail.get("medium", "Oil on Canvas"),
                    "description": detail.get("description", ""),
                    # The artist's own grouping, recovered from portfolio/<Series>/.
                    # null means the work stands alone.
                    "v": version,
                    "rank": detail.get("rank"),
                    "series": detail.get("series"),
                    "availability": detail.get("availability", "enquire")
                })
                
                print(f"  [Processed] {stem}: WebP {w_bytes//1024}KB, JPG {j_bytes//1024}KB, Mid {m_bytes//1024}KB, Thumb {t_bytes//1024}KB")
                
        except Exception as e:
            print(f"Error processing {src_path}: {e}")
            
    # Drop outputs whose source is gone. Renaming or deleting an original used to
    # leave its rendered copies behind forever: after the rename to painting titles
    # that was 254 dead files and 18MB of the committed tree.
    keep = {
        out_dir: {"manifest.json"},
        mid_dir: set(),
        thumbs_dir: set(),
    }
    for p_ in paintings:
        keep[out_dir].add(p_["file"])
        keep[out_dir].add(p_["webp"])
        keep[mid_dir].add(Path(p_["mid"]).name)
        keep[mid_dir].add(Path(p_["midJpg"]).name)
        keep[thumbs_dir].add(Path(p_["thumb"]).name)
        keep[thumbs_dir].add(Path(p_["thumbJpg"]).name)

    pruned = 0
    for directory, wanted in keep.items():
        if not directory.exists():
            continue
        for f in directory.iterdir():
            if f.is_file() and f.name not in wanted and not f.name.startswith('.'):
                f.unlink()
                pruned += 1

    manifest = {
        "maxEdge": MAX_EDGE,
        "midMaxEdge": MID_MAX_EDGE,
        "thumbMaxEdge": THUMB_MAX_EDGE,
        "paintings": paintings
    }
    
    with open(out_dir / "manifest.json", "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)
        f.write("\n")

    # The readable half of the site: /work and /about as plain crawlable HTML,
    # built from the same manifest so they can never drift from the 3D gallery.
    content_path = Path("scripts/site-content.json")
    if content_path.exists():
        with open(content_path, "r", encoding="utf-8") as f:
            content = json.load(f)
        n_sections, has_email = write_flat_pages(paintings, content, "public", html.escape)
        print(f"\nFlat pages written: public/work/, public/about/ ({n_sections} sections)")
        if not has_email:
            print("  NOTE: contactEmail in scripts/site-content.json is still a placeholder,")
            print("        so no mailto is shown. Set it to publish a contact route.")
    else:
        print("\nscripts/site-content.json missing - skipped /work and /about.")
        
    print(f"\nDone! Processed {len(paintings)} paintings:")
    if pruned:
        print(f"  Pruned:         {pruned} stale files with no source")
    print(f"  Original Raw:   {total_orig_bytes / 1024 / 1024:.2f} MB")
    print(f"  Full WebP Set:  {total_webp_bytes / 1024 / 1024:.2f} MB")
    print(f"  Full JPG Set:   {total_jpg_bytes / 1024 / 1024:.2f} MB")
    print(f"  Mid WebP Set:   {total_mid_bytes / 1024 / 1024:.2f} MB")
    print(f"  All Thumbs:     {total_thumb_bytes / 1024:.1f} KB across {len(paintings)} artworks")

if __name__ == "__main__":
    main()
