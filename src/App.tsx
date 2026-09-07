import { lazy, Suspense } from 'react';
import { Button, Card, Container, Section, Text } from './design/components';

/** Keep the WebGL bundle out of the first chunk. */
const Hero3D = lazy(() => import('./sections/Hero3D'));

export default function App() {
  return (
    <main>
      <section className="relative h-[80vh] min-h-[520px] w-full">
        <Suspense fallback={<div className="h-full w-full bg-[var(--color-background)]" />}>
          <Hero3D />
        </Suspense>

        <Container className="pointer-events-none absolute inset-0 flex flex-col justify-center">
          <h1 className="max-w-xl text-5xl font-semibold tracking-tight">
            Timothy Shee
          </h1>
          <Text muted className="mt-4 max-w-md">
            Software engineer. This page is the shell. Replace this copy.
          </Text>
          <div className="pointer-events-auto mt-8 flex gap-3">
            <Button>View work</Button>
            <Button variant="secondary">Contact</Button>
          </div>
        </Container>
      </section>

      <Section title="Work">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <h3 className="text-lg font-medium">Project one</h3>
            <Text muted className="mt-2">
              Replace this card with a real project.
            </Text>
          </Card>
          <Card>
            <h3 className="text-lg font-medium">Project two</h3>
            <Text muted className="mt-2">
              Replace this card with a real project.
            </Text>
          </Card>
        </div>
      </Section>
    </main>
  );
}
