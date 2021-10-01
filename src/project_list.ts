import {html, render} from 'lit';
import {repeat} from 'lit/directives/repeat.js';
import haunted, {useState} from 'haunted';

import './search_input';
import './project_card';
import * as util from './util';
import {Project, PORTFOLIO} from '../data/jory';

function listHasSearchValues(searchValue: string, listString: string) {
  let matches = false;
  const searchList = searchValue.toLowerCase().split(' ');
  for (let i = 0; i < searchList.length; i++) {
    const searchTerm = searchList[i].trim();
    matches = listString.toLowerCase().includes(searchTerm);
  }
  return matches;
}

function shouldShowProject(searchValue: string, project: Project) {
  const {keywords, title} = project;
  const stringToSearch = keywords.join(' ') + ' ' + title.toLowerCase();
  return listHasSearchValues(searchValue, stringToSearch);
}

const styles = html`
  <style>
    section {
      background-color: #ddd;
      padding-top: 4rem;
      padding-bottom: 4rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    @media (max-width: 400px) {
      section {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
    .visuals-header {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      margin-bottom: 2rem;
    }
    h1 {
      font-size: 2rem;
      flex: 1 1 auto;
      min-width: 0;
      min-height: 0;
      margin: 0 1rem .5rem 0;
      white-space: nowrap;
    }
    .project-holder {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
      grid-auto-rows: minmax(300px, auto);
    }
    @media screen and (max-width: 400px) {
      .project-holder {
        grid-auto-rows: minmax(150px, auto);
      }
    }
    .border-bottom {
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: rgba(0, 0, 0, .125);
    }
    .border-top {
      border-top-style: solid;
      border-top-width: 1px;
      border-top-color: rgba(0, 0, 0, .125);
    }
    search-box[hidden] {
      visibility: hidden;
    }
    project-card[hidden] {
      visibility: hidden;
    }
  </style>
`;


export function ProjectList(this: unknown) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCard, setSelectedCard] = useState<string|null>(null);
  const [verticalScrollPosition, setVerticalScrollPosition] = useState<number | undefined>(undefined);

  const handleSearchInput = (value: string)=> {
    setSearchValue(value);
  };

  const handleInfoClick = (project: Project)=> {
    setVerticalScrollPosition(window.scrollY);
    const sectionEl = (this as HTMLElement).querySelector('section') as HTMLElement|null;
    if (sectionEl) {
      scrollTo({top: sectionEl.offsetTop});
    }
    setSelectedCard(util.kebabCase(project.title));
  };

  const handleInfoCloseClick = ()=> {
    setSelectedCard(null);
    util.callAfterRepaint(()=> scrollTo({top: verticalScrollPosition}), this as HTMLElement);
    setVerticalScrollPosition(undefined);
  };

  const cardSelected = (project: Project)=> {
    return util.kebabCase(project.title) === selectedCard;
  };

  const hideCard = (project: Project)=> {
    return selectedCard != null && !cardSelected(project);
  };

  const projects = PORTFOLIO
    .filter(project => shouldShowProject(searchValue, project));

  return html`
    ${styles}

    <section class="border-bottom border-top">
      <div class="visuals-header">
        <h1>Visuals & Projects</h1>
        <search-input
          ?hidden=${!!selectedCard}
          .keyWords=${util.getKeyWords(PORTFOLIO)}
          .handleSearchInput=${handleSearchInput}
        ></search-input>
      </div>

      <div class="project-holder">
        ${repeat(projects,
            (project) => util.kebabCase(project.title),
            ((project) => html`
              <project-card
                ?hidden=${hideCard(project)}
                id=${util.kebabCase(project.title)}
                ?selected=${cardSelected(project)}
                .project=${project}
                .handleInfoClick=${handleInfoClick}
                .handleInfoCloseClick=${handleInfoCloseClick}
              ></project-card>
            `))}
      </div>
    </section>
  `;
}

type TemporaryRenderFunction = (result: unknown, container: DocumentFragment | Element)=> void;
const {component} = haunted({render: render as TemporaryRenderFunction});

customElements.define('project-list', component(ProjectList));

declare global {
  interface HTMLElementTagNameMap {
    'project-list': HTMLElement,
  }
}
