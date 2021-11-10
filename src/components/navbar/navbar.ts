import { html } from 'lit';
import { useEffect } from 'haunted';

import {component} from '../../util/haunted_component';
import { addStyles } from '../../util/util';
import {styles} from './styles';

function onNavFocusChange(navFocus: string, context: HTMLElement) {
  const tabs = context.shadowRoot?.querySelectorAll('a');
  if (!tabs) return;
  if (!navFocus) {
    for (const tab of Array.from(tabs)) {
      tab.blur();
    }
    return;
  }
  const tab = Array.from(tabs).find(tab => tab.hash === navFocus);
  tab?.focus();
}

interface Props {
  navFocus: string;
  onNavSelect: ()=> void;
}

function NavBar(this: unknown, {navFocus = '', onNavSelect}: Props) {

  useEffect(()=> {
    onNavFocusChange(navFocus, this as HTMLElement);
  }, [navFocus]);

  addStyles(this, [styles]);

  return html`
    <header class="navy">
      <nav>
        <a href="/#summary" @click=${onNavSelect}>Summary</a>
        <a href="/#visuals" @click=${onNavSelect}>Visuals</a>
        <a href="/#experience" @click=${onNavSelect}>Experience</a>
      </nav>
    </header>
  `;
}

customElements.define('nav-bar', component<HTMLElement & Props>(NavBar));

declare global {
  interface HTMLElementTagNameMap {
    'nav-bar': HTMLElement,
  }
}
