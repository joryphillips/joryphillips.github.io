import { html} from 'lit';
import { useState, useEffect } from 'haunted';

import { component } from '../../util/haunted_component';

import { styles } from './styles';
import { addIntersectionObserver, kebabCase, router, scrollToId } from '../../util/util';
import { jumbotron, summary, jobs, footer } from './components';
import { PORTFOLIO } from '../../../data/jory';
import '../navbar/navbar';
import '../project_list/project_list';
import '../project_detail/project_detail';


function isElement(el: Element|undefined|null): el is HTMLElement {
  return el instanceof Element;
}

function App(this: unknown) {
  const [navFocus, setNavFocus] = useState('');
  const [selectedProjectName, setSelectedProjectName] = useState('');
  const [verticalScrollPosition, setVerticalScrollPosition] = useState<number | undefined>(undefined);

  useEffect(()=> {
    router({
      setNavFocus,
      setProject: handleSetProject,
    });

    const sections = ['#summary', '#visuals', '#experience'].map(sel => {
      return (this as Element).shadowRoot?.querySelector(sel);
    }).filter(isElement);

    for (const element of sections) {
      addIntersectionObserver({
        element,
        onIntersection,
        unobserve: false,
        options: {threshold: 0.25},
      });
    }

  }, []);

  useEffect(()=> {
    if (navFocus && !selectedProjectName && !verticalScrollPosition) {
      scrollToId((this as Element).shadowRoot!, navFocus);
    }
  }, [navFocus, selectedProjectName, verticalScrollPosition]);

  useEffect(()=> {
    if (!selectedProjectName && verticalScrollPosition != null) {
      scrollTo({top: verticalScrollPosition});
    }
  }, [verticalScrollPosition, selectedProjectName]);

  const handleSetProject = (kebabedName: string)=> {
    if (kebabedName) {
      setVerticalScrollPosition(window.scrollY);
      const title = PORTFOLIO.find(proj => kebabCase(proj.title) === kebabedName)?.title;
      document.title = `Jory's ${title} Project`;
    } else {
      document.title = 'Jory Phillips Portfolio and Resume';
    }
    setSelectedProjectName(kebabedName);
  };

  const onNavSelect = ()=> {
    setVerticalScrollPosition(undefined);
  };

  const onIntersection = (el: Element)=> {
    history.replaceState(null, '', `#${el.id}`);
    setNavFocus(`#${el.id}`);
    setVerticalScrollPosition(window.scrollY);
  };

  return html`
    ${styles}

    <nav-bar .navFocus=${navFocus} .onNavSelect=${onNavSelect}></nav-bar>
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
