import { adoptStyles, CSSResultOrNative } from 'lit';

/**
 * Applies the given styles to a shadowRoot of the provided element using Lit's
 * adoptStyles function.
 */
export function addStyles(
  element: HTMLElement | unknown,
  styles: CSSResultOrNative[],
): void {
  if (!(element instanceof HTMLElement)) return;

  if (element.shadowRoot instanceof ShadowRoot) {
    adoptStyles(element.shadowRoot, styles);
  }
}
