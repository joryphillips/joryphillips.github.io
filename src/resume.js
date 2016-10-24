(function() {
  'use strict';

  let proto = Object.create(HTMLElement.prototype);

	proto.jobs = [];

  // proto.template = _ => {
  //   return `
	// 		<section class="clearfix py4 px2 sm-px3 off-white-warm-bg" id="resume">
	// 			<div class="container">
	//
	// 				<h1 class="mt0 mb3">Experience</h1>
	//
	// 				${proto.jobs}
	//
	// 			</div>
	//
	// 		</section>
	// 	`;
  // };

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
    this.loadData().then((result) => {
			console.log(result);
      // this.createJobs(result);
    }).then( ()=>{
			this.innerHTML = this.template();
		});

  };

  proto.loadData = () => {
    let resumeRequest = new Request('./data/RESUMEDATA.json');
    return fetch(resumeRequest).then((response) => {
      return response.json().then((json) => {
        return json;
      });
    });
  };

  // proto.createJobs = (resume) => {
	// 	resume.forEach( (job)=>{
	// 		let tempJob = `<x-job data-date="${job.date}" data-place="${job.place}" data-summary="${job.summary}" data-detail="${job.detail}"></x-job>`;
	// 		proto.jobs.push(tempJob);
	// 	});
	// 	proto.jobs = proto.jobs.join('\n');
  // };

  document.registerElement('x-resume', {
    prototype: proto,
  });

})();
