import React, { useMemo } from 'react'
import state from './../../containers/store/store'
import { useLoader } from 'react-three-fiber'
import { TextureLoader, LinearFilter } from "three"
import { Block, useBlock } from '../blocks/blocks'
import { Text, MultilineText } from '../../components/Text/Text'
import Plane from './../../components/Plane/Plane'
import Paragraph from './../../containers/paragraph/Paragraph'

const Content = props => {
    const images = useLoader(TextureLoader, state.paragraphs.map(({ image }) => image))
    useMemo(() => images.forEach(texture => (texture.minFilter = LinearFilter)), [images])
    const { contentMaxWidth: w, mobile } = useBlock()
    return (
        <>
            <Block factor={.5} offset={0}>
                <Block factor={1.2}>
                    <Text left size={w * 0.08} position={[-w / 3.2, 0.5, -1]} color="#d50785">
                        {props.title}
                    </Text>
                </Block>
            </Block>
            <Block factor={mobile ? 1.0: .6} offset={0.7}>
                <MultilineText top right size={w * 0.095} lineHeight={w / 5} position={[-w / -3.5, 0, -1]} color="#ccc" text={props.slogan} />
            </Block>
            {state.paragraphs.map((props, index) => (
                <Paragraph key={index} index={index} {...props} image={images[index]} />
            ))}
            {state.stripes.map(({ offset, color, height }, index) => (
                <Block key={index} factor={-1.5} offset={offset}>
                    <Plane args={[500, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
                </Block>
            ))}
        </>
    )
}

export default Content