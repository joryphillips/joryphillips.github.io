import {clock} from './clock.js';
import * as util from './util.js';

const DATA_PATH = './data/jory.json';
const CLOCK_PATH = 'heathrow-clock.svg'
const DEBOUNCE_TIMEOUT = 350;
const VISIBILITY_TRANSITION = 200;


class AwesomeWebPage {
  constructor(dataPath) {
    this.keywords = null;
    this.fragMap = new Map();
    this.savedSearchResults = [];
    this.searchInput = document.querySelector('#search');
    this.searchDropdown = document.querySelector('.search.box .dropdown');
    this.addFocusHandler(this.searchInput);
    this.addScrollClickHandlers();
    this.addKeyupHandler();
    this.loadAndAppendData(dataPath);
  }

  addFocusHandler(searchInput) {
    if (searchInput) {
      searchInput.addEventListener('focus', (e) => this.toggleDropdown(e));
      searchInput.addEventListener('blur', (e) => this.handleBlur(e));
    }
  }

  addDropdownClickHandler() {
    const dropdownButtons = document.querySelectorAll('.dropdown .text');
    for (const button of dropdownButtons) {
      //use mousedown instead of click to get priorty over searchInput onblur
      button.addEventListener('mousedown', (e) => this.onDropdownButtonClick(e));
    }
  }

  onDropdownButtonClick(e) {
    e.preventDefault();
    const text = e.target.innerText;
    if (this.searchInput && text) {
      this.searchInput.value = text;
      this.toggleDropdown(e);
      this.handleInput();
    }
  }

  addScrollClickHandlers() {
    const links = document.querySelectorAll('nav a');
    if (links) {
      for (const link of links) {
        link.addEventListener('click', util.scrollToId, false);
      }
    }
  }

  addKeyupHandler() {
    if (this.searchInput) {
      const debounceInput = util.debounce(this.handleInput, this, DEBOUNCE_TIMEOUT);
      this.searchInput.addEventListener('input', debounceInput);
    }
  }

  handleBlur(e) {
    e.preventDefault();
    if (this.searchDropdown && this.searchDropdown.classList.contains('show')) {
      this.toggleDropdown(e)
    }
  }

  toggleDropdown(e) {
    this.searchDropdown.classList.toggle('show');
  }

  async loadAndAppendData(dataPath) {
    this.DATA = await util.loadData(dataPath);
    if (this.DATA) {
      this.createFragMap(this.DATA.PORTFOLIO);
      this.createProjects(this.DATA.PORTFOLIO)
      this.keywords = util.getKeyWords(this.DATA.PORTFOLIO, 'keywords');
      this.createJobs(this.DATA.RESUME);
      this.appendKeywords(this.keywords);
      this.addDropdownClickHandler();
    }
  }

  appendKeywords(keywords) {
    const keywordHolder = document.querySelector('.dropdown');
    const keywordTemplate = document.querySelector('#keywords');
    if (keywords) {
      for (const keyword of keywords) {
        const text = keywordTemplate.content.querySelector('.text');
        if (text) {
          text.textContent = keyword;
          const clone = document.importNode(keywordTemplate.content, true);
          keywordHolder.appendChild(clone);
        }
      }
    }
  }

  createFragMap(portfolio) {
    for (const project of portfolio) {
      this.fragMap.set(project, {
        documentFragment: this.getImportNode(project),
      });
    }
  }

  getImportNode(project) {
    const projectTemplate = document.querySelector('#project');
    const projectContainer = projectTemplate.content.querySelector('.proj');
    const image = projectTemplate.content.querySelector('.image');
    const title = projectTemplate.content.querySelector('.title');
    image.alt = 'image of ' + project.title;
    image.src = './images/' + project.imageSources[0];
    title.textContent = project.title;
    projectContainer.id = util.kebabCase(project.title);
    return document.importNode(projectTemplate.content, true);
  }
  
  // appends fragment to DOM container element; adds reference to the created node to the map
  appendClones(fragMap) {
    const projectHolder = document.querySelector('.project-holder');
    for (const [project, value] of fragMap) {
      const projectId = util.kebabCase(project.title);
      projectHolder.appendChild(value.documentFragment);
      // when appending a documentFragment, it is the return value. 
      // so we need to query the dom for the project id to get the node
      value.node = projectHolder.querySelector(`#${projectId}`);
    }
  }
  
  createProjects(portfolio) {
    if (portfolio) {
      this.appendClones(this.fragMap);
      const clones = Array.from(this.fragMap.values()).map(fragVal => fragVal.node);
      const imageLoadedPromiseList = util.getImageLoadedPromiseList(clones);
      return Promise.all(imageLoadedPromiseList).then(elements => {
        // once all images are loaded, sequence fade in
        util.fadeIn(elements, VISIBILITY_TRANSITION);
      }).then(() => {
        clock(CLOCK_PATH);
      });
    }
  }

  createJobs(resume) {
    const jobHolder = document.querySelector('.job-holder');
    const jobTemplate = document.querySelector('#job');
    if (resume && jobHolder && jobTemplate) {
      for (const job of resume) {
        // append date, place, summary, detail text to template
        const keys = Object.keys(job);
        for (const key of keys) {
          const domId = jobTemplate.content.querySelector(`#${key}`);
          // check that the id exists (shortcut to check that the resume ids match the property names in the json)
          if (domId) {
            domId.textContent = job[key];
          }
        }
        const clone = document.importNode(jobTemplate.content, true);
        jobHolder.appendChild(clone);
      }
    }
  }

  removeProjects() {
    const projectHolder = document.querySelector('.project-holder');
    const projects = document.querySelectorAll('.proj');
    for (const project of projects) {
      projectHolder.removeChild(project);
    }
  }

  showInputErrorState() {
    this.searchInput.classList.add('error');
  }

  hideInputErrorState() {
    this.searchInput.classList.remove('error');
  }

  listHasSearchValues(searchValue, listString) {
    let matches = false;
    const searchList = searchValue.toLowerCase().split(' ');
    for (let i = 0; i < searchList.length; i++) {
      const searchTerm = searchList[i].trim();
      matches = listString.toLowerCase().includes(searchTerm);
    }
    return matches;
  }

  shouldShowProject(searchValue, keywords, title) {
    return this.listHasSearchValues(searchValue, keywords.join(' ')) || this.listHasSearchValues(searchValue, title.toLowerCase());
  }

  getFilteredPorfolio(fragMap, searchValue) {
    return Array.from(fragMap.keys()).filter(project => {
      return this.shouldShowProject(searchValue, project.keywords, project.title);
    });
  }

  hideProject(node) {
    Promise.resolve().then( ()=>{
      node.classList.remove('visible');
    }).then(()=>{
      node.style.display = 'none';
    });
  }

  showProject(node) {
    Promise.resolve().then( ()=>{
      node.style.display = 'block';
    }).then(()=>{
      node.classList.add('visible');
    });
  }

  handleInput() {
    if (this.searchInput) {

      this.hideInputErrorState();
      const searchValue = this.searchInput.value;
      const elementsToFadeOut = [];
      const elementsToFadeIn = [];

      // if the value is not in fragMap's projects' keywords, hide from the DOM
      for (const [project, value] of this.fragMap) {
        if (searchValue && !this.shouldShowProject(searchValue, project.keywords, project.title)) {
          elementsToFadeOut.push(value.node)
        } else {
          elementsToFadeIn.push(value.node)
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

window.awesomeWebPage = new AwesomeWebPage(DATA_PATH);