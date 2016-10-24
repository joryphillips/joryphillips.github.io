var React = require('react/addons')
var PORTFOLIODATA = require('../data/PORTFOLIODATA.js')
var Portfolio = require('./Portfolio.jsx')

React.initializeTouchEvents(true)

var NotFound = React.createClass({

	render: function () {
		return (
			<section class="clearfix py4 px3 bg-silver border-top border-bottom" id="portfolio">
				<div class="container">
					<div class="p3 bg-white">
						<h3>Sorry!</h3>
						<p>We couldn't find that page. Here are some links to some other pretty things.</p>
					</div>
					<Portfolio projectData={PORTFOLIODATA} />
				</div>
			</section>
		)
	}
})

module.exports = NotFound
