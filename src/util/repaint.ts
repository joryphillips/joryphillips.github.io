/**
 * Return a promise after a full repaint.
 */
export function repaint(): Promise<void> {
  return new Promise<void>(resolve =>
    requestAnimationFrame(()=> requestAnimationFrame(()=> resolve())),
  );
}
