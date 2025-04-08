/**
 * Returns an all-lowercase string with any spaces replaces with dashes.
 */
export function kebabCase(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/gi, '-');
}
