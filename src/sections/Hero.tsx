import { lazy, Suspense } from 'react';
import { buttonClass, Container, Text } from '../design/components';
import { profile } from '../content/profile';
import { useTypewriter } from '../hooks/useTypewriter';

/** Keep the WebGL bundle out of the first chunk. */
const Hero3D = lazy(() => import('./Hero3D'));

/** The canvas ends on a straight edge. Fade it into the page. */
const FADE = 'linear-gradient(to bottom, transparent 60%, var(--color-background))';

/**
 * The scene sits behind the copy at every width.
 *
 * The copy carries no scrim. The aurora holds the same value as the page
 * background, so the text reads against it, and a wash would hide the swarm
 * that the scene exists to show.
 */
export function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="home" className="relative w-full">
      <div className="absolute inset-0">
        <Suspense
          fallback={<div className="h-full w-full bg-[var(--color-background)]" />}
        >
          <Hero3D />
        </Suspense>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundImage: FADE }}
      />

      <Container className="relative flex min-h-[520px] flex-col justify-center py-16 sm:min-h-[560px] sm:py-24">
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 h-9 text-2xl font-medium text-[var(--color-accent)]">
          {role}
          <span aria-hidden="true" className="ml-0.5 font-light">
            |
          </span>
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noreferrer noopener"
            className={buttonClass()}
          >
            View resume
          </a>
          <a href="#contact" className={buttonClass({ variant: 'secondary' })}>
            Get in touch
          </a>
        </div>

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
