import * as util from './util';
import {Selector} from './selectors';
import {Job, Project, RESUME, PORTFOLIO} from '../data/jory';

const IMAGE_PATH = './images/';
const CLOCK_PATH = 'heathrow-clock.svg';
const DEBOUNCE_TIMEOUT = 350;
const VISIBILITY_TRANSITION = 200;

type ProjectNodeMap = Map<Project, Node>;

function appendKeywords(keywords?: Set<string>) {
  if (!keywords) {
    return;
  }

  const keywordHolder = document.querySelector(Selector.ROLE_LISTBOX);
  const keywordTemplate = document.querySelector(Selector.KEYWORDS_TEMPLATE_ID) as HTMLTemplateElement;
  for (const keyword of keywords) {
    const text = keywordTemplate.content.querySelector(Selector.ROLE_OPTION);
    if (text) {
      text.textContent = keyword;
      const clone = document.importNode(keywordTemplate.content, true);
      keywordHolder.appendChild(clone);
    }
  }
}

function getImportNode(project: Project) {
  const projectTemplate = document.querySelector(Selector.PROJECT_TEMPLATE_ID) as HTMLTemplateElement;
  const projectContainer = projectTemplate.content.querySelector(Selector.PROJECT);
  const image = projectTemplate.content.querySelector(Selector.PROJECT_IMAGE) as HTMLImageElement;
  const title = projectTemplate.content.querySelector(Selector.PROJECT_TITLE);
  image.alt = 'image of ' + project.title;
  image.dataset.src = IMAGE_PATH + project.imageSources[0];
  title.textContent = project.title;
  projectContainer.id = util.kebabCase(project.title);
  return document.importNode(projectTemplate.content, true);
}

function getProjectNodeMap(portfolio: Project[]) {
  const projectNodeMap = new Map<Project, Node>();
  const projectHolder = document.querySelector(Selector.PROJECT_HOLDER);

  for (const project of portfolio) {
    const projectId = util.kebabCase(project.title);
    const documentFragment = getImportNode(project);

    projectHolder.appendChild(documentFragment);
    // when appending a documentFragment, it is the return value.
    // so we need to query the DOM for the project id to get the actual node.
    const node = projectHolder.querySelector(`#${projectId}`);
    projectNodeMap.set(project, node);
  }
  return projectNodeMap;
}

function createJobs(resume: Job[]) {
  const jobHolder = document.querySelector(Selector.JOB_HOLDER);
  const jobTemplate = document.querySelector(Selector.JOB_TEMPLATE_ID) as HTMLTemplateElement|null;
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
  const stringToSearch = keywords.join(' ') + ' ' + title.toLowerCase();
  return listHasSearchValues(searchValue, stringToSearch);
}

/**
 * Special case for prototype clock image. This conditionally loads the
 * prototype clock.ts code only when the original static SVG has been loaded,
 * allowing for code splitting.
 */
async function conditionallyLoadClockPrototype(lazyImage: HTMLImageElement, parentEl: Element) {
  if (lazyImage.src.indexOf(CLOCK_PATH) > -1) {
    const clock = await import('./clock');
    clock.addClockPrototype(parentEl);
  }
}

class AwesomeWebPage {
  projectNodeMap?: ProjectNodeMap;
  searchInput = document.querySelector(Selector.SEARCH_INPUT) as HTMLInputElement;
  searchDropdown = document.querySelector(Selector.ROLE_LISTBOX);
  lazyImageObservers: IntersectionObserver[] = [];
  firstSearch = true;

  constructor() {
    this.addFocusHandler(this.searchInput);
    util.addScrollClickHandlers(Selector.NAVIGATION_LINK);
    this.addKeyupHandler();
    this.loadAndAppendData();
  }

  addFocusHandler(searchInput?: HTMLInputElement) {
    if (searchInput) {
      searchInput.addEventListener('focus', () => this.toggleDropdown());
      searchInput.addEventListener('blur', (e: FocusEvent) => this.handleBlur(e));
    }
  }

  addDropdownClickHandler() {
    const dropdownButtons = document.querySelectorAll(Selector.ROLE_OPTION);
    for (const button of dropdownButtons) {
      // use mousedown instead of click to get priorty over searchInput onblur
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
    this.handleSearchInput();
  }

  addKeyupHandler() {
    if (!this.searchInput) {
      return;
    }

    const debounceInput = util.debounce(this.handleSearchInput, this, DEBOUNCE_TIMEOUT);
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

  showProject(element: Element) {
    const lazyImage = element.querySelector(Selector.PROJECT_IMAGE);
    element.classList.remove('display-none');

    if (lazyImage) {
      lazyImage.src = lazyImage?.dataset?.src;
      conditionallyLoadClockPrototype(lazyImage, element);
      lazyImage.classList.add('visible');
    }

    element.classList.add('visible');
  }

  addIntersectionObserver(projectNodeMap: ProjectNodeMap) {
    const nodes = projectNodeMap.values();

    if ('IntersectionObserver' in window) {
      const lazyImageObserver = new IntersectionObserver((entries)=> {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const element = entry.target;
            this.showProject(element);
            lazyImageObserver.unobserve(element);
          }
        }
      });

      this.lazyImageObservers.push(lazyImageObserver);

      for (const node of nodes) {
        lazyImageObserver.observe(node as Element);
      }
    } else {
      this.showAllProjects();
    }
  }

  loadAndAppendData() {
    this.projectNodeMap = getProjectNodeMap(PORTFOLIO);
    this.addIntersectionObserver(this.projectNodeMap);
    createJobs(RESUME);
    appendKeywords(util.getKeyWords(PORTFOLIO));
    this.addDropdownClickHandler();
  }

  showAllProjects() {
    for (const node of this.projectNodeMap.values()) {
      this.showProject(node as Element);
    }
  }

  /**
   * If all projects are not loaded into the DOM yet and no search has taken
   * place, it is possible that the intersection observer will fire and load
   * more images as we filter projects from the DOM. To get around this, we show
   * all projects on first search.
   */
  showAllProjectsOnFirstSearch() {
    if (this.firstSearch) {
      this.showAllProjects();
      this.firstSearch = false;
    }
  }

  handleSearchInput() {
    if (this.searchInput) {
      const searchValue = this.searchInput.value;
      const elementsToFadeOut: HTMLElement[] = [];
      const elementsToFadeIn: HTMLElement[] = [];

      this.showAllProjectsOnFirstSearch();

      // If the value is not in projectNodeMap's projects' keywords, hide from
      // the DOM.
      for (const [project, node] of this.projectNodeMap.entries()) {
        if (searchValue && !shouldShowProject(searchValue, project.keywords, project.title)) {
          elementsToFadeOut.push(node as HTMLElement);
        } else {
          elementsToFadeIn.push(node as HTMLElement);
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

new AwesomeWebPage();
