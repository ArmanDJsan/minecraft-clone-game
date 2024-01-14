import { useBox } from "@react-three/cannon"
import { dirtTexture, logTexture, glassTexture, woodTexture, grassTexture, watherTexture } from "../images/textures.js";
import { useState } from "react";
import { useStore } from "../hooks/useStore.js";

const TEXTURA = {
    wood: woodTexture,
    log: logTexture,
    dirt: dirtTexture,
    glass: glassTexture,
    grass: grassTexture,
    wather: watherTexture
}

export const Cube = ({ id, position, texture }) => {
    const [isHovered, setHovered] = useState(false)
    const [ref] = useBox(() => ({
        type: 'Static',
        position
    }))
    const [removeCube] = useStore(state => [state.removeCube])
    return (
        <mesh
            onPointerMove={(e) => {
                e.stopPropagation()
                setHovered(true)
            }}
            onPointerOut={(e) => {
                e.stopPropagation()
                setHovered(false)
            }}

            onClick={(e) => {
                e.stopPropagation()
                if (e.altKey) {
                    removeCube(id)
                }
            }}
            ref={ref}>
            <boxGeometry attach='geometry' args={[1, 1, 1, 1]} />
            <meshStandardMaterial
                color={isHovered ? 'grey' : 'white'}
                map={TEXTURA[texture]} attach='material' />
        </mesh>
    )
}