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
 * Call the provided function and applies the provided context after a repaint
 * has finished.
 */
export function callAfterRepaint(
  func: (...args: unknown[])=> void, context: HTMLElement): void {
  requestAnimationFrame(()=> {
    requestAnimationFrame(()=> {
      func.apply(context);
    });
  });
}


/**
 * Wrapper for element.querySelector that guarantees an element gets returned or
 * throws an error.
 */
export function elementSelector(query: string, context: Element): HTMLElement {
  // This is a bit ineffecient as it will search an element tree prior to
  // looking in shadowRoot. Will separate and add a shadow boolean property
  // if performance is ever an issue.
  const el = (
    context.querySelector(query) ||
    context.shadowRoot?.querySelector(query)) as HTMLElement|undefined|null;
  if (el) return el;
  throw new Error(`Could not find ${query} in ${context}`);
}
