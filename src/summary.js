(function() {
  'use strict';

  let proto = Object.create(HTMLElement.prototype);

  proto.template = _ => {
    return `
			<section class="clearfix py4 px2 sm-px3 off-white-warm-bg" id="summary">
				<div class="container">
					<p>My priority is connecting technology, people, and the physical environment by bridging the big picture with detailed implementation.</p>
					<p>I've developed apps for Google UX teams, a website for a branding agency, and design guidelines for major cities and a movie studio/theme park. I've delivered scores of presentations to decision makers, community groups, and professional organizations. I can prototype, develop, or present your ideas and information with interest, interaction, and positive experiences.</p>
				</div>
			</section>
			`;
  };
  proto.attachedCallback = function() {
    this.innerHTML = this.template();
  };

  document.registerElement('x-summary', {
    prototype: proto,
  });
})();
