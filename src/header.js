var React = require('react/addons')
var Router = require('react-router')
var Link = Router.Link


var Header = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function () {
    return (
      <header class="fixed z2 top-0 left-0 right-0 navy bg-electric-blue border-bottom">
         <nav class="container">
            <div class="flex-auto">
              <a href="/#home" class="left button py2 button-transparent">Home</a>
              <a href="/#summary" class="sm-show left button py2 button-transparent">Summary</a>
              <a href="/#portfolio" class="button left py2 button-transparent">Portfolio</a>
              <a href="/#resume" class="sm-show left button py2 button-transparent">Resume</a>
              <Link to="/blog" class="button py2 button-transparent sm-col-right">Blog</Link>
            </div>
          </nav>
      </header>
    )
  }
})

module.exports = Header
