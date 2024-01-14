import { usePlane } from "@react-three/cannon";
import { groundTexture, watherTexture } from "../images/textures.js";
import { useStore } from "../hooks/useStore.js";

export const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0]
    }))

    const [addCube] = useStore(state => [state.addCube])

    const handleClick = event => {
        event.stopPropagation()
        const [x, y, z ] = Object.values(event.point).map(n => Math.ceil(n))
        addCube(x,y,z)
    }
    groundTexture.repeat.set(10, 10)
    watherTexture.repeat.set(300, 300)
    return (
        <mesh>
            <mesh 
            onClick={handleClick}
            ref={ref}>
                <planeGeometry attach='geometry' args={[100, 100]} />
                <meshStandardMaterial attach='material' map={watherTexture} />
            </mesh>
        </mesh>
    )
} 
