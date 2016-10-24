var React = require('react/addons')
var Clock = require('./Clock.jsx')
var FacilitiesMap = require('./FacilitiesMap.jsx')


React.initializeTouchEvents(true)

var ImageSelect = React.createClass({

	render: function () {
		var slug = this.props.slug,
			projectInfo = this.props.projectInfo,
			imgPath = '..\/img\/' + projectInfo.imageSources[0]
			// console.log(slug, projectInfo.title)

			if (projectInfo.special) {

				// grow this list as a case:switch as special/custom pages created over time
				if (slug === 'conceptual-product-design') {

					// special project image
					return (
						<Clock />
					)

				} else if (slug === 'mapping-data-analysis') {

					// special project image
					return (
						<FacilitiesMap />
					)

				} else {

					// nothing special found, so return standard image
					return (
						<img src={imgPath} class="block mb2 width-100"/>
					)
				}

			} else {

				// not special, return standard image
				return (
					<img src={imgPath} class="block mb2 width-100"/>
				)
			}


	}
})

module.exports = ImageSelect
