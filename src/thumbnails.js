// <script src="./convertToSlug.js"></script>
// <script src="./clock.js"></script>


// function imgSelector(slug, imgPath) {
// 	if (slug === 'conceptual-product-design') {
// 			return <clock></clock>
// 		} else {
// 			return <img src={imgPath} class="block"/>
// 			}
// 	}
//
// var ProjectThumbs = React.createClass({
//
// 	render: function () {
// 		var projectData = this.props.projectData
//
// 		var thumbnails = projectData.map(function (projectInfo, i) {
// 			var slug = convertToSlug(projectInfo.title),
// 				imgPath = '..\/img\/' + projectData[i].imageSources[0]

(function() {
  'use strict';

  let proto = Object.create(HTMLElement.prototype);

  proto.template = _ => {
    return `
				<div  class="col col-6 sm-col-6 md-col-4 lg-col-3 px1 lg-px2 lg-p1 mb2">
					<div class="hover-shadow-grow">
						<Link to="portfolio" params={{slug: slug}} class="bg-navy">
							{imgSelector(slug, imgPath)}
							<div class="hover-fade-in absolute bottom-0 z2 full-width bg-navy">
								<p class="h5 p1 mb0 electric-blue">{projectInfo.title}</p>
							</div>
						</Link>
					</div>
				</div>
				`;
  };

  proto.attachedCallback = function() {
    this.innerHTML = this.template();
  };

  document.registerElement('x-thumbnails', {
    prototype: proto,
  });
})();

//
// <div class="flex flex-wrap mxn1">
// 	{thumbnails}
// </div>
//
