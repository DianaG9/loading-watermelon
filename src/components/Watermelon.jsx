import { useRef, useState, useEffect } from 'react'
import { useGLTF, Outlines } from '@react-three/drei'
import { useFrame, useThree } from "@react-three/fiber";

function Watermelon({position}) {
  const { nodes, materials } = useGLTF('/Models/Sandia.glb')
  
  const watermelonRef= useRef();
  const { mouse, viewport } = useThree();
  const [offset, setOffset] = useState(0);

  return (
    <group ref={watermelonRef} dispose={null}    
        >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere4.geometry}
        material={materials["Sandia3.001"]}
        rotation={[Math.PI / 2, 0, 0]}
        position={position}
        onPointerOver={(e) => {
          const mouseX = e.point.x;
          const modelX = watermelonRef.current.position.x;
          setOffset(mouseX > modelX ? -0.2 : 0.2);
        }}
        onPointerOut={() => setOffset(0)}
      >
      </mesh>
    </group>
    
  )
}

useGLTF.preload('/Models/Sandia.glb')


export default Watermelon