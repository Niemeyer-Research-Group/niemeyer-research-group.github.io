import _ from 'lodash';
import React from 'react';

import { Linkable } from './linkable';
import { HashLink } from 'react-router-hash-link';

class Biography extends React.Component {

	render() {
		return (
			<div>
			
				<div className="lead">Professional and personal takes on my professorly life.</div>

				<Linkable app={this.props.app} id="short">Short Bio</Linkable>

				<p>
					Amy J. Ko is a Professor at the <a href="http://www.washington.edu">University of Washington</a> <a href="http://ischool.uw.edu/">Information School</a> and an Adjunct Professor at the <a href="http://cs.washington.edu">Paul G. Allen School of Computer Science and Engineering</a>.
					She directs the Code &amp; Cognition Lab, where she and her students study CS education, human-computer interaction, and humanity's individual and collective struggle to understand computing and harness it for equity and justice.
					Her earliest work included techniques for automatically answering questions about program behavior to support debugging, program understanding, and reuse.
					Her later work studied interactions between developers and users, and techniques for web scale aggregation of user intent through help systems; she co-founded <a href="http://www.answerdash.com">AnswerDash</a> to commercialize these ideas.
					Her latest work investigates effective, equitable, and inclusive ways for humanity to learn computing, especially how data, algorithms, APIs, and AI can both empower and oppress. 
					Her work spans more than {
						// Compute number of publications, rounding to nearest 10
						Math.round(this.props.app.getProfile().getPublications(paper => paper.kind.indexOf("refereed") === 0 || paper.kind.indexOf("journal")).length / 10) * 10
					} peer-reviewed publications, with {
						// Compute number of best papers
						this.props.app.getProfile().getPublications(paper => paper.award && _.filter(paper.award, award => award.includes("best paper")).length > 0).length
					} receiving best paper awards and {
						// Compute number of most influential papers.
						this.props.app.getProfile().getPublications(paper => paper.award && _.filter(paper.award, award => award.includes("most influential")).length > 0).length
					} receiving most influential paper awards.
					She is an ACM Senior Member, and member of ACM SIGCHI, SIGCSE, and SIGSOFT. 
					She received her Ph.D. at the <a href="http://www.hcii.cs.cmu.edu">Human-Computer Interaction Institute</a> at <a href="http://www.cmu.edu">Carnegie Mellon University</a> in 2008, and degrees in Computer Science and Psychology with Honors from <a href="http://www.oregonstate.edu">Oregon State University</a> in 2002.
				</p>

				<Linkable app={this.props.app} id="irreverent">Irreverent Bio</Linkable>
				
				<p>
					Amy J. Ko is one of those strange, awkward, lucky people at the <a href="http://www.washington.edu">University of Washington</a> who gets paid to follow her curiosity and tell people what she finds.
					She surrounds herself with similarly curious people, particularly students, and they wander about asking questions about the surprising ways that code has woven itself through people's lives.
					She started off inventing ways of making programming easier, but then got disillusioned with productivity.
					She then got excited about the ways that programmers interact with massive communities of people using their code, and that somehow turned into a startup that sold help tools.
					After she returned from her icky capitalist stint as a CTO, she decided to focus on making people smarter instead of tools smarter, and began studying how to make learning to code easier.
					Now she mostly thinks about how we can teach people to write code that's not so terribly oppressive to people at the margins.
					Somewhere along the way, she published a bunch of papers and won a bunch of awards, which mostly means that people think her discoveries and insights are neat.
					She's grateful to <a href="http://www.cmu.edu">Carnegie Mellon University</a> and <a href="http://www.oregonstate.edu">Oregon State University</a> for being mostly safe spaces to bumble through the world's endless expanse of mysteries as a student, and to the many students and taxpayers that pay her to keep doing it as a professor.
				</p>

				<Linkable app={this.props.app} id="age">Age</Linkable>

				<p>
					Why would I put a section on this page about my age? 
					There are so many reasons. 
					First, people are constantly assuming I'm much younger than I am (which I guess is to be expected, since I have a young face, but must we really assume?)
					Second, when I tell people my age, they're often skeptical (which is ridiculous, because I'm pretty sure I know my age better than they do). 
					Third, in ageist academia, much of how I'm treated and how my ideas are treated are dependent on how people perceive my expertise, experience, and wisdom. 
					Looking young is almost guaranteed to lead less thoughtful academics to assume I'm a student, that I know nothing, and that I have no expertise to share.
					Hence this section on this page.
				</p>

				<p>
					So how old am I? 
					I was born in the summer of 1980.
					I am an Gen Xer.
					The music of my childhood came with big hair and melodrama.
					I spent a whole summer earning and saving $99 to buy a first generation Nintendo.
					Childhood meant going wherever I wanted with whomever I wanted after school with no parental consequences.
					I was one of the first people on the consumer internet.
					My adolescence was defined by pervasive grunge, sadness, suicide, comic book stores, arcades, and Magic the Gathering tournaments.
					And I look back to the 80's and 90's and wonder how the world got so complicated, so quickly.
				</p>

				<p>
					So let my face be a reminder: you <em>cannot</em> judge someone's age, life experience, expertise, or wisdom from their face.
					So stop trying!
				</p>

				<Linkable app={this.props.app} id="lineage">Academic Lineage</Linkable>

				<p>I have a relatively short academic lineage. I was advised by...</p>
				<ul>
					<li><a href="http://www.cs.cmu.edu/~bam/">Brad Myers</a>, (Ph.D., University of Toronto), who was advised by...</li>
					<li><a href="http://ron.taglab.ca/">Ronald Baecker</a>, (Ph.D., MIT) and <a href="https://www.billbuxton.com">Bill Buxton</a> (unofficially), who was advised by...</li>
					<li><a href="https://www.nap.edu/read/4779/chapter/21#93">Edward L. Glaser</a> (A.B., Dartmouth College), who taught Ron at MIT, who had highly interdisciplinary interests, and who was blind.</li>
				</ul>
				
				<p>As an undergraduate, I was also advised by...</p>
				<ul>
					<li><a href="http://web.engr.oregonstate.edu/~burnett/">Margaret Burnett</a> (Ph.D., University of Kansas), who was advised by...</li>
					<li><a href="https://www.mathgenealogy.org/id.php?id=82631">Allen Ambler</a> (Ph.D., University of Wisconsin-Madison).</li>
				</ul>
				
				<Linkable app={this.props.app} id="promotion">Promotion Documents</Linkable>
				
				<p>
					These are the documents I submitted for tenure-track faculty positions in 2008, for my tenure and promotion to Associate Professor, and for my later promotion to Professor.
					I hope they're helpful to anyone pursuing a career in academia.
					While you read them, remember: careers come together one day at a time, one paper at a time, not all at once!
					I've felt imposter syndrome most of my life because people didn't tell me this.
				</p>
				
				<ul>
					<li><a href="promotion/Assistant-Statements.pdf">Research and teaching statements</a> for my 2008 academic job search.</li>
					<li><a href="promotion/Associate-Statements.pdf">Research, teaching, and service statements</a> for tenure and promotion to Associate Professor.</li>
					<li><a href="promotion/Associate-CV.pdf">Curriculum vita</a> for tenure and promotion to Associate Professor.</li>
					<li><a href="promotion/Full-Statements.pdf">Research, teaching, service, and diversity statements</a> for tenure and promotion to Professor.</li>
					<li><a href="promotion/Full-CV.pdf">Curriculum vita</a> for tenure and promotion to Professor.</li>
				</ul>
				<Linkable app={this.props.app}  id="identity">Identity</Linkable>
				
				<p>
					Labels are are often used to stereotype, categorize, and oppress.
					However, when we use them to describe ourselves, they can be powerful ways to develop cultural humility, preventing stereotyping and assumptions.
					Here are a few labels that I use to describe myself and what they mean to me:
				</p>
				
				<ul>
					<li><strong>I am an Oregonian</strong>. Growing up in a suburb of Portland, Oregon in the 80's and 90's, my values were shaped by environmental sustainability, native sovereignty, natural beauty, angst, whiteness, and weirdness.</li>
					<li><strong>I am a Seattleite</strong>. Having frequented Seattle since childhood and lived here since 2008, I experience this as being progressive, ambitious, perpetually insecure about my wokeness, and civically engaged.</li>
					<li><strong>I am a professor</strong>. I center curiosity, discovery, knowledge, learning, and teaching, in work and in life.</li>
					<li><strong>I am a parent</strong>. I embrace lifelong responsibility for the love and wellbeing of my daughter.</li>
					<li><strong>I am a partner</strong>. I devote my life to cultivating love, joy, laughter, shared dreams with my wife.</li>
					<li><strong>I am a technophile</strong>. Technology is my obsession, both its wondrous powers and its potential for destruction.</li>
					<li><strong>I am a foodophile</strong>. Food shapes my travel, my experiences, my conversations. I love food!</li>
					<li><strong>I am a woman</strong>. Much of this means being treated as a woman, but also having to dismantle sexist cultures, assumptions, and traditions that limit my opportunities.</li>
					<li><strong>I am transgender</strong>. I experience dissonance between my body and my gender, and the unjust treatment in law and life that comes with a transphobic world.</li>
					<li><strong>I am queer</strong>. My sex, sexual orienation, and gender identity don't really fit a false gender binaries popular in dominant culture.</li>
					<li><strong>I am Chinese</strong>. My father's parents came to the United States in the early 20th century, and brought with them cultural traditions in food, frugality, and financial security, which shaped my own traditions.</li>
					<li><strong>I am Danish</strong>, at least in ancestry; my mother's parents came to the United States in early 20th century, and brought with them humility, privacy, and piety.</li>
					<li><strong>I am a divorcee</strong>. This has eroded my friendships, community, finances, and wellbeing, leaving lifelong scars and stigma.</li>
					<li><strong>I am an atheist</strong>. I find my spirituality in human values and the unknown, but do not believe there is an all powerful being that designed the universe.</li>
				</ul>

				<Linkable app={this.props.app}  id="long">Long Bio</Linkable>

				<p>
					<img src={this.props.app.getWebRoot() + "/images/bio/bio-childhood.jpg"} className="pull-right img-float" />
					I was born in <a href="http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Ontario,+Oregon&sll=37.788081,-104.501953&sspn=38.763291,54.931641&ie=UTF8&z=13&iwloc=addr">Ontario, Oregon</a>, but grew up primarily in <a href="http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=west+linn&sll=44.024804,-116.975703&sspn=0.069492,0.107288&ie=UTF8&z=12&iwloc=addr">West Linn, Oregon</a>, a suburb of Portland, and went to <a href="http://www.wlhs.wlwv.k12.or.us/">West Linn High School</a>. The school was fantastic and I had wonderful teachers, especially in math, science, and English.
					I spent much of my free time playing video games with friends, drawing, and writing code in BASIC, Pascal, C, and my TI-85 to make visualizations, games, and user interface toolkits.
					I retreated into programming largely as a refuge from myself.
				</p>

				<p>
					<img src={this.props.app.getWebRoot() + "/images/bio/bio-osu.jpg"} className="pull-right img-float" />
					I was a strong student and was admitted to several great universities out of state, but I couldn't afford any of them.
					I attended <a href="http://oregonstate.edu/">Oregon State University</a>, where I majored in <a href="http://eecs.oregonstate.edu/">Computer Science</a> and <a href="http://oregonstate.edu/cla/psychology/">Psychology</a>.
					Early on, I got involved in the budding student chapter of the ACM, and after my first year, helped run the club and its activities around campus, including the ACM International Collegiate Programming Contest, a statewide software engineering contest, and a student taught course on 2D graphics rendering algorithms.
					At the same time, I joined <a href="http://web.engr.oregonstate.edu/~burnett/">Margaret Burnett</a>'s research group, and stayed for two years. 
					In my senior year, I focused on my honors thesis project, advised largely by <a href="http://www.docbob.ca/">Bob Uttl</a>. 
					I'd enjoyed doing research in computer science and psychology so much, I decided to apply to several graduate schools with a slant towards Human-Computer Interaction.
				</p>

				<p>
					<img src={this.props.app.getWebRoot() + "/images/bio/bio-cmu.jpg"} className="pull-right img-float" />
					Of all of the schools, the <a href="http://www.hcii.cmu.edu/">Human-Computer Interaction Institute</a> at <a href="http://www.cmu.edu">Carnegie Mellon University</a> was the best fit, and I started work right away with <a href="http://www.cs.cmu.edu/~bam/">Brad Myers</a>.
					I started by investigating what made debugging so difficult, and inventing technologies to make it easier. 
					Just after proposing in 2006, I did a fantastic internship at <a href="http://research.microsoft.com/en-us/default.aspx">Microsoft Research</a> in the <a href="http://research.microsoft.com/en-us/groups/hip/">Human Interactions in Programming</a> group, and became fascinated with the larger challenge of software design and all of the human and cooperative issues that make it such a challenging form of engineering practice. 
					I graduated with my Ph.D. in Human-Computer Interaction in May of 2008.
				</p>

				<p>
					<img src={this.props.app.getWebRoot() + "/images/bio/bio-uw.jpg"} className="pull-right img-float" />
					Just prior to graduating, I toured the country, giving invited talks and job interviews at labs and universities for about eight weeks. 
					I interviewed at a range of places, including from conservative CS departments like <a href="http://www.eecs.berkeley.edu/">Berkeley EECS</a> to much broader places like the <a href="http://ischool.uw.edu/">University of Washington Information School</a>, as well as <a href="http://research.microsoft.com/en-us/default.aspx">Microsoft Research</a>, Redmond. 
					In the end, I wanted to be in the Pacific Northwest, I wanted a strong mix of teaching and research, and I was fascinated by the challenge of helping to grow and envision a new academic unit, so I chose the <a href="http://ischool.uw.edu/">Information School</a> as my new home.
				</p>

				<p>
					<img src={this.props.app.getWebRoot() + "/images/bio/bio-answerdash.jpg"} className="pull-right img-float" />
					The pre-tenure period of my faculty career was distinguished by wonderful Ph.D. students, supportive colleagues across HCI and software engineering in both academia and industry, and exciting growth in the Information School faculty in data science, HCI, and several other fields. 
					My own work continued to focus on developer tools, but began to incorporate more data science, investigating bug reporting from in a range of contexts, including open source, Agile teams, and private industry. 
					While I did this work, I also developed a growing passion for research on the learning and teaching of computing, investigating new learning technologies and aspects of software engineering expertise. 
					In 2013, I co-founded <a href="http://www.answerdash.com">AnswerDash</a> with Jake Wobbrock and Parmit Chilana. 
					AnswerDash offered instant answers on websites using a selection-based search technology that was the centerpiece of Parmit's dissertation work.
				</p>

				<p>
					<img src={this.props.app.getWebRoot() + "/images/bio/bio-tenure.jpg"} className="pull-right img-float" />
					I earned tenure in 2015.
					I finished my last day AnswerDash in December of 2015, resuming full-time faculty life on a short 6-month sabbatical.
					I used that time to begin a new focus on computing education research, inventing more effective, equitable, and scalable technologies and pedagogies for learning computer science. 
					I also set out to help grow the field of computing education, help shape state and federal policy on computing education, and have impact by aggressively disseminating my lab's research.
				</p>
				
				<p>
					<img src={this.props.app.getWebRoot() + "/images/bio/bio-chair.jpg"} className="pull-right img-float" />
					In Spring of 2017, our former Dean, Harry Bruce, asked me to chair our undergraduate major, Informatics. 
					I accepted. 
					While this was a big role, it only constituted 20% of my time and came with a healthy amount of teaching release to compensate. 
					My job therefore expanded from research, teaching, service, and impact, to also include administrative duties. 
					This brought a new dimension of impact to my work, allowing me to impact not only the iSchool's vision of undergraduate educations in information, but other iSchools as well.
				</p>
				
				<p>
					<img src={this.props.app.getWebRoot() + "/images/posts/post-comingoutresponse.jpg"} className="pull-right img-float" />
					In Autumn 2019, I <a href="https://medium.com/bits-and-behavior/im-trans-call-me-amy-8a72a3951964" target="_blank">came out as a trans woman</a>, finally accepting my gender identity and having the confidence to share it with the world. 
					My academic communities were <a href="https://medium.com/bits-and-behavior/what-coming-out-as-trans-should-look-like-395f31beeddb" target="_blank">incredibly supportive</a>, which gave me to confidence to be out and proud.
					That same year, I was promoted to Professor, and pivoted my research to have a more critical stance, exploring literacies in both the powers and perils of computing and investigating CS teacher education.
					Shortly after I came out, the COVID-19 pandemic arrived, and my lab and I went into survival mode, slowing down our work and doing our best to care for each other while in lockdown.
				</p>
				
			</div>
		)
	}
}

export { Biography };