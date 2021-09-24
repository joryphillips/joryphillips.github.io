export interface Job {
  date: string;
  place: string;
  summary: string;
  detail: string;
}

export interface Project {
  title: string;
  imageSources: string[];
  keywords: string[];
  date?: string;
  description: string;
  href?: string;
}

export const RESUME: Job[] = [
  {
    date: 'Sept 2015 - Sept 2021',
    place: 'Google, UX Engineer',
    summary: 'Designed & developed apps, UIs, widgets & ways to share & shape actionable information. Started as web designer; finished as a tech lead.',
    detail: 'Developed a web app from conception through implementation to allow the Android UX team to better share their work. Developed a rapid prototyping app for the Google Store UX team. Designed and developed a web app for UX researchers to store, find, and share study findings. Also designed identity-building illustrations and several shipped Material-design emoji.',
  }, {
    date: 'Jan 2014 - Sept 2015',
    place: 'Freelance Designer/Developer',
    summary: 'Designed & built web sites, apps, presentations; general design consulting.',
    detail: 'Designed and developed a handful of client websites, also providing messaging, content advice, graphic design, and production. Developed a prototype/MVP web app to help medical clinics with green business guidelines. Consulted as a Creative Director for a boutique branding firm, including communication, visual design, and technical advice.',
  }, {
    date: 'Aug 2011 - Dec 2013',
    place: 'City of Santa Monica',
    summary: 'Revised framework for future development; managed  engagement & analysis; delivered lots of presentations.',
    detail: `Led effort to rewrite City's zoning code. Designed and produced multi-platform content: reports, presentations, graphics, engagement materials for print, broadcast, and web. Result: a draft zoning ordinance for public review.`,
  }, {
    date: 'Jul 2008 - Aug 2011',
    place: 'Rios Clementi Hale Studios',
    summary: 'Bridged the gap between design and law to help move a significant destination and economic engine forward.',
    detail: 'Helped get the Universal Studios Master Plan adopted. Design, coordination, and production of conceptual drawings, illustrations, 3D models, multi-format presentations, maps, layout & publishing of documents, and other materials.',
  }, {
    date: 'May 2006 - Jul 2008',
    place: 'City of West Hollywood',
    summary: `Analyzed & delivered recommendations regarding other people's well-designed, and not well-designed, development proposals.`,
    detail: 'Analysis and presentation of urban design and planning-related issues.',
  }, {
    date: 'Apr 2000 - Feb 2006',
    place: 'City of Seattle',
    summary: 'Led major policy changes to help make Seattle more livable, walkable, and sustainable.',
    detail: `Produced plans, reports, graphics, and presentations leading to tangible improvements in Seattle's physical environment. First urban planner at the City of Seattle to use digital 3D modeling to inform outreach and analysis related to changes to zoning and building typologies.`,
  }, {
    date: 'Aug 1997 - April 2000',
    place: 'Arai/Jackson Architects & Planners',
    summary: 'Designed & produced posters and giant documents; learned to manage projects; learned from plenty of mistakes.',
    detail: 'Design, production, content of various urban design and planning projects.',
  }];


export const PORTFOLIO: Project[] = [
  {
    title: 'Mock for plan review UI',
    date: '2021',
    description: `A high-fidelity mock for a user interface allowing fluid communication between an agency and applicant.`,
    imageSources: ['plan_review_mock.jpg'],
    keywords: ['software', 'ux', 'ui', 'mock', 'communication'],
  },
  {
    title: 'front-end tech lead',
    date: '2020-2021',
    description: `I was the tech lead for a team of front-end engineers working within the design systems management branch of Material. I prototyped features, led building a production-grade app for managing tokens and design system details, and mentored and helped other engineers add features.`,
    imageSources: ['Google_Material_Design_Logo.svg'],
    keywords: ['software', 'typescript', 'tooling', 'develop', 'engineer', 'Google', 'Material'],
  },
  {
    title: 'Gallery.io web engineering',
    date: '2019',
    description: `Google's Material Gallery web appplication evolved from iterations of earlier prototype applications written in ES5-era AngularJS. I led team-wide efforts to modernize the application, resulting in thousands of tech debt issues closed, more dev-friendly componentization, and a bundle size reduction of at least 33%. While the app is being turned down due to the popularity of Figma, I am very proud of the progress we made on it and the lessons it taught.`,
    href: 'https://gallery.io',
    imageSources: ['gallery.jpg'],
    keywords: ['software', 'typescript', 'tooling', 'modernization', 'develop', 'engineer', 'Google', 'Material'],
  },
  {
    title: 'web performance analysis',
    date: '2020',
    href: 'https://github.com/joryphillips/joryphillips.github.io/issues/8#issuecomment-611778792',
    imageSources: ['web-perf.png'],
    keywords: ['software', 'develop', 'engineer', 'performance', 'tooling'],
    description: 'I did a performance assessment on my own website and wrote up findings in a GitHub issue. If you know of a page that is loading too slowly, the methods I applied might help!',
  },
  {
    title: 'full app design for Android Build',
    imageSources: ['test-result-details.png'],
    keywords: ['ux', 'ui', 'develop', 'Google', 'Android', 'typescript', 'mock'],
    description: 'I was the only UXer on the Android Build team for a while, which meant I got to lead the design of some very complex things, like this tool used to help engineers chase down broken builds and failing tests. This was an early mock, and most of what is represented here has been built and refined by the team.',
  },
  {
    title: 'build and test status wireframe',
    imageSources: ['target-row-pies-wireframe.jpg'],
    keywords: ['ux', 'ui', 'wireframe', 'Google', 'Android'],
    description: 'This was a quick ugly iPad drawing done to visually prove out the concept of integrating complext test and basic build status information. It was then engineered by me and others on the Android Build team. I implemented a pretty sweet web component for displaying those test results pie charts, too. 😁 🥧',
  },
  {
    title: 'concept diagrams',
    imageSources: ['grid-test-views@3x.png'],
    keywords: ['conceptual', 'diagram', 'communication', 'Google', 'Android'],
    description: 'These are a couple conceptual diagrams used to discuss the multidimensional complexity of tracking builds, tests, and devices. Included here mostly to add additional visual interest. 🙃',
  },
  {
    title: 'notification CRUD app',
    imageSources: ['notification-crud-edit.png'],
    keywords: ['ux', 'ui', 'develop', 'Google', 'Android', 'typescript'],
    description: 'I designed and implemented a tool for adding, editing, and removing system alerts across Android internal sites.',
  },
  {
    title: 'lightweight webpage generator',
    imageSources: ['ux-page-crud.png'],
    keywords: ['ux', 'ui', 'develop', 'Google', 'Android'],
    description: 'I made web app that allowed Google teams to generate their own internal sites, pulling content from Sheets, Drive, custom Markdown, and Google\'s internal bug reporting tool. This tool helped get at least two versions of Android OS get designed and shipped on time.',
  },
  {
    title: 'mojibrush.co ui/ux + oss contributions',
    imageSources: ['moji-brush.png'],
    href: 'https://mojibrush.co',
    keywords: ['ux', 'ui', 'develop', 'fun'],
    description: 'I wireframed the UI & UX for this spectacular progressive web app on a pizza box in a microkitchen, then helped build it.',
  },
  {
    title: 'make a webpage from Google Sheets',
    imageSources: ['ux-sheet-stepper.png'],
    keywords: ['ux', 'ui', 'develop', 'Google', 'Android'],
    description: 'At Google there is a common need to quickly spin up websites that pull content from Google Sheets. I made a web app that allowed people to make pages that do that, and walked them through validation, column select, sort options, etc.',
  },
  {
    title: 'four shipped Material emoji',
    imageSources: ['four-material-emoji.svg'],
    keywords: ['illustration', 'Material', 'fun', 'Google', 'Android'],
    description: 'I designed these four emoji for the release of Android 6. Almost all emojis have been updated since then, but my design for Reminder Ribbon got put back into use for Android 12!',
  },
  {
    title: 'imagery exploration',
    imageSources: ['dichotomy-01.jpg'],
    keywords: ['presentation', 'conceptual', 'communication', 'Google', 'Android'],
    description: 'Every designer and presenter eventually has to come up with imagery that helps convey a problem or a solution. This is one I made to help in a presentation about device notification overload.',
  },
  {
    title: 'identity/branding illustrations',
    imageSources: ['droid-4-up.svg'],
    keywords: ['illustration', 'fun', 'Google', 'Android'],
    description: 'I designed these for the Android UX research team as an exercise in helping them achieve brand cohesiveness. The Android figurine is a beloved among research participants, making it ideal as a character-defining visual representation for Android researchers.',
  },
  {
    title: 'dancing t-rex',
    imageSources: ['dancing-dino.gif'],
    keywords: ['fun', 'Google', 'Android'],
    description: 'I did not design this dinosaur, but I did make him dance.',
  },
  {
    title: 'Global Brand Works Website',
    date: '2015',
    imageSources: ['gbw.jpg'],
    description: 'I designed and developed the Global Brand Works website with legibility, navigation, and mobile readiness in mind. The site was completely custom-built and the overall design direction has been steadfast for a half decade! For a time, I also served as the Creative Director for this boutique branding agency and helped their clients with general design, graphic, and presentation needs.',
    href: 'https://globalbrandworks.com/',
    keywords: ['ux', 'ui', 'develop', 'communication', 'freelance'],
  },
  {
    title: 'Wall Clock Product Design/Prototype',
    date: '2010',
    imageSources: ['heathrow-clock.svg'],
    description: `Tasked with coming up with product ideas that could build upon notNeutral's (Rios Clementi Hale Studio's product design brand) successful CityPlates, I started analyzing aerial photographs of different cities for inspiration. I was especially drawn to the way airports look from above. This London Heathrow graphic was originally presented as an idea for a large-scale wall graphic and clock, with the runways as moving hands. Here I have streamlined the original Illustrator file with SVG and used Javascript to make it a functional time-telling graphic.`,
    keywords: ['conceptual', 'prototyping', 'maps'],
  },
  {
    title: 'Mapping & Data Analysis',
    date: '2009',
    imageSources: ['pub-facilities-map.svg'],
    description: 'I designed and created this map in Adobe Illustrator after exporting the data from ArcGIS. The map was originally used at multiple scales in a presentation to elected officials and planners to describe the abundance of public facilities within five miles of the Univeral Studios site. The icons are based on universally-recognized symbols for the activities they represent.',
    keywords: ['conceptual', 'urban design', 'urban planning', 'communication', 'maps'],
  },
  {
    title: 'Universal Studios Master Plan',
    date: '2011',
    imageSources: ['usmp.png'],
    description: `While working at Rios Clementi Hale Studios, I produced materials and coordinated a team of multidisciplinary designers to help Universal Studios create an 'entitlement package' that adopted their new master plan. The project's needs constantly shifted, and included maintaining a building inventory, creating view simulations, 3D modeling, mapping, diagramming, and preparing various presentation materials. This important plan was subsequently adopted by the City of Los Angeles and the County of Los Angeles.`,
    keywords: ['urban design', 'urban planning', 'communication'],
  },
  {
    title: 'not a real emoji',
    imageSources: ['incredulous_goat.png'],
    keywords: ['fun', 'goat', 'emoji'],
    description: 'Like the dancing t-rex, I designed neither the goat, nor the sunglasses, but I did put one on the other to make a superior emoji.',
  },
];
