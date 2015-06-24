var cssnext = require('cssnext')
var portfolioData = require('./data/PORTFOLIODATA.js')

// var _assign = require('lodash').assign
// var fs = require('fs')
// var path = require('path')
// var fm = require('front-matter')
// var marked = require('marked')
// var markedRenderer = require('./marked-renderer')
// var cssnext = require('cssnext')
// var cheerio = require('cheerio')
// var pkg = require('./package.json')

// var dir = './src/posts'
// var filenames = fs.readdirSync(dir).filter(function (filename) {
//   return !/^\./.test(filename)
// })
// var posts = filenames.map(function (filename) {
//   var content = fs.readFileSync(path.join(dir, filename), 'utf8')
//   var matter = fm(content)
//   var html = marked(matter.body, { renderer: markedRenderer })
//   var $ = cheerio.load(html)
//   var excerpt = matter.attributes.excerpt || $('p').first().text()
//   var post = _assign(matter.attributes, {
//     slug: filename.replace(/\.md/, ''),
//     body: matter.body,
//     html: html,
//     excerpt: excerpt
//   })
//   return post
// }).sort(function (a, b) {
//   return new Date(b.created) - new Date(a.created)
// })

var routes = portfolioData.map(function (projects) {
  return '/portfolio/' + convertToSlug(projects.title)
})
routes.unshift('/blog')
routes.unshift('/')

// var pageSize = 24
// var pages = Math.ceil(posts.length / pageSize)
// console.log('pagination', pages)
// for (var i = 0; i < pages; i++) {
//   routes.push('/page/' + (i + 1))
// }


module.exports = {
  title: 'Jory Phillips Portfolio and Resume',
  routes: routes,
  baseUrl: '/',
}


function convertToSlug(Text) {
	return Text
		.toLowerCase()
		.replace(/[^\w ]+/g,'')
		.replace(/ +/g,'-')
		;
}