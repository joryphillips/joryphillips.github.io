import {html, render} from 'lit';

import './project_list';
import { navBar } from './navbar';
import { jumbotron } from './jumbotron';
import { summary } from './summary';
import { jobs } from './jobs';
import { footer } from './footer';

const mainPage = html`
  ${navBar}
  ${jumbotron}
  ${summary}
  <project-list id="visuals"></project-list>
  ${jobs}
  ${footer}
`;

render(mainPage, document.body);
