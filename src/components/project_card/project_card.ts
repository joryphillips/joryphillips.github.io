import {html, render} from 'lit';
import haunted, {useEffect} from 'haunted';


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
  const lazyImage = element.shadowRoot?.querySelector(Selector.PROJECT_IMAGE) as HTMLImageElement|null;
  if (!lazyImage || !lazyImage.dataset.src) return;
  lazyImage.src = lazyImage.dataset.src;
  conditionallyLoadClockPrototype(lazyImage, element);
  lazyImage.classList.add('visible');
}


const styles = html`
  <style>
    :host {
      opacity: 1;
      transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }

    .project-card-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .25rem .5rem;
      height: 2rem;
    }

    :host([selected]) .project-card-title {
      padding: 2rem 0.5rem 1rem .5rem;
    }

    .description {
      margin: .5rem;
      line-height: 1.7;
    }

    .description[hidden] {
      visibility: hidden;
    }

    .info-icons, .info-icons .info, .info-icons .link {
      display: flex;
      align-items: center;
    }

    .info-icons .link {
      background-color: transparent;
      opacity: .7;
      padding: 0 0 0 0.7rem;
    }

    .info-icons .link:hover {
      opacity: 1;
    }

    .link img {
      width: 1.6rem;
      height: 1.6rem;
    }

    .link[hidden] {
      visibility: hidden;
    }

    h2.title {
      margin: 0;
      font-size: 1rem;
      font-weight: 500;
    }

    :host([selected]) h2.title {
      font-size: 1.5rem;
    }

    .width-100 {
      width: 100%
    }

    .image-container {
      display: flex;
      height: 300px;
      width: 100%;
      padding: 8px;
      overflow: hidden;
      justify-content: center;
      align-items: center;
      background-color: #FFF;
      border: 1px solid rgba(0, 0, 0, 0.2);
      transition: box-shadow .15s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }

    @media screen and (max-width: 400px) {
      .image-container {
        height: 150px;
      }
      :host([selected]) .image-container {
        height: 300px;
      }
    }

    @media screen and (min-width: 600px) {
      :host([selected]) .image-container {
        height: 600px;
      }
    }

    :host([selected]) button.image-container {
      pointer-events: none;
    }

    button.image-container:focus {
      outline: 2px solid hsl(211deg 100% 40% / 90%)!important;
    }

    button.image-container:focus, button.image-container:hover {
      box-shadow: 0px 1px 6px 0px #8C8C8C;
    }

    .image-container img {
      opacity: 0;
      transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1.000), scale3d 0.2s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }

    .image-container:hover img.visible,
    :host([selected]) .image-container img.visible {
      opacity: 1;
    }

    .image-container img.visible {
      opacity: .95;
    }

    .image-container > * {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }

    button {
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

    button.close {
      margin: 1rem 0 0 .5rem;
      height: 2.5rem;
      border: rgba(0, 0, 0, .125);
      background-color: #f0f0f0;
      color: rgba(0, 32, 66, 0.9);
    }

    button.close[hidden] {
      visibility: hidden;
    }

    button.close:focus {
      outline: 2px solid hsl(211deg 100% 40% / 90%)!important;
    }

    button.close:hover, button.close:focus {
      background-color: rgb(115 179 221 / 17%);
    }

    .visible-hidden {
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  </style>
`;

function ProjectCard(this: unknown, {project, handleInfoClick, handleInfoCloseClick, selected}: ProjectCardProps) {

  useEffect(()=> {
    // img loading ="lazy" not available in Safari yet.
    addIntersectionObserver(this as HTMLElement, showProjectAndLoadImage);
  }, []);

  const imageSourcePath = IMAGE_PATH + project.imageSources[0];

  return html`
    ${styles}

    <button
      tabindex=${selected ? -1 : 0}
      class="image-container"
      aria-label="Get more project info"
      @click=${()=> handleInfoClick(project)}
    ><img
        class="image block"
        data-src="${imageSourcePath}"
        alt="image of ${project.title}">
    </button>
    <div class="project-card-title">
      <h2 class="title">${project.title}</h2>
      <div class="info-icons">
        ${project.href ? html `
          <a class="link" href="${project.href}">
            <img src="${IMAGE_PATH}launch-black-18dp.svg" alt="External link">
            <span class="visible-hidden">Go to project reference</span>
          </a>
        ` : ''}
      </div>
    </div>
    <p ?hidden=${!selected} class="description">${project.description}</p>
    <button
      ?hidden=${!selected}
      class="close"
      aria-label="Close detail and return to full project list"
      @click=${handleInfoCloseClick}
    >Back to project list</button>
  `;
}

type TemporaryRenderFunction = (result: unknown, container: DocumentFragment | Element)=> void;
const {component} = haunted({render: render as TemporaryRenderFunction});

customElements.define(
  'project-card',
  component<HTMLElement & ProjectCardProps>(ProjectCard, {observedAttributes: ['selected']}),
);

declare global {
  interface HTMLElementTagNameMap {
    'project-card': HTMLElement & ProjectCardProps,
  }
}
