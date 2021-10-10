import { html } from 'lit';
import { useEffect } from 'haunted';

import {component} from '../../util/haunted_component';
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
}

function NavBar(this: unknown, {navFocus = ''}: Props) {

  useEffect(()=> {
    onNavFocusChange(navFocus, this as HTMLElement);
  }, [navFocus]);

  return html`
    ${styles}

    <header class="navy border-bottom">
      <nav class="container">
        <a href="#summary" class="button button-transparent">Summary</a>
        <a href="#visuals" class="button button-transparent">Visuals</a>
        <a href="#experience" class="button button-transparent">Experience</a>
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
