/**
 * Used to help keep track of things used in query selectors, which are
 * notoriously easy to break when making CSS changes.
 */
export enum Selector {
  HEADER = 'nav-bar',
  PROJECT_IMAGE = '.image-container img',
  SEARCH_INPUT = 'input[type="search"]',
}
