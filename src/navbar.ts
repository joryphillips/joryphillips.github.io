import { html, render } from 'lit';
import haunted, { useEffect } from 'haunted';

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

const styles = html`
  <style>
    :host {
      z-index: 2;
      left: 0;
      right: 0;
      top: 0;
      position: fixed;
      background-color: #f0f0f0;
    }

    nav {
      flex: 1 1 auto;
    }

    nav a {
      padding-top: 1rem;
      padding-bottom: 1rem;
      float: left;
    }

    .container {
      display: block;
      max-width: 40rem;
      margin: 0 auto;
    }

    .navy {
      color: rgba(0, 32, 66, 0.9);
    }

    .border-bottom {
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: rgba(0, 0, 0, .125);
    }

    .button, button {
      font-family: inherit;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      line-height: 1.125rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin: 0;
      height: auto;
      border: 1px solid transparent;
      vertical-align: middle;
      -webkit-appearance: none;
      transition: background-color .15s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }

    .button-transparent {
      position: relative;
      z-index: 2;
      color: inherit;
      background-color: transparent;
      border-radius: 0;
      border: 1px solid transparent;
    }

    .button:focus, button:focus, a:focus {
      background-color: rgb(115 179 221 / 17%);
      outline: 2px solid hsl(211deg 100% 40% / 90%)!important;
    }

    .button:focus, button:focus {
      outline-offset: -2px!important;
    }
  </style>
`;

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

type TemporaryRenderFunction = (result: unknown, container: DocumentFragment | Element)=> void;
const {component} = haunted({render: render as TemporaryRenderFunction});

customElements.define('nav-bar', component<HTMLElement & Props>(NavBar));

declare global {
  interface HTMLElementTagNameMap {
    'nav-bar': HTMLElement,
  }
}
