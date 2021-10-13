import { Selector } from './selectors';

/**
 * 'instant' is not in lib.dom.d.ts for ScrollBehavior but is in MDN docs and it
 *  works.
 */
type ActualScrollBehavior = 'instant'|ScrollBehavior;

/**
 * Scrolls the window to the provided selector in the given context. Context can
 * be an Element or ShadowRoot, allowing scrolling to subelement of a web
 * component. Subtracts the offsetHeight of the page header, if any.
 */
export function scrollToId(
  context: Element|ShadowRoot,
  selector: string,
  behavior: ActualScrollBehavior = 'instant'): void {
  if (!selector) return;
  const scrollTargetEl = context.querySelector(selector) as HTMLElement;
  const header = context.querySelector(Selector.HEADER);
  const headerHeight = header ? header.offsetHeight : 0;
  if (scrollTargetEl) {
    const scrollTargetY = scrollTargetEl.offsetTop - headerHeight;
    window.scroll({
      top: scrollTargetY,
      behavior: behavior as ScrollBehavior,
    });
  }
}
