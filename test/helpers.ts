import { repaint } from '../src/util/util';


async function dispatchAndRepaint(context: Element, event: Event) {
  context.dispatchEvent(event);
  await repaint();
}

/**
 * Dispatch provided event(s) from the provided context. Awaits a repaint
 * (requestAnimationFrame) after each event.
 */
export async function dispatchEvents(
  context: Element, events: Event[]): Promise<void> {
  for (const event of events) {
    await dispatchAndRepaint(context, event);
  }
}
