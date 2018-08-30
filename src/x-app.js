/* global customElements */
(function() {
  'use strict';

  class XApp extends HTMLElement {

    template() {
      return `
        <top-menu></top-menu>

        <main data-route="/">
          <x-hero></x-hero>
          <x-summary></x-summary>
          <x-portfolio
            data-source="./data/PORTFOLIODATA.json"
            data-imports="clock">
          </x-portfolio>
          <x-resume
            data-source="./data/RESUMEDATA.json">
          </x-resume>
        </main>

        <x-project
          data-route="/portfolio?project=">
        </x-project>

        <x-footer></x-footer>
      `;
    }

    connectedCallback() {
      this.innerHTML = this.template();
      this.addEventListener('open-project-detail', this.openProject);
    }

    toggleAllExceptSelected(selected, list, className) {
      list.forEach(item => {
        if (item !== selected) {
          item.classList.toggle(className);
          // if (!selectedClassInHtml) {
          //   item.style.display = item.classList.contains(className) ? 'none' : 'block';
          // } else {
          //   item.style.display = item.classList.contains(className) ? 'block' : 'none';
          // }
        }
      });
    }

    kebabCase(string) {
      return string.toLowerCase().replace(/[^a-z0-9+]+/gi, '-');
    }

    openProject(e) {
      const xProject = this.querySelector('x-project');
      // xProject.projectEl = e.detail.projectEl;
      xProject.infoData = e.detail.infoData;
      console.log(xProject);

      let routeOptions = this.querySelectorAll('[data-route]');
      console.log(routeOptions);
      console.log(location);
      console.log(history);
    }

  }

  customElements.define('x-app', XApp);

})();
