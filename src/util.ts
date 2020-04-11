import {Project} from '../data/jory';

function scrollToId(e: MouseEvent) {
  e.preventDefault();
  const hash = (e.target as HTMLAnchorElement).hash;
  const scrollTargetEl = document.querySelector(hash) as HTMLElement;
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 0;
  if (scrollTargetEl) {
    const scrollTargetY = scrollTargetEl.offsetTop - headerHeight;
    window.scroll({top: scrollTargetY, behavior: 'smooth'});
    history.pushState(null, null, hash);
  }
}

// modified from Underscore
export function debounce(func: ()=> void, context: unknown, wait = 250) {
  let timeout: number;
  return () => {
    const later = () => {
      timeout = null;
      func.apply(context);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (!timeout) {
      func.apply(context);
    }
  };
}

export function getKeyWords(list: Project[]) {
  const keywords = new Set<string>();
  if (list) {
    for (const item of list) {
      for (const word of item.keywords) {
        keywords.add(word.toLowerCase());
      }
    }
  }
  return keywords;
}

export function kebabCase(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/gi, '-');
}


export function addScrollClickHandlers(selector: string) {
  const links = document.querySelectorAll(selector);
  for (const link of links) {
    link.addEventListener('click', scrollToId, false);
  }
}
