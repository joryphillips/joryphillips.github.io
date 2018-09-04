var React = require('react/addons')

var Footer = React.createClass({
	render: function() {
		return (
			<footer className="navy bg-electric-blue border-top fixed bottom-0 full-width">
				<div className="px2 container">
					<a href="https://github.com/joryphillips" target="_blank" className="button button-transparent h6">github</a>
					<a href="https://www.linkedin.com/pub/jory-phillips/18/572/122" target="_blank" className="button button-transparent h6">linkedin</a>
					<a href="https://twitter.com/Jory_Phillips" target="_blank" className="button button-transparent h6">twitter</a>
				</div>
			</footer>
		)
	}
})




module.exports = Footer
