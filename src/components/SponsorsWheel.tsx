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
  centerLogo?: string; // optional center logo image path
  centerSize?: [number, number]; // width, height of center plane
  centerBrightness?: number; // emissive intensity for center logo
  interleaveLogo?: string; // optional logo placed between sponsors on an inner ring
  interleaveRadiusFactor?: number; // inner ring radius factor relative to radius
  interleaveSize?: [number, number];
  interleaveBrightness?: number;
};

const SponsorsWheel: React.FC<SponsorsWheelProps> = ({ logos, radius = 8, speed = 0.12, y = 1.9, brightness = 1.2, centerLogo, centerSize = [3, 3], centerBrightness = 1.4, interleaveLogo, interleaveRadiusFactor = 0.82, interleaveSize = [3.0, 3.0], interleaveBrightness = 1.3 }) => {
  const navigate = useNavigate();
  const textures = useLoader(TextureLoader, logos);
  const centerTexture = centerLogo ? useLoader(TextureLoader, centerLogo) : null;
  const interleaveTexture = interleaveLogo ? useLoader(TextureLoader, interleaveLogo) : null;
  const groupRef = useRef<THREE.Group | null>(null);
  const centerRef = useRef<THREE.Mesh | null>(null);
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
    if (centerTexture) {
      (centerTexture as any).encoding = (THREE as any).sRGBEncoding ?? (THREE as any).SRGBColorSpace ?? (THREE as any).sRGBEncoding;
      (centerTexture as any).needsUpdate = true;
    }
    if (interleaveTexture) {
      (interleaveTexture as any).encoding = (THREE as any).sRGBEncoding ?? (THREE as any).SRGBColorSpace ?? (THREE as any).sRGBEncoding;
      (interleaveTexture as any).needsUpdate = true;
    }
  }, [textures, centerTexture, interleaveTexture]);

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

  const interleaveItems = useMemo(() => {
    if (!interleaveTexture) return [] as { x: number; z: number; rotY: number; idx: number }[];
    const n = logos.length || 1;
    const halfStep = Math.PI * 2 / n / 2; // half-angle between sponsors
    const innerRadius = effectiveRadius * interleaveRadiusFactor;
    return Array.from({ length: n }).map((_, i) => {
      const theta = (i / n) * Math.PI * 2 + halfStep;
      const x = Math.cos(theta) * innerRadius;
      const z = Math.sin(theta) * innerRadius;
      const rotY = -theta + Math.PI / 2;
      return { x, z, rotY, idx: i };
    });
  }, [logos.length, effectiveRadius, interleaveTexture, interleaveRadiusFactor]);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += speed * delta;
    if (centerRef.current) centerRef.current.rotation.y += speed * 0.15 * delta;
  });

  return (
    <group ref={groupRef} position={[0, y, 0]}>
      {/* subtle fill light so logos are readable */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 7]} intensity={1.0} />

      {/* Optional center ELICIT logo */}
      {centerTexture && (
        <mesh ref={centerRef} position={[0, 0, 0.001]}>
          <planeGeometry args={centerSize} />
          <meshStandardMaterial
            map={centerTexture}
            transparent
            side={THREE.DoubleSide}
            emissiveMap={centerTexture}
            emissive={new THREE.Color(0xffffff)}
            emissiveIntensity={centerBrightness}
          />
        </mesh>
      )}

      {items.map((it) => (
        <mesh
          key={it.idx}
          position={[it.x, 0, it.z]}
          rotation={[0, it.rotY, 0]}
          onPointerOver={(e) => { (e.object as any).scale.set(1.12, 1.12, 1.12); document.body.style.cursor = 'pointer'; }}
          onPointerOut={(e) => { (e.object as any).scale.set(1, 1, 1); document.body.style.cursor = 'auto'; }}
          onClick={() => navigate('/sponsors')}
        >
          {/* slightly larger logo planes for better visibility */}
          <planeGeometry args={[3.0, 1.8]} />
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

      {/* Interleaved inner ring with ELICIT logo */}
      {interleaveTexture && interleaveItems.map((it) => (
        <mesh
          key={`interleave-${it.idx}`}
          position={[it.x, 0, it.z]}
          rotation={[0, it.rotY, 0]}
        >
          <planeGeometry args={interleaveSize} />
          <meshStandardMaterial
            map={interleaveTexture}
            transparent
            side={THREE.DoubleSide}
            emissiveMap={interleaveTexture}
            emissive={new THREE.Color(0xffffff)}
            emissiveIntensity={interleaveBrightness}
          />
        </mesh>
      ))}
    </group>
  );
};

export default SponsorsWheel;
