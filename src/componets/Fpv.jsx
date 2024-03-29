import { useThree } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";

export const Fpv = () => {
    const { camera, gl } = useThree()

    return (
        <PointerLockControls args={[camera, gl.domElement]} />
    )
}