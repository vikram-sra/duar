#!/usr/bin/env python3
import os
import sys
import json
from pathlib import Path
from PIL import Image, ImageOps

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
    
    out_dir.mkdir(parents=True, exist_ok=True)
    thumbs_dir.mkdir(parents=True, exist_ok=True)
    
    details_path = Path("scripts/painting-details.json")
    if details_path.exists():
        with open(details_path, "r", encoding="utf-8") as f:
            details = json.load(f).get("paintings", {})
    else:
        details = {}
        
    DEFAULT_LONG_EDGE_IN = 16
    MAX_EDGE = 1200
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
    
    for src_path in sources:
        stem = src_path.stem
        jpg_name = f"{stem}.jpg"
        webp_name = f"{stem}.webp"
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
                
                im_full.save(out_webp, "WEBP", quality=78, method=6)
                im_full.save(out_jpg, "JPEG", quality=65, optimize=True, progressive=True)
                
                # 2. LQIP Thumbnail (Max edge 240px)
                im_thumb = im.copy()
                im_thumb.thumbnail((THUMB_MAX_EDGE, THUMB_MAX_EDGE), Image.Resampling.LANCZOS)
                
                thumb_webp = thumbs_dir / thumb_webp_name
                thumb_jpg = thumbs_dir / thumb_jpg_name
                
                im_thumb.save(thumb_webp, "WEBP", quality=60, method=6)
                im_thumb.save(thumb_jpg, "JPEG", quality=50, optimize=True)
                
                w_bytes = out_webp.stat().st_size
                j_bytes = out_jpg.stat().st_size
                t_bytes = thumb_webp.stat().st_size
                
                total_webp_bytes += w_bytes
                total_jpg_bytes += j_bytes
                total_thumb_bytes += t_bytes
                
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
                    "description": detail.get("description", "")
                })
                
                print(f"  [Processed] {stem}: WebP {w_bytes//1024}KB, JPG {j_bytes//1024}KB, Thumb {t_bytes//1024}KB")
                
        except Exception as e:
            print(f"Error processing {src_path}: {e}")
            
    manifest = {
        "maxEdge": MAX_EDGE,
        "thumbMaxEdge": THUMB_MAX_EDGE,
        "paintings": paintings
    }
    
    with open(out_dir / "manifest.json", "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)
        f.write("\n")
        
    print(f"\nDone! Processed {len(paintings)} paintings:")
    print(f"  Original Raw:   {total_orig_bytes / 1024 / 1024:.2f} MB")
    print(f"  Full WebP Set:  {total_webp_bytes / 1024 / 1024:.2f} MB")
    print(f"  Full JPG Set:   {total_jpg_bytes / 1024 / 1024:.2f} MB")
    print(f"  All 48 Thumbs:  {total_thumb_bytes / 1024:.1f} KB (Total across all 48 artworks!)")

if __name__ == "__main__":
    main()
