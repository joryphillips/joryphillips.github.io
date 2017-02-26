/* global customElements */
(function() {
  'use strict';

  class XApp extends HTMLElement {

    template() {
      return `
        <top-menu></top-menu>
        <x-hero></x-hero>
        <x-summary></x-summary>
        <x-portfolio
          data-source="./data/PORTFOLIODATA.json"
          data-imports="clock">
        </x-portfolio>
        <x-resume
          data-source="./data/RESUMEDATA.json">
        </x-resume>
        <x-footer></x-footer>
      `;
    }

    connectedCallback() {
      this.innerHTML = this.template();
    }

  }

  customElements.define('x-app', XApp);

})();
