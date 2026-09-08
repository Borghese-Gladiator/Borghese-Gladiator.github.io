import { lazy, Suspense } from 'react';
import { buttonClass, Container, Text } from '../design/components';
import { profile } from '../content/profile';
import { statusText } from '../content/about';
import { useTypewriter } from '../hooks/useTypewriter';
import { useMediaQuery } from '../hooks/useMediaQuery';

/** Keep the WebGL bundle out of the first chunk. */
const Hero3D = lazy(() => import('./Hero3D'));

/**
 * Keeps the hero copy readable where the 3D sits behind it.
 * The wide layout only.
 */
const SCRIM =
  'linear-gradient(to right, var(--color-background), color-mix(in srgb, var(--color-background) 70%, transparent) 45%, transparent 80%)';

/** The canvas ends on a straight edge. Fade it into the page. */
const FADE = 'linear-gradient(to bottom, transparent 60%, var(--color-background))';

function Scene() {
  return (
    <Suspense fallback={<div className="h-full w-full bg-[var(--color-background)]" />}>
      <Hero3D />
    </Suspense>
  );
}

/**
 * A phone gets the scene in its own box under the copy. A wide screen gets it
 * behind the copy. Only one canvas mounts, because two cost two WebGL
 * contexts.
 */
export function Hero() {
  const role = useTypewriter(profile.roles);
  const wide = useMediaQuery('(min-width: 40rem)');

  return (
    <section id="home" className="relative w-full">
      {wide ? (
        <>
          <div className="absolute inset-0">
            <Scene />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ backgroundImage: `${FADE}, ${SCRIM}` }}
          />
        </>
      ) : null}

      <Container className="relative flex flex-col py-16 sm:min-h-[560px] sm:justify-center sm:py-24">
        <p className="text-sm tracking-widest text-[var(--color-text-muted)] uppercase">
          {statusText}
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 h-9 text-2xl font-medium text-[var(--color-accent)]">
          {role}
          <span aria-hidden="true" className="ml-0.5 font-light">
            |
          </span>
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className={buttonClass()}>
            View work
          </a>
          <a href="#contact" className={buttonClass({ variant: 'secondary' })}>
            Get in touch
          </a>
        </div>

        {wide ? null : (
          <div className="mt-12 h-[280px] w-full overflow-hidden rounded-lg">
            <Scene />
          </div>
        )}

        <blockquote className="mt-12 max-w-md border-l-2 border-[var(--color-border)] pl-4 sm:mt-16">
          <Text muted>{profile.quote.text}</Text>
          <cite className="mt-1 block text-sm text-[var(--color-text-muted)] not-italic">
            {profile.quote.author}
          </cite>
        </blockquote>
      </Container>
    </section>
  );
}
