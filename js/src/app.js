var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { clock } from './clock.js';
import * as util from './util.js';
const IMAGE_PATH = './images/';
const DATA_PATH = './data/jory.json';
const CLOCK_PATH = 'heathrow-clock.svg';
const DEBOUNCE_TIMEOUT = 350;
const VISIBILITY_TRANSITION = 200;
class AwesomeWebPage {
    constructor(dataPath) {
        this.fragmentWithNodeMap = new Map();
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
            button.addEventListener('mousedown', (e) => this.onDropdownButtonClick(e));
        }
    }
    onDropdownButtonClick(e) {
        e.preventDefault();
        const text = e.target.innerText;
        if (!this.searchInput || !text) {
            return;
        }
        this.searchInput.value = text;
        this.toggleDropdown(e);
        this.handleInput();
    }
    addScrollClickHandlers() {
        const links = document.querySelectorAll('nav a');
        for (const link of links) {
            link.addEventListener('click', util.scrollToId, false);
        }
    }
    addKeyupHandler() {
        if (!this.searchInput) {
            return;
        }
        const debounceInput = util.debounce(this.handleInput, this, DEBOUNCE_TIMEOUT);
        this.searchInput.addEventListener('input', debounceInput);
    }
    handleBlur(e) {
        e.preventDefault();
        if (this.searchDropdown && this.searchDropdown.classList.contains('show')) {
            this.toggleDropdown(e);
        }
    }
    toggleDropdown(e) {
        this.searchDropdown.classList.toggle('show');
    }
    loadAndAppendData(dataPath) {
        return __awaiter(this, void 0, void 0, function* () {
            this.data = yield util.loadData(dataPath);
            if (!this.data) {
                return;
            }
            this.createFragmentWithNodeMap(this.data.PORTFOLIO);
            this.createProjects(this.data.PORTFOLIO);
            this.keywords = util.getKeyWords(this.data.PORTFOLIO);
            this.createJobs(this.data.RESUME);
            this.appendKeywords(this.keywords);
            this.addDropdownClickHandler();
        });
    }
    appendKeywords(keywords) {
        if (!keywords) {
            return;
        }
        const keywordHolder = document.querySelector('.dropdown');
        const keywordTemplate = document.querySelector('#keywords');
        for (const keyword of keywords) {
            const text = keywordTemplate.content.querySelector('.text');
            if (text) {
                text.textContent = keyword;
                const clone = document.importNode(keywordTemplate.content, true);
                keywordHolder.appendChild(clone);
            }
        }
    }
    createFragmentWithNodeMap(portfolio) {
        for (const project of portfolio) {
            this.fragmentWithNodeMap.set(project, {
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
        image.src = IMAGE_PATH + project.imageSources[0];
        title.textContent = project.title;
        projectContainer.id = util.kebabCase(project.title);
        return document.importNode(projectTemplate.content, true);
    }
    appendClones(fragmentWithNodeMap) {
        const projectHolder = document.querySelector('.project-holder');
        for (const [project, value] of fragmentWithNodeMap) {
            const projectId = util.kebabCase(project.title);
            projectHolder.appendChild(value.documentFragment);
            value.node = projectHolder.querySelector(`#${projectId}`);
        }
    }
    createProjects(portfolio) {
        this.appendClones(this.fragmentWithNodeMap);
        const clones = Array.from(this.fragmentWithNodeMap.values()).map(fragVal => fragVal.node);
        const imageLoadedPromiseList = util.getImageLoadedPromiseList(clones);
        return Promise.all(imageLoadedPromiseList).then((elements) => {
            util.fadeIn(elements, VISIBILITY_TRANSITION);
        }).then(() => {
            clock(CLOCK_PATH);
        });
    }
    createJobs(resume) {
        const jobHolder = document.querySelector('.job-holder');
        const jobTemplate = document.querySelector('#job');
        if (!jobHolder || !jobTemplate) {
            return;
        }
        for (const job of resume) {
            const keys = Object.keys(job);
            for (const key of keys) {
                const domId = jobTemplate.content.querySelector(`#${key}`);
                if (domId) {
                    domId.textContent = job[key];
                }
            }
            const clone = document.importNode(jobTemplate.content, true);
            jobHolder.appendChild(clone);
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
    getFilteredPorfolio(fragmentWithNodeMap, searchValue) {
        return Array.from(fragmentWithNodeMap.keys()).filter(project => {
            return this.shouldShowProject(searchValue, project.keywords, project.title);
        });
    }
    handleInput() {
        if (this.searchInput) {
            this.hideInputErrorState();
            const searchValue = this.searchInput.value;
            const elementsToFadeOut = [];
            const elementsToFadeIn = [];
            for (const [project, value] of this.fragmentWithNodeMap) {
                if (searchValue && !this.shouldShowProject(searchValue, project.keywords, project.title)) {
                    elementsToFadeOut.push(value.node);
                }
                else {
                    elementsToFadeIn.push(value.node);
                }
            }
            util.fadeOut(elementsToFadeOut, VISIBILITY_TRANSITION);
            setTimeout(() => {
                util.fadeIn(elementsToFadeIn, VISIBILITY_TRANSITION);
            }, VISIBILITY_TRANSITION);
        }
    }
}
new AwesomeWebPage(DATA_PATH);
//# sourceMappingURL=app.js.map