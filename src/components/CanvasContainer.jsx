import { Suspense, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import Scene from "./Scene";

export default function CanvasContainer() {
    return (
        <Canvas gl={{ antialias: true, alpha: true }} camera={{ fov: 50, position: [0, 3, 3] }} shadows>
            <directionalLight
                position={[0, 0, 0]}
                intensity={10}
                castShadow 
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <Scene />
        </Canvas>
    );
}