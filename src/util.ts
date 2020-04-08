import {Project, AwesomeWebPageData} from '../data/interfaces';

export function scrollToId(e: MouseEvent) {
  e.preventDefault();
  const hash = (e.target as HTMLAnchorElement).hash;
  const scrollTargetEl = document.querySelector(hash) as HTMLElement;
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 0;
  if (scrollTargetEl) {
    const scrollTargetY = scrollTargetEl.offsetTop - headerHeight;
    window.scroll({top: scrollTargetY, behavior: 'smooth'});
    history.pushState(null, null, hash)
  }
}

export async function loadData(source: string): Promise<AwesomeWebPageData|undefined> {
  try {
    const request = new Request(source);
    const response = await fetch(request);
    return response.json();
  } catch (error) {
    console.error('WHOOPSIE DAISY. Error loading data', error);
  }
}

function imageLoadedPromise(project: HTMLElement, image: HTMLImageElement) {
  // resolve the promise when the image loads/errors
  return new Promise<HTMLElement>(resolve => {
    image.addEventListener('load', ()=> resolve(project), false);
    image.addEventListener('error', ()=> resolve(project), false);
  });
}

export function getImageLoadedPromiseList(projects: HTMLElement[], selector = 'img') {
  return projects.map((proj) => {
    const image = proj.querySelector(selector) as HTMLImageElement;
    return imageLoadedPromise(proj, image);
  });
}

function onVisibilityMutation(mutations: MutationRecord[], timeout = 200) {
  requestAnimationFrame(()=>{
    for (const mutation of mutations) {
      const mutationTarget = mutation.target as HTMLElement;
      if (mutation.oldValue.includes('display-none') && !mutationTarget.classList.contains('display-none')) {
        // display should now be block; assume we need to run fade in animation
        mutationTarget.classList.add('visible');
      } else if (mutation.oldValue.includes('visible') && !mutationTarget.classList.contains('visible')) {
        // use timeout to ensure we have faded out & can now set display to none
        setTimeout(()=>{
          mutationTarget.classList.add('display-none');
        }, timeout);
      }
    }
  });
}

export function fadeOut(elements: HTMLElement[], timeout = 200) {
  const visibilityMutation = (mutations: MutationRecord[]) => onVisibilityMutation(mutations, timeout);
  for (const el of elements) {
    addMutationObserver(el, visibilityMutation);
    el.classList.remove('visible');
  }
}

export function fadeIn(elements: HTMLElement[], timeout = 200) {
  const visibilityMutation = (mutations: MutationRecord[]) => onVisibilityMutation(mutations, timeout);
  for (const el of elements) {
    addMutationObserver(el, visibilityMutation);
    el.classList.remove('display-none');
  }
}

// modified from Underscore
export function debounce(func: ()=>void, context: unknown, wait = 250) {
  let timeout: number;
  return () => {
    const later = () => {
      timeout = null;
      func.apply(context, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (!timeout) {
      func.apply(context, arguments);
    };
  };
};

export function getKeyWords(list: Project[]) {
  const keywords = new Set<string>();
  if (list) {
    for (const item of list) {
      for (const word of item.keywords) {
        keywords.add(word.toLowerCase());
      }
    };
  }
  return keywords;
}

export function kebabCase(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/gi, '-');
}

function addMutationObserver(element: HTMLElement, callback: MutationCallback, config = {attributes: true, attributeOldValue: true}) {
  if (element && callback && config) {
    const mutationObserver = new MutationObserver(callback);
    mutationObserver.observe(element, config);
  } else {
    console.error('invalid arguments used', arguments);
  }
}

export function addScrollClickHandlers(selector: string) {
  const links = document.querySelectorAll(selector);
  for (const link of links) {
    link.addEventListener('click', scrollToId, false);
  }
}
