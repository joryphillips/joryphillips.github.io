import {clock} from './clock.js';
import * as util from './util.js';

const DATA_PATH = './data/jory.json';
const CLOCK_PATH = 'heathrow-clock.svg'
const IMAGE_FADE_IN_TIMEOUT = 200;
const DEBOUNCE_TIMEOUT = 350;


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

  createProjects(portfolio, timeout = IMAGE_FADE_IN_TIMEOUT) {
    if (portfolio) {
      this.savedSearchResults = portfolio;
      const nodes = util.getImportNodes(portfolio);
      const clones = util.appendClones(nodes, portfolio);
      const imageLoadedPromiseList = util.getImageLoadedPromiseList(clones);
      return Promise.all(imageLoadedPromiseList).then(elements => {
        // once all images are loaded, sequence fade in
        util.fadeInSequence(0, elements, timeout);
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

  getFilteredPorfolio(portfolio, searchValue) {
    return portfolio.filter(project => {
      return this.shouldShowProject(searchValue, project.keywords, project.title);
    });
  }

  handleInput() {
    if (this.searchInput) {

      this.hideInputErrorState();
      const searchValue = this.searchInput.value;
      if (searchValue) {
        // there is a search & it changed from the last search
        const filteredPortfolio = this.getFilteredPorfolio(this.DATA.PORTFOLIO, searchValue);

        if (!util.isCheaplyEqual(this.savedSearchResults, filteredPortfolio)) {
          if (filteredPortfolio.length > 0) {
            this.removeProjects();
            this.createProjects(filteredPortfolio, 150);
          } else {
            this.showInputErrorState();
          }
        }
      } else if (!searchValue) {
        // there is no search
        this.removeProjects();
        this.createProjects(this.DATA.PORTFOLIO, 0);
      }
    }
  }
}

window.awesomeWebPage = new AwesomeWebPage(DATA_PATH);