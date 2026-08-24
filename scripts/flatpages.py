
# ---------------------------------------------------------------------------
# Flat pages: /work and /about
#
# The 3D gallery is the experience, but it lives entirely inside a canvas, which
# means no search engine and no screen reader can read a word of it. These two
# pages are the readable, crawlable version of the same content: real <img> tags
# with alt text, real headings, real captions. They are generated from the same
# manifest as the 3D view, so adding a painting updates both.
# ---------------------------------------------------------------------------

FLAT_CSS = """
:root{
  /* Pulled from the 3D world so the flat pages read as the same site: the night
     sky it opens on, and the exact champagne gold of the picture frames. */
  --ground:#0B1017; --raised:#121924; --ink:#ECE7DE; --muted:#8E9AA8;
  --gold:#CAA565; --rule:#1E2836;
}
*{margin:0;padding:0;box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{background:var(--ground);color:var(--ink);
  font-family:'Outfit',system-ui,-apple-system,sans-serif;
  font-size:17px;line-height:1.65;-webkit-font-smoothing:antialiased;
  padding:0 clamp(20px,5vw,64px) 120px}
a{color:inherit}
.wrap{max-width:1180px;margin:0 auto}
.measure{max-width:64ch}

header.site{display:flex;flex-wrap:wrap;gap:14px 32px;align-items:baseline;
  padding:clamp(26px,5vw,44px) 0;border-bottom:1px solid var(--rule);margin-bottom:clamp(34px,6vw,64px)}
header.site .name{font-size:1.06rem;letter-spacing:.16rem;text-transform:uppercase;
  text-decoration:none;font-weight:500}
header.site .gur{color:var(--gold);font-size:1rem;letter-spacing:.05rem}
nav{margin-left:auto;display:flex;gap:22px}
nav a{font-size:.83rem;letter-spacing:.13rem;text-transform:uppercase;color:var(--muted);
  text-decoration:none;padding-bottom:2px;border-bottom:1px solid transparent}
nav a:hover,nav a:focus-visible{color:var(--ink);border-bottom-color:var(--gold)}
nav a[aria-current="page"]{color:var(--ink);border-bottom-color:var(--gold)}

h1{font-family:Newsreader,Georgia,serif;font-weight:400;
  font-size:clamp(2.1rem,5.5vw,3.4rem);line-height:1.05;letter-spacing:-.01em;
  margin-bottom:20px;text-wrap:balance}
.lede{color:var(--muted);font-size:1.06rem;margin-bottom:clamp(38px,6vw,66px)}

.series{margin-bottom:clamp(54px,8vw,96px)}
.series > h2{font-family:Newsreader,Georgia,serif;font-weight:400;font-size:1.7rem;
  padding-bottom:10px;border-bottom:1px solid var(--rule);margin-bottom:8px}
.series > .n{font-size:.78rem;letter-spacing:.14rem;text-transform:uppercase;
  color:var(--muted);margin-bottom:30px}

.works{display:grid;grid-template-columns:repeat(auto-fill,minmax(268px,1fr));
  gap:clamp(30px,4vw,52px);list-style:none}
figure{margin:0;display:flex;flex-direction:column;gap:14px}
.plate{background:var(--raised);border:1px solid var(--rule);
  display:flex;align-items:center;justify-content:center;padding:18px;min-height:210px}
/* Never crop a painting to fit a grid - letterbox it inside the plate instead. */
.plate img{max-width:100%;height:auto;display:block}
figcaption .t{font-family:Newsreader,Georgia,serif;font-size:1.16rem;line-height:1.3;
  display:block;margin-bottom:5px}
figcaption dl{display:grid;grid-template-columns:auto 1fr;gap:1px 14px;
  font-size:.83rem;color:var(--muted)}
figcaption dt{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
figcaption dd{margin:0}
figcaption .avail{color:var(--gold);font-size:.76rem;letter-spacing:.11rem;
  text-transform:uppercase;margin-top:7px}
figcaption .note{margin-top:9px;font-family:Newsreader,Georgia,serif;font-style:italic;
  font-size:.9rem;line-height:1.5;color:var(--muted)}

.about p+p{margin-top:1.15em}
.about .statement{font-size:1.16rem;line-height:1.62}
.cv{margin-top:clamp(44px,7vw,72px);max-width:46rem}
.cv h2{font-size:.83rem;letter-spacing:.15rem;text-transform:uppercase;color:var(--muted);
  font-weight:500;margin-bottom:14px;padding-bottom:9px;border-bottom:1px solid var(--rule)}
.cv+.cv{margin-top:clamp(34px,5vw,52px)}
.cv ul{list-style:none}
.cv li{display:grid;grid-template-columns:5.6rem 1fr;gap:4px 18px;padding:9px 0;
  border-bottom:1px solid var(--rule);align-items:baseline}
.cv li:last-child{border-bottom:0}
.cv .yr{color:var(--gold);font-size:.8rem;font-variant-numeric:tabular-nums;letter-spacing:.04em}
.cv .what cite{font-style:italic;font-family:Newsreader,Georgia,serif;font-size:1.04rem}
.cv .where{display:block;color:var(--muted);font-size:.85rem;margin-top:2px}
@media (max-width:520px){.cv li{grid-template-columns:1fr}.cv .yr{font-size:.75rem}}

.contact{margin-top:clamp(38px,6vw,60px);padding-top:26px;border-top:1px solid var(--rule)}
.contact h2{font-size:.83rem;letter-spacing:.15rem;text-transform:uppercase;
  color:var(--muted);font-weight:500;margin-bottom:14px}
.contact a{color:var(--gold);text-decoration:none;border-bottom:1px solid transparent;
  font-size:1.06rem}
.contact a:hover,.contact a:focus-visible{border-bottom-color:var(--gold)}
.contact li{list-style:none;margin-bottom:8px}

footer.site{margin-top:clamp(58px,9vw,110px);padding-top:24px;border-top:1px solid var(--rule);
  color:var(--muted);font-size:.83rem;display:flex;flex-wrap:wrap;gap:10px 26px}
footer.site a{color:var(--muted);text-decoration:none;border-bottom:1px solid transparent}
footer.site a:hover{color:var(--ink);border-bottom-color:var(--gold)}
:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
"""

AVAIL_LABEL = {
    'available': 'Available',
    'sold': 'Sold',
    'private collection': 'Private collection',
    'nfs': 'Not for sale',
    'enquire': 'Enquire',
}


def _head(title, desc, css_href_inline, canonical, og_image=None):
    og = ''
    if og_image:
        og = ('  <meta property="og:image" content="%s" />\n'
              '  <meta name="twitter:card" content="summary_large_image" />\n' % og_image)
    return (
        '<!DOCTYPE html>\n<html lang="en">\n<head>\n'
        '  <meta charset="UTF-8" />\n'
        '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
        '  <title>%s</title>\n'
        '  <meta name="description" content="%s" />\n'
        '  <link rel="canonical" href="%s" />\n'
        '  <link rel="icon" type="image/png" href="/favicon.png" />\n'
        '  <meta property="og:type" content="website" />\n'
        '  <meta property="og:title" content="%s" />\n'
        '  <meta property="og:description" content="%s" />\n'
        '  <meta property="og:url" content="%s" />\n'
        '%s'
        '  <link rel="preconnect" href="https://fonts.googleapis.com">\n'
        '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
        '  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
        'family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&'
        'family=Outfit:wght@300;400;500&display=swap">\n'
        '  <style>%s</style>\n</head>\n<body>\n'
        % (title, desc, canonical, title, desc, canonical, og, css_href_inline))


def _nav(artist, gurmukhi, here):
    def a(href, label):
        cur = ' aria-current="page"' if href == here else ''
        return '<a href="%s"%s>%s</a>' % (href, cur, label)
    return (
        '<header class="site"><a class="name" href="/">%s</a>'
        '<span class="gur" aria-hidden="true">%s</span>'
        '<nav>%s %s %s</nav></header>'
        % (artist, gurmukhi, a('/work/', 'Work'), a('/about/', 'About'),
           '<a href="/">Gallery in 3D</a>'))


def _footer(artist, insta, email):
    bits = ['<span>&copy; %s</span>' % artist]
    if insta:
        bits.append('<a href="https://instagram.com/%s" rel="me noopener">@%s</a>' % (insta, insta))
    if email:
        bits.append('<a href="mailto:%s">%s</a>' % (email, email))
    bits.append('<a href="/">Enter the 3D gallery</a>')
    return '<footer class="site">%s</footer>' % ''.join(bits)


def write_flat_pages(paintings, content, out_root, esc):
    """Generates public/work/index.html and public/about/index.html."""
    import os

    artist = content.get('artist', '')
    gur = content.get('gurmukhi', '')
    insta = content.get('instagram', '')
    email = content.get('contactEmail', '')
    # Never ship a placeholder address as a live mailto.
    if not email or 'REPLACE_ME' in email or 'example.com' in email:
        email = ''

    site = 'https://duar.one'

    # ---- group by series, ungrouped last -------------------------------------
    groups = {}
    for p in paintings:
        groups.setdefault(p.get('series') or '￿Ungrouped', []).append(p)
    named = sorted([(k, v) for k, v in groups.items() if not k.startswith('￿')],
                   key=lambda kv: -len(kv[1]))
    rest = groups.get('￿Ungrouped', [])
    order = named + ([('Other work', rest)] if rest else [])

    sections = []
    for name, works in order:
        works = sorted(works, key=lambda p: -(p.get('year') or 0))
        items = []
        for p in works:
            title = esc(p.get('title') or 'Untitled')
            year = p.get('year')
            approx = '' if p.get('measured') else 'approx. '
            dims = '%s%s &times; %s in' % (approx, p['widthIn'], p['heightIn'])
            medium = esc(p.get('medium') or '')
            avail = AVAIL_LABEL.get((p.get('availability') or '').lower(), '')
            note = esc(p.get('description') or '')
            # Displayed at the mid tier; the full master is one click away.
            ver = ('?v=' + p['v']) if p.get('v') else ''
            thumb = '/portfolio/' + p['mid'] + ver
            full = '/portfolio/' + p['webp'] + ver
            alt = '%s, %s%s' % (title, (str(year) + ', ') if year else '', medium.lower())

            meta = []
            if year:
                meta.append('<dt>Year</dt><dd>%s</dd>' % year)
            meta.append('<dt>Dimensions</dt><dd>%s</dd>' % dims)
            if medium:
                meta.append('<dt>Medium</dt><dd>%s</dd>' % medium)

            items.append(
                '<li><figure>'
                '<a class="plate" href="%s"><img src="%s" alt="%s" loading="lazy" '
                'decoding="async" width="%d" height="%d"></a>'
                '<figcaption><span class="t">%s</span><dl>%s</dl>%s%s</figcaption>'
                '</figure></li>'
                % (full, thumb, esc(alt), p['width'], p['height'], title, ''.join(meta),
                   ('<p class="avail">%s</p>' % avail) if avail else '',
                   ('<p class="note">%s</p>' % note) if note else ''))

        sections.append(
            '<section class="series"><h2>%s</h2><p class="n">%d %s</p>'
            '<ul class="works">%s</ul></section>'
            % (esc(name), len(works), 'work' if len(works) == 1 else 'works', ''.join(items)))

    # ---- /work ---------------------------------------------------------------
    work_desc = '%s %s paintings, with dimensions, medium and availability.' % (
        'Paintings by ' + artist + '.', len(paintings)) if artist else 'Paintings.'
    work_desc = esc('Paintings by %s - %d works with dimensions, medium and availability.'
                    % (artist, len(paintings)))
    og_img = ('%s/portfolio/%s' % (site, paintings[0]['webp'])) if paintings else None

    work = (_head('Work &mdash; %s' % artist, work_desc, FLAT_CSS, site + '/work/', og_img)
            + '<div class="wrap">' + _nav(artist, gur, '/work/')
            + '<h1>Work</h1><p class="lede measure">%s</p>' % esc(content.get('workIntro', ''))
            + ''.join(sections) + _footer(artist, insta, email)
            + '</div>\n</body>\n</html>\n')

    # ---- /about --------------------------------------------------------------
    st = content.get('statement', {}) or {}
    body = st.get('medium') or st.get('short') or ''
    paras = ''.join('<p>%s</p>' % esc(x.strip()) for x in body.split('\n\n') if x.strip())

    contact_items = []
    if email:
        contact_items.append('<li><a href="mailto:%s">%s</a></li>' % (email, email))
    if insta:
        contact_items.append('<li><a href="https://instagram.com/%s" rel="me noopener">@%s</a></li>'
                             % (insta, insta))
    contact = ('<div class="contact"><h2>Enquiries</h2><ul>%s</ul></div>' % ''.join(contact_items)
               ) if contact_items else ''

    # Exhibition history, straight from the CV. Rendered here rather than on a
    # separate /cv page: seven shows and three residencies read well as a section
    # and thinly as a page of their own.
    cv_html = ''
    for heading, rows in (content.get('cv') or {}).items():
        if not rows:
            continue
        lis = []
        for r in rows:
            where = ', '.join(x for x in (r.get('venue'), r.get('city')) if x)
            detail = r.get('note') or ''
            if where and detail:
                sub = '%s &middot; %s' % (esc(where), esc(detail))
            else:
                sub = esc(where or detail)
            title = esc(r.get('title') or '')
            # Show titles are titles of works in their own right; venues are not.
            titled = '<cite>%s</cite>' % title if heading != 'Also' else title
            lis.append('<li><span class="yr">%s</span><span class="what">%s%s</span></li>'
                       % (esc(r.get('year') or ''), titled,
                          ('<span class="where">%s</span>' % sub) if sub else ''))
        cv_html += '<section class="cv"><h2>%s</h2><ul>%s</ul></section>' % (esc(heading), ''.join(lis))

    about_desc = esc((st.get('short') or '')[:180])
    about = (_head('About &mdash; %s' % artist, about_desc, FLAT_CSS, site + '/about/')
             + '<div class="wrap">' + _nav(artist, gur, '/about/')
             + '<h1>%s</h1>' % esc(artist)
             # No descriptor line under the name: the statement's first sentence says
             # who is speaking, and a label above it only said the same thing twice.
             + ('<p class="lede">%s</p>' % esc(content['tagline'])
                if content.get('tagline') else '')
             + '<div class="about measure"><div class="statement">%s</div></div>' % paras
             + cv_html + contact + _footer(artist, insta, email)
             + '</div>\n</body>\n</html>\n')

    for rel, html in (('work', work), ('about', about)):
        d = os.path.join(out_root, rel)
        os.makedirs(d, exist_ok=True)
        with open(os.path.join(d, 'index.html'), 'w', encoding='utf-8') as f:
            f.write(html)

    return len(order), bool(email)
