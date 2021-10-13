import {html} from 'lit';

export const styles = html`
  <style>
    :host {
      display: block;
      padding-top: 5.25rem;
      padding-bottom: 3.25rem;
      padding-left: 2rem;
      padding-right: 2rem;
      opacity: 1;
      transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }

    .description {
      margin: .5rem;
      line-height: 1.7;
    }

    a {
      display: flex;
      align-items: center;
      width: 12rem;
      margin: 1rem 0;
      text-decoration: none;
      font-weight: 500;
      color: hsl(211deg 100% 25% / 90%);
      fill: hsl(211deg 100% 25% / 90%);
    }

    a > * {
      margin-right: 0.5rem;
    }

  </style>
`;
