import { Canvas } from "@react-three/fiber"
import { Fpv } from "./componets/Fpv"
import { Physics } from "@react-three/cannon"
import { Sky } from "@react-three/drei"
import { Ground } from "./componets/Ground"
import { Player } from "./componets/Player"
import { Cubes } from "./componets/Cubes"
import { TextureSelector } from "./componets/TextureSelector"

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 0]} />
        <ambientLight intensity={0.5} />
        <Fpv />
        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
    
      <div className="pointer">+</div>
      <TextureSelector/>
    </>
  )
}

export default App
