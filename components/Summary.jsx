var React = require('react/addons')

var Summary = React.createClass({
	render: function() {
	return (
			<section className="clearfix py4 px3 off-white-warm-bg" id="summary">
				<div className="container">
					<p className="h3">I'm Jory Phillips, a designer and product manager. My priority is creating interest, interaction, and positive experiences for people, using fun technology solutions along the way.</p>

					<p className="h3">I've product managed cities. I have expertise in research, analysis, and synthesizing information for effective stakeholder engagement. An effective project manager and design thinker, I've used lean, agile, and waterfall methodologies to turn ideas into reality.</p>

					<p className="h3">Communications and messaging are in my DNA: I've delivered scores of presentations to decision makers, community groups, and professional organizations. I can help you figure out what to say, and how to say it.</p>
				</div>
			</section>
	)
	}
})

module.exports = Summary
