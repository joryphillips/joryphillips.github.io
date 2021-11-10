import { html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { useState } from 'haunted';

import '../search_input/search_input';
import '../project_card/project_card';
import { addStyles, component, kebabCase, getKeyWords } from '../../util/util';
import { Project, PORTFOLIO } from '../../../data/jory';
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

interface Props {
  setSelectedProjectName: (name: string)=> void;
}

function ProjectList(this: unknown, {setSelectedProjectName}: Props) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInput = (value: string)=> {
    setSearchValue(value);
  };

  const projects = PORTFOLIO
    .filter(project => shouldShowProject(searchValue, project));

  addStyles(this, [styles]);

  return html`

    <section class="border-bottom border-top">
      <div class="visuals-header">
        <h1>Visuals & Projects</h1>
        <search-input
          .keyWords=${getKeyWords(PORTFOLIO)}
          .handleSearchInput=${handleSearchInput}
        ></search-input>
      </div>

      <div class="project-holder">
        ${repeat(projects,
            (project) => kebabCase(project.title),
            ((project) => html`
              <project-card
                .project=${project}
                .handleInfoClick=${setSelectedProjectName}
              ></project-card>
            `))}
      </div>
    </section>
  `;
}

export const projectList = html`<project-list id="visuals"></project-list>`;


customElements.define('project-list', component<HTMLElement & Props>(ProjectList));

declare global {
  interface HTMLElementTagNameMap {
    'project-list': HTMLElement,
  }
}
