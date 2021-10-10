import { html} from 'lit';
import { useState, useEffect } from 'haunted';

import {component} from '../../util/haunted_component';

import { styles } from './styles';
import { router } from '../../util/util';
import { jumbotron, summary, jobs, footer } from './components';
import '../navbar/navbar';
import '../project_list/project_list';

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

    ${!selectedProject ?
      html`
        ${jumbotron}
        ${summary}
        <project-list id="visuals"></project-list>
        ${jobs}`
      :
      // TODO implement project-detail
      html`<project-detail></project-detail>`
    }

    ${footer}
  `;
}

customElements.define('app-component', component<HTMLElement>(App));

declare global {
  interface HTMLElementTagNameMap {
    'app-component': HTMLElement,
  }
}
