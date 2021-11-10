import { html } from 'lit';

export const styles = html`
  <style>
    :host {
      position: relative;
      display: block;
      min-height: 100vh;
    }

    main {
      padding-top: 3.25rem;
      padding-bottom: 3.25rem;
    }

    section {
      padding-top: 4rem;
      padding-bottom: 4rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    section.jumbo {
      padding-top: 2rem;
      padding-bottom: 2rem;
      text-align: center;
    }

    .jumbo h1 {
      font-size: 4rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: .15rem;
      margin-bottom: 1rem;
    }

    .jumbo h2 {
      font-size: 1.5rem;
    }

    section.summary p {
      margin: 0 0 1rem 0;
      font-size: 1.1rem;
      font-weight: 400;
      line-height: 2.2rem;
    }

    section.summary p a {
      text-decoration: none;
      font-weight: 500;
      color: hsl(211deg 100% 25% / 90%);
    }

    .container {
      display: block;
      max-width: 40rem;
      margin: 0 auto;
    }

    section.experience h1 {
      margin-bottom: 2rem;
      margin-top: 0;
      font-size: 2rem;
    }

    .job {
      margin-top: 3rem;
    }

    .job h2 {
      margin-top: 0;
      font-size: 1.17rem;
      font-weight: 500;
      display: flex;
      flex-wrap: wrap;
    }

    .job .title {
      margin-right: 0.5rem;
    }

    @media screen and (max-width: 600px) {
      .job .title {
        width: 100%;
      }
    }

    .job .title, .job .date {
      margin-top: 0.5rem;
    }

    .job p.summary {
      margin-top: .5rem;
      margin-bottom: 0;
      font-size: 1.17rem;
      font-weight: 400;
      line-height: 2rem;
    }

    footer {
      position: absolute;
      bottom: 0;
      height: 3.25rem;
      width: 100%;
      background-color: #f0f0f0;
    }

    footer a {
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-size: .75rem;
    }

    footer .container {
      display: flex;
      flex: 1 1 auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .border-bottom {
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-bottom-color: rgba(0, 0, 0, .125);
    }

    .border-top {
      border-top-style: solid;
      border-top-width: 1px;
      border-top-color: rgba(0, 0, 0, .125);
    }

    .cranberry {
      color: #c11067;
    }

    .navy {
      color: rgba(0, 32, 66, 0.9);
    }

    .cursor-pointer {
      cursor: pointer;
    }

    .button-transparent {
      position: relative;
      z-index: 2;
      color: inherit;
      background-color: transparent;
      border-radius: 0;
      border: 1px solid transparent;
    }

    .button, button {
      font-family: inherit;
      font-weight: 600;
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
      transition: background-color .15s cubic-bezier(0.645, 0.045, 0.355, 1.000);
    }

    .button:hover, .button:focus {
      background-color: rgb(115 179 221 / 17%);
    }

    .button:focus, button:focus, a:focus {
      outline: 2px solid hsl(211deg 100% 40% / 90%)!important;
    }

    .button:focus, button:focus {
      outline-offset: -2px!important;
    }
  </style>
`;
