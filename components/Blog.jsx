var React = require('react/addons')

var Blog = React.createClass({
  render: function () {
    return (
		<section className="clearfix py4 px3 off-white-warm-bg" id="summary">
			<div className="container">
				<h1 className="h2 my3">New website, new blog!! Technical notes and provisional roadmap</h1>
				<h6 className="navy mb2">June 18, 2015</h6>
				<p>I'm proud to say that I wrote this post in a Javascript file. Which is a little crazy, given the myriad tools out there for blogging. I just redesigned and restructured my personal website using the <a href="facebook.github.io/react/" target="blank">React javascript library</a>. I wanted to make some changes to the site to make it more navigable and interactive, and learn React at the same time. I also integrated the excellent <a href="http://www.basscss.com" target="blank">Basscss library</a> because I wanted to implement object-oriented styles. In summary, I'm designing AND developing for speed and beauty.</p>
				<h3 className="h4 mt3">Some Observations:</h3>
				<p>First, it wasn't easy. As far as my Javascript ninjustu goes, I can now accomplish just about whatever I can imagine, but have more to learn. A great thing about using React is it forces me to use and learn more advanced Javascript. And while React itself was pretty straightforward, it was  absorbing all the other pieces needed to make it work that was a challenge.</p>
				<p>Second, as with all websites, it's a work in progress. Luckily, React offers me the perfect playground. Having spent some time getting intimately familiar with CSS vs Javascript animations and transitions, it is pretty clear that Javascript is an easy winner. I'll take GSAP and Velocity over CSS keyframes any day.</p>
				<h3 className="h4 mt3">On my list of todo's:</h3>
				<ul>
					<li>Fine-tune responsive and mobile behavior.</li>
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

