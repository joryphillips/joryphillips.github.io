/* global customElements */
(function() {
  'use strict';

  class XHero extends HTMLElement {

    template() {
      return `
        <section class="bg-electric-blue bg-cover center px2 py4 navy border-bottom" id="home">
      		<h1 class="jumbo h0-responsive mb2">Jory Phillips</h1>
      		<h2 class="h2">designer & front-end developer</h2>
      	</section>
      `;
    }

    connectedCallback() {
      this.innerHTML = this.template();
    }

  }

  customElements.define('x-hero', XHero);

})();
