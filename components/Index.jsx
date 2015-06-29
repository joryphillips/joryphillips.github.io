var React = require('react/addons')
var Hero = require('./Hero.jsx')
var Summary = require('./Summary.jsx')
var Portfolio = require('./Portfolio.jsx')
var Resume = require('./Resume.jsx')
var PORTFOLIODATA = require('../data/PORTFOLIODATA.js')
var RESUMEDATA = require('../data/RESUMEDATA.js')


var Index = React.createClass({
  render: function () {
    return (
      <main>
        <Hero />
        <Summary />
        <Portfolio projectData={PORTFOLIODATA} />
        <Resume jobData={RESUMEDATA} />
      </main>
    )
  }
})

module.exports = Index

