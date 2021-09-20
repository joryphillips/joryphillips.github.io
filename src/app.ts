import * as util from './util';
import {Selector} from './selectors';
import {Job, Project, RESUME, PORTFOLIO} from '../data/jory';

const IMAGE_PATH = './images/';
const CLOCK_PATH = 'heathrow-clock.svg';
const CONTAINER = 'container';
const DISPLAY_NONE = 'display-none';
const SHOW = 'show';
const DEBOUNCE_TIMEOUT = 350;

type ProjectNodeMap = Map<Project, Node>;

interface CloseInfoEventPayload {
  descriptionEl: Element;
  closeDescriptionButton: Element;
  searchInput: Element;
  infoButton: Element;
  projectHolder: Element;
}

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

function createProject(project: Project) {
  const imagePath = IMAGE_PATH + project.imageSources[0];

  const projectHtml = `
    <div class="proj" id="${util.kebabCase(project.title)}">
      <div class="image-container">
        <img class="image block" data-src="${imagePath}" alt="image of ${project.title}">
      </div>
      <div class="project-card-title">
        <h5 class="title">${project.title}</h5>
        <div class="info-icons">
          <button class="info ${project.description ? `` : `display-none`}"><img src="./images/info-black-18dp.svg"></button>
          <a class="link ${project.href ? `` : `display-none`}" href="${project.href}"><img src="./images/launch-black-18dp.svg"></a>
        </div>
      </div>
      <p class="description display-none">${project.description}</p>
      <button class="close display-none">Close</button>
    </div>
  `;

  return document.createRange().createContextualFragment(projectHtml);
}

function createJobs(resume: Job[]) {
  const jobHolder = document.querySelector(Selector.JOB_HOLDER);
  if (!jobHolder) {
    return;
  }

  for (const job of resume) {
    const jobHtml = `
      <div class="job">
        <h3 class="title">
          <span id="place" class="dark-blue">${job.place}</span>
          <span id="date" class="regular date">${job.date}</span>
        </h3>
        <h3 id="summary" class="summary">${job.summary}</h3>
      </div>
    `;
    const fragment = document.createRange().createContextualFragment(jobHtml);
    jobHolder.appendChild(fragment);
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

function showProjectAndLoadImage(element: Element) {
  const lazyImage = element.querySelector(Selector.PROJECT_IMAGE) as HTMLImageElement;
  element.classList.remove(DISPLAY_NONE);

  if (lazyImage) {
    lazyImage.src = lazyImage?.dataset?.src;
    conditionallyLoadClockPrototype(lazyImage, element);
    lazyImage.classList.add('visible');
  }
}

function showProjects(elements: Element[]) {
  for (const el of elements) {
    el.classList.remove(DISPLAY_NONE);
  }
}

function hideProjects(elements: Element[]) {
  for (const el of elements) {
    el.classList.add(DISPLAY_NONE);
  }
}

function scrollToVisualsSectionHeader() {
  const projectSection = document.querySelector(Selector.VISUALS_HEADER) as HTMLElement;
  const scrollTargetY = projectSection.offsetTop;
  window.scroll({top: scrollTargetY});
}

function getElementsToShowProjectInfo(projectId: string) {
  const projectEl = document.querySelector(`#${projectId}`);
  const descriptionEl = projectEl.querySelector(Selector.PROJECT_DESCRIPTION);
  const searchInput = document.querySelector(Selector.KEYWORDS_TEMPLATE_ID);
  const projectHolder = document.querySelector(Selector.PROJECT_HOLDER);
  const infoButton = projectEl.querySelector(Selector.PROJECT_INFO_ICON);
  const closeDescriptionButton = projectEl.querySelector(Selector.PROJECT_DESCRIPTION_CLOSE);
  return {
    projectEl,
    descriptionEl,
    searchInput,
    projectHolder,
    infoButton,
    closeDescriptionButton,
  };
}

class AwesomeWebPage {
  projectNodeMap?: ProjectNodeMap;
  searchInput = document.querySelector(Selector.SEARCH_INPUT) as HTMLInputElement;
  searchDropdown = document.querySelector(Selector.ROLE_LISTBOX);
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
    if (this.searchDropdown && this.searchDropdown.classList.contains(SHOW)) {
      this.toggleDropdown();
    }
  }

  toggleDropdown() {
    this.searchDropdown.classList.toggle(SHOW);
  }

  addIntersectionObserver(projectNodeMap: ProjectNodeMap) {
    const nodes = projectNodeMap.values();

    if ('IntersectionObserver' in window) {
      const lazyImageObserver = new IntersectionObserver((entries)=> {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const element = entry.target;
            showProjectAndLoadImage(element);
            lazyImageObserver.unobserve(element);
          }
        }
      });

      for (const node of nodes) {
        lazyImageObserver.observe(node as Element);
      }
    } else {
      this.showAllProjectsAndLoadImages();
    }
  }

  getProjectNodeMap(portfolio: Project[]) {
    const projectNodeMap = new Map<Project, Node>();
    const projectHolder = document.querySelector(Selector.PROJECT_HOLDER);

    for (const project of portfolio) {
      const projectId = util.kebabCase(project.title);
      const documentFragment = createProject(project);

      projectHolder.appendChild(documentFragment);
      // when appending a documentFragment, it is the return value.
      // so we need to query the DOM for the project id to get the actual node.
      const node = projectHolder.querySelector(`#${projectId}`);

      if (project.description) {
        const infoButton = node.querySelector(Selector.PROJECT_INFO_ICON) as HTMLButtonElement;
        infoButton.addEventListener('click', (e)=> this.handleInfoClick(e, node.id));
      }

      projectNodeMap.set(project, node);
    }
    return projectNodeMap;
  }

  loadAndAppendData() {
    this.projectNodeMap = this.getProjectNodeMap(PORTFOLIO);
    this.addIntersectionObserver(this.projectNodeMap);
    createJobs(RESUME);
    appendKeywords(util.getKeyWords(PORTFOLIO));
    this.addDropdownClickHandler();
  }

  showAllProjectsAndLoadImages() {
    for (const node of this.projectNodeMap.values()) {
      showProjectAndLoadImage(node as Element);
    }
  }

  /**
   * If all projects are not loaded into the DOM yet and no search has taken
   * place, it is possible that the intersection observer will fire and load
   * more images as we filter projects from the DOM. To get around this, we show
   * all projects on first filter.
   */
  showAllProjectsOnFirstFilter() {
    if (this.firstSearch) {
      this.showAllProjectsAndLoadImages();
      this.firstSearch = false;
    }
  }

  handleSearchInput() {
    if (this.searchInput) {
      const searchValue = this.searchInput.value;
      const elementsToFadeOut: HTMLElement[] = [];
      const elementsToFadeIn: HTMLElement[] = [];

      this.showAllProjectsOnFirstFilter();

      // If the value is not in projectNodeMap's projects' keywords, hide from
      // the DOM.
      for (const [project, node] of this.projectNodeMap.entries()) {
        if (searchValue && !shouldShowProject(searchValue, project.keywords, project.title)) {
          elementsToFadeOut.push(node as HTMLElement);
        } else {
          elementsToFadeIn.push(node as HTMLElement);
        }
      }

      hideProjects(elementsToFadeOut);
      showProjects(elementsToFadeIn);
    }
  }

  handleCloseInfoClick(e: Event, {
    descriptionEl,
    closeDescriptionButton,
    searchInput,
    infoButton,
    projectHolder,
  }: CloseInfoEventPayload) {
    // Hide elements.
    descriptionEl.classList.add(DISPLAY_NONE);
    closeDescriptionButton.classList.add(DISPLAY_NONE);

    // Show elements.
    searchInput.classList.remove(DISPLAY_NONE);
    infoButton.classList.remove(DISPLAY_NONE);

    // Show projects that we hid and make sure we return to any prior filtered
    // state.
    this.handleSearchInput();

    // Revert to grid display.
    projectHolder.classList.remove(CONTAINER);
  }

  getAllShowingProjects() {
    return Array.from(this.projectNodeMap.values())
      .filter((node: Node)=> !(node as HTMLElement).classList.contains(DISPLAY_NONE)) as HTMLElement[];
  }

  handleInfoClick(e: Event, projectId: string) {
    const {
      descriptionEl,
      searchInput,
      projectHolder,
      infoButton,
      closeDescriptionButton,
    } = getElementsToShowProjectInfo(projectId);

    this.showAllProjectsOnFirstFilter();

    // Store new list of showing projects.
    const allShowingProjects = this.getAllShowingProjects();
    // Remove the project we want to show the description of.
    const showingProjects = allShowingProjects.filter((el: HTMLElement) => el.id !== projectId);

    hideProjects(showingProjects);
    scrollToVisualsSectionHeader();

    // Hide UI elements.
    searchInput.classList.add(DISPLAY_NONE);
    infoButton.classList.add(DISPLAY_NONE);

    // Show description and Close Description elements.
    descriptionEl.classList.remove(DISPLAY_NONE);
    closeDescriptionButton.classList.remove(DISPLAY_NONE);

    // Update styles for single-project presentation.
    projectHolder.classList.add(CONTAINER);

    // List for close button event and pass the close description the
    // elements it needs to show/ hide to return to prior UI state.
    closeDescriptionButton.addEventListener('click',
      (closeEvent: Event)=> this.handleCloseInfoClick(closeEvent, {
        descriptionEl,
        closeDescriptionButton,
        searchInput,
        infoButton,
        projectHolder,
      }));
  }
}

new AwesomeWebPage();
