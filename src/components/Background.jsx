import React from 'react';
import { Plane } from '@react-three/drei';

function Background() {
    return (
    <Plane args={[9, 9]} rotation-x={-Math.PI / 2} position={[0, 0, 0]} receiveShadow>
        <shadowMaterial color={0x000000} opacity={0.25} side={2} />
    </Plane>
    );
}

export default Background;