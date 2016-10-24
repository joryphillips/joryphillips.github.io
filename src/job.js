(function() {
  'use strict';

  let proto = Object.create(HTMLElement.prototype);

	proto.jobInfo = {};

  proto.template = _ => {
    return `
			<template id="job">
				<div class="mb4">
					<h3 class="mt0">
						<span class="dark-blue">${proto.jobInfo.place}</span>
						<span class="regular date">${proto.jobInfo.date}</span>
					</h3>
					<h3 class="mt1">${proto.jobInfo.summary}</h3>
					<p>${proto.jobInfo.detail}</p>
				</div>
			</template>
			`;
  };

  proto.attachedCallback = function() {
		Promise.resolve(this.dataset).then( ()=>{
			proto.jobInfo = this.dataset;
			this.innerHTML = this.template();
		});
  };

  document.registerElement('x-job', {
    prototype: proto,
  });

})();
