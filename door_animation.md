This file contains the legacy code for the door entry animation and interaction logic, particularly the `enterDoor` method and its associated logic in `onClick`. This functionality was removed to simplify the interaction model.

### `enterDoor` Method
This method handled the dramatic transition into a door, including creating an interactive iframe overlay, animating the camera (warp effect), adjusting FOV, and revealing close controls.

```javascript
    enterDoor(door) {
        try {
            const destinationUrl = door.data.destinationUrl;
            console.log("enterDoor called for:", door.data.id, destinationUrl);

            if (!destinationUrl) {
                console.error("No destination URL found for door:", door.data.id);
                return;
            }

            if (destinationUrl.startsWith('mailto:')) {
                window.location.href = destinationUrl;
                return;
            }

            console.log("Starting transition to:", destinationUrl);

            // Create overlay
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0; left: 0; width: 100%; height: 100%;
                z-index: 10000;
                background: transparent;
                opacity: 1; /* Start visible */
                pointer-events: none;
                display: flex;
                align-items: center; justify-content: center;
            `;

            // Create Close Button
            const closeBtn = document.createElement('button');
            closeBtn.className = 'close-portal-btn';
            closeBtn.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`;
            closeBtn.style.cssText = `
                position: absolute;
                top: 30px; right: 30px;
                width: 48px; height: 48px;
                background: rgba(0,0,0,0.6);
                color: #fff;
                border: 1px solid rgba(255,255,255,0.3);
                border-radius: 50%;
                cursor: pointer;
                z-index: 10002;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: all 0.3s ease;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            `;

            closeBtn.onmouseenter = () => {
                closeBtn.style.background = 'rgba(255,255,255,0.2)';
                closeBtn.style.transform = 'scale(1.1)';
            };
            closeBtn.onmouseleave = () => {
                closeBtn.style.background = 'rgba(0,0,0,0.6)';
                closeBtn.style.transform = 'scale(1)';
            };

            closeBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                // Fade out
                overlay.style.opacity = '0';
                closeBtn.style.opacity = '0';

                // Allow time for fade out
                setTimeout(() => {
                    if (document.body.contains(overlay)) {
                        document.body.removeChild(overlay);
                    }
                    this.resetScene();
                }, 500);
            };

            const iframe = document.createElement('iframe');
            iframe.src = destinationUrl;
            iframe.style.cssText = `
                width: 100%; height: 100%;
                border: none;
                background: #000; 
                pointer-events: auto;
                transform-origin: center center;
            `;
            // Add error handling for iframe
            iframe.onerror = (e) => console.error("Iframe load error:", e);

            overlay.appendChild(iframe);
            overlay.appendChild(closeBtn);
            document.body.appendChild(overlay);

            // Camera zoom into darkness/door
            const timeline = gsap.timeline();
            const doorPos = door.group.position.clone();

            // 1. Camera "Warp" into the door
            timeline.to(this.camera.position, {
                x: doorPos.x,
                y: 1.6,
                z: doorPos.z - 5, // Fly through the door
                duration: 2.0,
                ease: "expo.in",
            }, 0);

            // 2. FOV "Speed Effect"
            timeline.to(this.camera, {
                fov: 10, // Extreme zoom in
                duration: 2.0,
                ease: "expo.in",
                onUpdate: () => this.camera.updateProjectionMatrix()
            }, 0);

            // 3. Iframe "Big Bang" expansion
            // Start from tiny point
            gsap.set(iframe, { scale: 0.01, opacity: 0 });

            timeline.to(iframe, {
                scale: 1,
                opacity: 1,
                duration: 2.0,
                ease: "expo.in",
            }, 0);

            // 4. Reveal controls after arrival
            timeline.to(closeBtn, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "back.out(1.7)"
            }, 2.0);

            timeline.add(() => {
                overlay.style.pointerEvents = 'auto';
            }, 0.1);
        } catch (e) {
            console.error("Error in enterDoor:", e);
            // Fallback navigation
            if (door.data.destinationUrl) {
                window.location.href = door.data.destinationUrl;
            }
        }
    }
```

### Relevant `onClick` logic
This was the branching logic in `onClick` that decided whether to toggle or enter a door.

```javascript
                        // Strict check on Hitbox object OR name match if references drift
                        if (hit.object.name === "PortalHitbox" || hit.object === door.portalHitbox) {
                            console.log("Hit PORTAL HITBOX (Name/Ref Match)");
                            if (door.isOpen) {
                                this.enterDoor(door); // THIS WAS THE CALL TO ENTER
                            } else {
                                // Clicking hitbox of closed door opens it
                                this.toggleDoor(door); // This opened the door so it could be entered next click
                            }
                        } else {
                            // Any other hit (Frame/Panel/Hardware) just toggles
                            console.log("Hit FRAME/PANEL (Name Match)");
                            this.toggleDoor(door);
                        }
```
