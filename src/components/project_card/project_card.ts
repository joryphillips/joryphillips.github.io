import { html } from 'lit';
import {useEffect} from 'haunted';

import {component} from '../../util/haunted_component';

import {Project} from '../../../data/jory';
import {Selector, addIntersectionObserver, addStyles, kebabCase} from '../../util/util';
import {styles} from './styles';

const IMAGE_PATH = './images/';
const CLOCK_PATH = 'heathrow-clock.svg';

interface ProjectCardProps {
  project: Project,
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

function ProjectCard(this: unknown, {project, selected}: ProjectCardProps) {

  useEffect(()=> {
    // img loading ="lazy" not available in Safari yet.
    addIntersectionObserver({
      element: this as HTMLElement,
      onIntersection: showProjectAndLoadImage,
    });
  }, []);

  const imageSourcePath = IMAGE_PATH + project.imageSources[0];

  const queryTitle = encodeURIComponent(kebabCase(project.title));

    addStyles(this, [styles]);

  return html`
    <a
      tabindex=${selected ? -1 : 0}
      href="/?project=${queryTitle}"
      class="image-container"
      aria-label="Get more project info"
    ><img
        class="image block"
        data-src="${imageSourcePath}"
        alt="image of ${project.title}">
    </a>
    <div class="project-card-title">
      <h2 class="title">${project.title}</h2>
      <div class="info-icons">
        ${project.href ? html `
          <a class="link" href="${project.href}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
            <span class="visible-hidden">Go to project reference</span>
          </a>
        ` : null}
      </div>
    </div>
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
