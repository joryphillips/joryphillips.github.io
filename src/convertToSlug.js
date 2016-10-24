
var convertToSlug = function (Text) {
	return Text
		.toLowerCase()
		.replace(/[^\w ]+/g,'')
		.replace(/ +/g,'-')
}

module.exports = convertToSlug