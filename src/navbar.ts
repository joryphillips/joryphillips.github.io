import {html} from 'lit';

import {Selector} from './selectors';

function scrollToId(e: MouseEvent): void {
  e.preventDefault();
  const hash = (e.target as HTMLAnchorElement).hash;
  const scrollTargetEl = document.querySelector(hash) as HTMLElement;
  const header = document.querySelector(Selector.HEADER);
  const headerHeight = header ? header.offsetHeight : 0;
  if (scrollTargetEl) {
    const scrollTargetY = scrollTargetEl.offsetTop - headerHeight;
    window.scroll({top: scrollTargetY, behavior: 'smooth'});
    history.pushState(null, null, hash);
  }
}

export const navBar = html`
  <header class="navy">
    <nav class="container flex-auto">
      <a href="/#summary" @click=${scrollToId} class="button button-transparent">Summary</a>
      <a href="/#visuals" @click=${scrollToId} class="button button-transparent">Visuals</a>
      <a href="/#experience" @click=${scrollToId} class="button button-transparent">Experience</a>
    </nav>
  </header>
`;
