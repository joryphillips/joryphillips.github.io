import {clock} from './clock.js';
import * as util from './util.js';
import {AwesomeWebPageData, Job, Project} from '../data/interfaces';

const IMAGE_PATH = './images/';
const DATA_PATH = './data/jory.json';
const CLOCK_PATH = 'heathrow-clock.svg'
const DEBOUNCE_TIMEOUT = 350;
const VISIBILITY_TRANSITION = 200;

interface DocumentFragmentWithNode {
  documentFragment?: DocumentFragment;
  node?: Node;
}

type ProjectFragmentMap = Map<Project, DocumentFragmentWithNode>;


function appendKeywords(keywords?: Set<string>) {
  if (!keywords) {
    return;
  }

  const keywordHolder = document.querySelector('[role="listbox"]');
  const keywordTemplate = document.querySelector('#keywords') as HTMLTemplateElement;
  for (const keyword of keywords) {
    const text = keywordTemplate.content.querySelector('[role="option"]');
    if (text) {
      text.textContent = keyword;
      const clone = document.importNode(keywordTemplate.content, true);
      keywordHolder.appendChild(clone);
    }
  }
}

function getImportNode(project: Project) {
  const projectTemplate = document.querySelector('#project') as HTMLTemplateElement;
  const projectContainer = projectTemplate.content.querySelector('.proj');
  const image = projectTemplate.content.querySelector('.image') as HTMLImageElement;
  const title = projectTemplate.content.querySelector('.title');
  image.alt = 'image of ' + project.title;
  image.src = IMAGE_PATH + project.imageSources[0];
  title.textContent = project.title;
  projectContainer.id = util.kebabCase(project.title);
  return document.importNode(projectTemplate.content, true);
}

// appends fragment to DOM container element; adds reference to the created node to the map
function appendClones(fragmentWithNodeMap: ProjectFragmentMap) {
  const projectHolder = document.querySelector('.project-holder');
  for (const [project, value] of fragmentWithNodeMap) {
    const projectId = util.kebabCase(project.title);
    projectHolder.appendChild(value.documentFragment);
    // when appending a documentFragment, it is the return value.
    // so we need to query the dom for the project id to get the node
    value.node = projectHolder.querySelector(`#${projectId}`);
  }
}

function createProjects(fragmentWithNodeMap: ProjectFragmentMap) {
  appendClones(fragmentWithNodeMap);
  const clones = Array.from(
      fragmentWithNodeMap.values()).map(fragVal => fragVal.node) as HTMLElement[];
  const imageLoadedPromiseList = util.getImageLoadedPromiseList(clones);
  return Promise.all(imageLoadedPromiseList).then((elements) => {
    // once all images are loaded, sequence fade in
    util.fadeIn(elements, VISIBILITY_TRANSITION);
  }).then(() => {
    clock(CLOCK_PATH);
  });
}

function createJobs(resume: Job[]) {
  const jobHolder = document.querySelector('.job-holder');
  const jobTemplate = document.querySelector('#job') as HTMLTemplateElement|null;
  if (!jobHolder || !jobTemplate) {
    return;
  }

  for (const job of resume) {
    // append date, place, summary, detail text to template
    const keys = Object.keys(job);
    for (const key of keys) {
      const domId = jobTemplate.content.querySelector(`#${key}`);
      // check that the id exists (shortcut to check that the resume ids match the property names in the json)
      if (domId) {
        // It is safe to cast to keyof Job because we got the key above.
        domId.textContent = job[key as keyof Job];
      }
    }
    const clone = document.importNode(jobTemplate.content, true);
    jobHolder.appendChild(clone);
  }
}

function listHasSearchValues(searchValue: string, listString: string) {
  let matches = false;
  const searchList = searchValue.toLowerCase().split(' ');
  for (let i = 0; i < searchList.length; i++) {
    const searchTerm = searchList[i].trim();
    matches = listString.toLowerCase().includes(searchTerm);
  }
  return matches;
}

function shouldShowProject(searchValue: string, keywords: string[], title: string) {
  return listHasSearchValues(searchValue, keywords.join(' ')) || listHasSearchValues(searchValue, title.toLowerCase());
}

class AwesomeWebPage {
  keywords?: Set<string>;
  fragmentWithNodeMap: ProjectFragmentMap = new Map();
  searchInput? = document.querySelector('#search') as HTMLInputElement;
  searchDropdown = document.querySelector('[role="listbox"]');
  data: AwesomeWebPageData;

  constructor(dataPath: string) {
    this.addFocusHandler(this.searchInput);
    util.addScrollClickHandlers('nav a');
    this.addKeyupHandler();
    this.loadAndAppendData(dataPath);
  }

  addFocusHandler(searchInput?: HTMLInputElement) {
    if (searchInput) {
      searchInput.addEventListener('focus', (e: FocusEvent) => this.toggleDropdown());
      searchInput.addEventListener('blur', (e: FocusEvent) => this.handleBlur(e));
    }
  }

  addDropdownClickHandler() {
    const dropdownButtons = document.querySelectorAll('[role="option"]');
    for (const button of dropdownButtons) {
      //use mousedown instead of click to get priorty over searchInput onblur
      button.addEventListener('mousedown', (e: MouseEvent) => this.onDropdownButtonClick(e));
    }
  }

  onDropdownButtonClick(e: MouseEvent) {
    e.preventDefault();
    const text = (e.target as HTMLElement).innerText;
    if (!this.searchInput || !text) {
      return;
    }

    this.searchInput.value = text;
    this.toggleDropdown();
    this.handleInput();
  }

  addKeyupHandler() {
    if (!this.searchInput) {
      return;
    }

    const debounceInput = util.debounce(this.handleInput, this, DEBOUNCE_TIMEOUT);
    this.searchInput.addEventListener('input', debounceInput);
  }

  handleBlur(e: Event) {
    e.preventDefault();
    if (this.searchDropdown && this.searchDropdown.classList.contains('show')) {
      this.toggleDropdown();
    }
  }

  toggleDropdown() {
    this.searchDropdown.classList.toggle('show');
  }

  async loadAndAppendData(dataPath: string) {
    this.data = await util.loadData(dataPath);
    if (!this.data) {
      return;
    }
    this.createFragmentWithNodeMap(this.data.PORTFOLIO);
    createProjects(this.fragmentWithNodeMap)
    this.keywords = util.getKeyWords(this.data.PORTFOLIO);
    createJobs(this.data.RESUME);
    appendKeywords(this.keywords);
    this.addDropdownClickHandler();
  }

  createFragmentWithNodeMap(portfolio: Project[]) {
    for (const project of portfolio) {
      this.fragmentWithNodeMap.set(project, {
        documentFragment: getImportNode(project),
      });
    }
  }

  handleInput() {
    if (this.searchInput) {
      const searchValue = this.searchInput.value;
      const elementsToFadeOut: HTMLElement[] = [];
      const elementsToFadeIn: HTMLElement[] = [];

      // if the value is not in fragmentWithNodeMap's projects' keywords, hide from the DOM
      for (const [project, value] of this.fragmentWithNodeMap) {
        if (searchValue && !shouldShowProject(searchValue, project.keywords, project.title)) {
          elementsToFadeOut.push(value.node as HTMLElement);
        } else {
          elementsToFadeIn.push(value.node as HTMLElement);
        }
      }

      util.fadeOut(elementsToFadeOut, VISIBILITY_TRANSITION);
      // setTimeout here ensures that we're in a new event loop and unneeded elements have faded out
      setTimeout(() => {
        util.fadeIn(elementsToFadeIn, VISIBILITY_TRANSITION);
      }, VISIBILITY_TRANSITION);
    }
  }
}

new AwesomeWebPage(DATA_PATH);
