import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import gsap from 'gsap';

export class Doors {
    constructor(scene, config, loadingManager, camera, controls, onDoorOpen, onDoorClose) {
        this.scene = scene;
        this.config = config;
        this.loadingManager = loadingManager;
        this.camera = camera;
        this.controls = controls;
        this.doors = [];
        this.hoveredDoor = null; // Track currently hovered door
        this.onDoorOpen = onDoorOpen; // Callback when entering a door
        this.onDoorClose = onDoorClose; // Callback when closing

        this.dayColor = new THREE.Color(0xffeebb); // Softer, pale golden sunlight
        this.nightColor = new THREE.Color(0x001144); // Deep navy blue
        this.currentGlowColor = new THREE.Color();

        this.initSharedResources();

        this.setupDoors();
        this.createSacredGeometry();
        this.createCentralRock();
    }

    initSharedResources() {
        this.sharedMaterials = {
            doorMonolith: new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.4, metalness: 0.2 }),
            frame: new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5, metalness: 0.5 }),
            portal: new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0, visible: true, side: THREE.DoubleSide })
        };

        this.hoverLight = new THREE.PointLight(this.currentGlowColor, 0.0, 8, 2.5);
        this.openLight = new THREE.PointLight(this.currentGlowColor, 0.0, 8, 2.5);

        const edgeThick = 0.04;
        this.sharedGeometries = {
            monolith: new THREE.BoxGeometry(1.5, 3.6, 0.2),
            post: new THREE.BoxGeometry(0.1, 3.6, 0.1),
            topBeam: new THREE.BoxGeometry(1.7, 0.1, 0.1),
            bottomBeam: new THREE.BoxGeometry(1.7, 0.12, 0.1),
            sideEdge: new THREE.BoxGeometry(edgeThick, 3.6 + edgeThick, 0.1),
            topEdge: new THREE.BoxGeometry(1.7 + edgeThick * 2, edgeThick, 0.1),
            portal: new THREE.PlaneGeometry(1.5, 3.5)
        };
    }

    setupDoors() {
        const loader = new GLTFLoader(this.loadingManager);

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        dracoLoader.setDecoderConfig({ type: 'js' });
        loader.setDRACOLoader(dracoLoader);

        const numRings = 5;
        const baseRadius = 15;
        const radiusStep = 8;

        let doorsLoaded = 0;
        const totalDoorsToLoad = this.config.doors.length * numRings;

        const checkDracoDispose = () => {
            doorsLoaded++;
            if (doorsLoaded === totalDoorsToLoad) {
                dracoLoader.dispose();
            }
        };

        for (let r = 0; r < numRings; r++) {
            const currentRadius = baseRadius + (r * radiusStep);

            this.config.doors.forEach((data, index) => {
                const baseAngle = (index * (Math.PI * 2)) / this.config.doors.length;
                const offset = (r % 2 === 1) ? (Math.PI / this.config.doors.length) : 0;
                const angle = baseAngle + offset;
                const x = Math.sin(angle) * currentRadius;
                const z = Math.cos(angle) * currentRadius;

                const group = new THREE.Group();
                group.position.set(x, 0, z);
                this.scene.add(group);

                const hinge = new THREE.Group();
                hinge.position.set(-0.75, 0, 0);
                group.add(hinge);

                const doorObj = { group, data, hinge, isOpen: false, isAnimating: false };
                this.createDoorFrame(doorObj);

                loader.load(data.modelPath, (gltf) => {
                    const model = gltf.scene;
                    const panel = model.getObjectByName('Door') || model;
                    model.traverse(o => {
                        if (o.isMesh) {
                            o.material = new THREE.MeshStandardMaterial({
                                color: o.material.color || 0x666666,
                                roughness: 0.4,
                                metalness: 0.2
                            });
                            o.castShadow = true;
                            o.receiveShadow = true;
                        }
                    });
                    panel.position.set(0.75, -0.02, 0);
                    hinge.add(panel);
                    doorObj.panel = panel;
                    checkDracoDispose();
                }, undefined, (err) => {
                    const monolith = new THREE.Mesh(
                        this.sharedGeometries.monolith,
                        this.sharedMaterials.doorMonolith
                    );
                    monolith.position.set(0.75, 1.78, 0);
                    monolith.castShadow = true;
                    monolith.receiveShadow = true;
                    hinge.add(monolith);
                    doorObj.panel = monolith;
                    checkDracoDispose();
                });

                doorObj.portalHitbox = group.userData.portalHitbox;
                this.doors.push(doorObj);
            });
        }
    }

    createDoorFrame(doorObj) {
        const group = doorObj.group;
        const mat = this.sharedMaterials.frame; // Use shared material

        const glowMat = new THREE.MeshStandardMaterial({
            color: 0x000000,
            emissive: this.currentGlowColor,
            emissiveIntensity: 0.0
        });
        doorObj.glowMat = glowMat;

        const lP = new THREE.Mesh(this.sharedGeometries.post, mat); lP.position.set(-0.8, 1.78, 0); lP.castShadow = true; lP.name = "Frame"; group.add(lP);
        const rP = new THREE.Mesh(this.sharedGeometries.post, mat); rP.position.set(0.8, 1.78, 0); rP.castShadow = true; rP.name = "Frame"; group.add(rP);

        const tP = new THREE.Mesh(this.sharedGeometries.topBeam, mat); tP.position.set(0, 3.58, 0); tP.castShadow = true; tP.name = "Frame"; group.add(tP);

        const bP = new THREE.Mesh(this.sharedGeometries.bottomBeam, mat);
        bP.position.set(0, 0.04, 0);
        bP.castShadow = true; bP.receiveShadow = true; bP.name = "Frame"; group.add(bP);

        // Add outer edge glow strips
        const edgeThick = 0.04;
        const lEdge = new THREE.Mesh(this.sharedGeometries.sideEdge, glowMat);
        lEdge.position.set(-0.85 - edgeThick / 2, 1.78 + edgeThick / 2, 0);
        group.add(lEdge);

        const rEdge = new THREE.Mesh(this.sharedGeometries.sideEdge, glowMat);
        rEdge.position.set(0.85 + edgeThick / 2, 1.78 + edgeThick / 2, 0);
        group.add(rEdge);

        const tEdge = new THREE.Mesh(this.sharedGeometries.topEdge, glowMat);
        tEdge.position.set(0, 3.63 + edgeThick / 2, 0);
        group.add(tEdge);

        const portal = new THREE.Mesh(this.sharedGeometries.portal, this.sharedMaterials.portal);
        portal.position.set(0, 1.75, 0.01);
        portal.name = "PortalHitbox";
        group.add(portal);

        group.userData.portalHitbox = portal;
    }

    createSacredGeometry() {
        this.ringMat = new THREE.MeshStandardMaterial({
            color: 0xaaaaaa, metalness: 1.0, roughness: 0.1, side: THREE.DoubleSide,
            transparent: true, opacity: 0.9, depthWrite: false, polygonOffset: true,
            polygonOffsetFactor: -1, polygonOffsetUnits: -1
        });

        this.rings = [];
        const baseR = 15;
        const stepR = 8;

        for (let i = 0; i < 5; i++) {
            const r = baseR + (i * stepR);
            const mesh = new THREE.Mesh(new THREE.RingGeometry(r - 0.125, r + 0.125, 128), this.ringMat);
            mesh.rotation.x = -Math.PI / 2;
            mesh.position.y = 0.03;
            mesh.receiveShadow = true;
            mesh.renderOrder = 1;
            this.scene.add(mesh);
            this.rings.push({ mesh, speed: 0 });
        }
    }

    createCentralRock() {
        const geo = new THREE.ConeGeometry(1.5, 3.0, 64, 32);
        geo.translate(0, 1.5, 0);
        const mat = new THREE.MeshStandardMaterial({
            color: 0xffffff, roughness: 0.05, metalness: 1.0, envMapIntensity: 1.0
        });
        this.rock = new THREE.Mesh(geo, mat);
        this.rock.castShadow = true;
        this.rock.receiveShadow = true;
        this.rock.visible = false;
        this.scene.add(this.rock);
    }

    toggleDoor(door) {
        if (door.isAnimating) return;
        door.isAnimating = true;
        door.isOpen = !door.isOpen;

        if (door.isOpen) {
            if (door.glowMat) gsap.to(door.glowMat, { emissiveIntensity: 0.4, duration: 1.5 });
            door.group.add(this.openLight);
            this.openLight.position.set(0, 1.75, 0.2);
            gsap.to(this.openLight, { intensity: 8.0, duration: 1.5 });

            const targetPoint = door.group.position.clone();
            targetPoint.y = 1.75;
            const currentCamPos = this.camera.position.clone();
            const direction = new THREE.Vector3().subVectors(currentCamPos, targetPoint).normalize();
            const dist = 6.0;
            const targetCamPos = targetPoint.clone().add(direction.multiplyScalar(dist));
            targetCamPos.y = 1.6;

            gsap.to(this.controls.target, { x: targetPoint.x, y: targetPoint.y, z: targetPoint.z, duration: 2.5, ease: "power3.inOut" });
            gsap.to(this.camera.position, { x: targetCamPos.x, y: targetCamPos.y, z: targetCamPos.z, duration: 2.5, ease: "power3.inOut" });

            if (this.onDoorOpen) this.onDoorOpen();

            if (this.ringMat) gsap.to(this.ringMat, { opacity: 0, duration: 1.5, ease: "power2.inOut" });
        } else {
            if (door.glowMat) {
                const targetGlow = (this.hoveredDoor === door) ? 0.15 : 0.0;
                gsap.to(door.glowMat, { emissiveIntensity: targetGlow, duration: 1.5 });
            }
            gsap.to(this.openLight, {
                intensity: 0.0, duration: 1.5, onComplete: () => {
                    if (this.openLight.parent) this.openLight.parent.remove(this.openLight);
                }
            });
            if (this.ringMat) gsap.to(this.ringMat, { opacity: 0.9, duration: 1.5, ease: "power2.inOut" });
            if (this.onDoorClose) this.onDoorClose();
        }

        gsap.to(door.hinge.rotation, {
            y: door.isOpen ? -Math.PI / 2 : 0,
            duration: 2.0, delay: door.isOpen ? 0.5 : 0, ease: "power2.inOut",
            onComplete: () => { door.isAnimating = false; }
        });
    }

    closeAllDoors() {
        this.doors.forEach(door => {
            if (door.isOpen) {
                door.isOpen = false;
                door.isAnimating = true;
                if (door.glowMat) {
                    const targetGlow = (this.hoveredDoor === door) ? 0.15 : 0.0;
                    gsap.to(door.glowMat, { emissiveIntensity: targetGlow, duration: 1.5 });
                }
                gsap.to(this.openLight, {
                    intensity: 0.0, duration: 1.5, onComplete: () => {
                        if (this.openLight.parent) this.openLight.parent.remove(this.openLight);
                    }
                });
                gsap.to(door.hinge.rotation, {
                    y: 0, duration: 1.5, ease: "power2.inOut",
                    onComplete: () => { door.isAnimating = false; }
                });
            }
        });
    }

    resetScene() {
        this.closeAllDoors();
        gsap.to(this.controls.target, { x: 0, y: 1.6, z: 0, duration: 2.0, ease: "power2.inOut" });
        gsap.to(this.camera.position, { x: 0, y: 1.6, z: 25, duration: 2.0, ease: "power2.inOut" });

        if (this.ringMat) gsap.to(this.ringMat, { opacity: 0.9, duration: 4.0, ease: "power2.inOut" });

        gsap.to(this.camera, {
            fov: 50,
            duration: 2.0, ease: "power2.inOut",
            onUpdate: () => this.camera.updateProjectionMatrix()
        });

        if (this.onDoorClose) this.onDoorClose();
    }

    update(sunAngle) {
        if (this.rings) this.rings.forEach(r => r.mesh.rotation.z += r.speed);
        this.doors.forEach(d => d.group.lookAt(this.camera.position.x, d.group.position.y, this.camera.position.z));

        // Evaluate day/night color and sync glow loops
        if (sunAngle !== undefined) {
            // Only update colors if sunAngle changed significantly
            if (this.lastSunAngle === undefined || Math.abs(sunAngle - this.lastSunAngle) > 0.01) {
                this.lastSunAngle = sunAngle;

                const sunY = Math.sin(sunAngle);
                // Translate sun sin (-1 to 1) into a 0 to 1 blend factor
                const blend = Math.max(0, Math.min(1, (sunY + 1) / 2));

                // Bias the blend curve slightly so Navy stays prominent longer into twilight
                const biasedBlend = Math.pow(blend, 1.5);

                this.currentGlowColor.lerpColors(this.nightColor, this.dayColor, biasedBlend);

                this.doors.forEach(d => {
                    if (d.glowMat) d.glowMat.emissive.copy(this.currentGlowColor);
                });
                if (this.hoverLight) this.hoverLight.color.copy(this.currentGlowColor);
                if (this.openLight) this.openLight.color.copy(this.currentGlowColor);
            }
        }
    }

    setHoverState(door) {
        if (this.hoveredDoor === door) return; // No change

        // Dim old door if exists and not open
        if (this.hoveredDoor && !this.hoveredDoor.isOpen) {
            if (this.hoveredDoor.glowMat) gsap.to(this.hoveredDoor.glowMat, { emissiveIntensity: 0.0, duration: 0.3, ease: 'power2.out' });
            gsap.to(this.hoverLight, { intensity: 0.0, duration: 0.3, ease: 'power2.out' });
        }

        this.hoveredDoor = door;

        // Glow new door outer edge
        if (this.hoveredDoor && !this.hoveredDoor.isOpen) {
            // Subtle colored glow 
            if (this.hoveredDoor.glowMat) gsap.to(this.hoveredDoor.glowMat, { emissiveIntensity: 0.15, duration: 0.3, ease: 'power2.out' });
            this.hoveredDoor.group.add(this.hoverLight);
            this.hoverLight.position.set(0, 1.75, 0.2);
            gsap.to(this.hoverLight, { intensity: 2.0, duration: 0.3, ease: 'power2.out' });
            document.body.style.cursor = 'pointer';
        } else if (this.hoveredDoor && this.hoveredDoor.isOpen) {
            // It's already open and glowing, keep it a pointer
            document.body.style.cursor = 'pointer';
        } else {
            document.body.style.cursor = 'crosshair';
        }
    }
}
