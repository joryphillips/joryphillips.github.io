var React = require('react/addons')
var Router = require('react-router')
var Index = require('./Index.jsx')
var Header = require('./Header.jsx')
var Footer = require('./Footer.jsx')
var Blog = require('./Blog.jsx')
var ProjectDetails = require('./ProjectDetails.jsx')

var CSSTransitionGroup = React.addons.CSSTransitionGroup
var Route = Router.Route
var RouteHandler = Router.RouteHandler
var DefaultRoute = Router.DefaultRoute

var css = require('../css/base.css')

class Root extends React.Component {
	render() {
		var name = this.context.router.getCurrentPath()
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
					<Header {...this.props}  />
					<CSSTransitionGroup component="div" transitionName="page-push" transitionAppear={true}> 
						<RouteHandler {...this.props} key={name} />
					</CSSTransitionGroup>
					<Footer />
					<script
						id='initial-props'
						type='application/json'
						dangerouslySetInnerHTML={initialProps} />
					<script src='bundle.js' />
				</body>
			</html>
		)
	}
}

Root.contextTypes = {
  router: React.PropTypes.func.isRequired
};

function safeStringify (obj) {
	return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

module.exports = Root

