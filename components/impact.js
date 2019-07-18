import React from 'react';
import _ from 'lodash';

var projects = require('../data/projects.json');

projects = projects.slice(0).sort((a, b) => {
	return b.startdate - a.startdate;
});

class Impact extends React.Component {
	render() {
		
		// Get the non-empty impact statements.
		var impacts = _.map(
			// Filter the empty impacts
			_.filter(projects, (project) => { return project.impact }), 
			(project, index) => { 
				return <p key={index}><strong>{project.name}</strong>. <span dangerouslySetInnerHTML={{__html: project.impact}}></span></p>;
			}
		);
		
		return (
			<div>

				<div className="lead">
					This is the impact my research has had on the world.
				</div>

				<p><strong>Books</strong>. I synthesize my research and others into books that summarize our best knowledge. I have written short books about <a href="books/design-methods">HCI+Design</a> and <a href="books/cooperative-software-development">Cooperative Software Development</a></p> 

				<p><strong>Washington State K-12 Computing Education Infrastructure</strong>. I <a href="https://medium.com/bits-and-behavior/a-glimpse-into-state-level-cs-education-policy-implementation-4e4b23501746">participate</a> in the development of <a href="http://www.k12.wa.us/ComputerScience/ImplentationPlanning.aspx">Washington State policy on K-12 computing education</a>. I also contribute to the <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1625224">WA Next Generation STEM Teacher Preparation Project</a> as a research consultant, helping to inform the teacher training programs and certifications for public schools in the state of Washington. To support this work, I run Sound CS Ed, a regional community of researchers, teachers, policy makers, and product designers focused on equitable, effective learning of computing. Our quarterly meetups bring together spheres that wouldn't normally talk to each other, which has led to interesting research/practice partnerships, transfer of research to product teams at Microsoft and Code.org.</p>

				<p><strong>U.S. Computing Education Policy</strong>. I've consulted with House representatives and their staffers on education policy that would incentivize and fund the development of pre-service CS teacher education programs in higher education.</p>

				<p><strong>International Computing Education Policy</strong>. I've been on the <a href="https://www.acm.org/education/education-council-and-education-board">ACM Education Council</a> since 2017, which convenes task forces to address the policy needs of universities, community colleges, high schools, corporations, and the US government. I've also informed and critiqued California's CS curricular standards.</p>

				<p><strong>Addressing Underrepresentation in CS</strong>. Since 2015, I've taught in our university's Upward Bound program, which primarily reaches low-income immigrant and refugee high school students in South Seattle. The students learn about computing, CSE and the iSchool, and they've helped me understand more about the inequities in computing mentorship.</p>

				<p><strong>Computing Education Research Funding</strong>. I've consulted with Google, NSF, CRA, and Code.org about strategies for strengthening the pipeline of computing education research, researchers, and research funding, including writing a <a href="http://cra.org/ccc/wp-content/uploads/sites/2/2015/01/CSEdResearchWhitePaper2016.pdf">whitepaper about the importance of computing education research</a>.</p>

				<p><strong>Computing Education Peer Review</strong>. I helped revised the reviewing process for ACM Transactions on Computing Education, helped create the research track at the SIGCSE Technical Symposium, and wrote the reviewing form for the SIGCSE research track.</p> 

				<p><strong>Microsoft <a href="https://makecode.com/">MakeCode</a></strong>. In 2016, Microsoft founded a team to work on productizing accessible tools for youth to create physical computing applications. I worked closely with them at the beginning of their project to ensure the products leveraged the latest research evidence from the field of computing education research.</p>
				{ /* 3/8/18: Just had a good meeting with Code.org to help them brainstorm about their K-5 tool offerings. Shared thoughts @mlee�s Gidget, @burguw�s Timelapse, @dastyni�s process ideas, @bxie�s program comprehension ideas, and other researchers in the field. Also reminded them about their promises on tracing and process for teacher PD and curriculum. */ }
				<p><strong>Code.org</strong> has leveraged many of the ideas from our work on computing education for their online learning technologies and curriculum.</p>

				<p><strong>Podcasts</strong>. I contribute to podcasts about my expertise:</p>

				<ul>
					<li><em>Software Engineering Daily</em>: <a target="_blank" href="http://softwareengineeringdaily.com/2016/02/24/academia-to-industry-in-computer-science-with-andy-ko/">Applying Software Research to Industry with Andy Ko</a>.</li>
					<li><em>Changing Academic Life</em>: <a target="_blank" href="http://www.changingacademiclife.com/blog/2017/6/18/andy-ko">Andy Ko on being reflectively self-aware, deliberately structured, & amazingly productive</a></li>
				</ul>
				<p><strong><a href="talks">Keynotes</a></strong>. I share larger visions about my work in keynotes at various conferences.</p>
				
				<p><strong>Press</strong>. I regularly talk to the press to inform on matters related to learning to code, automation, and software engineering. I've worked with reporters in the Associated Press, NPR, APM's Marketplace, PC Magazine, Huffington Post, among other local news.</p>

				{impacts}

			</div>
		)
	}
}

export { Impact };