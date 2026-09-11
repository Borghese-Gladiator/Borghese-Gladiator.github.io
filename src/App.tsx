import { ContactRail } from './components/ContactRail';
import { MobileMenu } from './components/MobileMenu';
import { Nav } from './components/Nav';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-20 focus:rounded-md focus:bg-[var(--color-surface)] focus:px-4 focus:py-2"
      >
        Skip to the content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Contact />
      <ContactRail />
      <MobileMenu />
    </>
  );
}
