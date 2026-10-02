'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, speed = 1, distort = 0.3, type = 'sphere' }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  type?: 'sphere' | 'box' | 'torus';
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        {type === 'sphere' && <sphereGeometry args={[1, 64, 64]} />}
        {type === 'box' && <boxGeometry args={[1.5, 1.5, 1.5]} />}
        {type === 'torus' && <torusGeometry args={[1, 0.4, 32, 64]} />}
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#F2C46A" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function CameraRig() {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.mouse.x * 2, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.mouse.y * 2, 0.05);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <CameraRig />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#FCF0DA" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#F2C46A" />
        <pointLight position={[10, -10, 5]} intensity={0.3} color="#AEAC78" />

        <ParticleField />

        <FloatingShape position={[-4, 2, -2]} color="#F2C46A" speed={1.2} distort={0.4} type="sphere" />
        <FloatingShape position={[4, -1, -3]} color="#AEAC78" speed={0.8} distort={0.3} type="box" />
        <FloatingShape position={[3, 3, -4]} color="#FCF0DA" speed={1.5} distort={0.5} type="torus" />
        <FloatingShape position={[-3, -2, -1]} color="#F2C46A" speed={0.6} distort={0.2} type="box" />
        <FloatingShape position={[0, -3, -5]} color="#AEAC78" speed={1.0} distort={0.35} type="sphere" />
        <FloatingShape position={[-5, 0, -6]} color="#FCF0DA" speed={0.9} distort={0.4} type="torus" />
      </Canvas>
    </div>
  );
}
