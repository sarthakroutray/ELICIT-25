import React, { useMemo, useRef, useState, useEffect } from 'react';
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

const SponsorsWheel: React.FC<SponsorsWheelProps> = ({ logos, radius = 8, speed = 0.12, y = 1.9, brightness = 1.2 }) => {
  const navigate = useNavigate();
  const textures = useLoader(TextureLoader, logos);
  const groupRef = useRef<THREE.Group | null>(null);
  const [viewportWidth, setViewportWidth] = useState<number>(() => (typeof window !== 'undefined' ? window.innerWidth : 1024));

  // Track viewport width for responsive radius
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute a smaller radius on mobile breakpoints (<640px) and slightly reduced on small tablets (<768px)
  const effectiveRadius = useMemo(() => {
    if (viewportWidth < 640) return radius * 0.55; // mobile
    if (viewportWidth < 768) return radius * 0.7;  // small tablets
    return radius;                                  // desktop keeps original
  }, [viewportWidth, radius]);

  // ensure textures are treated as sRGB so colors and emissive look correct
  React.useEffect(() => {
    textures.forEach((t) => {
      if (t) {
        // cast to any to avoid TS type mismatch for different three.js/@types versions
        (t as any).encoding = (THREE as any).sRGBEncoding ?? (THREE as any).SRGBColorSpace ?? (THREE as any).sRGBEncoding;
        (t as any).needsUpdate = true;
      }
    });
  }, [textures]);

  const items = useMemo(() => {
    const n = logos.length || 1;
    return Array.from({ length: n }).map((_, i) => {
      const theta = (i / n) * Math.PI * 2;
      const x = Math.cos(theta) * effectiveRadius;
      const z = Math.sin(theta) * effectiveRadius;
      const rotY = -theta + Math.PI / 2;
      return { x, z, rotY, idx: i };
    });
  }, [logos.length, effectiveRadius]);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += speed * delta;
  });

  return (
    <group ref={groupRef} position={[0, y, 0]}>
      {/* subtle fill light so logos are readable */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 7]} intensity={1.0} />

      {items.map((it) => (
        <mesh
          key={it.idx}
          position={[it.x, 0, it.z]}
          rotation={[0, it.rotY, 0]}
          onPointerOver={(e) => { (e.object as any).scale.set(1.12, 1.12, 1.12); document.body.style.cursor = 'pointer'; }}
          onPointerOut={(e) => { (e.object as any).scale.set(1, 1, 1); document.body.style.cursor = 'auto'; }}
          onClick={() => navigate('/sponsors')}
        >
          <planeGeometry args={[2.2, 1.2]} />
          {/* doubleSide so logos are visible from all camera angles; use emissiveMap + emissiveIntensity for manual brightness control */}
          <meshStandardMaterial
            map={textures[it.idx]}
            transparent
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
