import { html } from 'lit';

import {component} from '../../util/haunted_component';

import {PORTFOLIO} from '../../../data/jory';
import {addStyles, kebabCase} from '../../util/util';
import {styles} from './styles';

interface Props {
  projectName: string,
}

function ProjectDetail(this: unknown, {projectName}: Props) {

  const project = PORTFOLIO.find(proj => kebabCase(proj.title) === projectName);
  if (!project) return html`<div>No project found</div>`;

  addStyles(this, [styles]);

  return html`
    <project-card
      selected
      .project=${project}
    ></project-card>

    <p class="description">${project.description}</p>
    <a
      href='/'
      aria-label="Close detail and return to full project list"
    >
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
    Back to project list</a>
  `;
}

customElements.define(
  'project-detail',
  component<HTMLElement & Props>(ProjectDetail),
);

declare global {
  interface HTMLElementTagNameMap {
    'project-detail': HTMLElement & Props,
  }
}
