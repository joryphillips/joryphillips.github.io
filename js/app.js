function scrollToId(e) {
    e.preventDefault();
    const hash = e.target.hash;
    const scrollTargetEl = document.querySelector(hash);
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;
    if (scrollTargetEl) {
        const scrollTargetY = scrollTargetEl.offsetTop - headerHeight;
        window.scroll({ top: scrollTargetY, behavior: 'smooth' });
        history.pushState(null, null, hash);
    }
}
function onVisibilityMutation(mutations, timeout = 200) {
    requestAnimationFrame(() => {
        for (const mutation of mutations) {
            const mutationTarget = mutation.target;
            if (mutation.oldValue.includes('display-none') && !mutationTarget.classList.contains('display-none')) {
                mutationTarget.classList.add('visible');
            }
            else if (mutation.oldValue.includes('visible') && !mutationTarget.classList.contains('visible')) {
                setTimeout(() => {
                    mutationTarget.classList.add('display-none');
                }, timeout);
            }
        }
    });
}
function addMutationObserver(element, callback, config = { attributes: true, attributeOldValue: true }) {
    if (element && callback && config) {
        const mutationObserver = new MutationObserver(callback);
        mutationObserver.observe(element, config);
    }
}
function fadeOut(elements, timeout = 200) {
    const visibilityMutation = (mutations) => onVisibilityMutation(mutations, timeout);
    for (const el of elements) {
        addMutationObserver(el, visibilityMutation);
        el.classList.remove('visible');
    }
}
function fadeIn(elements, timeout = 200) {
    const visibilityMutation = (mutations) => onVisibilityMutation(mutations, timeout);
    for (const el of elements) {
        addMutationObserver(el, visibilityMutation);
        el.classList.remove('display-none');
    }
}
function debounce(func, context, wait = 250) {
    let timeout;
    return () => {
        const later = () => {
            timeout = null;
            func.apply(context);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (!timeout) {
            func.apply(context);
        }
    };
}
function getKeyWords(list) {
    const keywords = new Set();
    if (list) {
        for (const item of list) {
            for (const word of item.keywords) {
                keywords.add(word.toLowerCase());
            }
        }
    }
    return keywords;
}
function kebabCase(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/gi, '-');
}
function addScrollClickHandlers(selector) {
    const links = document.querySelectorAll(selector);
    for (const link of links) {
        link.addEventListener('click', scrollToId, false);
    }
}

var Selector;
(function (Selector) {
    Selector["SEARCH_INPUT"] = "input[type=\"search\"]";
    Selector["ROLE_LISTBOX"] = "[role=\"listbox\"]";
    Selector["ROLE_OPTION"] = "[role=\"option\"]";
    Selector["JOB_TEMPLATE"] = "#job";
    Selector["KEYWORDS_TEMPLATE_ID"] = "#keywords";
    Selector["PROJECT_TEMPLATE_ID"] = "#project";
    Selector["PROJECT_HOLDER"] = ".project-holder";
    Selector["PROJECT_IMAGE"] = "img";
    Selector["PROJECT"] = ".proj";
    Selector["TITLE"] = ".title";
    Selector["JOB_HOLDER"] = ".job-holder";
    Selector["NAVIGATION_LINK"] = "nav a";
})(Selector || (Selector = {}));

const RESUME = [{
        "date": "Sept 2015 - present",
        "place": "Google, UX Engineer",
        "summary": "Designing & developing apps, UIs, widgets & ways to share & shape actionable information.",
        "detail": "Developed a web app from conception through implementation to allow the Android UX team to better share their work. Developed a rapid prototyping app for the Google Store UX team. Designed and developed a web app for UX researchers to store, find, and share study findings. Also designed identity-building illustrations and several shipped Material-design emoji."
    }, {
        "date": "Jan 2014 - Sept 2015",
        "place": "Freelance Designer/Developer",
        "summary": "Designed & built web sites, apps, presentations; general design consulting.",
        "detail": "Designed and developed a handful of client websites, also providing messaging, content advice, graphic design, and production. Developed a prototype/MVP web app to help medical clinics with green business guidelines. Consulted as a Creative Director for a boutique branding firm, including communication, visual design, and technical advice."
    }, {
        "date": "Aug 2011 - Dec 2013",
        "place": "City of Santa Monica",
        "summary": "Revised framework for future development; managed  engagement & analysis; delivered lots of presentations.",
        "detail": "Led effort to rewrite City's zoning code. Designed and produced multi-platform content: reports, presentations, graphics, engagement materials for print, broadcast, and web. Result: a draft zoning ordinance for public review."
    }, {
        "date": "Jul 2008 - Aug 2011",
        "place": "Rios Clementi Hale Studios",
        "summary": "Bridged the gap between design and law to help move a significant destination and economic engine forward.",
        "detail": "Helped get the Universal Studios Master Plan adopted. Design, coordination, and production of conceptual drawings, illustrations, 3D models, multi-format presentations, maps, layout & publishing of documents, and other materials."
    }, {
        "date": "May 2006 - Jul 2008",
        "place": "City of West Hollywood",
        "summary": "Analyzed & delivered recommendations regarding other people's well-designed, and not well-designed, development proposals.",
        "detail": "Analysis and presentation of urban design and planning-related issues."
    }, {
        "date": "Apr 2000 - Feb 2006",
        "place": "City of Seattle",
        "summary": "Led major policy changes to help make Seattle more livable, walkable, and sustainable.",
        "detail": "Produced plans, reports, graphics, and presentations leading to tangible improvements in Seattle's physical environment. First urban planner at the City of Seattle to use digital 3D modeling to inform outreach and analysis related to changes to zoning and building typologies."
    }, {
        "date": "Aug 1997 - April 2000",
        "place": "Arai/Jackson Architects & Planners",
        "summary": "Designed & produced posters and giant documents; learned to manage projects; made plenty of mistakes.",
        "detail": "Design, production, content of various urban design and planning projects."
    }];
const PORTFOLIO = [{
        "title": "comprehensive design + implementation",
        "imageSources": ["test-result-details.png"],
        "keywords": ["ux", "ui", "develop", "Google", "Android"]
    },
    {
        "title": "web component wireframe",
        "imageSources": ["target-row-pies-wireframe.jpg"],
        "keywords": ["ux", "ui", "wireframe", "Google", "Android"]
    },
    {
        "title": "concept diagrams",
        "imageSources": ["grid-test-views@3x.png"],
        "keywords": ["conceptual", "diagram", "communication", "Google", "Android"]
    },
    {
        "title": "notification CRUD app",
        "imageSources": ["notification-crud-edit.png"],
        "keywords": ["ux", "ui", "develop", "Google", "Android"]
    },
    {
        "title": "lightweight webpage generator",
        "imageSources": ["ux-page-crud.png"],
        "keywords": ["ux", "ui", "develop", "Google", "Android"]
    },
    {
        "title": "mojibrush.co ui/ux + oss contributions",
        "imageSources": ["moji-brush.png"],
        "keywords": ["ux", "ui", "develop", "fun"]
    },
    {
        "title": "make a webpage from Google Sheets",
        "imageSources": ["ux-sheet-stepper.png"],
        "keywords": ["ux", "ui", "develop", "Google", "Android"]
    },
    {
        "title": "contrast study",
        "imageSources": ["material-gray-contrast-ratio-study.png"],
        "keywords": ["ux", "ui", "accessibility", "Google", "Android"]
    },
    {
        "title": "sketchy wireframe",
        "imageSources": ["sketchy-wireframe.png"],
        "keywords": ["ux", "ui", "wireframe", "sketch", "Google", "Android"]
    },
    {
        "title": "four shipped Material emoji",
        "imageSources": ["four-material-emoji.svg"],
        "keywords": ["illustration", "Material", "fun", "Google", "Android"]
    },
    {
        "title": "imagery exploration",
        "imageSources": ["dichotomy-01.png"],
        "keywords": ["presentation", "conceptual", "communication", "Google", "Android"]
    },
    {
        "title": "identity/branding illustrations",
        "imageSources": ["droid-4-up.svg"],
        "keywords": ["illustration", "fun", "Google", "Android"]
    },
    {
        "title": "concept for research logo",
        "imageSources": ["UERchives-magnifying-glass-exag_480.png"],
        "keywords": ["illustration", "Material", "fun", "Google", "Android"]
    },
    {
        "title": "dancing t-rex",
        "imageSources": ["dancing-dino.gif"],
        "keywords": ["fun", "Google", "Android"]
    },
    {
        "title": "sustainable healthcare website",
        "date": "2015",
        "imageSources": ["eksh-desktop.jpg"],
        "description": "Erika Kimball Sustainable Healthcare is a website I designed and developed using a lightweight CSS library and the GreenSock Javascript animation library for subtle parallax scrolling effects. I researched and incorporated a custom CMS/blog solution to fit the client's needs, and designed the logo in Adobe Illustrator.",
        "href": "http://erikakimball.com/",
        "category": ["Design/Dev", "Communication"],
        "special": false,
        "keywords": ["ux", "ui", "develop", "communication", "freelance"]
    },
    {
        "title": "mobile web app",
        "date": "2014",
        "imageSources": ["rumblemunk-mobile.jpg"],
        "description": "This is a web app that I designed and developed for a San Francisco-based DJ. It includes a music player featuring the DJ's productions and music sets and was designed with a particular focus on mobile UI. I designed the logo, but the DJ selects his own background pictures. :)",
        "href": "http://rumblemunk.com",
        "category": ["Design/Dev", "Communication", "freelance"],
        "special": false,
        "keywords": ["ux", "ui", "develop"]
    },
    {
        "title": "Global Brand Works Website",
        "date": "2015",
        "imageSources": ["gbw.jpg"],
        "description": "I designed and developed the Global Brand Works website with legibility, navigation, and mobile readiness in mind. The site was created with custom HTML/CSS/Javascript/jQuery/PHP for interactivity and a contact form. I also produced brand color palettes and logo refinements in Illustrator. Further, I helped this boutique branding agency and their clients with general design, graphic, and presentation needs.",
        "href": "http://globalbrandworks.com/",
        "category": ["Design/Dev", "Communication"],
        "special": false,
        "keywords": ["ux", "ui", "develop", "communication", "freelance"]
    },
    {
        "title": "Illustration",
        "date": "2009",
        "imageSources": ["shanghai.jpg", "shanghai-full-width-section-trnsp.png"],
        "description": "As part of a competition to master plan a portion of a new theme park and entertainment destination in Shanghai, I digitally painted section and elevations line drawings to convey exiting, active retail, restaurant, and entertainment areas. Drawing from a variety of textures and patterns found in design and fashion magazines, I experimented with transparency, overlap, and varying hues to reach an appropriate balance. This is a small, zoomed-in portion of one of several drawings, which were presented on large-format presentation boards.",
        "category": ["Communication"],
        "special": false,
        "keywords": ["urban design", "illustration", "fun", "communication"]
    },
    {
        "title": "Wall Clock Product Design/Prototype",
        "date": "2010",
        "imageSources": ["heathrow-clock.svg"],
        "description": "Tasked with coming up with product ideas that could build upon notNeutral's (Rios Clementi Hale Studio's product design brand) successful CityPlates, I started analyzing aerial photographs of different cities for inspiration. I was especially drawn to the way airports look from above. This London Heathrow graphic was originally presented as an idea for a large-scale wall graphic and clock, with the runways as moving hands. Here I have streamlined the original Illustrator file with SVG and used Javascript to make it a functional time-telling graphic.",
        "category": ["Communication"],
        "special": true,
        "keywords": ["conceptual", "prototyping", "maps"]
    },
    {
        "title": "Mapping & Data Analysis",
        "date": "2009",
        "imageSources": ["pub-facilities-map.svg"],
        "description": "I designed and created this interactive map in Adobe Illustrator after exporting the data from ArcGIS. The map was originally used at multiple scales in a presentation to elected officials and planners to describe the abundance of public facilities within five miles of the Univeral Studios site. The icons are based on universally-recognized symbols for the activities they represent. I recently refined the map as an SVG and used Javascript to allow its layers to be toggled by clicking on elements in the legend.",
        "category": ["Urban Design & Planning", "Communication"],
        "special": false,
        "keywords": ["conceptual", "urban design", "urban planning", "communication", "maps"]
    },
    {
        "title": "Universal Studios Master Plan",
        "date": "2011",
        "imageSources": ["usmp.png"],
        "description": "While working at Rios Clementi Hale Studios, I produced materials and coordinated a team of multidisciplinary designers to help Universal Studios create an 'entitlement package' that adopted their new master plan. The project's needs constantly shifted, and included maintaining a building inventory, creating view simulations, 3D modeling, mapping, diagramming, and preparing various presentation materials. This important plan was subsequently adopted by the City of Los Angeles and the County of Los Angeles.",
        "href": "http: //www.nbcuniversalevolution.com/",
        "category": ["Urban Design & Planning", "Communication"],
        "special": false,
        "keywords": ["urban design", "urban planning", "communication"]
    },
    {
        "title": "not a real emoji",
        "imageSources": ["incredulous_goat.png"],
        "keywords": ["fun", "goat", "emoji"]
    }
];

const IMAGE_PATH = './images/';
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
    projectContainer.id = kebabCase(project.title);
    return document.importNode(projectTemplate.content, true);
}
function getProjectNodeMap(portfolio) {
    const projectNodeMap = new Map();
    const projectHolder = document.querySelector(Selector.PROJECT_HOLDER);
    for (const project of portfolio) {
        const projectId = kebabCase(project.title);
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
async function conditionallyLoadClockPrototype(lazyImage, parentEl) {
    if (lazyImage.src.indexOf(CLOCK_PATH) > -1) {
        const clock = await import('./clock-1c916f0f.js');
        clock.addClockPrototype(parentEl);
    }
}
class AwesomeWebPage {
    constructor() {
        this.searchInput = document.querySelector(Selector.SEARCH_INPUT);
        this.searchDropdown = document.querySelector(Selector.ROLE_LISTBOX);
        this.lazyImageObservers = [];
        this.firstSearch = true;
        this.addFocusHandler(this.searchInput);
        addScrollClickHandlers(Selector.NAVIGATION_LINK);
        this.addKeyupHandler();
        this.loadAndAppendData();
    }
    addFocusHandler(searchInput) {
        if (searchInput) {
            searchInput.addEventListener('focus', () => this.toggleDropdown());
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
        const debounceInput = debounce(this.handleSearchInput, this, DEBOUNCE_TIMEOUT);
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
            conditionallyLoadClockPrototype(lazyImage, element);
            lazyImage.classList.add('visible');
        }
        element.classList.add('visible');
    }
    addIntersectionObserver(projectNodeMap) {
        const nodes = projectNodeMap.values();
        if ('IntersectionObserver' in window) {
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
        else {
            this.showAllProjects();
        }
    }
    loadAndAppendData() {
        this.projectNodeMap = getProjectNodeMap(PORTFOLIO);
        this.addIntersectionObserver(this.projectNodeMap);
        createJobs(RESUME);
        appendKeywords(getKeyWords(PORTFOLIO));
        this.addDropdownClickHandler();
    }
    showAllProjects() {
        for (const node of this.projectNodeMap.values()) {
            this.showProject(node);
        }
    }
    showAllProjectsOnFirstSearch() {
        if (this.firstSearch) {
            this.showAllProjects();
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
            fadeOut(elementsToFadeOut, VISIBILITY_TRANSITION);
            setTimeout(() => {
                fadeIn(elementsToFadeIn, VISIBILITY_TRANSITION);
            }, VISIBILITY_TRANSITION);
        }
    }
}
new AwesomeWebPage();
