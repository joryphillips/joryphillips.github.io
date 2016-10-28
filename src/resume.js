(function() {
  'use strict';

  let proto = Object.create(HTMLElement.prototype);

  proto.template = _ => {
    return `
			<section class="clearfix py4 px2 sm-px3 off-white-warm-bg" id="resume">
				<div class="container">
					<h1 class="mt0 mb3">Experience</h1>
					<div class="job-holder"></div>
				</div>
			</section>

			<template id="job">
				<div class="mb4">
					<h3 class="mt0">
						<span id="place" class="dark-blue"></span>
						<span id="date" class="regular date"></span>
					</h3>
					<h3 id="summary" class="mt1"></h3>
					<p id="detail"></p>
				</div>
			</template>
		`;
  };

  proto.attachedCallback = function() {
    this.innerHTML = this.template();
    this.loadData(this.dataset.source).then((result) => {
      this.createJobs(result);
    });
  };

  proto.loadData = (source) => {
    if (source) {
      let resumeRequest = new Request(source);
      return fetch(resumeRequest).then((response) => {
        return response.json().then((json) => {
          return json;
        });
      });
    }
  };

  proto.createJobs = (resume) => {
    const jobHolder = document.querySelector('.job-holder');

    resume.forEach((job) => {
      let jobTemplate = document.querySelector('#job');

      let place = jobTemplate.content.querySelector('#place');
      let date = jobTemplate.content.querySelector('#date');
      let summary = jobTemplate.content.querySelector('#summary');
      let detail = jobTemplate.content.querySelector('#detail');

      place.textContent = job.place;
      date.textContent = job.date;
      summary.textContent = job.summary;
      detail.textContent = job.detail;

      let clone = document.importNode(jobTemplate.content, true);
      jobHolder.appendChild(clone);
    });
  };


  document.registerElement('x-resume', {
    prototype: proto,
  });

})();
