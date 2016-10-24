(function() {
  'use strict';

  let proto = Object.create(HTMLElement.prototype);

  proto.template = _ => {
    return `
      <section class="bg-electric-blue bg-cover center px2 py4 navy border-bottom" id="home">
    		<h1 class="jumbo h0-responsive mb2">Jory Phillips</h1>
    		<h2 class="h2">designer & front-end developer</h2>
    	</section>
    `;
  };

  proto.attachedCallback = function() {
    this.innerHTML = this.template();
  };


  document.registerElement('x-hero', {
    prototype: proto,
  });

})();
