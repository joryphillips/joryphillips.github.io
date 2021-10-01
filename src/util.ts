import {Project} from '../data/jory';

export function getKeyWords(list: Project[]): Set<string> {
  const keywords = new Set<string>();
  if (list) {
    for (const item of list) {
      for (const word of item.keywords) {
        keywords.add(word.toLowerCase());
      }
    }
  }
  return keywords;
}

export function kebabCase(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/gi, '-');
}

/**
 * Add an intersectionObserver to the provided element and exectute the
 * provided function on intersection.
 */
export function addIntersectionObserver(
  el: Element,
  onIntersection: (elm: Element)=> void,
): void {
  const lazyImageObserver = new IntersectionObserver((entries)=> {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const element = entry.target;
        onIntersection(element);
        lazyImageObserver.unobserve(element);
      }
    }
  });

  lazyImageObserver.observe(el);
}

/**
 * Return a promise after a full repaint.
 */
export function repaint(): Promise<void> {
  return new Promise<void>(resolve =>
    requestAnimationFrame(()=> requestAnimationFrame(()=> resolve())),
  );
}
