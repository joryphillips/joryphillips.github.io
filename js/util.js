export function scrollToId(e) {
  e.preventDefault();
  const hash = e.target.hash;
  const scrollTargetEl = document.querySelector(hash);
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 0;
  if (scrollTargetEl) {
    const scrollTargetY = scrollTargetEl.offsetTop - headerHeight;
    scrollToY(scrollTargetY, 2250, 'easeInOutQuint');
    history.pushState(null, null, hash)
  }
}

// my favorite smooth scroll technique, orig. found at
// http://stackoverflow.com/questions/8917921/cross-browser-javascript-not-jquery-scroll-to-top-animation
function scrollToY(scrollTargetY = 0, speed = 2000, easing = 'easeOutSine') {
  // scrollTargetY: the target scrollY property of the window
  // speed: time in pixels per second
  // easing: easing equation to use
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  let currentTime = 0;

  // min time .1, max time .8 seconds
  const time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

  // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
  const easingEquations = {
    easeOutSine: (pos) => {
      return Math.sin(pos * (Math.PI / 2));
    },
    easeInOutSine: (pos) => {
      return (-0.5 * (Math.cos(Math.PI * pos) - 1));
    },
    easeInOutQuint: (pos) => {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5);
      }
      return 0.5 * (Math.pow((pos - 2), 5) + 2);
    }
  };

  // add animation loop
  function tick() {
    currentTime += 1 / 60;
    const p = currentTime / time;
    const t = easingEquations[easing](p);
    if (p < 1) {
      requestAnimationFrame(tick);
      window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
    } else {
      window.scrollTo(0, scrollTargetY);
    }
  }
  // call it once to get started
  tick();
}

export async function loadData(source) {
  if (source) {
    try {
      const request = new Request(source);
      const response = await fetch(request);
      return response.json();
    } catch (error) {
      console.error('WHOOPSIE DAISY. Error loading data', error);
    }
  }
  return;
}

function imageLoadedPromise(proj, image) {
  // resolve the promise when the image loads/errors
  return new Promise(resolve => {
    image.addEventListener('load', resolve(proj), false);
    image.addEventListener('error', resolve(proj), false);
  });
}

export function getImageLoadedPromiseList(projects, selector = 'img') {
  return Array.from(projects).map((proj) => {
    const image = proj.querySelector(selector);
    return imageLoadedPromise(proj, image);
  });
}

function onVisibilityMutation(mutations, timeout = 200) {
  requestAnimationFrame(()=>{
    for (const mutation of mutations) {  
      if (mutation.oldValue.includes('display-none') && !mutation.target.classList.contains('display-none')) {
        // display should now be block; assume we need to run fade in animation
        mutation.target.classList.add('visible');
      } else if (mutation.oldValue.includes('visible')&& !mutation.target.classList.contains('visible')) {
        // use timeout to ensure we have faded out & can now set display to none
        setTimeout(()=>{
          mutation.target.classList.add('display-none');
        }, timeout);
      }
    }
  });
}

export function fadeOut(elements, timeout = 200) {
  const visibilityMutation = (mutation) => onVisibilityMutation(mutation, timeout);
  for (const el of elements) {
    addMutationObserver(el, visibilityMutation);
    el.classList.remove('visible');
  }
}

export function fadeIn(elements, timeout = 200) {
  const visibilityMutation = (mutation) => onVisibilityMutation(mutation, timeout);
  for (const el of elements) {
    addMutationObserver(el, visibilityMutation);
    el.classList.remove('display-none');
  }
}

// modified from Underscore
export function debounce(func, context, wait = 250) {
  let timeout;
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

export function isCheaplyEqual(list1, list2) {
  return JSON.stringify(list1) === JSON.stringify(list2);
}

export function getKeyWords(list, key) {
  const keywords = new Set();
  if (list) {
    for (const item of list) {
      for (const word of item[key]) {
        keywords.add(word.toLowerCase());
      }
    };
  }
  return keywords;
}

export function kebabCase(string) {
  return string.toLowerCase().replace(/[^a-z0-9]+/gi, '-');
}

export function addMutationObserver(element, callback, config = {attributes: true, attributeOldValue: true}) {
  if (element && callback && config) {
    const mutationObserver = new MutationObserver(callback);
    mutationObserver.observe(element, config);
  } else {
    console.error('invalid arguments used', arguments);
  }
}