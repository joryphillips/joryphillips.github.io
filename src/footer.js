var React = require('react/addons')

var Footer = React.createClass({
	render: function() {
		return (
			<footer class="navy bg-electric-blue border-top fixed bottom-0 full-width">
				<div class="px2 container">
					<a href="https://github.com/joryphillips" target="_blank" class="button button-transparent h6">github</a>
					<a href="https://www.linkedin.com/in/joryphillips" target="_blank" class="button button-transparent h6">linkedin</a>
					<a href="https://twitter.com/Jory_Phillips" target="_blank" class="button button-transparent h6">twitter</a>
					<a class="button button-transparent h6" href="javascript:location='mailto:\u006a\u006f\u0072\u0079\u002e\u006c\u002e\u0070\u0068\u0069\u006c\u006c\u0069\u0070\u0073\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d';void 0">email</a>
				</div>
			</footer>
		)
	}
})




module.exports = Footer
