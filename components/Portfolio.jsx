var React = require('react/addons')
var Thumbnails = require('./Thumbnails.jsx')

var Portfolio = React.createClass({
	render: function() {

		return (
			<section className="clearfix py4 px3 bg-silver border-top border-bottom" id="portfolio">
					<h1 className="mt0 mb3 navy">Portfolio</h1>
					<Thumbnails projectData={this.props.projectData} />
			</section>
		)
	}
})


module.exports = Portfolio

