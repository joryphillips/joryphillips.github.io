var React = require('react/addons')

var Job = React.createClass({
	getDefaultProps: function () {
		return {
			jobData: []
		}
	},
	propTypes: {
		jobData: React.PropTypes.array
	},
	render: function () {
		var jobData = this.props.jobData;

		var jobs = jobData.map(function (jobInfo, i) {
			return (
			<div key={i} className="mb4">
				<h3 className="mt0">
					<span className="regular">{jobInfo.date} </span>
					<span className="dark-blue">{jobInfo.place}</span>
				</h3>
				<h3 className="mt1">{jobInfo.summary}</h3>
				<p>{jobInfo.detail}</p>
			</div>
				)
		})

	return (
		<job>
			{jobs}
		</job>
	)
	}
})

module.exports = Job
