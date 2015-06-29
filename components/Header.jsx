var React = require('react/addons')
var Router = require('react-router')
var Link = Router.Link


var Header = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function () {
    return (
      <header className="fixed z2 top-0 left-0 right-0 navy bg-electric-blue border-bottom">
         <nav className="container">
            <div className="flex-auto">
              <Link to="/#home" className="left button py2 button-transparent">Home</Link>
              <a href="/#summary" className="sm-show left button py2 button-transparent">Summary</a>
              <a href="/#portfolio" className="button left py2 button-transparent">Portfolio</a>
              <a href="/#resume" className="sm-show left button py2 button-transparent">Resume</a>
              <Link to="/blog" className="button py2 button-transparent sm-col-right">Blog</Link>
            </div>
          </nav>
      </header>
    )
  }
})

module.exports = Header
