import { useEffect, useState } from 'react';

/**
 * Reports whether the element with this id has left the viewport.
 *
 * The nav reads this to stay hidden over the hero. An observer replaces a
 * scroll listener, which runs on every frame.
 *
 * The element must exist. Without it nothing observes, and the hook reports
 * false for the life of the page.
 */
export function useScrolledPast(id: string): boolean {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPast(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [id]);

  return past;
}
