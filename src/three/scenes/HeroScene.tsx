import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import type { Mesh } from 'three';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useSceneColors } from '../hooks/useSceneColors';

/**
 * Reference scene. Copy this file to start a new one.
 *
 * Rules that every scene follows:
 * - Read colors from `useSceneColors`.
 * - Stop all motion when `useReducedMotion` returns true.
 * - Multiply rotation by `delta`, never by a fixed step.
 * - Mutate refs inside `useFrame`. Do not call `setState` there.
 */
export function HeroScene() {
  const mesh = useRef<Mesh>(null);
  const reducedMotion = useReducedMotion();
  const colors = useSceneColors();

  useFrame((_state, delta) => {
    if (reducedMotion || !mesh.current) return;
    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.3;
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 6, 4]} intensity={2} color={colors.keyLight} />
      <directionalLight position={[-6, -2, -4]} intensity={0.6} color={colors.fillLight} />

      <Float speed={reducedMotion ? 0 : 1.2} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh ref={mesh}>
          <torusKnotGeometry args={[1.1, 0.35, 180, 32]} />
          <meshStandardMaterial color={colors.material} metalness={0.6} roughness={0.25} />
        </mesh>
      </Float>

      <Environment preset="city" />
    </>
  );
}
