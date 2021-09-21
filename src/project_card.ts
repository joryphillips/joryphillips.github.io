import {html, component, useEffect} from 'haunted';

import {Project} from '../data/jory';
import {Selector} from './selectors';
import {addIntersectionObserver} from './util';
const IMAGE_PATH = './images/';
const CLOCK_PATH = 'heathrow-clock.svg';

interface ProjectCardProps {
  project: Project,
  handleInfoClick: (project: Project)=> void,
  handleInfoCloseClick: ()=> void,
  selected: boolean,
}

/**
 * Special case for prototype clock image. This conditionally loads the clock.ts
 * code only when the original static SVG has been loaded, allowing for code
 * splitting.
 */
async function conditionallyLoadClockPrototype(lazyImage: HTMLImageElement, parentEl: Element) {
  if (lazyImage.src.indexOf(CLOCK_PATH) > -1) {
    const clock = await import('./clock');
    clock.addClockPrototype(lazyImage, parentEl);
  }
}

/**
 * Cleverly swap the data-src value into the src attribute to load images when
 * we want.
 */
function showProjectAndLoadImage(element: Element) {
  const lazyImage = element.shadowRoot.querySelector(Selector.PROJECT_IMAGE) as HTMLImageElement;
  if (!lazyImage) return;

  lazyImage.src = lazyImage?.dataset?.src;
  conditionallyLoadClockPrototype(lazyImage, element);
  lazyImage.classList.add('visible');
}


const styles = html`
  <style>
    :host {
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }

    .project-card-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .5rem;
    }

    .description {
      margin: .5rem;
      line-height: 1.7;
    }

    .description[hidden] {
      display: none;
    }

    .info-icons, .info-icons .info, .info-icons .link {
      display: flex;
      align-items: center;
    }

    .info-icons .info, .info-icons .link {
      background-color: transparent;
      opacity: .7;
      padding: 0 0 0 0.7rem;
    }

    .info-icons .info:hover, .info-icons .link:hover {
      opacity: 1;
    }

    .info img, .link img {
      width: 1.6rem;
      height: 1.6rem;
    }

    .info[hidden], .link[hidden] {
      display: none;
    }

    h5.title {
      margin: 0;
      font-size: 1.1rem;
    }

    .image-container img {
      opacity: 0;
    }

    .image-container img.visible {
      opacity: 1;
    }

    .width-100 {
      width: 100%
    }

    .image-container {
      display: flex;
      height: 300px;
      padding: 8px;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      background-color: #FFF;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .image-container > * {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }

    .button, button {
      font-family: inherit;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      line-height: 1.125rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin: 0;
      height: auto;
      border: 1px solid transparent;
      vertical-align: middle;
      -webkit-appearance: none;
    }

    button.close[hidden] {
      display: none;
    }


  </style>
`;

function ProjectCard({project, handleInfoClick, handleInfoCloseClick, selected}: ProjectCardProps) {

  useEffect(()=> {
    // img loading ="lazy" not available in Safari yet.
    addIntersectionObserver(this, showProjectAndLoadImage);
  }, []);

  const imageSourcePath = IMAGE_PATH + project.imageSources[0];

  return html`
    ${styles}

    <div class="image-container">
      <img class="image visible block" data-src="${imageSourcePath}" alt="image of ${project.title}">
    </div>
    <div class="project-card-title">
      <h5 class="title">${project.title}</h5>
      <div class="info-icons">
        <button
          ?hidden=${!project.description}
          class="info"
          @click=${()=> handleInfoClick(project)}
        ><img src="${IMAGE_PATH}info-black-18dp.svg"></button>
        <a ?hidden=${!project.href} class="link" href="${project.href}">
          <img src="${IMAGE_PATH}launch-black-18dp.svg">
        </a>
      </div>
    </div>
    <p ?hidden=${!selected} class="description">${project.description}</p>
    <button ?hidden=${!selected} class="close" @click=${handleInfoCloseClick}>Close</button>
  `;
}

// any is needed to deal with typing issue in haunted
customElements.define('project-card', component(ProjectCard as any));
