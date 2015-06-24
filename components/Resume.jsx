var React = require('react/addons')
var Job = require('./Job.jsx')

var Resume = React.createClass({
	render: function() {
	return (
		<section className="clearfix py4 px3 off-white-warm-bg" id="resume">
			<div className="container">

				<h1 className="mt0 mb3">Experience</h1>

				<Job jobData={this.props.jobData} />

			</div>

		</section>
	);
	}
});


module.exports = Resume
