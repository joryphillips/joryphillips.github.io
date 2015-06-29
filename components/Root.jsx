var React = require('react/addons')
var Router = require('react-router')
var Header = require('./Header.jsx')
var Footer = require('./Footer.jsx')

var CSSTransitionGroup = React.addons.CSSTransitionGroup
var RouteHandler = Router.RouteHandler

var css = require('../css/base.css')

React.initializeTouchEvents(true)

class Root extends React.Component {

	render() {
		var name = this.context.router.getCurrentPath()
		//if current route ! '/' then add '../'' to bundle.js path
		var scriptSrc = findScriptSrc(name)
		// console.log(scriptSrc)
		var initialProps = {
			__html: safeStringify(this.props)
		}

		return (
			<html>
				<head>
					<title>{this.props.title}</title>
					<meta name="viewport" content="minimal-ui, initial-scale=1.0, width=device-width" />
					<style dangerouslySetInnerHTML={{ __html: css }} />
				</head>
				<body>
					<Header {...this.props} />
					<CSSTransitionGroup component="div" transitionName="page-push" transitionAppear={true}>
						<RouteHandler {...this.props} key={name} />
					</CSSTransitionGroup>
					<Footer />
					<script
						id='initial-props'
						type='application/json'
						dangerouslySetInnerHTML={initialProps} />
					<script src={scriptSrc} />
				</body>
			</html>
		)
	}
}

Root.contextTypes = {
  router: React.PropTypes.func.isRequired
}

function safeStringify (obj) {
	return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

function findScriptSrc (name) {
	if (name === '/') {return 'bundle.js'}
	else {return '..\/bundle.js'}
}

module.exports = Root

