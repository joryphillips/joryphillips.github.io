var cssnext = require('cssnext')
var portfolioData = require('./data/PORTFOLIODATA.js')

var routes = portfolioData.map(function (projects) {
  return '/' + convertToSlug(projects.title) + '/'
})
routes.unshift('/blog')
routes.unshift('/')

module.exports = {
  title: 'Jory Phillips Portfolio and Resume',
  routes: routes,
  baseUrl: '/'
}

function convertToSlug(Text) {
	return Text
		.toLowerCase()
		.replace(/[^\w ]+/g,'')
		.replace(/ +/g,'-')
}
