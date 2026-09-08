import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Instance, Instances } from '@react-three/drei';
import { Color, MathUtils, Vector3, type Group, type ShaderMaterial } from 'three';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useSceneColors } from '../hooks/useSceneColors';

const SWARM_COUNT = 250;
const SWARM_RADIUS = 9;

/** Hoisted out of the frame loop. The garbage collector causes the stutter. */
const CAMERA_TARGET = new Vector3();

const AURORA_VERTEX = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const AURORA_FRAGMENT = /* glsl */ `
  uniform float uTime;
  uniform vec3 uBase;
  uniform vec3 uBlobA;
  uniform vec3 uBlobB;
  uniform vec3 uBlobC;
  varying vec2 vUv;

  float blob(vec2 point, vec2 center, float radius) {
    return smoothstep(radius, 0.0, length(point - center));
  }

  void main() {
    vec2 point = vUv * 2.0 - 1.0;
    point.x *= 1.7;
    float t = uTime * 0.08;

    vec3 color = uBase;
    color = mix(color, uBlobA, blob(point, vec2(sin(t * 1.1) * 0.9, cos(t * 0.9) * 0.5), 1.15));
    color = mix(color, uBlobB, blob(point, vec2(cos(t * 0.7) * 1.1, sin(t * 1.3) * 0.6), 1.05) * 0.9);
    color = mix(color, uBlobC, blob(point, vec2(sin(t * 0.5 + 2.0) * 0.75, cos(t * 0.6 + 1.0) * 0.7), 1.2) * 0.85);

    // A flat gradient bands on an 8 bit display. Dither it.
    float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
    color += (noise - 0.5) * 0.015;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function Aurora() {
  const material = useRef<ShaderMaterial>(null);
  const reducedMotion = useReducedMotion();
  const colors = useSceneColors();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uBase: { value: new Color(colors.auroraBase) },
      uBlobA: { value: new Color(colors.auroraBlobs[0]) },
      uBlobB: { value: new Color(colors.auroraBlobs[1]) },
      uBlobC: { value: new Color(colors.auroraBlobs[2]) },
    }),
    [colors],
  );

  useFrame((_state, delta) => {
    if (reducedMotion || !material.current) return;
    material.current.uniforms.uTime.value += delta;
  });

  return (
    <mesh position={[0, 0, -14]}>
      <planeGeometry args={[70, 44]} />
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={AURORA_VERTEX}
        fragmentShader={AURORA_FRAGMENT}
        depthWrite={false}
      />
    </mesh>
  );
}

interface Member {
  position: [number, number, number];
  scale: number;
  color: string;
}

/**
 * A stable value in [0, 1) from an index and a channel.
 *
 * The layout must be the same on every reload, so the swarm derives its
 * positions from this rather than from `Math.random`.
 */
function noise(index: number, channel: number): number {
  const value = Math.sin(index * 127.1 + channel * 311.7) * 43758.5453;
  return value - Math.floor(value);
}

function Swarm() {
  const group = useRef<Group>(null);
  const reducedMotion = useReducedMotion();
  const colors = useSceneColors();

  const members = useMemo<Member[]>(
    () =>
      Array.from({ length: SWARM_COUNT }, (_unused, index) => ({
        position: [
          (noise(index, 0) - 0.5) * SWARM_RADIUS * 2.6,
          (noise(index, 1) - 0.5) * SWARM_RADIUS * 1.5,
          (noise(index, 2) - 0.5) * SWARM_RADIUS,
        ],
        scale: 0.04 + noise(index, 3) * 0.1,
        color: colors.swarm[Math.floor(noise(index, 4) * colors.swarm.length)],
      })),
    [colors],
  );

  useFrame((state, delta) => {
    if (reducedMotion || !group.current) return;
    group.current.rotation.y += delta * 0.04;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.35;
  });

  return (
    <group ref={group}>
      <Instances limit={SWARM_COUNT} range={SWARM_COUNT}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial flatShading roughness={0.35} metalness={0.1} />
        {members.map((member, index) => (
          <Instance
            key={index}
            position={member.position}
            scale={member.scale}
            color={member.color}
          />
        ))}
      </Instances>
    </group>
  );
}

/** The pointer moves the camera. It mutates and allocates nothing. */
function Parallax() {
  const reducedMotion = useReducedMotion();

  useFrame((state, delta) => {
    if (reducedMotion) return;
    CAMERA_TARGET.set(state.pointer.x * 0.9, state.pointer.y * 0.5, 6);
    state.camera.position.lerp(CAMERA_TARGET, MathUtils.clamp(delta * 2.2, 0, 1));
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

/**
 * The hero scene. An aurora backdrop and a field of tinted shapes.
 *
 * Cost: 2 draw calls. The shapes are one instanced mesh, and the group holds
 * the motion, so a frame updates one matrix rather than 250.
 */
export function HeroScene() {
  const colors = useSceneColors();

  return (
    <>
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 5, 6]} intensity={2.4} color={colors.keyLight} />
      <directionalLight position={[-5, -3, 2]} intensity={0.8} color={colors.fillLight} />
      <Aurora />
      <Swarm />
      <Parallax />
    </>
  );
}
