import {html} from 'lit';

export const styles = html`
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

    svg.width-100 {
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

    :host([selected]) a.image-container {
      pointer-events: none;
    }

    a.image-container:focus {
      outline: 2px solid hsl(211deg 100% 40% / 90%)!important;
    }

    a.image-container:focus, a.image-container:hover {
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

    a {
      font-family: inherit;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      line-height: 1.125rem;
      margin: 0;
      height: auto;
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
