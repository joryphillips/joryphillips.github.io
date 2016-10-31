(function() {
  'use strict';


  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  })();

  class TopMenu extends HTMLElement {

    template() {
      return `
        <header class="fixed z2 top-0 left-0 right-0 navy bg-electric-blue border-bottom">
          <nav class="container flex-auto">
            <a href="/#home" class="sm-show left button py2 button-transparent">Home</a>
            <a href="/#summary" class="sm-show left button py2 button-transparent">Summary</a>
            <a href="/#portfolio" class="button left py2 button-transparent">Portfolio</a>
            <a href="/#resume" class="sm-show left button py2 button-transparent">Resume</a>
          </nav>
        </header>
      `;
    }

    connectedCallback() {
      this.innerHTML = this.template();
      this.enableClickHandlers();
    }

    constructor() {
      super();

    }

    enableClickHandlers() {
      let nav = document.querySelector('nav');
      let links = nav.children;
      for (let link of links) {
        link.addEventListener('click', this.scrollToId.bind(this), false);
      }
    }

    scrollToId(e) {
      e.preventDefault();
      let hash = e.target.hash;
      let scrollTargetEl = document.querySelector(hash);
      let scrollTargetY = scrollTargetEl.offsetTop;
      this.scrollToY(scrollTargetY, 2250, 'easeInOutQuint');
      window.location.hash = hash;
    }



    // my favorite smooth scroll technique, orig. found at
    // http://stackoverflow.com/questions/8917921/cross-browser-javascript-not-jquery-scroll-to-top-animation
    scrollToY(scrollTargetY, speed, easing) {
      // scrollTargetY: the target scrollY property of the window
      // speed: time in pixels per second
      // easing: easing equation to use
      scrollTargetY = scrollTargetY || 0;
      speed = speed || 2000;
      easing = easing || 'easeOutSine';
      let scrollY = window.scrollY || document.documentElement.scrollTop;
      let currentTime = 0;

      // min time .1, max time .8 seconds
      let time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

      // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
      const easingEquations = {
        easeOutSine: function(pos) {
          return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: function(pos) {
          return (-0.5 * (Math.cos(Math.PI * pos) - 1));
        },
        easeInOutQuint: function(pos) {
          if ((pos /= 0.5) < 1) {
            return 0.5 * Math.pow(pos, 5);
          }
          return 0.5 * (Math.pow((pos - 2), 5) + 2);
        }
      };

      // add animation loop
      function tick() {
        currentTime += 1 / 60;

        let p = currentTime / time;
        let t = easingEquations[easing](p);

        if (p < 1) {
          requestAnimationFrame(tick);

          window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
          window.scrollTo(0, scrollTargetY);
        }
      }

      // call it once to get started
      tick();
    }

  }

  customElements.define('top-menu', TopMenu);

})();
