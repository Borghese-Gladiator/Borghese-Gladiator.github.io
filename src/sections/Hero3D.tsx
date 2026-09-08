import { SceneCanvas } from '../three/SceneCanvas';
import { HeroScene } from '../three/scenes/HeroScene';

export default function Hero3D() {
  return (
    <SceneCanvas
      label="A field of small colored shapes drifting over a slow moving color field"
      cameraPosition={[0, 0, 6]}
    >
      <HeroScene />
    </SceneCanvas>
  );
}
