import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface CyberpunkSceneProps {
  mousePosition: { x: number; y: number };
}

const CyberpunkScene: React.FC<CyberpunkSceneProps> = ({ mousePosition }) => {
  const gridRef = useRef<THREE.Group>(null);
  const robotsRef = useRef<THREE.Group>(null);
  const centralTowerRef = useRef<THREE.Group>(null);

  // Create grid lines
  const gridLines = useMemo(() => {
    const lines = [];
    const size = 50;
    const divisions = 25;
    
    for (let i = 0; i <= divisions; i++) {
      const position = (i / divisions) * size - size / 2;
      // Horizontal lines
      lines.push(
        <line key={`h-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                -size / 2, 0, position,
                size / 2, 0, position,
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00ff41" opacity={0.4} transparent />
        </line>
      );
      
      // Vertical lines
      lines.push(
        <line key={`v-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                position, 0, -size / 2,
                position, 0, size / 2,
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00ff41" opacity={0.4} transparent />
        </line>
      );
    }
    
    return lines;
  }, []);

  // Create robots
  const robots = useMemo(() => {
    const robotPositions = [];
    for (let i = 0; i < 12; i++) {
      robotPositions.push({
        x: (Math.random() - 0.5) * 40,
        z: (Math.random() - 0.5) * 40,
        y: 0,
        rotation: Math.random() * Math.PI * 2,
      });
    }
    return robotPositions;
  }, []);

  useFrame((state) => {
    const pulseIntensity = Math.sin(state.clock.elapsedTime * 2) * 0.2 + 0.4;
    
    if (gridRef.current) {
      const normalizedX = (mousePosition.x / window.innerWidth) * 2 - 1;
      const normalizedY = -(mousePosition.y / window.innerHeight) * 2 + 1;
      
      gridRef.current.rotation.x = normalizedY * 0.1;
      gridRef.current.rotation.y = normalizedX * 0.1;
      
      // Add pulsing effect to grid lines
      gridRef.current.children.forEach((line) => {
        if (line.material) {
          line.material.opacity = pulseIntensity;
        }
      });
    }
    
    if (robotsRef.current) {
      robotsRef.current.children.forEach((robot, index) => {
        robot.rotation.y = Math.sin(state.clock.elapsedTime + index) * 0.1;
        const glitchFactor = Math.sin(state.clock.elapsedTime * 5 + index * 2) > 0.8 ? 1 : 0;
        robot.position.y = glitchFactor * 0.5;
      });
    }
    
    if (centralTowerRef.current) {
      centralTowerRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      centralTowerRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} color="#0066ff" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ff0040" />
      
      {/* Grid */}
      <group ref={gridRef} position={[0, -2, 0]}>
        {gridLines}
      </group>
      
      {/* Robots */}
      <group ref={robotsRef}>
        {robots.map((robot, index) => (
          <group key={index} position={[robot.x, robot.y, robot.z]} rotation={[0, robot.rotation, 0]}>
            {/* Robot body */}
            <Box args={[1, 2, 1]} position={[0, 1, 0]}>
              <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
            </Box>
            
            {/* Robot head */}
            <Box args={[0.8, 0.8, 0.8]} position={[0, 2.4, 0]}>
              <meshStandardMaterial color="#444" metalness={0.9} roughness={0.1} />
            </Box>
            
            {/* Robot eyes */}
            <Sphere args={[0.1]} position={[-0.2, 2.4, 0.4]}>
              <meshStandardMaterial color="#ff0040" emissive="#ff0040" emissiveIntensity={2} />
            </Sphere>
            <Sphere args={[0.1]} position={[0.2, 2.4, 0.4]}>
              <meshStandardMaterial color="#ff0040" emissive="#ff0040" emissiveIntensity={2} />
            </Sphere>
            
            {/* Robot arms */}
            <Cylinder args={[0.2, 0.2, 1.5]} position={[-0.8, 1.5, 0]} rotation={[0, 0, Math.PI / 6]}>
              <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
            </Cylinder>
            <Cylinder args={[0.2, 0.2, 1.5]} position={[0.8, 1.5, 0]} rotation={[0, 0, -Math.PI / 6]}>
              <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
            </Cylinder>
          </group>
        ))}
      </group>
      
      {/* Central Tower */}
      <group ref={centralTowerRef} position={[0, 0, 0]}>
        <Cylinder args={[2, 2, 8]} position={[0, 4, 0]}>
          <meshStandardMaterial color="#222" metalness={0.9} roughness={0.1} />
        </Cylinder>
        
        {/* Tower lights */}
        {[...Array(6)].map((_, i) => (
          <Sphere key={i} args={[0.2]} position={[
            Math.cos(i * Math.PI / 3) * 2.2,
            4 + Math.sin(i * 0.5) * 2,
            Math.sin(i * Math.PI / 3) * 2.2
          ]}>
            <meshStandardMaterial 
              color="#00ff41" 
              emissive="#00ff41" 
              emissiveIntensity={3} 
            />
          </Sphere>
        ))}
        
        {/* Data streams */}
        {[...Array(4)].map((_, i) => (
          <Box key={i} args={[0.1, 0.1, 4]} position={[
            Math.cos(i * Math.PI / 2) * 3,
            2,
            Math.sin(i * Math.PI / 2) * 3
          ]} rotation={[0, i * Math.PI / 2, 0]}>
            <meshStandardMaterial 
              color="#ff0040" 
              emissive="#ff0040" 
              emissiveIntensity={2}
              transparent
              opacity={0.7}
            />
          </Box>
        ))}
      </group>
    </group>
  );
};

export default CyberpunkScene;