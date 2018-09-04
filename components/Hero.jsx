var React = require('react/addons')

var Hero = React.createClass({
	render: function() {
	return (
		<section className="bg-electric-blue bg-cover center px2 py4 navy border-bottom" id="home">
			<h1 className="h1 h0-responsive mb2 regular font-syncopate">Jory Phillips</h1>
			<p className="h2"><strong>I work in the intersection of</strong></p>
			<p className="h2"><strong>creativity,</strong></p>
			<p className="h2"><strong>technology,</strong></p>
			<p className="h2"><strong>and product implementation.</strong></p>
		</section>
	)
	}
})

module.exports = Hero
