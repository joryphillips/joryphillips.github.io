var React = require('react/addons')
var PORTFOLIODATA = require('../data/PORTFOLIODATA.js')

React.initializeTouchEvents(true)

var ProjectDetails = React.createClass({

	getInitialState: function() {
		var slug = this.props.params.slug
		// console.log('url slug: ' + slug)
		return slugMatch(PORTFOLIODATA, slug)
	},

	render: function () {
		if (this.state.id >= 0) {
			var id = this.state.id
			var imgPath = '..\/img\/' + PORTFOLIODATA[id].imageSources[0]
			var portfolioLink = projectLink(PORTFOLIODATA[id])

			return (
					<section className="clearfix py3 sm-py4 sm-px3 bg-silver border-top border-bottom" id="portfolio">
						<div className="container">
							<div className="px2 py3 sm-p3 bg-white">
								<img src={imgPath} className="block mb2"/>
								{portfolioLink}
								{/*  <a href={PORTFOLIODATA[id].href} target="blank" className="h3 dark-blue">{PORTFOLIODATA[id].title}</a> */}
								<p className="mb0">{PORTFOLIODATA[id].description[0]}</p>
							</div>
						</div>
					</section>
			)

		} else {

			return (
					<section className="clearfix py4 px3 bg-silver border-top border-bottom" id="portfolio">
						<div className="container">
							<div className="p3 bg-white">
								<h3>Sorry!</h3>
								<p>We couldn't find that page. Here are some links to some other pretty things.</p>
							</div>
						</div>
					</section>
			)
		}


	}
})

function convertToSlug(Text) {
	return Text
		.toLowerCase()
		.replace(/[^\w ]+/g,'')
		.replace(/ +/g,'-')
}

function slugMatch(bigArray, littleSlug) {
	for (var i = bigArray.length - 1; i >= 0; i--) {
		// console.log ('big: ' + bigArray[i].title + ' little: ' + littleSlug)
		var checkSlug = (convertToSlug(bigArray[i].title))
		if (checkSlug === littleSlug) {
			return {id: i}
		}
	}
	return null
}

function projectLink(project) {
	if (project.href) {
		return <a href={project.href} target="blank" className="h3 dark-blue">{project.title}</a>
	}
	else {
		return <h3>{project.title}</h3>
	}
}

module.exports = ProjectDetails

