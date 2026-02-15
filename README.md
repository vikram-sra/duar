# DUAR - Explore the Dimensions

[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

**Duar** is a high-fidelity, cinematic 3D gateway experience. Built with **Three.js** and **GSAP**, it serves as an immersive hub for exploring different digital dimensions through a landscape of interactive portals.

---

## 🌌 The Experience

Duar transports users to a minimal, atmospheric landscape defined by sacred geometry and dynamic lighting. 

### Key Features

*   **Concentric Ring Architecture**: The world is organized into five geometric rings, creating a sense of depth and progression as you explore.
*   **Dynamic Astronomical Cycle**: A fully procedural Day/Night cycle. Watch the fiery solar plasma transition into a cool, basaltic lunar surface, accompanied by shifting atmospheric fog and lighting.
*   **Interactive Portals**: 25 unique portals (synchronized across the rings) that billboard to follow the observer. Each portal features smooth opening animations and leads to specific destinations (Portfolio, Blog, Projects, etc.).
*   **The Central Monolith**: A polished Chrome Cone at the world's origin acts as a focal point and a reset anchor for navigation.
*   **Premium Glass UI**: A minimalist, high-end control dock for adjusting the speed of time, toggling high noon/midnight, and triggering random discoveries.
*   **Cinematic Rendering**: Powered by ACES Filmic tone mapping, Unreal Bloom post-processing, and PCFSoft shadows for a truly premium visual feel.

---

## 🛠 Tech Stack

*   **Three.js**: Core 3D engine for scene rendering and geometry.
*   **GSAP (GreenSock)**: Orchestrates the smooth, high-performance camera transitions and portal interactions.
*   **Vite**: Next-generation frontend tooling for rapid development and optimized builds.
*   **GLTF / GLB**: Industry-standard 3D model architecture for efficient asset loading.

---

## 🚀 Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/vikram-sra/duar.git
    cd duar
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **View the Scene**
    Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎮 Controls

| Interaction | Action |
| :--- | :--- |
| **Left Click / Tap** | Open/Close Portals or interact with the Monolith. |
| **Middle/Right Click + Drag** | Drag portals around the landscape (Dev Mode). |
| **Left Click + Drag** | Orbit the camera 360° around the center. |
| **Scroll / Pinch** | Zoom in and out. |
| **UI Dock** | Adjust time speed, toggle day/night, and "Discover" random locations. |

---

## 📜 Development Notes

*   **Ground Collision**: The camera is locked above the horizontal plane to maintain immersion.
*   **Resource Management**: Uses a `LoadingManager` with a clean, minimal loader and a 2.5s fallback to ensure a smooth reveal.
*   **Responsive Design**: Automatically handles viewport resizing and adapts UI for mobile devices.

---

Designed and developed by **Vikram Sra**.
