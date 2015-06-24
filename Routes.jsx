var React = require('react/addons')
var Router = require('react-router')
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var Root = require('./components/Root.jsx')
var Index = require('./components/Index.jsx')
var ProjectDetails = require('./components/ProjectDetails.jsx')
var Blog = require('./components/Blog.jsx')

var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
 	<Route name='portfolio' path='/portfolio/:slug' handler={ProjectDetails} />  
    <Route name='blog' path='/blog' handler={Blog} />
  </Route>
)

module.exports = Routes
