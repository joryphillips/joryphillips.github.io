import {CLOCK_SVG_HTML} from './clock_svg';
import {elementSelector} from './util';

function rotateHand(element: Element, degree: number): void {
  element.setAttribute('transform', `rotate(${degree} 1504.5 593.2)`);
}

const ONE_SEC = 1000;

export function addClockPrototype(image: HTMLImageElement|undefined, parentEl: Element): void {
  if (!image) return;
  const fragment = document.createRange().createContextualFragment(CLOCK_SVG_HTML);
  image.replaceWith(fragment);

  const clockWork = ()=> {
    const date = new Date();
    const min = elementSelector('#min', parentEl);
    const hour = elementSelector('#hour', parentEl);

    rotateHand(min, 6 * date.getMinutes());
    rotateHand(hour, 30 * (date.getHours() % 12) + date.getMinutes() / 2);
  };

  clockWork();
  setInterval(clockWork, ONE_SEC);
}

