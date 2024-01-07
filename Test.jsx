import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, RenderTexture , Text, PerspectiveCamera, Sphere, MeshDistortMaterial } from '@react-three/drei'



function Test() {
  return (
    <div>
    <Canvas>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
    <mesh >
        <boxGeometry args={[3,3,3]} />
        <meshStandardMaterial>
        <RenderTexture attach={'map'}>
            <PerspectiveCamera 
            makeDefault
            position={[0.1,0.1,1]}/>
            <color attach='background' args={['pink']}/>
            <Text fontSize={1} color='green'>Hello</Text>
        </RenderTexture>
        </meshStandardMaterial>
    </mesh>
    </Canvas>
    <Canvas>
    <OrbitControls enableZoom={false} />
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <Sphere args={[1,100,200] } scale={2}>
          <MeshDistortMaterial
           speed={4}
           attach={'material'}
           distort={0.5}
           color={'green'}/>
        </Sphere>
    </Canvas>
    </div>
  )
}

export default Test