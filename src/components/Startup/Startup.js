import React,{ useRef } from "react";
import { useFrame } from "react-three-fiber";
import lerp from 'lerp'
import Plane from '../Plane/Plane'

const Startup = props => {
    const ref = useRef()
    useFrame(() =>
        (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
    return <Plane ref={ref} color="gray" position={[0, 0, 0]} scale={[10,10,1]}/>
}

export default Startup