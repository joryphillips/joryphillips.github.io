import {html} from 'lit';
import {useEffect} from 'haunted';

import {component} from '../../util/haunted_component';

import {Project} from '../../../data/jory';
import {Selector, addIntersectionObserver} from '../../util/util';
import {styles} from './styles';

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

customElements.define(
  'project-card',
  component<HTMLElement & ProjectCardProps>(ProjectCard, {observedAttributes: ['selected']}),
);

declare global {
  interface HTMLElementTagNameMap {
    'project-card': HTMLElement & ProjectCardProps,
  }
}
