import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import useKeyboard from './useKeyboard'
import { useState } from 'react'

export default function Box(props) {
  const[selected, setSelected] = useState(props.selected)
  const ref = useRef()
  const keyMap = useKeyboard()

  useFrame((_, delta) => {
    keyMap['KeyA'] && selected && (ref.current.position.x -= 1 * delta)
    keyMap['KeyD'] && selected && (ref.current.position.x += 1 * delta)
    keyMap['KeyW'] && selected && (ref.current.position.z -= 1 * delta)
    keyMap['KeyS'] && selected && (ref.current.position.z += 1 * delta)
  })

  return (
    <mesh ref={ref} {...props} onPointerDown={() => setSelected(!selected)}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe = {!selected} />
    </mesh>
  )
}