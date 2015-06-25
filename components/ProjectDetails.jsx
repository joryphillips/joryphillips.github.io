var React = require('react/addons')
var PORTFOLIODATA = require('../data/PORTFOLIODATA.js')

var ProjectDetails = React.createClass({

	getInitialState: function() {
		var slug = this.props.params.slug
		// console.log('url slug: ' + slug)
		return slugMatch(PORTFOLIODATA, slug)
	},

	render: function () {
		if (this.state.id >= 0) {
			var id = this.state.id
			// console.log(id)

			return (
					<section className="clearfix py4 px3 bg-silver border-top border-bottom" id="portfolio">
						<div className="container">
							<div className="p3 bg-white">
								<img src={PORTFOLIODATA[id].imageSources[0]} className="block"/>
								<h2 className="h3">{PORTFOLIODATA[id].title}</h2>
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
		;
}

var slugMatch = function (bigArray, littleSlug) {
	for (var i = bigArray.length - 1; i >= 0; i--) {
		// console.log ('big: ' + bigArray[i].title + ' little: ' + littleSlug)
		var checkSlug = (convertToSlug(bigArray[i].title))
		if (checkSlug === littleSlug) {
			return {id: i}
		} 
	}
	return null
}


module.exports = ProjectDetails

