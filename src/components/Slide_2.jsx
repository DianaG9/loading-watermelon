
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function Slide2(props) {
  const { nodes, materials } = useGLTF('/Models/Plano2.glb')

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCylinder1.geometry}
        material={materials['Innterior.001']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.5,0.5,0.5]}
      />
    </group>
  )
}


useGLTF.preload('/Plano2.glb')
