var React = require('react/addons')

React.initializeTouchEvents(true)

var Blog = React.createClass({
  render: function () {
	return (
		<section class="clearfix py4 px2 sm-px3 off-white-warm-bg" id="summary">
			<div class="container mb4">
				<h1 class="h2 my3">The Green Action Plan</h1>
				<h6 class="navy mb2">July 29, 2015</h6>
				<p>Over the last month and a half, I've been working part-time on the 'Green Action Plan' application I am developing to help make health clinics more sustainable. I've been using <a href="https://www.meteor.com/" target="blank">Meteor JS</a> as a full-stack solution with <a href="http://semantic-ui.com/" target="blank">Semantic UI</a> for interface. Meteor is a great tool and very fast to get up to speed on. Combining Meteor with Bootstrap or Semantic UI is especially fantastic for rapidly developing functional prototypes.
				</p>
				<p>The Green Action Plan App will be a highly specialized task and project management tool. The reason for a custom solution is this: doctor's office staff don't have time to figure out the technical details of sustainability guidelines, and they definitely don't have time to populate Trello, Asana, or other tools with 100 tasks. They need someone to tell them what to do, how to do it, and to break down and prioritize the guidelines that they need to implement to be sustainable. Further, this solution will autopopulate templates, customizing things like recycling signs and form letters to vendors needed to achieve certain guidelines. Here's a quick diagram I made of the initial product roadmap. I've already finished Phase I, the MVP!</p>
				<img src="../img/GAP-phases.svg" />
				<p>I envision the final product being a bit like a Duolingo, but for detailed guidelines. This product idea will also work to help municipal goverments administer things like design guidelines and development standards -- that will be Phase III. Here are a few thumbnails of the Green Action Plan in its current form.</p>

				<div class="container col-12">
					<div class="clearfix mxn2">
						<div class="sm-col sm-col-6 px2 p2">
							<a href="../img/GAP-comments.png" target="blank"><img src="../img/GAP-comments.png" class="mb0" /></a>
							<h2 class="h5 mt0">Sorted by number of comments</h2>
						</div>
						<div class="sm-col sm-col-6 px2 p2">
							<a href="../img/GAP-search.png" target="blank"><img src="../img/GAP-search.png" class="mb0" /></a>
							<h2 class="h5 mt0">Search function</h2>
						</div>
						<div class="sm-col sm-col-6 px2 p2">
							<a href="../img/GAP-details.png" target="blank"><img src="../img/GAP-details.png" class="mb0" /></a>
							<h2 class="h5 mt0">Guideline detail view</h2>
						</div>
					</div>
				</div>
				<p>I will likely replace Semantic UI at a later date; it's great for quickly and easily providing all the UI elements I need for development, but I wish it worked better on mobile out of the box. If you have any comments, suggestions, or questions, email me at the link below! Thanks for reading. </p>
				<p>-Jory</p>

			</div>

			<div class="container">
				<h1 class="h2 my3">New website, new blog!! Technical notes and provisional roadmap</h1>
				<h6 class="navy mb2">June 18, 2015</h6>
				<p>I'm proud to say that I wrote this post in a Javascript file. Which is a little crazy, given the myriad tools out there for blogging. I just redesigned and restructured my personal website using the <a href="facebook.github.io/react/" target="blank">React javascript library</a>. I wanted to make some changes to the site to make it more navigable and interactive, and learn React at the same time. I also integrated the excellent <a href="http://www.basscss.com" target="blank">Basscss library</a> because I wanted to implement object-oriented styles. In summary, I'm designing AND developing for speed and beauty.</p>
				<h3 class="h4 mt3">Some Observations:</h3>
				<p>First, it wasn't easy. As far as my Javascript ninjustu goes, I can now accomplish just about whatever I can imagine, but have more to learn. A great thing about using React is it forces me to use and learn more advanced Javascript. And while React itself was pretty straightforward, it was  absorbing all the other pieces needed to make it work that was a challenge.</p>
				<p>Second, as with all websites, it's a work in progress. Luckily, React offers me the perfect playground. Having spent some time getting intimately familiar with CSS vs Javascript animations and transitions, it is pretty clear that Javascript is an easy winner. I'll take GSAP and Velocity over CSS keyframes any day.</p>
				<h3 class="h4 mt3">On my list of todo's:</h3>
				<ul>
					<li class="strikethrough">Fine-tune responsive and mobile behavior.</li>
					<li>Apply the interactive and responsive SVG animation techniques I have been using recently to my home page and some of my portfolio examples. Can you imagine a hot dog that grows and shrinks to the width of the screen without changing height or skewing? <a href="http://softwiener.com" target="blank">I've implemented that.</a> UX note: there is almost no reason to give an SVG responsive animation, other than providing an easter egg for select users, or offering delight to weird people who change the size or orientation of their browser a lot. Impetus enough for me, anyway.</li>
					<li>Switch to markdown for all blog posts, my portfolio items, and my resume. More or less create my own mini-wordpress, without the bloat.</li>
					<li>More blog posts! I will discuss my current work building an app with the Meteor Javascript framework, as well as missives on my fascinating career transition from designing and planning cities to front-end design and development, among the other things I am working on.</li>
				</ul>
				<p>That's about it! Thanks for reading. Please contact me if you have questions or comments!</p>
				<p>-Jory</p>
			</div>
		</section>
	)
  }
})

module.exports = Blog

