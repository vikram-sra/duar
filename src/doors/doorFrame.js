import * as THREE from 'three';
import { createPortalMaterial } from './portalMaterial.js';

// Builds a door's static structure into `group`: the frame posts, the invisible
// click hitbox, and the visible portal surface. Returns the pieces the caller
// needs to keep hold of.
export function createDoorFrame(group, data) {
    const mat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5, metalness: 0.5 });
    // Extended posts: 3.6m tall, bottom sinks into ground
    const postGeo = new THREE.BoxGeometry(0.1, 3.6, 0.1);

    // Posts: center at 1.78 means bottom at -0.02 (below ground)
    const lP = new THREE.Mesh(postGeo, mat); lP.position.set(-0.8, 1.78, 0); lP.castShadow = true; lP.name = "Frame"; group.add(lP);
    const rP = new THREE.Mesh(postGeo, mat); rP.position.set(0.8, 1.78, 0); rP.castShadow = true; rP.name = "Frame"; group.add(rP);

    // Top plate
    const tP = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.1, 0.1), mat); tP.position.set(0, 3.58, 0); tP.castShadow = true; tP.name = "Frame"; group.add(tP);

    // Base: extend into ground for shadow contact
    const bP = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.12, 0.1), mat);
    bP.position.set(0, 0.04, 0); // Bottom at -0.02
    bP.castShadow = true; bP.receiveShadow = true; bP.name = "Frame"; group.add(bP);

    // Portal hitbox: invisible plane, slightly wider (1.5) and forward (z=0.01)
    // than the opening so clicks are caught reliably.
    const portalMat = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0, visible: true, side: THREE.DoubleSide });
    const portalHitbox = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 3.5), portalMat);
    portalHitbox.position.set(0, 1.75, 0.01);
    portalHitbox.name = "PortalHitbox";
    group.add(portalHitbox);

    // Visible portal surface: the vortex shader, tinted per-door. Sits at the opening,
    // hidden behind the closed panel and revealed (uOpacity tweens up) when the door opens.
    const portalMaterial = createPortalMaterial(data.color);
    const portalSurface = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 3.5), portalMaterial);
    portalSurface.position.set(0, 1.75, 0);
    portalSurface.name = "PortalSurface";
    portalSurface.renderOrder = 2;
    group.add(portalSurface);

    return { portalHitbox, portalMaterial };
}

// The stand-in panel used when a door specifies no model.
export function createMonolithPanel() {
    // Height 3.6 (extended), center at 1.78 means bottom at -0.02
    const monolith = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 3.6, 0.2),
        new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.4, metalness: 0.2 })
    );
    monolith.position.set(0.75, 1.78, 0);
    monolith.castShadow = true;
    monolith.receiveShadow = true;
    return monolith;
}
