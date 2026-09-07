import { SceneCanvas } from '../three/SceneCanvas';
import { HeroScene } from '../three/scenes/HeroScene';

export default function Hero3D() {
  return (
    <SceneCanvas label="A slow rotating metal torus knot" cameraPosition={[0, 0, 6]}>
      <HeroScene />
    </SceneCanvas>
  );
}
