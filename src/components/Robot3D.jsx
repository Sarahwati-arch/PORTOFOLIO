import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Environment, Sphere, Cylinder, Box, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// Material configurations to match a cute, premium robot style
const materials = {
  white: new THREE.MeshStandardMaterial({ color: '#eef2f5', roughness: 0.3, metalness: 0.1 }),
  darkGray: new THREE.MeshStandardMaterial({ color: '#1a1a24', roughness: 0.4, metalness: 0.2 }),
  accentColor: new THREE.MeshStandardMaterial({ color: '#8DA88C', emissive: '#8DA88C', emissiveIntensity: 0.8, roughness: 0.2 }),
  joint: new THREE.MeshStandardMaterial({ color: '#333', roughness: 0.7 }),
};

function RobotModel() {
  const headRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse coordinates globally (-1 to 1) based on the whole window
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate head to follow the global cursor
  useFrame(() => {
    if (headRef.current) {
      // Increased rotation range for better tracking when cursor is far
      const targetX = (mouse.current.x * Math.PI) / 2.5; 
      const targetY = (mouse.current.y * Math.PI) / 4;
      
      // Smoothly interpolate current rotation to target rotation using Lerp
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.1);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetY, 0.1);
    }
  });

  return (
    <group position={[0, -0.6, 0]} scale={1.3}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        
        {/* Head Group - Rotates to follow mouse */}
        <group ref={headRef} position={[0, 1.8, 0]}>
          {/* Main Head */}
          <RoundedBox args={[1.4, 1.2, 1.3]} radius={0.3} smoothness={4} material={materials.white} />
          
          {/* Ear/Antenna Base Left */}
          <Cylinder args={[0.3, 0.3, 0.2]} position={[-0.75, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.accentColor} />
          {/* Ear/Antenna Base Right */}
          <Cylinder args={[0.3, 0.3, 0.2]} position={[0.75, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.accentColor} />

          {/* Face Screen */}
          <RoundedBox args={[1.1, 0.8, 0.2]} position={[0, 0, 0.65]} radius={0.1} smoothness={4} material={materials.darkGray} />
          
          {/* Cute Eyes ^^ */}
          {/* Left Eye */}
          <Sphere args={[0.1, 16, 16]} position={[-0.25, 0.1, 0.75]} scale={[1, 0.5, 0.5]} material={materials.accentColor} />
          <Sphere args={[0.1, 16, 16]} position={[-0.35, 0.05, 0.75]} scale={[0.5, 0.5, 0.5]} material={materials.accentColor} />
          <Sphere args={[0.1, 16, 16]} position={[-0.15, 0.05, 0.75]} scale={[0.5, 0.5, 0.5]} material={materials.accentColor} />
          
          {/* Right Eye */}
          <Sphere args={[0.1, 16, 16]} position={[0.25, 0.1, 0.75]} scale={[1, 0.5, 0.5]} material={materials.accentColor} />
          <Sphere args={[0.1, 16, 16]} position={[0.35, 0.05, 0.75]} scale={[0.5, 0.5, 0.5]} material={materials.accentColor} />
          <Sphere args={[0.1, 16, 16]} position={[0.15, 0.05, 0.75]} scale={[0.5, 0.5, 0.5]} material={materials.accentColor} />
          
          {/* Cheeks */}
          <Sphere args={[0.08, 16, 16]} position={[-0.4, -0.15, 0.75]} material={new THREE.MeshStandardMaterial({color: '#ff6b6b', emissive: '#ff6b6b', emissiveIntensity: 0.5})} />
          <Sphere args={[0.08, 16, 16]} position={[0.4, -0.15, 0.75]} material={new THREE.MeshStandardMaterial({color: '#ff6b6b', emissive: '#ff6b6b', emissiveIntensity: 0.5})} />
        </group>

        {/* Neck */}
        <Cylinder args={[0.2, 0.25, 0.4]} position={[0, 1.1, 0]} material={materials.joint} />

        {/* Body */}
        <RoundedBox args={[1.5, 1.6, 1.2]} position={[0, 0.3, 0]} radius={0.4} smoothness={4} material={materials.white} />
        
        {/* Chest Core/Button */}
        <Sphere args={[0.3, 32, 32]} position={[0, 0.5, 0.58]} scale={[1, 1, 0.3]} material={materials.accentColor} />
        <Cylinder args={[0.35, 0.35, 0.1]} position={[0, 0.5, 0.55]} rotation={[Math.PI/2, 0, 0]} material={materials.darkGray} />

        {/* Left Arm */}
        <group position={[-0.9, 0.8, 0]}>
          {/* Shoulder */}
          <Sphere args={[0.3, 16, 16]} material={materials.joint} />
          {/* Upper Arm */}
          <Cylinder args={[0.2, 0.15, 0.8]} position={[-0.3, -0.3, 0]} rotation={[0, 0, Math.PI / 4]} material={materials.white} />
          {/* Hand/Claw */}
          <Sphere args={[0.2]} position={[-0.6, -0.6, 0]} material={materials.accentColor} />
        </group>

        {/* Right Arm */}
        <group position={[0.9, 0.8, 0]}>
          {/* Shoulder */}
          <Sphere args={[0.3, 16, 16]} material={materials.joint} />
          {/* Upper Arm */}
          <Cylinder args={[0.2, 0.15, 0.8]} position={[0.3, -0.3, 0]} rotation={[0, 0, -Math.PI / 4]} material={materials.white} />
          {/* Hand/Claw */}
          <Sphere args={[0.2]} position={[0.6, -0.6, 0]} material={materials.accentColor} />
        </group>

        {/* Base/Hips */}
        <RoundedBox args={[1.2, 0.6, 1]} position={[0, -0.6, 0]} radius={0.2} smoothness={4} material={materials.darkGray} />
        
        {/* Left Leg */}
        <group position={[-0.4, -0.9, 0]}>
          <Cylinder args={[0.2, 0.2, 0.6]} material={materials.white} />
          <RoundedBox args={[0.4, 0.2, 0.6]} position={[0, -0.3, 0.1]} radius={0.05} material={materials.accentColor} />
        </group>

        {/* Right Leg */}
        <group position={[0.4, -0.9, 0]}>
          <Cylinder args={[0.2, 0.2, 0.6]} material={materials.white} />
          <RoundedBox args={[0.4, 0.2, 0.6]} position={[0, -0.3, 0.1]} radius={0.05} material={materials.accentColor} />
        </group>

      </Float>
    </group>
  );
}

export default function Robot3D() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '320px', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <directionalLight position={[-10, 10, -10]} intensity={0.5} />
        <Environment preset="city" />
        
        <RobotModel />
        
        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} frames={1} resolution={256} />
      </Canvas>
    </div>
  );
}
