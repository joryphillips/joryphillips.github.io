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
  description?: string;
  href?: string;
}

export const RESUME: Job[] = [
  {
    date: 'Sept 2015 - present',
    place: 'Google, UX Engineer',
    summary: 'Designing & developing apps, UIs, widgets & ways to share & shape actionable information.',
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
    title: 'Gallery.io web engineering',
    date: '2019',
    description: `Google's Material Gallery web appplication evolved from iterations of earlier prototype applications written in ES5-era AngularJS. I led team-wide efforts to modernize the application, starting with the need to update how it was being built and bundled. This unblocked a TypeScript migration, which I also led, along with efforts to componentize the application and update state management using more modern libraries. As a result, thousands of tech debt issues have been closed and the application's bundle size has been reduced by at least 33%.`,
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
  },
  {
    title: 'comprehensive design + implementation',
    imageSources: ['test-result-details.png'],
    keywords: ['ux', 'ui', 'develop', 'Google', 'Android', 'typescript'],
  },
  {
    title: 'web component wireframe',
    imageSources: ['target-row-pies-wireframe.jpg'],
    keywords: ['ux', 'ui', 'wireframe', 'Google', 'Android'],
  },
  {
    title: 'concept diagrams',
    imageSources: ['grid-test-views@3x.png'],
    keywords: ['conceptual', 'diagram', 'communication', 'Google', 'Android'],
  },
  {
    title: 'notification CRUD app',
    imageSources: ['notification-crud-edit.png'],
    keywords: ['ux', 'ui', 'develop', 'Google', 'Android', 'typescript'],
  },
  {
    title: 'lightweight webpage generator',
    imageSources: ['ux-page-crud.png'],
    keywords: ['ux', 'ui', 'develop', 'Google', 'Android'],
  },
  {
    title: 'mojibrush.co ui/ux + oss contributions',
    imageSources: ['moji-brush.png'],
    href: 'https://mojibrush.co',
    keywords: ['ux', 'ui', 'develop', 'fun'],
  },
  {
    title: 'make a webpage from Google Sheets',
    imageSources: ['ux-sheet-stepper.png'],
    keywords: ['ux', 'ui', 'develop', 'Google', 'Android'],
  },
  {
    title: 'contrast study',
    imageSources: ['material-gray-contrast-ratio-study.png'],
    keywords: ['ux', 'ui', 'accessibility', 'Google', 'Android'],
  },
  {
    title: 'sketchy wireframe',
    imageSources: ['sketchy-wireframe.png'],
    keywords: ['ux', 'ui', 'wireframe', 'sketch', 'Google', 'Android'],
  },
  {
    title: 'four shipped Material emoji',
    imageSources: ['four-material-emoji.svg'],
    keywords: ['illustration', 'Material', 'fun', 'Google', 'Android'],
  },
  {
    title: 'imagery exploration',
    imageSources: ['dichotomy-01.jpg'],
    keywords: ['presentation', 'conceptual', 'communication', 'Google', 'Android'],
  },
  {
    title: 'identity/branding illustrations',
    imageSources: ['droid-4-up.svg'],
    keywords: ['illustration', 'fun', 'Google', 'Android'],
  },
  {
    title: 'concept for research logo',
    imageSources: ['UERchives-magnifying-glass-exag_480.png'],
    keywords: ['illustration', 'Material', 'fun', 'Google', 'Android'],
  },
  {
    title: 'dancing t-rex',
    imageSources: ['dancing-dino.gif'],
    keywords: ['fun', 'Google', 'Android'],
  },
  {
    title: 'sustainable healthcare website',
    date: '2015',
    imageSources: ['eksh-desktop.jpg'],
    description: `Erika Kimball Sustainable Healthcare is a website I designed and developed using a lightweight animation library for subtle parallax scrolling effects. I researched and incorporated a custom CMS/blog solution to fit the client's needs, and designed the logo in Adobe Illustrator.`,
    keywords: ['ux', 'ui', 'develop', 'communication', 'freelance'],
  },
  {
    title: 'mobile web app',
    date: '2014',
    imageSources: ['rumblemunk-mobile.jpg'],
    keywords: ['ux', 'ui', 'develop'],
  },
  {
    title: 'Global Brand Works Website',
    date: '2015',
    imageSources: ['gbw.jpg'],
    description: 'I designed and developed the Global Brand Works website with legibility, navigation, and mobile readiness in mind. The site was completely custom-built with HTML/CSS/JavaScript/PHP for interactivity. For a time, I also served as the Creative Director for this boutique branding agency and helped their clients with general design, graphic, and presentation needs.',
    href: 'https://globalbrandworks.com/',
    keywords: ['ux', 'ui', 'develop', 'communication', 'freelance'],
  },
  {
    title: 'Illustration',
    date: '2009',
    imageSources: ['shanghai-outlines.jpg', 'shanghai-full-width-section-trnsp.png'],
    description: 'As part of a competition to master plan a portion of a new theme park and entertainment destination, I digitally painted section and elevations line drawings to convey exiting, active retail, restaurant, and entertainment areas. Drawing from a variety of textures and patterns found in design and fashion magazines, I experimented with transparency, overlap, and varying hues to reach an appropriate balance. This is a small, zoomed-in portion of one of several drawings, which were presented on large-format presentation boards.',
    keywords: ['urban design', 'illustration', 'fun', 'communication'],
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
    description: 'I designed and created this interactive map in Adobe Illustrator after exporting the data from ArcGIS. The map was originally used at multiple scales in a presentation to elected officials and planners to describe the abundance of public facilities within five miles of the Univeral Studios site. The icons are based on universally-recognized symbols for the activities they represent.',
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
  },
];
