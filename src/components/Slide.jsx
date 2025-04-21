import React, {useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Slide({ref, matRef}) {
  const { nodes, materials } = useGLTF('/Models/Plano.glb') 

  useFrame((state) => {
  })
  
  return (
    <group ref={ref} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder1.geometry}
        material={materials['Innterior.001']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.5,0.5,0.5]}
        
      >
        <meshStandardMaterial
          ref={matRef}
          attach="material"
          {...materials['Innterior.001']} 
          opacity={0.0} 
          transparent={true} 
        />
      </mesh>
    </group>
  )
}


useGLTF.preload('/Plano.glb')
