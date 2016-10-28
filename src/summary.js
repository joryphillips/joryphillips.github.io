(function() {
  'use strict';

  let proto = Object.create(HTMLElement.prototype);

  proto.template = _ => {
    return `
			<section class="clearfix py4 px2 sm-px3 off-white-warm-bg" id="summary">
				<div class="container">
					<p>My strength is bridging big-picture concepts with detailed implementation. I am especially interested in projects that help people navigate and understand complex things.</p>
					<p>I have developed apps for Google UX teams, a website for a branding agency, and created design guidelines and illustrations for major cities and a movie studio/theme park. I have also delivered scores of presentations to decision makers, community groups, and professional organizations. I can prototype, design, develop, or present your ideas and information with interest, interaction, and positive experiences.</p>
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
