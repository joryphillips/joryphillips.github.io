import { addClockPrototype } from './clock.js';
import * as util from './util.js';
import { Selector } from './selectors.js';
const IMAGE_PATH = './images/';
const DATA_PATH = './data/jory.json';
const CLOCK_PATH = 'heathrow-clock.svg';
const DEBOUNCE_TIMEOUT = 350;
const VISIBILITY_TRANSITION = 200;
function appendKeywords(keywords) {
    if (!keywords) {
        return;
    }
    const keywordHolder = document.querySelector(Selector.ROLE_LISTBOX);
    const keywordTemplate = document.querySelector(Selector.KEYWORDS_TEMPLATE_ID);
    for (const keyword of keywords) {
        const text = keywordTemplate.content.querySelector(Selector.ROLE_OPTION);
        if (text) {
            text.textContent = keyword;
            const clone = document.importNode(keywordTemplate.content, true);
            keywordHolder.appendChild(clone);
        }
    }
}
function getImportNode(project) {
    const projectTemplate = document.querySelector(Selector.PROJECT_TEMPLATE_ID);
    const projectContainer = projectTemplate.content.querySelector(Selector.PROJECT);
    const image = projectTemplate.content.querySelector(Selector.PROJECT_IMAGE);
    const title = projectTemplate.content.querySelector(Selector.TITLE);
    image.alt = 'image of ' + project.title;
    image.dataset.src = IMAGE_PATH + project.imageSources[0];
    title.textContent = project.title;
    projectContainer.id = util.kebabCase(project.title);
    return document.importNode(projectTemplate.content, true);
}
function getProjectNodeMap(portfolio) {
    const projectNodeMap = new Map();
    const projectHolder = document.querySelector(Selector.PROJECT_HOLDER);
    for (const project of portfolio) {
        const projectId = util.kebabCase(project.title);
        const documentFragment = getImportNode(project);
        projectHolder.appendChild(documentFragment);
        const node = projectHolder.querySelector(`#${projectId}`);
        projectNodeMap.set(project, node);
    }
    return projectNodeMap;
}
function createJobs(resume) {
    const jobHolder = document.querySelector(Selector.JOB_HOLDER);
    const jobTemplate = document.querySelector(Selector.JOB_TEMPLATE);
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
function listHasSearchValues(searchValue, listString) {
    let matches = false;
    const searchList = searchValue.toLowerCase().split(' ');
    for (let i = 0; i < searchList.length; i++) {
        const searchTerm = searchList[i].trim();
        matches = listString.toLowerCase().includes(searchTerm);
    }
    return matches;
}
function shouldShowProject(searchValue, keywords, title) {
    const stringToSearch = keywords.join(' ') + ' ' + title.toLowerCase();
    return listHasSearchValues(searchValue, stringToSearch);
}
class AwesomeWebPage {
    constructor(dataPath) {
        this.searchInput = document.querySelector(Selector.SEARCH_INPUT);
        this.searchDropdown = document.querySelector(Selector.ROLE_LISTBOX);
        this.lazyImageObservers = [];
        this.firstSearch = true;
        this.addFocusHandler(this.searchInput);
        util.addScrollClickHandlers(Selector.NAVIGATION_LINK);
        this.addKeyupHandler();
        this.loadAndAppendData(dataPath);
    }
    addFocusHandler(searchInput) {
        if (searchInput) {
            searchInput.addEventListener('focus', (e) => this.toggleDropdown());
            searchInput.addEventListener('blur', (e) => this.handleBlur(e));
        }
    }
    addDropdownClickHandler() {
        const dropdownButtons = document.querySelectorAll(Selector.ROLE_OPTION);
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
    handleBlur(e) {
        e.preventDefault();
        if (this.searchDropdown && this.searchDropdown.classList.contains('show')) {
            this.toggleDropdown();
        }
    }
    toggleDropdown() {
        this.searchDropdown.classList.toggle('show');
    }
    showProject(element) {
        var _a;
        const lazyImage = element.querySelector(Selector.PROJECT_IMAGE);
        element.classList.remove('display-none');
        if (lazyImage) {
            lazyImage.src = (_a = lazyImage === null || lazyImage === void 0 ? void 0 : lazyImage.dataset) === null || _a === void 0 ? void 0 : _a.src;
            if (lazyImage.src.indexOf(CLOCK_PATH) > -1) {
                addClockPrototype(element);
            }
            lazyImage.classList.add('visible');
        }
        element.classList.add('visible');
    }
    addIntersectionObserver(projectNodeMap) {
        const nodes = projectNodeMap.values();
        if ("IntersectionObserver" in window) {
            const lazyImageObserver = new IntersectionObserver((entries) => {
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
                lazyImageObserver.observe(node);
            }
        }
    }
    async loadAndAppendData(dataPath) {
        this.data = await util.loadData(dataPath);
        if (!this.data) {
            return;
        }
        this.projectNodeMap = getProjectNodeMap(this.data.PORTFOLIO);
        this.addIntersectionObserver(this.projectNodeMap);
        createJobs(this.data.RESUME);
        appendKeywords(util.getKeyWords(this.data.PORTFOLIO));
        this.addDropdownClickHandler();
    }
    showAllProjectsOnFirstSearch() {
        if (this.firstSearch) {
            for (const node of this.projectNodeMap.values()) {
                this.showProject(node);
            }
            this.firstSearch = false;
        }
    }
    handleSearchInput() {
        if (this.searchInput) {
            const searchValue = this.searchInput.value;
            const elementsToFadeOut = [];
            const elementsToFadeIn = [];
            this.showAllProjectsOnFirstSearch();
            for (const [project, node] of this.projectNodeMap.entries()) {
                if (searchValue && !shouldShowProject(searchValue, project.keywords, project.title)) {
                    elementsToFadeOut.push(node);
                }
                else {
                    elementsToFadeIn.push(node);
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