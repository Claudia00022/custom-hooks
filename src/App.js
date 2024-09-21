import { Canvas } from '@react-three/fiber'
import Box from './Box'
import { Stats } from '@react-three/drei'

export default function App() {
  return (
    <Canvas camera={{ position: [0, 2, 3] }}>
      <Box position={[-1.5, 0.5, 0]} />
      <Box position={[0, 0.5, 0]}  selected/>
      <Box position={[1.5, 0.5, 0]} />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  )
}