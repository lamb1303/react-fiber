import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber'

const Cube = (props) => {
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)


    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
    return (
        <mesh
            {...props}
            ref={mesh}
            onClick={e => setActive(!active)}
            onPointerOver={e => setHover(true)}
            onPointerOut={e => setHover(false)}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default Cube