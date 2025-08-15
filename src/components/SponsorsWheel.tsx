import React, { useMemo, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { useNavigate } from 'react-router-dom';

type SponsorsWheelProps = {
  logos: string[];
  radius?: number;
  speed?: number; // radians per second
  y?: number; // vertical offset
  brightness?: number; // emissive intensity for logos
};

const SponsorsWheel: React.FC<SponsorsWheelProps> = ({ logos, radius = 8, speed = 0.12, y = 1.9, brightness = 0.5 }) => {
  const navigate = useNavigate();
  const textures = useLoader(TextureLoader, logos);
  const groupRef = useRef<THREE.Group | null>(null);

  const items = useMemo(() => {
    const n = logos.length || 1;
    return Array.from({ length: n }).map((_, i) => {
      const theta = (i / n) * Math.PI * 2;
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      const rotY = -theta + Math.PI / 2;
      return { x, z, rotY, idx: i };
    });
  }, [logos.length, radius]);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += speed * delta;
  });

  return (
    <group ref={groupRef} position={[0, y, 0]}>
      {/* subtle fill light so logos are readable */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 7]} intensity={0.6} />

      {items.map((it) => (
        <mesh
          key={it.idx}
          position={[it.x, 0, it.z]}
          rotation={[0, it.rotY, 0]}
          onPointerOver={(e) => { (e.object as any).scale.set(1.12, 1.12, 1.12); }}
          onPointerOut={(e) => { (e.object as any).scale.set(1, 1, 1); }}
          onClick={() => navigate(`/sponsors#${it.idx}`)}
        >
          <planeGeometry args={[2.2, 1.2]} />
          {/* doubleSide so logos are visible from all camera angles; use emissiveMap + emissiveIntensity for manual brightness control */}
          <meshStandardMaterial
            map={textures[it.idx]}
            transparent
            toneMapped={false}
            side={THREE.DoubleSide}
            emissiveMap={textures[it.idx]}
            emissive={new THREE.Color(0xffffff)}
            emissiveIntensity={brightness}
          />
        </mesh>
      ))}
    </group>
  );
};

export default SponsorsWheel;
