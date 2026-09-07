import { Suspense, type ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr, Preload } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { cn } from '../design/cn';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useSceneColors } from './hooks/useSceneColors';

const SHOW_PERF = import.meta.env.DEV;

export interface SceneCanvasProps {
  children: ReactNode;
  className?: string;
  /** Camera position in world units. */
  cameraPosition?: [number, number, number];
  cameraFov?: number;
  /** Set false for a scene that must sit on the page background. */
  paintBackground?: boolean;
  /** Text for screen readers. The canvas itself carries no meaning. */
  label: string;
}

/**
 * The single WebGL shell for the whole site.
 *
 * Add a new animation as a component under `src/three/scenes/`.
 * Pass it as a child of this component. Do not create another <Canvas>.
 */
export function SceneCanvas({
  children,
  className,
  cameraPosition = [0, 0, 6],
  cameraFov = 45,
  paintBackground = true,
  label,
}: SceneCanvasProps) {
  const reducedMotion = useReducedMotion();
  const colors = useSceneColors();

  return (
    <div
      className={cn('relative h-full w-full', className)}
      aria-label={label}
      role="img"
    >
      <Canvas
        dpr={[1, 2]}
        frameloop={reducedMotion ? 'demand' : 'always'}
        camera={{ position: cameraPosition, fov: cameraFov, near: 0.1, far: 100 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.setClearAlpha(paintBackground ? 1 : 0);
        }}
      >
        {paintBackground ? (
          <color attach="background" args={[colors.background]} />
        ) : null}
        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
        <AdaptiveDpr pixelated />
        {SHOW_PERF ? <Perf position="bottom-left" /> : null}
      </Canvas>
    </div>
  );
}
