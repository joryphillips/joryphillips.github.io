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
