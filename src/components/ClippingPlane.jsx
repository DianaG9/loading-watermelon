import React, { useRef, useEffect,  useState} from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Plane, useTexture } from '@react-three/drei';
import * as THREE from "three"
import { Slide } from './Slide';
import { Slide2 } from './Slide_2';

function ClippingPlane({position}) {
const { gl } = useThree();

const plane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0)
const planeRef = useRef();

const slideRef = useRef();
const slideRef2= useRef();
const matRef = useRef();
const sphereRadius = 1;

const [yPosition, setYPosition] = useState(1);
const step = 0.01;

useEffect( () => {
    gl.clippingPlanes = [plane];

    return () => {
        gl.clippingPlanes =[];
    }
}, [gl, plane] )

useFrame (() => {
    let newY = yPosition - step;
    if (newY <= 0) {
        newY = 1;
    }
    setYPosition(newY);

    if (planeRef.current) {
        planeRef.current.position.y = newY;
        plane.setComponents(0, -1, 0, newY);

        slideRef.current.position.y = newY - 0.0001;
        slideRef2.current.position.y = newY - 0.0001;

        const newScale = Math.sqrt(Math.max(0, sphereRadius ** 2 - newY ** 2)) * 2;
        slideRef.current.scale.set(newScale, newScale, newScale);
        slideRef2.current.scale.set(newScale, newScale, newScale);

        if (matRef.current) {
            matRef.current.opacity = 0.85 - newY;
        }
    }
})

    return (
        <>
            <Plane ref={planeRef} position={[0, 0, 0]} args={[5,5]} rotation={[-Math.PI /2 , 0 ,0]}>
                <meshBasicMaterial color="lightblue" opacity={0} alphaTest={true} slide={THREE.DoubleSide}/>
            </Plane>

            <Slide ref={slideRef} matRef={matRef}
                position={position}
            />

            <Slide2 ref={slideRef2}
                position={position}
            /> 
        </>      
    )
}

export default ClippingPlane;