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
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .visuals-header {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      margin-bottom: 2rem;
    }
    h1 {
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
    footnote {
      display: block;
      margin-top: 2rem;
    }
    search-box[hidden], footnote[hidden] {
      display: none;
    }
  </style>
`;

export function ProjectList() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSearchInput = (value: string)=> {
    setSearchValue(value);
  };

  const handleInfoClick = (project: Project)=> {
    setSelectedCard(util.kebabCase(project.title));
  };

  const handleInfoCloseClick = ()=> {
    setSelectedCard(null);
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
        <search-box
          ?hidden=${!!selectedCard}
          .keyWords=${util.getKeyWords(PORTFOLIO)}
          .handleSearchInput=${handleSearchInput}
        ></search-box>
      </div>

      <div class="project-holder">
        ${repeat(projects,
            (project) => util.kebabCase(project.title),
            ((project) => html`
              <project-card
                ?hidden=${hideCard(project)}
                id=${util.kebabCase(project.title)}
                .selected=${cardSelected(project)}
                .project=${project}
                .handleInfoClick=${handleInfoClick}
                .handleInfoCloseClick=${handleInfoCloseClick}
              ></project-card>
            `))}
      </div>
      <footnote ?hidden=${!!selectedCard}>
          A semi-random collection of things I have worked on to help
          visually demonstrate the depth and breadth of my experience. Some
          things are big and important, others are random ideas or short
          explorations.
      </footnote>
    </section>
  `;
}

const {component} = haunted({render});

customElements.define('project-list', component(ProjectList));
