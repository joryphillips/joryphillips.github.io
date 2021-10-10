import {html} from 'lit';
import {repeat} from 'lit/directives/repeat.js';
import {useState} from 'haunted';

import {component} from '../../util/haunted_component';

import '../search_input/search_input';
import '../project_card/project_card';
import * as util from '../../util/util';
import {Project, PORTFOLIO} from '../../../data/jory';
import { styles } from './styles';

/**
 * Given a string, returns true if members of the search string are present. Not
 * a fuzzy search: all searchValues must be present to succeed.
 */
export function listHasSearchValues(searchValue: string, listString: string): boolean {
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

function ProjectList(this: unknown) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCard, setSelectedCard] = useState<string|null>(null);
  const [verticalScrollPosition, setVerticalScrollPosition] = useState<number | undefined>(undefined);

  const handleSearchInput = (value: string)=> {
    setSearchValue(value);
  };

  const handleInfoClick = (project: Project)=> {
    setVerticalScrollPosition(window.scrollY);
    const sectionEl = (this as HTMLElement).shadowRoot?.querySelector('section') as HTMLElement|null;
    if (sectionEl) {
      scrollTo({top: sectionEl.offsetTop});
    }
    setSelectedCard(util.kebabCase(project.title));
  };

  const handleInfoCloseClick = async ()=> {
    setSelectedCard(null);
    await util.repaint();
    scrollTo({top: verticalScrollPosition});
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

export const projectList = html`<project-list id="visuals"></project-list>`;


customElements.define('project-list', component(ProjectList));

declare global {
  interface HTMLElementTagNameMap {
    'project-list': HTMLElement,
  }
}
