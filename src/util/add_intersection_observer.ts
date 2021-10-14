interface IntersectionParams {
  element: Element;
  onIntersection: (elm: Element)=> void;
  unobserve?: boolean;
  options?: IntersectionObserverInit;
}


/**
 * Add an intersectionObserver to the provided element and exectute the
 * provided function on intersection.
 */
export function addIntersectionObserver({
  element,
  onIntersection,
  unobserve = true,
  options,
}: IntersectionParams): void {
  const observer = new IntersectionObserver((entries)=> {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        onIntersection(entry.target);
        if (unobserve) {
          observer.unobserve(entry.target);
        }
      }
    }
  }, options);

  observer.observe(element);
}
