var React = require('react/addons')
var Router = require('react-router')
var Link = Router.Link

React.initializeTouchEvents(true)

var ProjectThumbs = React.createClass({

	render: function () {
		var projectData = this.props.projectData

		var thumbnails = projectData.map(function (projectInfo, i) {
			var slug = convertToSlug(projectInfo.title)
			var imgPath = '..\/img\/' + projectData[i].imageSources[0]

			return (
				<div key={i} className="col col-6 sm-col-6 md-col-4 lg-col-3 px1 mb2">
					<div className="hover-shadow-grow">
						<Link to="portfolio" params={{slug: slug}}>
							<img src={imgPath} className="block"/>
							<div className="hover-fade-in absolute bottom-0 z2 full-width bg-navy">
								<p className="h5 p1 mb0 electric-blue">{projectInfo.title}</p>
							</div>
						</Link>
					</div>
				</div>
				)
		})

		return (
				<div className="flex flex-wrap mxn1">
					{thumbnails}
				</div>
		)
	}
})


function convertToSlug(Text) {
    return Text
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-')
}


module.exports = ProjectThumbs
