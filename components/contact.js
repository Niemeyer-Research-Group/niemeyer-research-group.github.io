import React from 'react';
import {Block} from './block';

class ContactInfo extends React.Component {
		
	render() {
		return (
			<div>
			
				<div className="lead">
					There are many ways to reach me:
				</div>

				<Block 
					image={this.props.app.getWebRoot() + "/images/logo-uw.jpg"}
					alt="The UW block logo."
					link="mailto:ajko@uw.edu"
					header="Email"
					content="I primarily use email to communicate with people outside UW. I read email once in the morning each weekday, and sometimes in the middle of the day if I'm in transit. I don't read on weekends unless I'm super engaged on a project."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/logo-mgh.jpg"}
					alt="A photograph of the front of Mary Gates Hall."
					link="https://www.google.com/maps/place/Mary+Gates+Hall.+University+of+Washington/@47.6549552,-122.3101087,994m/data=!3m2!1e3!4b1!4m2!3m1!1s0x549014f2a95c2899:0xb2525ccd291489c!6m1!1e1"
					header="Mary Gates Hall 015E"
					content="My office is in a locked suite on the ground floor of Mary Gates. If you knock, a friendly student will let you in (unless they all have their noise-canceling headphones on!) My office hours are currently by appointment, but you can always stop by to see if my door is open, which means I'm available to chat."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/logo-slack.jpg"}
					alt="The Slack logo."
					link="https://uwdub.slack.com/"
					header="Slack"
					content="I use Slack for all of my internal lab communications, and for much of my UW communication with colleagues and PhD students. During the work day I treat Slack like instant messaging, and after hours I treat it like email, reading it in the morning. If you're at UW, join DUB Slack and DM me. I'm usually pretty responsive throughout the day."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/logo-twitter.jpg"}
					alt="The Twitter logo."
					link="https://twitter.com/andyjko"
					header="Twitter"
					content="I mostly broadcast on Twitter, and reply to other people's posts, but I do respond to direct messages. It's a good place to learn what's on my mind and when I have new writing to share."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/logo-github.jpg"}
					alt="The Github logo."
					link="http://github.com/andyjko"
					header="GitHub"
					content="I host a lot of my content and software projects on GitHub. Feel free to submit issues and pull requests to my various repositories."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/logo-linkedin.jpg"}
					alt="The LinkedIn logo."
					link="https://www.linkedin.com/in/ajko/"
					header="LinkedIn"
					content="I use LinkedIn as my primary contact manager. I usually only accept connections from people I've met IRL and have a professional relationship with (students, collaborators, professional colleagues). I read my LinkedIn messages as part of my morning email routine."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/logo-facebook.jpg"}
					alt="The Facebook logo."
					link="https://www.facebook.com/andyjko"
					header="Facebook"
					content="I primarily use Facebook for non-work relationships (though that boundary is blurry). I usually only accept connections from people I've met IRL and have a social relationship with, so if I have a purely professional relationship with you, please don't be offended if I decline your friend request. Add me on LinkedIn instead."
				/>

			</div>
			
		)
		
	}

}

export { ContactInfo };