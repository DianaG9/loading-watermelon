import { Suspense, useRef } from "react";
import * as THREE from "three"
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import Watermelon from "./Watermelon";
import ClippingPlane from "./ClippingPlane";
import Background from "./Background";

const Scene = () => {

    const { mouse } = useThree();
    const groupRef = useRef();

    useFrame((state) => {
        const targetPosition = new THREE.Vector3(-mouse.x, -mouse.y, 0);

        state.camera.position.x = THREE.MathUtils.lerp(
            state.camera.position.x,
            state.mouse.x * 1,
            0.1
          );

          state.camera.position.z = THREE.MathUtils.lerp(
            state.camera.position.z,
            3 + (state.mouse.y * 1.5),
            0.1
          );
        state.camera.lookAt(0, -0.05, 0)
    });

    return (
      <>
      <Environment preset="sunset"  environmentIntensity={2}/>
      <group ref={groupRef} position={[0, 0, 0]}>
            <Suspense fallback={null}>
                <Watermelon position={[0, 0, 0]} />
                <ClippingPlane position={[0, 0, 0]}  />
            </Suspense>
            </group>
            {/* <Background/> */}
            <ContactShadows position={[0, 0, 0]} opacity={1} scale={1} blur={1.75} far={0} />

      </>
    );
  };
  
  export default Scene;