import { adoptStyles } from 'lit';
import { CSSResultOrNative } from '@lit/reactive-element';

export function addStyles(
  element: HTMLElement|unknown,
  styles: CSSResultOrNative[],
): void {
  if (!(element instanceof HTMLElement)) return;

  if (element.shadowRoot instanceof ShadowRoot) {
    adoptStyles(element.shadowRoot, styles);
  }
}
