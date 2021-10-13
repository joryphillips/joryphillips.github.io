import { html} from 'lit';
import { useState, useEffect, useLayoutEffect } from 'haunted';

import { component } from '../../util/haunted_component';

import { styles } from './styles';
import { kebabCase, router, repaint, scrollToId } from '../../util/util';
import { jumbotron, summary, jobs, footer } from './components';
import '../navbar/navbar';
import '../project_list/project_list';
import '../project_detail/project_detail';

function App(this: unknown) {
  const [navFocus, setNavFocus] = useState('');
  const [selectedProjectName, setSelectedProjectName] = useState('');
  const [verticalScrollPosition, setVerticalScrollPosition] = useState<number | undefined>(undefined);

  useEffect(()=> {
    router({
      setNavFocus,
      setProject: handleSetProject,
    });
  }, []);

  // useEffect for scrollTo in combo with useLayoutEffect for scrollToId will
  // make it so that when returning to the main page from project-detail, the
  // scroll position will be resumed as opposed to scrolling to nav location.
  // (useEffect will run after useLayoutEffect)
  useLayoutEffect(()=> {
    if (navFocus && !selectedProjectName) {
      scrollToId((this as Element).shadowRoot!, navFocus);
    }
  }, [navFocus, selectedProjectName]);

  useEffect(()=> {
    if (!selectedProjectName && verticalScrollPosition) {
      scrollTo({top: verticalScrollPosition});
      setVerticalScrollPosition(undefined);
    }
  }, [verticalScrollPosition, selectedProjectName]);

  const handleSetProject = (name: string)=> {
    if (name) {
      setVerticalScrollPosition(window.scrollY);
    }
    setSelectedProjectName(kebabCase(name));
  };

  return html`
    ${styles}

    <nav-bar .navFocus=${navFocus}></nav-bar>
      <main ?hidden=${!!selectedProjectName}>
        ${jumbotron}
        ${summary}
        <project-list
          id="visuals"
          .setSelectedProjectName=${handleSetProject}
        ></project-list>
        ${jobs}
      </main>
      <project-detail
        ?hidden=${!selectedProjectName}
        .projectName=${selectedProjectName}
      ></project-detail>

    ${footer}
  `;
}

customElements.define('app-component', component<HTMLElement>(App));

declare global {
  interface HTMLElementTagNameMap {
    'app-component': HTMLElement,
  }
}
