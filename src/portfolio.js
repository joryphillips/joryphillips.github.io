(function() {
  'use strict';

  let proto = Object.create(HTMLElement.prototype);

  proto.template = _ => {
    return `
		<section class="clearfix py4 px2 sm-px3 bg-silver border-top border-bottom" id="portfolio">
			<h1 class="mt0 mb3 navy">Portfolio</h1>
			<x-thumbnails projectData={this.props.projectData}></x-thumbnails>
		</section>
		`;
  };

  proto.attachedCallback = function() {
    this.innerHTML = this.template();
  };

  document.registerElement('x-portfolio', {
    prototype: proto,
  });

})();
