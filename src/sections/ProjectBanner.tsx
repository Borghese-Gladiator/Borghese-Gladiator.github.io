import type { ProjectImage } from '../content/projects';

/** The box that holds a banner. The ratio is fixed, so no card shifts. */
const BOX =
  'aspect-[16/9] w-full overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-background)]';

/**
 * The stand-in for a project that has no picture yet.
 *
 * It holds the same space as a real banner, so a row of cards keeps one
 * height. It carries no meaning, so a screen reader skips it.
 *
 * The shapes do not pulse. A pulse says that something is on the way, and
 * nothing is on the way until somebody adds the file.
 */
function BannerSkeleton() {
  return (
    <div className={BOX} aria-hidden="true">
      <div className="flex h-full w-full flex-col justify-center gap-3 p-6 opacity-60">
        <div className="h-3 w-2/5 rounded-full bg-[var(--color-border)]" />
        <div className="h-3 w-4/5 rounded-full bg-[var(--color-border)]" />
        <div className="h-3 w-3/5 rounded-full bg-[var(--color-border)]" />
      </div>
    </div>
  );
}

/**
 * The picture at the top of a project card.
 *
 * The image is lazy, because the projects section sits below the fold and no
 * banner should compete with the first paint.
 *
 * The `alt` text names the subject for the case where the file fails to load.
 */
export function ProjectBanner({ image }: { image?: ProjectImage }) {
  if (!image) return <BannerSkeleton />;

  return (
    <div className={BOX}>
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}
