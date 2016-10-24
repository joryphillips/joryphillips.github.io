// var React = require('react/addons')
// var PORTFOLIODATA = require('../data/PORTFOLIODATA.js')
// var convertToSlug = require('./ConvertToSlug.js')
// var Portfolio = require('./Portfolio.jsx')
// var ImageSelect = require('./ImageSelect.jsx')
//
// React.initializeTouchEvents(true)
//
// var ProjectDetails = React.createClass({
//
// 	getInitialState: function() {
// 		// console.log('url slug: ' + this.props.params.slug)
// 		return slugMatchID(PORTFOLIODATA, this.props.params.slug)
// 	},
//
// 	render: function () {
// 			var props = {}
// 				props.projectInfo = PORTFOLIODATA[this.state.id]
// 				props.slug = this.props.params.slug
// 			// console.log(this.props.params.slug)
//
// 			return (
(function() {
  'use strict';

  let proto = Object.create(HTMLElement.prototype);

  proto.template = _ => {
    return `
			<section class="clearfix py3 sm-py4 sm-px3 bg-silver border-top border-bottom" id="portfolio">
				<div class="container">
					<div class="px2 py3 sm-p3 bg-white">
						<ImageSelect {...props} />
						<h3 class="h3">{PORTFOLIODATA[this.state.id].title}</h3>
						<p class="mb0">{PORTFOLIODATA[this.state.id].description[0]}</p>
						{getProjectLink(PORTFOLIODATA[this.state.id])}
					</div>
				</div>
			</section>
			`;
  };
  proto.attachedCallback = function() {
    this.innerHTML = this.template();
  };

  document.registerElement('project-details', {
    prototype: proto,
  });
})();

// 			)
//
// 	}
// })
//
// function slugMatchID(bigArray, littleSlug) {
// 	var checkSlug
// 	for (var i = bigArray.length - 1; i >= 0; i--) {
// 		// console.log ('big: ' + bigArray[i].title + ' little: ' + littleSlug)
// 		checkSlug = (convertToSlug(bigArray[i].title))
// 		if (checkSlug === littleSlug) {
// 			return {id: i}
// 		}
// 	}
// 	return null
// }
//
// function getProjectLink(project) {
// 	if (project.href) {
// 		return <a href={project.href} target="blank" class="dark-blue">Check it out</a>
// 	}
// }



module.exports = ProjectDetails
