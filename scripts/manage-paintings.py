#!/usr/bin/env python3
"""
Interactive Painting Metadata Manager & Visual Editor
Run with: python3 scripts/manage-paintings.py
Opens a visual local editor to view, edit, and fill missing titles/details for all paintings,
and automatically rebuilds the portfolio manifest.
"""

import http.server
import socketserver
import json
import subprocess
import webbrowser
import urllib.parse
from pathlib import Path

PORT = 4321
SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_DIR = SCRIPT_DIR.parent
DETAILS_PATH = SCRIPT_DIR / "painting-details.json"
PORTFOLIO_DIR = PROJECT_DIR / "portfolio"
PUBLIC_PORTFOLIO_DIR = PROJECT_DIR / "public" / "portfolio"

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painting Details Manager — Duar</title>
    <style>
        :root {
            --bg: #0d1117;
            --card-bg: #161b22;
            --border: #30363d;
            --text: #c9d1d9;
            --heading: #f0f6fc;
            --accent: #58a6ff;
            --accent-hover: #79b8ff;
            --success: #2ea043;
            --warning: #d29922;
            --danger: #f85149;
            --input-bg: #0d1117;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
            background: var(--bg);
            color: var(--text);
            padding: 24px;
            line-height: 1.5;
        }
        .header {
            max-width: 1400px;
            margin: 0 auto 24px auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 16px;
            border-bottom: 1px solid var(--border);
            padding-bottom: 20px;
        }
        .title-group h1 {
            color: var(--heading);
            font-size: 24px;
            font-weight: 600;
        }
        .title-group p {
            color: #8b949e;
            font-size: 14px;
            margin-top: 4px;
        }
        .controls {
            display: flex;
            gap: 12px;
            align-items: center;
            flex-wrap: wrap;
        }
        .search-box {
            background: var(--input-bg);
            border: 1px solid var(--border);
            color: var(--text);
            padding: 8px 14px;
            border-radius: 6px;
            font-size: 14px;
            width: 260px;
            outline: none;
        }
        .search-box:focus { border-color: var(--accent); }
        .filter-btn {
            background: var(--card-bg);
            border: 1px solid var(--border);
            color: var(--text);
            padding: 8px 14px;
            border-radius: 6px;
            font-size: 13px;
            cursor: pointer;
            transition: all 0.15s;
        }
        .filter-btn.active {
            background: var(--accent);
            color: #000;
            font-weight: 600;
            border-color: var(--accent);
        }
        .save-btn {
            background: var(--success);
            color: #fff;
            border: none;
            padding: 9px 18px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: opacity 0.2s;
        }
        .save-btn:hover { opacity: 0.9; }
        .save-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .stats-bar {
            max-width: 1400px;
            margin: 0 auto 20px auto;
            display: flex;
            gap: 16px;
            font-size: 13px;
            color: #8b949e;
        }
        .stat-badge {
            background: var(--card-bg);
            border: 1px solid var(--border);
            padding: 4px 10px;
            border-radius: 20px;
        }
        .stat-badge strong { color: var(--heading); }
        .grid {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
            gap: 20px;
        }
        .card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 8px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: border-color 0.2s;
        }
        .card.missing-info { border-left: 4px solid var(--warning); }
        .card.complete { border-left: 4px solid var(--success); }
        .card-preview {
            display: flex;
            background: #000;
            height: 200px;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
        }
        .card-preview img {
            max-height: 100%;
            max-width: 100%;
            object-fit: contain;
        }
        .badge {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
        }
        .badge.complete { background: rgba(46, 160, 67, 0.9); color: #fff; }
        .badge.incomplete { background: rgba(210, 153, 34, 0.9); color: #fff; }
        .card-body {
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            flex: 1;
        }
        .file-stem {
            font-size: 12px;
            color: #8b949e;
            font-family: monospace;
            word-break: break-all;
        }
        .field {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .field label {
            font-size: 11px;
            font-weight: 600;
            color: #8b949e;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .field input, .field textarea, .field select {
            background: var(--input-bg);
            border: 1px solid var(--border);
            color: var(--text);
            padding: 7px 10px;
            border-radius: 6px;
            font-size: 13px;
            outline: none;
            font-family: inherit;
        }
        .field input:focus, .field textarea:focus {
            border-color: var(--accent);
        }
        .row-fields {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 10px;
        }
        textarea {
            resize: vertical;
            min-height: 55px;
        }
        #toast {
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: var(--success);
            color: #fff;
            padding: 12px 20px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            box-shadow: 0 8px 24px rgba(0,0,0,0.5);
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            pointer-events: none;
            z-index: 10000;
        }
        #toast.visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="title-group">
            <h1>🎨 Artwork Details & Metadata Manager</h1>
            <p>Edit titles, dimensions, years and descriptions. Click <strong>Save & Rebuild</strong> to update the 3D gallery.</p>
        </div>
        <div class="controls">
            <input type="text" id="searchInput" class="search-box" placeholder="Search title or filename..." oninput="filterCards()">
            <button class="filter-btn active" data-filter="all" onclick="setFilter('all', this)">All</button>
            <button class="filter-btn" data-filter="missing" onclick="setFilter('missing', this)">⚠️ Missing Info</button>
            <button class="filter-btn" data-filter="complete" onclick="setFilter('complete', this)">✓ Complete</button>
            <button class="save-btn" id="saveBtn" onclick="saveAll()">
                <span>💾 Save & Rebuild Portfolio</span>
            </button>
        </div>
    </div>

    <div class="stats-bar" id="statsBar"></div>
    <div class="grid" id="cardGrid"></div>
    <div id="toast">Saved & Rebuilt Portfolio Successfully!</div>

    <script>
        let paintingsData = [];
        let currentFilter = 'all';

        async function loadData() {
            const res = await fetch('/api/data');
            paintingsData = await res.json();
            renderStats();
            renderCards();
        }

        function renderStats() {
            const total = paintingsData.length;
            const complete = paintingsData.filter(p => isComplete(p)).length;
            const missing = total - complete;
            document.getElementById('statsBar').innerHTML = `
                <div class="stat-badge">Total Paintings: <strong>${total}</strong></div>
                <div class="stat-badge" style="border-color:var(--success)">Complete: <strong style="color:var(--success)">${complete}</strong></div>
                <div class="stat-badge" style="border-color:var(--warning)">Missing Details: <strong style="color:var(--warning)">${missing}</strong></div>
            `;
        }

        function isComplete(p) {
            const d = p.details || {};
            const hasTitle = Boolean(d.title && d.title.trim());
            const hasYear = Boolean(d.year);
            const hasSize = Boolean(d.size && Array.isArray(d.size) && d.size[0] && d.size[1]);
            return hasTitle && hasYear && hasSize;
        }

        function setFilter(filter, btn) {
            currentFilter = filter;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterCards();
        }

        function filterCards() {
            const q = document.getElementById('searchInput').value.toLowerCase().trim();
            document.querySelectorAll('.card').forEach(card => {
                const stem = card.dataset.stem.toLowerCase();
                const title = (card.querySelector('input[name="title"]').value || '').toLowerCase();
                const matchesQuery = !q || stem.includes(q) || title.includes(q);
                
                const isComp = card.dataset.complete === 'true';
                let matchesFilter = true;
                if (currentFilter === 'missing') matchesFilter = !isComp;
                else if (currentFilter === 'complete') matchesFilter = isComp;

                card.style.display = (matchesQuery && matchesFilter) ? 'flex' : 'none';
            });
        }

        function renderCards() {
            const grid = document.getElementById('cardGrid');
            grid.innerHTML = '';

            paintingsData.forEach(p => {
                const d = p.details || {};
                const comp = isComplete(p);
                const title = d.title || '';
                const year = d.year || '';
                const widthIn = (d.size && d.size[0]) ? d.size[0] : '';
                const heightIn = (d.size && d.size[1]) ? d.size[1] : '';
                const medium = d.medium || 'Oil on canvas';
                const desc = d.description || '';

                const card = document.createElement('div');
                card.className = `card ${comp ? 'complete' : 'missing-info'}`;
                card.dataset.stem = p.stem;
                card.dataset.complete = comp ? 'true' : 'false';

                card.innerHTML = `
                    <div class="card-preview">
                        <img src="${p.thumbUrl}" alt="${p.stem}" loading="lazy" onerror="this.src='${p.origUrl}'">
                        <span class="badge ${comp ? 'complete' : 'incomplete'}">${comp ? '✓ Complete' : '⚠️ Missing Info'}</span>
                    </div>
                    <div class="card-body">
                        <div class="file-stem">📄 ${p.filename}</div>
                        <div class="field">
                            <label>Title</label>
                            <input type="text" name="title" value="${escapeHtml(title)}" placeholder="Artwork Title..." onchange="markDirty('${p.stem}')">
                        </div>
                        <div class="row-fields">
                            <div class="field">
                                <label>Year</label>
                                <input type="number" name="year" value="${year}" placeholder="e.g. 2025" onchange="markDirty('${p.stem}')">
                            </div>
                            <div class="field">
                                <label>Width (in)</label>
                                <input type="number" step="0.5" name="widthIn" value="${widthIn}" placeholder="e.g. 12" onchange="markDirty('${p.stem}')">
                            </div>
                            <div class="field">
                                <label>Height (in)</label>
                                <input type="number" step="0.5" name="heightIn" value="${heightIn}" placeholder="e.g. 16" onchange="markDirty('${p.stem}')">
                            </div>
                        </div>
                        <div class="field">
                            <label>Medium</label>
                            <input type="text" name="medium" value="${escapeHtml(medium)}" placeholder="e.g. Oil on canvas" onchange="markDirty('${p.stem}')">
                        </div>
                        <div class="field">
                            <label>Description / Artist Note</label>
                            <textarea name="description" placeholder="Description of the painting..." onchange="markDirty('${p.stem}')">${escapeHtml(desc)}</textarea>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        function escapeHtml(str) {
            return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }

        function markDirty(stem) {
            // Update completion state dynamically
            const card = document.querySelector(`.card[data-stem="${stem}"]`);
            if (!card) return;
            const title = card.querySelector('input[name="title"]').value.trim();
            const year = card.querySelector('input[name="year"]').value.trim();
            const w = card.querySelector('input[name="widthIn"]').value.trim();
            const h = card.querySelector('input[name="heightIn"]').value.trim();

            const comp = Boolean(title && year && w && h);
            card.dataset.complete = comp ? 'true' : 'false';
            card.className = `card ${comp ? 'complete' : 'missing-info'}`;
            const badge = card.querySelector('.badge');
            if (badge) {
                badge.className = `badge ${comp ? 'complete' : 'incomplete'}`;
                badge.textContent = comp ? '✓ Complete' : '⚠️ Missing Info';
            }
            renderStats();
        }

        async function saveAll() {
            const btn = document.getElementById('saveBtn');
            btn.disabled = true;
            btn.innerHTML = '<span>⏳ Saving & Rebuilding...</span>';

            const payload = {};
            document.querySelectorAll('.card').forEach(card => {
                const stem = card.dataset.stem;
                const title = card.querySelector('input[name="title"]').value.trim();
                const yearVal = card.querySelector('input[name="year"]').value.trim();
                const wVal = card.querySelector('input[name="widthIn"]').value.trim();
                const hVal = card.querySelector('input[name="heightIn"]').value.trim();
                const medium = card.querySelector('input[name="medium"]').value.trim();
                const desc = card.querySelector('textarea[name="description"]').value.trim();

                const entry = {};
                if (title) entry.title = title;
                if (yearVal) entry.year = parseInt(yearVal, 10);
                if (wVal && hVal) entry.size = [parseFloat(wVal), parseFloat(hVal)];
                if (medium) entry.medium = medium;
                if (desc) entry.description = desc;

                if (Object.keys(entry).length > 0) {
                    payload[stem] = entry;
                }
            });

            try {
                const res = await fetch('/api/save', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                const data = await res.json();
                if (data.ok) {
                    showToast('✓ Saved & Portfolio Rebuilt!');
                } else {
                    alert('Error saving: ' + (data.error || 'Unknown error'));
                }
            } catch (err) {
                alert('Network error while saving: ' + err.message);
            } finally {
                btn.disabled = false;
                btn.innerHTML = '<span>💾 Save & Rebuild Portfolio</span>';
                loadData();
            }
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            toast.textContent = msg;
            toast.classList.add('visible');
            setTimeout(() => toast.classList.remove('visible'), 3000);
        }

        loadData();
    </script>
</body>
</html>
"""

class PaintingManagerHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/" or parsed.path == "/index.html":
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            self.wfile.write(HTML_TEMPLATE.encode("utf-8"))
            return

        if parsed.path == "/api/data":
            # Load painting-details.json
            details = {}
            if DETAILS_PATH.exists():
                try:
                    with open(DETAILS_PATH, "r", encoding="utf-8") as f:
                        details = json.load(f).get("paintings", {})
                except Exception as e:
                    print("Error reading painting-details.json:", e)

            # Scan portfolio/
            valid_exts = {".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"}
            files = sorted([f for f in PORTFOLIO_DIR.iterdir() if f.is_file() and f.suffix in valid_exts])

            paintings = []
            for f in files:
                stem = f.stem
                thumb_file = PUBLIC_PORTFOLIO_DIR / "thumbs" / f"{stem}.jpg"
                thumb_url = f"/public/portfolio/thumbs/{urllib.parse.quote(f'{stem}.jpg')}" if thumb_file.exists() else f"/portfolio/{urllib.parse.quote(f.name)}"
                orig_url = f"/portfolio/{urllib.parse.quote(f.name)}"
                paintings.append({
                    "stem": stem,
                    "filename": f.name,
                    "thumbUrl": thumb_url,
                    "origUrl": orig_url,
                    "details": details.get(stem, {})
                })

            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(paintings, indent=2).encode("utf-8"))
            return

        # Serve static assets from project root
        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/api/save":
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            try:
                updated_paintings = json.loads(body.decode("utf-8"))

                # Write to scripts/painting-details.json
                data = {
                    "_comment": "Titles, years, canvas sizes and descriptions for the portfolio paintings.",
                    "paintings": updated_paintings
                }
                with open(DETAILS_PATH, "w", encoding="utf-8") as f:
                    json.dump(data, f, indent=2)
                    f.write("\n")

                # Trigger build-portfolio.py
                build_script = SCRIPT_DIR / "build-portfolio.py"
                proc = subprocess.run(["python3", str(build_script)], cwd=PROJECT_DIR, capture_output=True, text=True)

                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"ok": True, "output": proc.stdout}).encode("utf-8"))
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"ok": False, "error": str(e)}).encode("utf-8"))
            return

def main():
    import os
    os.chdir(PROJECT_DIR)
    handler = PaintingManagerHandler
    socketserver.TCPServer.allow_reuse_address = True
    
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        url = f"http://localhost:{PORT}"
        print(f"\n=======================================================")
        print(f"🎨 Painting Details Manager Running at: {url}")
        print(f"👉 Press Ctrl+C in terminal to stop.")
        print(f"=======================================================\n")
        webbrowser.open(url)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down manager.")

if __name__ == "__main__":
    main()
