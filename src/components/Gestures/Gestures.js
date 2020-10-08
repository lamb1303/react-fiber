import React from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import { useDrag } from 'react-use-gesture'
import { useSpring, a } from 'react-spring/three'

const Gesture = props => {
    const { size, viewport } = useThree()
    const aspect = size.width / viewport.width
    const [spring, set] = useSpring(() => ({
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        config: {
            mass: 3,
            friction: 40,
            tension: 800
        }
    }))

    const bind = useDrag(
        ({ offset: [x, y], vxvy: [vx, vy], down, ...props }) =>
            set({
                position: [x / aspect, -y / aspect, 0],
                rotation: [y / aspect, x / aspect, 0],
            }),
        { eventOptions: { pointer: true } }
    )

    return (
        <a.mesh {...spring} {...bind()} castShadow>
            <dodecahedronBufferGeometry attach="geometry" args={[1.4, 0]} />
            <meshNormalMaterial attach="material" />
        </a.mesh>
    )
}

export default Gesture