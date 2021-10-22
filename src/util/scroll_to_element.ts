/**
 * Scrolls the window to the provided selector in the given context. Context can
 * be an Element or ShadowRoot, allowing scrolling to subelement of a web
 * component.
 */
export function scrollToElement(
  context: Element|ShadowRoot,
  selector: string): void {
  if (!selector) return;
  const scrollTargetEl = context.querySelector(selector) as HTMLElement;
  scrollTargetEl.scrollIntoView();
}
