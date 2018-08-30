/* global customElements */
(function() {
  'use strict';

  class XProject extends HTMLElement {

    template() {
      return `
      <section class="clearfix py4 px2 sm-px3 bg-silver border-top border-bottom" id="project">
        <h1 class="mt0 mb3 navy project-name"></h1>
        <div class="flex flex-wrap mxn1 project-holder"></div>
      </section>

        <template id="project1">
          <div class="proj wide col col-6 sm-col-6 md-col-4 lg-col-3 px1 lg-px2 lg-p1 mb4">
            <div class="hover-shadow-grow image-container">
              <img id="image" class="block" src="" alt="">
            </div>
            <div id="textContainer" class="absolute mt1 col-12">
              <h5 id="title" class="h5 p1 m0 navy"></h5>
              <p id="description" class="p1 m0 navy"></p>
            </div>
          </div>
        </template>
      `;
    }

    connectedCallback() {
      this.innerHTML = this.template();
    }

  }

  customElements.define('x-project', XProject);

})();
