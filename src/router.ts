import { installRouter } from 'pwa-helpers/router';
import { repaint, scrollToId } from './util';


type SetNavFunc = (hash: string)=> void;

interface HandleNavArg {
  location: Location;
  context: Element|ShadowRoot|null;
  setNavFocus: SetNavFunc;
}

let firstPageLoad = true;

function handleNavigation({location, context, setNavFocus}: HandleNavArg) {
  setNavFocus(location.hash);
  if (!context) return;

  const hash = location.hash || '#home';
  if (!firstPageLoad) {
    scrollToId(context, hash);
    return;
  }

  // The first time the page loads, go immediately to the requested hash with no
  // fancy smooth scrolling.
  window.addEventListener('load', async ()=> {
    await repaint();
    scrollToId(context, hash, 'instant');
    firstPageLoad = false;
  });
}

interface RouterArg {
  context: Element|ShadowRoot|null;
  setNavFocus: SetNavFunc;
}

export function router({context, setNavFocus}: RouterArg): void {
  installRouter((location) => handleNavigation({
    location, context, setNavFocus,
  }));
}
