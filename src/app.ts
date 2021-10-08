import { html, render } from 'lit';
import haunted, { useState, useEffect } from 'haunted';

import './navbar';
import './project_list';
import { jumbotron } from './jumbotron';
import { summary } from './summary';
import { jobs } from './jobs';
import { footer } from './footer';
import { styles } from './app_styles';
import { router } from './router';

const mainView = html`
  ${jumbotron}
  ${summary}
  <project-list id="visuals"></project-list>
  ${jobs}
`;

function App(this: unknown) {
  const [navFocus, setNavFocus] = useState('');
  const [selectedProject, setSelectedProject] = useState('');

  useEffect(()=> {
    router({
      context: (this as Element).shadowRoot,
      setNavFocus,
    });
  }, []);

  return html`
    ${styles}

    <nav-bar .navFocus=${navFocus}></nav-bar>

    ${selectedProject ?
      // TODO implement project-detail
      html`<project-detail></project-detail>`
      :
      mainView
    }

    ${footer}
  `;
}

type TemporaryRenderFunction = (result: unknown, container: DocumentFragment | Element)=> void;
const {component} = haunted({render: render as TemporaryRenderFunction});

customElements.define('app-component', component<HTMLElement>(App));

declare global {
  interface HTMLElementTagNameMap {
    'app-component': HTMLElement,
  }
}
