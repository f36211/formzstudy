import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Edges, RoundedBox, Environment, ContactShadows } from '@react-three/drei';

function RotatingCube() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <group>
      <RoundedBox 
        ref={meshRef} 
        args={[2, 2, 2]} 
        radius={0.1} 
        smoothness={4}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial 
          color="#6366f1" 
          transparent 
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
        <Edges scale={1} threshold={15} color="white" />
      </RoundedBox>
    </group>
  );
}

export default function Kubus3D() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <color attach="background" args={['#0f172a']} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <spotLight position={[-10, -10, -10]} intensity={0.5} />
        
        <RotatingCube />
        
        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
        <OrbitControls 
          enablePan={false} 
          enableZoom={true} 
          minDistance={3} 
          maxDistance={10} 
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
