import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"

function Objeto(props) {
  const { scene } = useGLTF("playa.glb");
  return <primitive object={scene} />
}

export default function App() {
  return (
    <Canvas camera={{ position: [-10, 15, 15], fov: 50, far: 60 }} style={{height:"600px"}}>
      <ambientLight intensity={0.8} args={['light-blue']} />
      <spotLight intensity={0.5} angle={0.1} penumbra={0.1} position={[200, -160, 500]} castShadow shadowBias={-0.0001} args={['#1EBDEC']} />
      <spotLight intensity={0.2} angle={0.4} penumbra={0.5} position={[-110, 55, 40]} castShadow shadowBias={-0.0001} args={['white']} />
      <spotLight intensity={0.2} angle={0.3} penumbra={0.5} position={[100, 55, 300]} castShadow shadowBias={-0.0001} args={['white']} />
      <Suspense fallback={null}>
        <Objeto transparent={true} opacity={0}/>
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}