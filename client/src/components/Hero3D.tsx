import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 100]} scale={2} ref={sphereRef}>
        <MeshDistortMaterial
          color="#7C2AE8"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

function Particles() {
  const count = 500;
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.05, 0]} />
      <meshBasicMaterial color="#00FFC6" transparent opacity={0.6} />
      {/* In a real implementation we'd set positions in a useEffect */}
    </instancedMesh>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full opacity-60">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#FF2D95" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#00FFC6" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
