export function scrollToId(e) {
    e.preventDefault();
    const hash = e.target.hash;
    const scrollTargetEl = document.querySelector(hash);
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;
    if (scrollTargetEl) {
        const scrollTargetY = scrollTargetEl.offsetTop - headerHeight;
        window.scroll({ top: scrollTargetY, behavior: 'smooth' });
        history.pushState(null, null, hash);
    }
}
export async function loadData(source) {
    try {
        const request = new Request(source);
        const response = await fetch(request);
        return response.json();
    }
    catch (error) {
        console.error('WHOOPSIE DAISY. Error loading data', error);
    }
}
function imageLoadedPromise(project, image) {
    return new Promise(resolve => {
        image.addEventListener('load', () => resolve(project), false);
        image.addEventListener('error', () => resolve(project), false);
    });
}
export function getImageLoadedPromiseList(projects, selector = 'img') {
    return projects.map((proj) => {
        const image = proj.querySelector(selector);
        return imageLoadedPromise(proj, image);
    });
}
function onVisibilityMutation(mutations, timeout = 200) {
    requestAnimationFrame(() => {
        for (const mutation of mutations) {
            const mutationTarget = mutation.target;
            if (mutation.oldValue.includes('display-none') && !mutationTarget.classList.contains('display-none')) {
                mutationTarget.classList.add('visible');
            }
            else if (mutation.oldValue.includes('visible') && !mutationTarget.classList.contains('visible')) {
                setTimeout(() => {
                    mutationTarget.classList.add('display-none');
                }, timeout);
            }
        }
    });
}
export function fadeOut(elements, timeout = 200) {
    const visibilityMutation = (mutations) => onVisibilityMutation(mutations, timeout);
    for (const el of elements) {
        addMutationObserver(el, visibilityMutation);
        el.classList.remove('visible');
    }
}
export function fadeIn(elements, timeout = 200) {
    const visibilityMutation = (mutations) => onVisibilityMutation(mutations, timeout);
    for (const el of elements) {
        addMutationObserver(el, visibilityMutation);
        el.classList.remove('display-none');
    }
}
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
        }
        ;
    };
}
;
export function getKeyWords(list) {
    const keywords = new Set();
    if (list) {
        for (const item of list) {
            for (const word of item.keywords) {
                keywords.add(word.toLowerCase());
            }
        }
        ;
    }
    return keywords;
}
export function kebabCase(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/gi, '-');
}
function addMutationObserver(element, callback, config = { attributes: true, attributeOldValue: true }) {
    if (element && callback && config) {
        const mutationObserver = new MutationObserver(callback);
        mutationObserver.observe(element, config);
    }
    else {
        console.error('invalid arguments used', arguments);
    }
}
export function addScrollClickHandlers(selector) {
    const links = document.querySelectorAll(selector);
    for (const link of links) {
        link.addEventListener('click', scrollToId, false);
    }
}
//# sourceMappingURL=util.js.map