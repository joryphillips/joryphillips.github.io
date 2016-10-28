(function() {
  'use strict';

  let proto = Object.create(HTMLElement.prototype);

  proto.template = _ => {
    return `
		<section class="clearfix py4 px2 sm-px3 bg-silver border-top border-bottom" id="portfolio">
			<h1 class="mt0 mb3 navy">Portfolio</h1>
			<div class="flex flex-wrap mxn1 project-holder"></div>
		</section>

			<template id="project">
				<div class="col col-6 sm-col-6 md-col-4 lg-col-3 px1 lg-px2 lg-p1 mb2">
					<div class="hover-shadow-grow">
							<img id="image" src="" alt="">
							<div class="hover-fade-in absolute bottom-0 z2 full-width bg-navy">
								<h5 id="title" class="h5 p1 mb0 electric-blue">{projectInfo.title}</h5>
							</div>
					</div>
				</div>
			</template>
		`;
  };

  proto.attachedCallback = function() {
    this.innerHTML = this.template();
    this.loadData(this.dataset.source).then((result) => {
      this.createProjects(result);
    });
  };

  proto.loadData = (source) => {
    if (source) {
      let portfolioRequest = new Request(source);
      return fetch(portfolioRequest).then((response, error) => {
        return response.json().then((json, error) => {
          return json;
        }, function(error) {
          console.error(error);
        });
      }, function(error) {
        console.error(error);
      });
    }

  };

  proto.createProjects = (portfolio) => {
    const projectHolder = document.querySelector('.project-holder');

    portfolio.forEach((project) => {
      let projectTemplate = document.querySelector('#project');

      let image = projectTemplate.content.querySelector('#image');
      let title = projectTemplate.content.querySelector('#title');

      image.alt = 'image of ' + project.title;
      image.src = './img/' + project.imageSources[0];
      title.textContent = project.title;


      let clone = document.importNode(projectTemplate.content, true);
      projectHolder.appendChild(clone);
    });
  };


  document.registerElement('x-portfolio', {
    prototype: proto,
  });

})();
