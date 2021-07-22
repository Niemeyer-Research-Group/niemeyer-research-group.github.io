import React from 'react';

class CER extends React.Component {

	person(name, url, expertise, dept, inst, country) {

		return <tr key={name}>
			<td><a href={url} target="_blank">{name}</a></td>
			<td>{expertise}</td>
			<td>{dept}</td>
			<td>{inst}</td>
			<td>{country}</td>
		</tr>

	}

	render() {
		return (
			<div>
				<div className="lead">
					This is my computing education research FAQ, which I began with the help of several computing education researchers at a Dagstuhl retreat in 2016. I consider it a community resource, so if you see something to add, fix, or improve, write me, or submit <a href="https://github.com/amyjko/faculty/issues">an issue</a> or <a href="https://github.com/amyjko/faculty/pulls">pull request</a>.
				</div>

				<hr/>

				<p>Computing education research (CER), also known as computer science education (CSEd) research, is the study of how people learn and teach computing, broadly construed. This FAQ will teach you more about the field and how you might contribute to it:</p>

				<ul>
					<li><a href="#what-is-cer">What is computing education research?</a></li>
					<li><a href="#comparison-to-other-fields">How does computing education research compare to learning sciences, education research, and educational psychology?</a></li>
					<li><a href="#major-questions">What are the overarching research questions in CER?</a></li>
					<li><a href="#exciting-discoveries">What are some exciting CER discoveries?</a></li>
					<li><a href="#jobs">What kinds of jobs do computing education researchers do?</a></li>
					<li><a href="#becoming-a-researcher">How do I become a CER researcher?</a></li>
					<li><a href="#getting-a-phd">Where can I get a Ph.D. in CER?</a></li>
					<li><a href="#doctoral-admissions">For doctoral admissions, how important is it to demonstrate focus in a single research area?</a></li>
					<li><a href="#getting-a-job">Where can I find a CS education research job?</a></li>
					<li><a href="#funding-for-cer">Is there funding for CER?</a></li>
					<li><a href="#being-impactful">What do I need to know to be an effective, impactful computing education researcher?</a></li>
					<li><a href="#conferences-and-journals">What conferences and journals publish CER?</a></li>
					<li><a href="#experience-reports">What's the difference between a research paper and an experience report?</a></li>
					<li><a href="#blogs">How can I keep up with the latest research, practice, and policy?</a></li>
					<li><a href="#community">How can I connect with the community?</a></li>
				</ul>
				
				<h3 id="what-is-cer">What is computing education research?</h3>

				<p>
					First, CER is not teaching. Teaching is helping people acquire knowledge, skills, attitudes, beliefs, identities. Research is discovery and invention. Teachers teach computing, whereas computing education researchers make discoveries about this teaching and learning, and invent new ways for these teaching and learning to occur. CER is an example of <a href="https://www.nap.edu/catalog/13362/discipline-based-education-research-understanding-and-improving-learning-in-undergraduate">discipline-based education research</a>, like math education research or science education research, all of which are part of the broader field of education and learning sciences research.
				</p>

				<p>
					CER is also not educational technology research (EdTech). Computing education researchers often create educational technologies to support the learning and teaching of computing, but CER is not explicitly concerned with the broader use of technology in learning, teaching, and education. It's specifically concerned with the learning and teaching of computing in particular. Many computer science researchers invent learning technologies, but are not computing education researchers, because those technologies are not concerned with the learning of computing.
				</p>

				<p>
					It's also important to note that I view "computing" broadly: it's not just about programming, or even just about computer science, but also about all of the phenomena surrounding computing, including data, information, privacy, security, ethics, software engineering, and sociocultural and sociopolitical views of computing in society. This means that computing education and CER can and does cover far more than just learning to code&mdash;it just hasn't historically.
				</p>

				<h3 id="comparison-to-other-fields">How does computing education research compare to learning sciences, education research, and educational psychology?</h3>

				<p>
					My background isn't in these fields, though I do collaborate with people in these other communities and have learned about their differences. Here's the best characterization I can give:
				</p>

				<ul>
					<li>
						<strong>Education research</strong> is broadly concerned with formal systems of education, how to make those systems effective and just, how to prepare teachers to make them effective and just. The field is interested in general theories of learning, education, interest development, and identity, and because of it's focus on formal education, is often focused on youth, who are the dominant age demographic engaged informal education. The phrase "Computing education" uses the word "education" in this same way, but is more broadly concerned with teaching and learning in any context (in principle, but often not in practice).
					</li>
					<li>
						<strong>Educational psychology</strong> is focused on learning phenomena in the mind, such as learning, memory, development, intelligence, self-regulation, motivation, and self-concept. The field is also concerned with school psychologists who help students with their mental health. The field tends to be more quantitiatve than education research and learning sciences, following traditions of cognitive psychology. Computing education draws upon this field, especially in its history of cognitive theories of program understanding.
					</li>
					<li>
						<strong>Learning sciences</strong> emerged in the 1990's as a reaction to educational psychology's inattention to the setting, culture, and social context of learning. Combining perspectives from cognition, cognitive science, computer science, and design, like education research, it's much more concerned with the sociocultural factors that shape learning, and more than education and educational psychology, views design as a means to articulating theories, a way of shaping theories, and a way of testing theories. Because of the focus on context, in addition to being concerned with formal systems of education, it is also concerned with learning across the lifespan, at home, in families, and other settings.
					</li>
				</ul>

				<p>
					How does computing education fit in to all of this? Like other <a href="https://www.nap.edu/catalog/13362/discipline-based-education-research-understanding-and-improving-learning-in-undergraduate" target="_blank">discipline-based education research (DBER)</a> such as math and physics education, it draws upon all three of the fields above, using theories and ideas from those fields. However, because it is focused on a discipline, it is specifically concerned with the content of the discipline, specific methods of learing and teaching that content. In this sense, it is more applied, bridging foundational ideas that span any human learning to applied ideas specific to the learning of specific ideas and skills.
				</p>
				
				<h3 id="major-questions">What are the overarching research questions in CER?</h3>
				
				<p>
					As with any research discipline, research questions can and should be specific. However, there are some major overarching questions in this field that researchers have begun to investigate, including:
				</p>
				
				<ul>
					<li>What is computing?</li>
					<li>What does it mean to know computing?</li>
					<li>How do people learn computing?</li>
					<li>How do teachers teach and assess computing?</li>
					<li>How does identity interact with people's learning of computing?</li>
					<li>How can people learn computing more effectively?</li>
					<li>How can teachers teach computing more effectively?</li>
					<li>How can access to computing education be improved?</li>
					<li>How can computing education be delivered equitably to all?</li>
					<li>How can computing education be reimagined to serve goals other than profit and disruption?</li>
					<li>How do systems of oppression such as racism, sexism, and ablism shape learning, teaching, and curricula?</li>
					<li>How can we implement anti-racist CS education?</li>
					<li>How can learning technologies teach computing?</li>
					<li>How does computing education affect people's lives?</li>
					<li>What are the societal costs of computing illiteracy?</li>
					<li>What can be taught about computing to learners of different ages?</li>
				</ul>
				
				<p>
					While the "people" in the questions above could be anyone (youth, teens, college students, adults, and even teachers), the history of CER has primarily focused on teaching students in post-secondary settings, because the faculty conducting research have found it easier to study the students they are teaching. This is changing as countries around the world begin to incorporate computing into all levels of school, and as private industry begins to create technologies and services that teach computing to all ages. For example, my research has investigated new ways to teach youth from age 8-18, as well as adults.
				</p>
				
				<h3 id="exciting-discoveries">What are some exciting CER discoveries?</h3>
				
				<p>
					There are so many! Examples include:
				</p>
				
				<ul>
					<li>
						The field discovered that diversity in computing education is low because of the narrow, exclusionary nature of computing cultures, not because of inherent disinterest or inability on the part of diverse learners (e.g., <a href="https://doi.org/10.1145/543812.543836" target="_blank">Fisher &amp; Margolis 2002</a>, <a href="https://books.google.com/books?id=WOI9rGJSFCcC&amp;lpg=PR5&amp;ots=LaGMwwGOZl&amp;dq=swimming%20in%20the%20shallow%20end&amp;lr&amp;pg=PR5#v=onepage&amp;q=swimming%20in%20the%20shallow%20end&amp;f=false" target="_blank">Margolis 2010</a>).
					</li>
					<li>
						The field invented contextualized computing ed pedagogy (e.g., Mark Guzdial's <a href="https://doi.org/10.1145/961290.961542" target="_blank">media computation</a>), which has greatly increased the diversity of computer science graduates, and spread to many universities.
					</li>
					<li>
						The field built upon the earliest structured editors like the <a href="https://dl.acm.org/citation.cfm?id=358755" target="_blank">Cornell Program Synthesizer</a>, eventually maturing them into block-based editing environments like <a href="https://doi.org/10.1145/259963.260503" target="_blank">Alice</a>, <a href="https://doi.org/10.1145/1592761.1592779" target="_blank">Scratch</a> and <a href="https://developers.google.com/blockly/" target="_blank">Blockly</a>. These editors greatly increased engagement in computing education, and greatly reduced barriers to learning programming languages.
					</li>
					<li>
						Seymour Papert, who was broadly concerned with learning, but also the learning of computing, contributed constructionism, a new theory of learning (<a href="https://dl.acm.org/citation.cfm?id=1095592" target="_blank">Papert 1980</a>).
					</li>
					<li>
						Alan Kay, one of the earliest researchers to investigate the learning of computing, helped <a href="http://gagne.homedns.org/~tgagne/contrib/EarlyHistoryST.html" target="_blank">build upon ideas of object-orientation from Simula</a>, which inspired Smalltalk, which along with other languages such as C++, inspired the modern object-oriented programming languages and IDEs we use today.
					</li>
				</ul>
				
				<p>
					The field's recent efforts to transform STEM education through computing, invent rapid new forms of learning online, and devise more equitable ways to teach should be equally, if not more impactful.
				</p>
				
				<h3 id="jobs">What kinds of jobs do computing education researchers do?</h3>

				<p>
					Most computing education researchers are faculty in universities. Many of these faculty are tenure-track faculty like myself, which means a substantial portion of our time (~50%) is spent on scholarship. However, there are also many full-time instructors who find additional time to do research on top of their teaching. Many of the original authors at ICER were once members of the Bootstrapping or Scaffolding groups (led by Fincher, Petre, and Tenenberg), who were CS teachers that started to do research in their own classrooms.
				</p>
				<p>
					Not all computing education researchers are college faculty. Some work in industry creating educational technologies for teaching computing, applying their expertise to the research and design of educational software. Some work in non-profits, using their expertise to advocate for computing education in schools, while conducting research on factors that affect policy. Some work in school districts, helping to implement computing education curricula in schools, while studying and evaluating the effectiveness of the implementation. Others work in government, facilitating research funding. Others still become teachers themselves, both at universities and other schools.
				</p>

				<p>
					Tenure-track faculty are in the best position to make advances in the field because a substantial portion of their time is dedicated to research, but the research contributions by teaching-track faculty are critical, as they often bring more richly informed perspectives on the practice of teaching. It is possible to do research in other positions, but it is often outside the scope of a job. Because of this, many non-tenure track faculty focus their research on settings that their job gives them access to, which can restrict which research questions they can answer.
				</p>

				<h3 id="becoming-a-researcher">How do I become a CER researcher?</h3>

				<p>
					The most effective route is to get a Ph.D. in computing education research at one of the many Ph.D. granting universities in the world. Ph.D. students learn to conduct research over the course of multiple years (generally 4 to 6) under the supervision of an advisor.
				</p>

				<p>
					Undergraduate research is a key part of creating pathways to Ph.D. programs. Undergraduates can help accelerate research projects, and even lead their own projects, helping with admission to Ph.D. programs (especially if you publish, which demonstrates your interest and ability in conducting research). See the <a href="https://cra.org/crae/wp-content/uploads/sites/3/2020/10/Resources-for-Scaling-Undergraduate-Research.pdf" target="_blank">CRA-E best practices guide on undergraduate CS research</a> for a glimpse into how effective undergraduate research experiences should work.
				</p>

				<h3 id="getting-a-phd">Where can I get a Ph.D. in CER?</h3>

				<p>
					You need to find a university that grants Ph.D.s and has tenure-track faculty who do research in CER on a topic that you're interested in. The alphabetical list below contains some of the many faculty who advise Ph.D. students on computing education research. Find them online and see what kind of research they're doing. (This list may be out of date, as faculty sometimes move universities, retire, go to industry, or change research areas, so be sure to check their website for the latest information).
				</p>

				<p>
					One note about selecting advisors: their disciplinary affilitation is just <em>one</em> indicator of the nature of the contributions they might make (people in CS departments might built learning technologies, people in colleges of education might focus on teacher training and pedagogy), but this is not a perfect indicator. Look closely at researchers' recent publications; and if their websites seem out of date, write them to ask what they're working on.
				</p>

				<p>
					Another caveat: some of the faculty below have chosen their expertise descriptions, but others I had to extract from faculty websites wrote. <strong>I've put a * next to expertise</strong> that hasn't been chosen or agreed to by the researcher being described. These expertise tags are also likely to be perpetualy out of date, as researchers pursue new topics. The best thing to do is click on their name to visit their website and see what kinds of research they have published. That's the most direct indicator of their interests, the methods they use, and the types of contributions they want to make (other than just writing them and asking, which you can also do).
				</p>
				
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Expertise</th>
							<th>Unit</th>
							<th>University</th>
							<th>Country</th>
						</tr>
					</thead>
					<tbody>
						{[
							this.person("Syedah Zahra Atiq", "https://cse.osu.edu/people/atiq.2", "Non-cognitive factors, broadening participation", "Computer Science and Engineering", "The Ohio State University", "USA"),
							this.person("Erik Barendsen*", "https://www.ru.nl/english/people/barendsen-e/", "pedagogy, literacy, computational thinking", "Science Education", "Radboud University", "Netherlands"),
							this.person("Tiffany Barnes", "http://www4.ncsu.edu/~tmbarnes/", "inclusion, educational games, tutoring systems, teacher education", "Computer Science", "North Carolina State University", "USA"),
							this.person("Austin Cory Bart", "https://acbart.github.io/", "introductory computing, motivation", "Computer Science", "University of Delaware", "USA"),
							this.person("Brett Becker", "http://www.brettbecker.com", "novices, programming, compilers, errors", "Computer Science", "University College Dublin", "Ireland"),
							this.person("Tim Bell", "http://www.cosc.canterbury.ac.nz/tim.bell/", "CS unplugged, curriculum", "Computer Science", "University of Canterbury", "New Zealand"),
							this.person("Marc Berges*", "https://www.ddi.tf.fau.de/personen/leitung/berges/", "PCK and programming education", "Department of Computer Science", "Universitaet Erlangen-Nuernberg", "Germany"),
							this.person("Anders Berglund*", "https://katalog.uu.se/profile/?id=XX3048", "CS education", "Department of Information Technology", "Uppsala University", "Sweden"),
							this.person("Matthew Berland*", "http://berland.org/", "digital media, data science learning", "Curriculum & Instruction, Computer Science", "University of Wisconsin-Madison", "USA"),
							this.person("Paulo Blikstein*", "https://www.tc.columbia.edu/faculty/pb2755/", "project-based learning", "Communications, Media and Learning Technology Design", "Columbia University", "USA"),
							this.person("Kristy Boyer*", "http://research.csc.ncsu.edu/learndialogue/person.php?id=keboyer", "intelligent tutoring systems", "Computer Science", "University of Florida", "USA"),
							this.person("Karen Brennan", "https://www.gse.harvard.edu/faculty/karen-brennan", "constructionism, creativity, K-12 classrooms, teacher learning", "Graduate School of Education", "Harvard", "USA"),
							this.person("Jed Brubaker", "https://www.colorado.edu/cmci/people/information-science/jed-brubaker", "how identity is designed, represented and experienced in socio-technical systems", "Information Science", "University of Colorado, Boulder", "USA"),
							this.person("Åsa Cajander*", "https://katalog.uu.se/profile/?id=N2-392", "learning and didactics", "Department of Information Technology", "Uppsala University", "Sweden"),
							this.person("Cornelia Connolly", "http://www.nuigalway.ie/our-research/people/education/corneliaconnolly/", "pedagogy, teacher education, computational thinking, design", "School of Education", "National University of Ireland, Galway", "Ireland"),
							this.person("Steve Cooper*", "http://cse.unl.edu/~scooper/", "program visualization, spatial reasoning", "Computer Science & Engineering", "University of Nebraska, Lincoln", "USA"),
							this.person("Quintin Cutts*", "http://www.dcs.gla.ac.uk/~quintin/", "pedagogy, assessment, work based learning and teacher learning communities", "School of Computer Science", "University of Glasgow", "Scotland"),
							this.person("Mats Daniels*", "https://katalog.uu.se/profile/?id=XX3066", "computing and engineering education research, group projects", "Department of Information Technology", "Uppsala University", "Sweden"),
							this.person("Joshua Danish*", "https://education.indiana.edu/about/directory/profiles/danish-joshua-a.html", "how people learn through activity", "School of Education", "Indiana University Bloomington", "USA"),
							this.person("Sayamindu Dasgupta*", "https://unmad.in/", "youth, data science", "School of Information and Library Science", "University of North Carolina at Chapel Hill", "USA"),
							this.person("Adrienne Decker", "https://adriennedecker.net/", "pedagogy, assessment, efficacy of outreach", "Engineering Education", "University at Buffalo", "USA"),
							this.person("Paul Denny", "https://www.cs.auckland.ac.nz/~paul/", "collaborative learning, online learning, gamification, student-generated resources", "Computer Science", "University of Auckland", "New Zealand"),
							this.person("Kayla DesPortes*", "https://steinhardt.nyu.edu/faculty/Kayla_Desportes", "computing as a medium for expression", "Learning Sciences", "New York University", "USA"),
							this.person("Sebastian Dziallas*", "http://sdziallas.com/", "experiences in higher education CS", "", "Fulbright University Vietnam", "Vietnam"),
							this.person("Betsy DiSalvo*", "http://betsydisalvo.com/", "culture, informal learning", "School of Interactive Computing", "Georgia Tech", "USA"),
							this.person("Brian Dorn*", "http://faculty.ist.unomaha.edu/bdorn/", "HCI, informal learning, teacher education", "Department of Computer Science", "University of Nebraska, Omaha", "USA"),
							this.person("Anna Eckerdal*", "https://katalog.uu.se/profile/?id=N99-802", "threshold concepts, MOOCs, learning in labs", "Department of Information Technology", "Uppsala University", "Sweden"),
							this.person("Steve Edwards*", "http://webcore.cs.vt.edu/user/edwards", "software engineering, formal methods, autograding", "Computer Science", "Virginia Tech", "USA"),
							this.person("Barbara Ericson*", "http://barbara-ericson.strikingly.com/", "pedagogy, diversity", "School of Information", "University of Michigan", "USA"),
							this.person("Martin Erwig", "http://web.engr.oregonstate.edu/~erwig/", "programming languages, visual languages, explanations, story programming", "Electrical Engineering and Computer Science", "Oregon State University", "USA"),
							this.person("Marisa Exter", "https://www.education.purdue.edu/faculty-profiles/name/marisa-exter/", "post secondary, lifelong learning, interdisciplinarity, competency-based education", "Department of Curriculum & Instruction", "Purdue University", "USA"),
							this.person("Katrina Falkner*", "http://www.adelaide.edu.au/directory/katrina.falkner", "pedagogy, computational thinking", "School of Computer Science", "University of Adelaide", "Australia"),
							this.person("Casey Fiesler*", "https://www.colorado.edu/cmci/people/information-science/casey-fiesler", "technology ethics", "Information Science", "University of Colorado, Boulder", "USA"),
							this.person("Kathi Fisler", "http://web.cs.wpi.edu/~kfisler/", "Programming languages, pedagogy, cross-disciplinary learning and transfer", "Computer Science", "Brown University", "USA"),
							this.person("Diana Franklin", "http://people.cs.uchicago.edu/~dmfranklin/", "Equity, curriculum, and CS learning in K-8", "Department of Computer Science", "University of Chicago", "USA"),
							this.person("Armando Fox*", "https://www2.eecs.berkeley.edu/Faculty/Homepages/fox.html", "digital learning, programming systems, and software engineering", "Electrical Engineering & Computer Science", "University of California, Berkeley", "USA"),
							this.person("Joanna Goode*", "https://education.uoregon.edu/people/faculty/goodej", "Access and equity for underrepresented students of color and females in computer science education", "College of Education", "University of Oregon", "USA"),
							this.person("Jeff Grey", "http://gray.cs.ua.edu", "Block-based languages", "Department of Computer Science", "University of Alabama", "USA"),
							this.person("Bill Griswold", "https://cseweb.ucsd.edu/~wgg/", "HCI, software engineering education, and educational tools", "Department of Computer Science & Engineering", "University of California, San Diego", "USA"),
							this.person("Tovi Grossman", "http://www.tovigrossman.com/", "HCI, software learning, interactive tutorials", "Computer Science", "University of Toronto", "Canada"),
							this.person("Philip Guo", "http://www.pgbovine.net/", "HCI, learning at scale", "Cognitive Science", "University of California, San Diego", "USA"),
							this.person("Mark Guzdial*", "http://www.cc.gatech.edu/home/guzdial/", "pedagogy, curriculum, end-user programming, teachers, research instruments, theory", "Computer Science & Engineering, Engineering Education Research", "University of Michigan", "USA"),
							this.person("Sarah Heckman", "https://people.engr.ncsu.edu/sesmith5/", "software engineering, automated grading, and help-seeking", "Computer Science", "North Carolina State University", "USA"),
							this.person("Geoffrey Herman", "http://publish.illinois.edu/glherman/", "conceptual change and student learning, assessment and measurement, pedagogy, and faculty development", "Computer Science", "University of Illinois, Urbana-Champaign", "USA"),
							this.person("Felienne Hermans", "http://www.felienne.com/", "K-12 education, misconceptions, teacher education, direct instruction, end-user programming", "Computer Science", "Leiden University", "The Netherlands"),
							this.person("Nathan Holbert", "https://www.tc.columbia.edu/faculty/nrh2118/", "constructionism, diversity", "Mathematic Science and Technology, Teachers College", "Columbia University", "USA"),
							this.person("Peter Hubwieser", "http://www.professoren.tum.de/en/hubwieser-peter/", "assessment", "Computer Science", "TU Munich", "Germany"),
							this.person("Chris Hundhausen", "http://www.eecs.wsu.edu/~hundhaus/", "social learning technologies and pedagogical approaches", "Computer Science", "Washington State University", "USA"),
							this.person("Sridhar Iyer*", "https://www.it.iitb.ac.in/~sri/", "computing education research", "Computer Science and Engineering", "Indian Institute of Technology Bombay", "India"),
							this.person("Yasmin Kafai", "http://scholar.gse.upenn.edu/kafai", "constructionism, educational games, electronic textiles, Scratch", "Graduate School of Education", "University of Pennsylvania", "USA"),
							this.person("Dennis Kafura*", "https://people.cs.vt.edu/kafura/", "computational thinking", "Computer Science", "Virginia Tech", "USA"),
							this.person("Caitlin Kelleher*", "http://www.cse.wustl.edu/~ckelleher/", "learning technology", "Computer Science", "Washington University in St. Louis", "USA"),
							this.person("Scott Klemmer*", "http://d.ucsd.edu/srk/", "HCI, learning at scale", "Cognitive Science", "University of California, San Diego", "USA"),
							this.person("Amy J. Ko", "http://faculty.uw.edu/ajko/", "Critical computing education, programming language learning, pre-service teacher education", "The Information School, Computer Science & Engineering", "University of Washington, Seattle", "USA"),
							this.person("Shriram Krishnamurthi*", "https://cs.brown.edu/~sk/", "programming languages, pedagogy", "Computer Science", "Brown University", "USA"),
							this.person("Celine Latulipe*", "https://celinelatulipe.wordpress.com/", "HCI, creativity, pedagogy", "Software and Information Systems", "UNC Charlotte", "USA"),
							this.person("Michael J. Lee", "http://pixel42.com/", "HCI, educational games, diversity, learning technologies", "Informatics", "New Jersey Institute of Technology", "USA"),
							this.person("Victor Lee", "http://victor-r-lee.com/", "learning sciences, computational thinking with board games, early childhood computational thinking, maker education", "Graduate School of Education", "Stanford University", "USA"),
							this.person("Leen-kiat Soh", "https://cse.unl.edu/~lksoh/", "multiagent systems, computer science education, and intelligent data analytics", "Computer Science and Engineering", "University of Nebraska, Lincoln", "USA"),
							this.person("Colleen Lewis", "https://cs.illinois.edu/directory/profile/colleenl", "Understanding and optimizing learning; identifying and removing barriers", "Computer Science", "University of Illinois at Urbana-Champaign", "USA"),
							this.person("Raymond Lister*", "http://www.uts.edu.au/staff/raymond.lister", "cognition, assessment, program understanding", "School of Software", "University of Technology, Sydney", "Australia"),
							this.person("Dastyni Loksa*", "http://students.washington.edu/dloksa/#/", "Programming problem solving", "Computer & Information Sciences", "Towson University", "USA"),
							this.person("Andrew Luxton-Reilly*", "https://unidirectory.auckland.ac.nz/profile/alux001", "learning communities, game-based learning, debugging, automated assessment, gender and diversity in CS", "Computer Science", "University of Auckland", "New Zealand"),
							this.person("Alejandra J. Magana", "https://polytechnic.purdue.edu/profile/admagana", "Computational thinking, model-based reasoning, cyberlearning, discipline-based computing education", "Computer and Information Technology and Engineering Education", "Purdue University", "USA"),
							this.person("Lauri Malmi", "http://www.cs.hut.fi/~lma/", "program visualization, algorithm visualization, automatic assessment", "Computer Science", "Aalto University", "Finland"),
							this.person("Lauren Margulieux*", "https://laurenmarg.com/", "online learning in computing", "Department of Learning Sciences", "Georgia State University", "USA"),
							this.person("Christina Gardner-McCune*", "https://www.cise.ufl.edu/gardner-mccune-christina/", "Computer Science Education, AI Education, Design of Learning Technologies & Learning Environments, Curriculum Development & Assessment, K-12 Computing After-School & Summer Camps, Learning Sciences", "Computer & Information Science & Engineering", "University of Florida", "USA"),
							this.person("Briana Morrison*", "http://www.brianamorrison.net/", "pedagogy, cognitive load", "Computer Science", "University of Virginia", "USA"),
							this.person("Lijun Ni", "https://www.albany.edu/education/faculty/lijun-ni", "K-12 computer science education, teacher education and  professional development", "Department of Educational Theory and Practice", "University at Albany, State University of New York", "USA"),
							this.person("Lars-Åke Nordén*", "https://katalog.uu.se/profile/?id=N3-976", "self-efficacy", "Department of Information Technology", "Uppsala University", "Sweden"),
							this.person("Aletta Nylén*", "https://www.it.uu.se/katalog/aletta", "STEM and computing education", "Department of Information Technology", "Uppsala University", "Sweden"),
							this.person("Chris Orban*", "https://physics.osu.edu/people/orban.14", "high school physics and math CS integration", "Physics", "The Ohio State University", "USA"),
							this.person("Eleanor O'Rourke", "http://www.eleanorourke.com/", "HCI, educational games, learning technology, growth mindset, motivation", "Computer Science and Learning Science", "Northwestern", "USA"),
							this.person("Tapan Parikh", "http://tap2k.org/", "Data science, civic tech, equity", "School of Information", "Cornell Tech", "USA"),
							this.person("Elizabeth Patitsas", "http://www.cs.mcgill.ca/~patitsas/", "Computing as literacy, educational/technical inequity, sociology of education, gender studies, disability studies, teacher development, educator practices, policy analysis, computing & society, science and technology studies (STS), diversity", "School of Computer Science, Department of Integrated Studies in Education", "McGill University", "Canada"),
							this.person("Jamie Payton*", "https://cis.temple.edu/~payton/", "Broadening participation in computing, and evidence-based approaches to improving computer science education", "Computer and Information Sciences", "Temple University", "USA"),
							this.person("Roy Pea*", "http://web.stanford.edu/~roypea/", "learning science, informal learning", "Education and Learning Sciences", "Stanford", "USA"),
							this.person("Arnold Pears*", "http://www.it.uu.se/katalog/arnoldp", "pedagogy", "Department of Information Technology", "Uppsala University", "Sweden"),
							this.person("Bill Penuel*", "https://www.colorado.edu/education/william-penuel", "teacher learning and organizational processes", "Education", "University of Colorado, Boulder", "USA"),
							this.person("Anne-Kathrin Peters*", "https://katalog.uu.se/profile/?id=N11-1467", "sustainability education, identities, norms, values", "Department of Information Technology", "Uppsala University", "Sweden"),
							this.person("Marian Petre*", "http://mcs.open.ac.uk/mp8/", "software design, design pedagogy", "Centre for Research in Computing", "The Open University", "UK"),
							this.person("Leo Porter", "https://cseweb.ucsd.edu/~leporter/", "pedagogy, assessment, educational data mining", "Computer Science and Engineering", "University of California, San Diego", "USA"),
							this.person("Joël Porquet-Lupine", "https://luplab.cs.ucdavis.edu/", "curriculum development for teaching introductory programming courses, educational tools", "Computer Science", "University of California, Davis", "USA"),
						 	this.person("Thomas Price", "https://people.engr.ncsu.edu/twprice/website/", "educational data mining, tutoring systems, automated feedback", "Computer Science", "North Carolina State&nbsp;University", "USA"),
							this.person("Keith Quille", "http://keithquille.com/", "pedagogy, introductory programming, educational data mining, predicting success, CS1, K-12", "Department of Computing", "TU Dublin, Tallaght Campus", "Ireland"),
							this.person("Gerald Soosai Raj", "https://adalbertgerald.github.io", "Making computing more accessible to diverse learners (e.g., Non-native English Speakers)", "Computer Science and Engineering", "University of California, San Diego", "USA"),
							this.person("Mitch Resnick*", "http://web.media.mit.edu/~mres/", "constructionism, creativity", "Media Lab", "MIT", "USA"),
							this.person("Judy Robertson*", "https://www.ed.ac.uk/profile/judy-robertson", "data science education, curriculum development, teacher professional learning and games-based learning", "School of Education", "The University of Edinburg", "Scotland"),
							this.person("Anthony Robins", "http://www.cs.otago.ac.nz/staff/Anthony_Robins", "psychology of programming, language learning, first programming language, novice programmers, CS1", "Computer Science", "University of Otago", "New Zealand"),
							this.person("Ricarose Roque", "http://www.ricarose.com/", "constructionism, creativity, informal learning, family learning", "Information Science", "CU Boulder", "USA"),
							this.person("Monique Ross*", "https://www.moniqueross.com/", "broadening participation, with a focus on computer science", "Computing and Information Science", "Florida International University", "USA"),
							this.person("Linda Sax*", "https://gseis.ucla.edu/directory/linda-sax/", "diversity in undergraduate CS and STEM", "Department of Education", "University of California, Los Angeles", "USA"),
							this.person("Cliff Shaffer*", "http://people.cs.vt.edu/shaffer/", "digital education", "Computer Science", "Virginia Tech", "USA"),
							this.person("Kristin Searle*", "https://itls.usu.edu/people/faculty/searle/", "gender, culture, engagement with computing", "Instructional Technology and Learning Sciences", "Utah State University", "USA"),
							this.person("Carsten Schulte*", "http://www.uni-paderborn.de/person/60311/", "pedagogy", "Computer Science", "Paderborn University", "Germany"),
							this.person("Valerie Shute*", "http://myweb.fsu.edu/vshute/", "assessment", "Education", "Florida State University", "USA"),
							this.person("Ben Shapiro*", "http://benshapi.ro/", "constructionism, new media", "ATLAS Institute, Computer Science", "University of Colorado", "USA"),
							this.person("Andreas Stefik", "http://web.cs.unlv.edu/stefika/", "Human factors of programming language design, accessibility", "Computer Science", "University of Nevada, Las Vegas", "USA"),
							this.person("Jakita O. Thomas", "https://www.jakitaothomas.com", "computational algorithmic thinking, intersectional computing, complex cognitive skill development, computer-supported collaborative learning", "Computer Science and Software Engineering", "Auburn University", "USA"),
							this.person("Jan Vahrenhold", "https://www.uni-muenster.de/Informatik.AGVahrenhold/personen/prof.dr.janvahrenhold/", "algorithms, non-cognitive factors, TA education", "Computer Science", "University of Münster", "Germany"),
							this.person("Sepehr Vakil", "https://sites.northwestern.edu/sepehrvakil/", "sociocultural perspectives on learning and identity; ethics and politics of computing; social justice education", "Learning Sciences", "Northwestern University", "USA"),
							this.person("Erin Walker", "http://faculty.engineering.asu.edu/ewalker/", "personalized learning environments, computer-supported collaborative learning, robotic learning environments", "School of Computing and Information", "University of Pittsburgh", "USA"),
							this.person("David Weintrop", "http://www.terpconnect.umd.edu/~weintrop", "design of learning environments, computational thinking, K-12 Classrooms", "College of Education & College of Information Studies", "University of Maryland", "USA"),
							this.person("Uri Wilensky*", "http://ccl.northwestern.edu/Uri.shtml", "computational thinking, science integration", "Learning Sciences", "Northwestern University", "USA"),
							this.person("Michelle Wilkerson", "https://www.ocf.berkeley.edu/~mwilkers/", "Computing in K-12 science and math education; w/ focus on modeling and data", "Graduate School of Education", "UC Berkeley", "USA"),
							this.person("Joseph Jay Williams", "http://www.josephjaywilliams.com/", "HCI, A/B experimentation, learnersourcing, personalization, multi-armed bandits/reinforcement learning, self-explanation, metacognition, motivation and social psychology interventions, cognitive science, mental health, learning at scale", "Computer Science", "University of Toronto", "Canada"),
							this.person("Aman Yadav", "http://www.amanyadav.org/", "computational thinking, teacher education, problem-based learning, teacher professional development", "Educational Psychology and Educational Technology", "Michigan State University", "USA"),
							this.person("Haoqi Zhang*", "http://users.eecs.northwestern.edu/~hq/", "learning ecosystems", "Computer Science", "Northwestern", "USA")
						]}
					</tbody>
				</table>

				<h3 id="doctoral-admissions">For doctoral admissions, how important is it to demonstrate focus in a single research area?</h3>
				
				<p>
					Advisors differ on the criteria they use to select candidates. Personally, I look for 1) experience with research, 2) passion in the subject of computing education, 3) the requisite skills to persue that passion, and 4) an overlap with my interests. You can get experience by working with faculty at your own institution. That can be hard if you don't have faculty doing work in this area. The requisite skills depend a lot on the contributions you want to make. If you want to envision and build new learning technologies, can you code well enough to build them? If you want to investigate new teacher training methods, do you have teaching experience? If you want to do more theoretical work, how strong are your writing and analytical skills? All of these skills end up being important in some way to participating in CER discourse, just to varying degrees.
				</p>
				
				<p>
					Working specifically in computing education isn't necessary to achieve the above. Perhaps you have undergraduate research experience in HCI, software engineering, or programming languages. That can be fine, as long as your passion is clear and the skills you have align with the questions you want to answer. Researchers are always investigating new questions, so it's perfectly normal to have experience from other related areas of computing and information science.
				</p>

				<p>
					Of course, even if you meet all of the criteria above (or other criteria that other advisors might have), you might not get accepted. That's because doctoral advising is extremely time-intensive: we commit to advise people for anywhere from 3-6 years or more, and so we can only take on so many students at a time. There might be a dozen people who apply to work with one of us, but we only have capacity to admit one or two at most.
				</p>
				
				<h3 id="getting-a-job">Where can I find a CS education research job?</h3>

				<p>
					There are many places where global CS education-related jobs are posted:
				</p>

				<ul>
					<li>The #jobpostings channel on the <a href="https://csforall.slack.com" target="_blank">CSforAll Slack</a>:</li>
					<li>The <a href="https://cra.org/ads/" target="_blank">CRA Jobs website</a></li>
					<li>The <a href="https://sigcse.org/sigcse/membership/mailing-lists.html" target="_blank">SIGCSE-jobs mailing list</a></li>
					<li>The <a href="https://www.higheredjobs.com" target="_blank">Higher Ed Jobs</a></li>
					<li><a href="https://www.edjoin.org" target="_blank">EdJoin</a></li>
					<li>@CSFacultyJobs on Twitter.</li>
					<li>Evan Peck maintains a list of <a href="https://cs-pui.github.io/" target="_blank">CS faculty postings from "PUIs"</a> (primarily undergraduate institutions).</li>
					<li>Many organizations, including non-universities, hire postdocs (e.g., Quinn Burke at <a href="https://digitalpromise.org/our-team/quinn-burke/">Digital Promise</a>, has hired postdocs and consultants)</li>
				</ul>

				<p>
					Monitor those closely for opportunities. The field is growing, but in unconventional ways: there are tenure-track positions, teaching-track positions, professor of practice positions, postdocs, research and development positions in not-for-profits, and much, much more.
				</p>
				
				<h3 id="funding-for-cer">Is there funding for CER?</h3>

				<p>
					Yes! At least in the U.S., Ph.D. students are generally funded by the research grants their advisors obtain, and can also receive NSF Graduate Research Fellowships, which cover three years of tuition and stipend. Undergraduates can participate in NSF-sponsored Research Experience for Undergraduate projects that faculty sponsor. CER faculty can also apply for NSF CAREER grants on computing education research, or an <a href="http://www.nsf.gov/pubs/2015/nsf15569/nsf15569.htm" target="_blank">NSF Research Initiation Initiative</a> for new faculty. Most Ph.D. granting institutions also offer teaching assistantships. In the United States, there are also regularly programs that fund CER. This changes frequently, but here is a current snapshot as of 2016:
				</p>

				<ul>
					<li><a href="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=505359" target="_blank">NSF CS for All</a>. Funds basic research on CS education as well as researcher-practitioner partnerships focused on building K-12 CS education capacity, access, participation, and engagement.</li>
					<li><a href="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=505006" target="_blank">NSF STEM+C</a>. Funds a variety of research and implementation projects, some focused on the integration of computing into STEM subjects, and some on basic computing education research.</li>
					<li><a href="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=505082" target="_blank">NSF IUSE</a>. Funds programs that improve the quality of and access to STEM education in undergraduate programs. Does not directly fund basic research.</li>
					<li><a href="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=5467" target="_blank">NSF ITEST</a>. Funds programs that broaden participation in STEM. Does not directly fund basic research.</li>
					<li><a href="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=500047" target="_blank">NSF DRK-12</a>. Funds projects that enhance the quality of and access to STEM education in K-12, including basic research.</li>
					<li><a href="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=504984" target="_blank">NSF RETTL</a>. Funds projects on Emerging Technologies for Teaching and Learning, including intelligent tutors, computer-based instruction, computational tools for learning, etc.</li>
					<li><a href="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=504924" target="_blank">NSF EHR CORE Research</a>. Funds basic education research. Not CS specific, but it has separate tracks within its reviewing structure for CS and engineering.</li>
					<li><a href="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=13707" target="_blank">NSF IIS Cyber-Human Systems</a>. Funds HCI research. Not CS specific, but is very supportive of educational technologies that advance the capabilities of human expression.</li>
				</ul>

				<h3 id="being-impactful">What do I need to know to be an effective, impactful computing education researcher?</h3>

				<p>
					First, you need to know some computing yourself. That doesn't mean you need an entire computer science degree, but it helps to have learned to code a bit, and to understand what an algorithm and a data structure is. It can also help to understand the culture of computer science as an academic discipline. Taking the first few introductory courses in a CS department is usually enough to provide this content knowledge foundation, unless you want to do research on the teaching of more advanced topics in CS.
				</p>

				<p>
					Beyond that, there is a substantial prior work to learn before you can make original discoveries. I've organized some of the major works into categories below, to focus your reading.
				</p>

				<h4 id="foundations">Education research foundations</h4>

				<p>
					As computing education research is a discipline-based kind of education research, foundations in education research are key. Below are essential works for conducting research on learning and teaching:
				</p>

				<ul>
					<li><a href="http://www.nap.edu/catalog/9853/how-people-learn-brain-mind-experience-and-school-expanded-edition" target="_blank">How People Learn: Brain, Mind, Experience, and School</a> and <a href="https://www.nap.edu/catalog/24783/how-people-learn-ii-learners-contexts-and-cultures" target="_blank">How People Learn II: Learners, Contexts, and Cultures</a> provide an essential foundation in the major discoveries and theories of learning sciences and education research. Anyone doing research on learning should know everything in these books.</li>
					<li><a href="https://www.routledge.com/Power-and-Privilege-in-the-Learning-Sciences-Critical-and-Sociocultural/Esmonde-Booker/p/book/9781138922631" target="_blank">Power and Privilege in the Learning Sciences: Critical and Socialcultural Theories of Learning</a> presents foundational theories of learning that powerfully shape who learns.</li>
					<li><a href="https://www.palgrave.com/gp/book/9783030058999" target="_blank">Research Methods for Social Justice and Equity in Education</a> presents key methods for conducting education research in equitable ways, but also about equity and justice.</li>
				</ul>

				<h4 id="race">Race and Technology</h4>

				<p>
					While not specifically about computing education, these books critically examine the role of computing in justice. The ideas in these books are key to understanding the social implications of computing on society. I focus on race in particular because race, at least in the United States, has structured injustice more heavily than all other social categories, making it critical to understanding the effects of computing.
				</p>

				<ul>
					<li>
						<a href="https://www.ruhabenjamin.com/race-after-technology" target="_blank">Race After Technology</a> examines how racism is embedded in software and the role of computer scientists and the software industry in reinforcing racism.
					</li>
					<li>
						<a href="https://www.amazon.com/Black-Software-Internet-Justice-AfroNet/dp/0190863846" target="_blank">Black Software: The Internet and Racial Justice, from the AfroNet to Black Lives Matter</a> explores the long history of racial justice movements organized online and how the impact of their innovations have been erased with false narratives social media company innovation.
					</li>
				</ul>

				<h4 id="literature-reviews">CER literature reviews</h4>

				<p>
					These works summarize bodies of knowledge in computing education research, helping you to more quickly learn what the field has discovered. All of these are essential reading.
				</p>

				<ul>
					<li><a href="https://www.amazon.com/dp/B07N45TH9R/ref=dp-kindle-redirect?_encoding=UTF8&amp;btkr=1" target="_blank">The Cambridge Handbook of Computing Education Research</a> is a carefully edited synthesis of all of the major discoveries in computing education research since its beginning as a field 50 years ago up until 2018. I authored several chapters along with more than a dozen other leading researchers with the goal of creating the definitive introduction to the field. It is reflective of prior work, for better or worse, going deeply into pedagogy, but only briefly (but elegantly) addressing issues of racism, sexism, and inclusion. Therefore, it should not be viewed as a vision for the future of the field, but rather a reflection of its past.</li>
					<li><a href="https://www.morganclaypool.com/doi/abs/10.2200/S00684ED1V01Y201511HCI033" target="_blank">Learner-Centered Design of Computing Education: Research on Computing for Everyone</a> is a wonderful synthesis of computing education research, with a focus on pedagogy for anyone learning computing, rather than just computer science students.</li>
					<li><a href="https://journals.sagepub.com/doi/abs/10.3102/0013189x12463051" target="_blank">Computational Thinking in K-12 A Review of the State of the Field</a> examines the state of discourse about "Computational Thinking", a contested idea that has  spread broadly throughout K-12 CS education, despite its questionable soundness as an idea.</li>
					<li><a href="https://doi.org/10.1145/3293881.3295779" target="_blank">Introductory programming: a systematic literature review</a>. The result of an ITiCSE working group, analyzes the literature along many facets: students, teachings, the curriculum, and assessment, and surfacing directions for future research.</li>
					<li><a href="http://dl.acm.org/citation.cfm?id=1345441" target="_blank">A survey of literature on the teaching of introductory programming</a> summarizes papers on classroom instruction in introductory programming courses in higher education.</li>
					<li><a href="http://dl.acm.org/citation.cfm?id=1113893" target="_blank">Constructing a core literature for computing education research</a> presents an appendix of impactful papers published before 2005.</li>
					<li><a href="https://dl.acm.org/citation.cfm?id=3077618" target="_blank">Misconceptions in programming</a> is a great review of the broad literature on misconceptions that people form about programming languages.</li>
					<li><a href="https://dl.acm.org/doi/10.1145/1089733.1089734" target="_blank">Lowering the Barriers to Programming: A Taxonomy of Programming Environments and Languages for Novice Programmers</a> surveys hundreds of programming languages and environments intended to support learning to code. There have been many more since its publishing in 2005, but before ever inventing one of your own, it's important to know what's been invented already.</li>
					<li><a href="http://dl.acm.org/citation.cfm?id=1922658" target="_blank">The State of the Art in End-User Software Engineering</a> summarizes the literature on end-user programming, which is related, but not the same as novice programming. It synthesizes of all of the programming languages, environments, and tools that have helped people learn to code while automating a task.</li>
				</ul>

				<h4 id="notable-works">Notable works</h4>

				<p>Everyone working in CER should have read these books and understand their implications for research and practice.</p>

				<ul>
					<li>
						<p><a href="https://cacm.acm.org/blogs/blog-cacm/245710-underrepresented-minority-considered-harmful-racist-language/fulltext" target="_blank">'Underrepresented Minority' Considered Harmful, Racist Language</a> is a short blog post that discusses the terminology we use when we discuss diversity in computer science.</p>
					</li>
					<li>
						<p><a href="https://www.amazon.com/Mindstorms-Children-Computers-Powerful-Ideas/dp/0465046746" target="_blank">Mindstorms: Children, Computers, and Powerful Ideas</a> is a classic book that envisions a theory of learning grounded in the construction of knowledge through personally meaningful tinkering and creation, especially with computers. I <a href="https://medium.com/bits-and-behavior/mindstorms-what-did-papert-argue-and-what-does-it-mean-for-learning-and-education-c8324b58aca4" target="_blank">summarized the book</a> in a blog post.</p>
					</li>
					<li>
						<p><a href="https://mitpress.mit.edu/books/stuck-shallow-end" target="_blank">Stuck in the Shallow End: Education, Race, and Computing
</a> illustrates the numerous racist structures, beliefs, and practices in K-12 education that systematically exclude students of color from CS education.</p>
					</li>
					<li>
						<p><a href="https://mitpress.mit.edu/books/unlocking-clubhouse" target="_blank">Unlocking the Clubhouse: Women in Computing</a> examines how the culture of higher education CS systematically excludes and deters women from participating in CS education, and explores promising practices for changing this culture.</p>
					</li>
					<li>
						<p><a href="https://www.jstor.org/stable/3174610" target="_blank">Epistemological Pluralism: Styles and Voices Within the Computer Culture</a> presents a critique of academic computing culture for is exclusion of diverse interests and ways of knowing.</p>
					</li>
					<li>
						<p><a href="https://dl.acm.org/doi/10.1145/3328778.3366792" target="_blank">When Twice as Good Isn't Enough: The Case for Cultural Competence in Computing</a> critiques CS departments for being uncritical of themselves, their curricula, and the software industry, advocating for cultural competence amongst faculty and students.</p>
					</li>
					<li>
						<p><a href="https://journals.sagepub.com/doi/pdf/10.1177/0306312709334636?casa_token=IStezh3LqcEAAAAA:cI1RxK9s3T26UfH5d38aj8zO8yRTUaIEkMbQodbMgVJ-eLK3Pu9_uLGw5drx1VtVL8Kf2KVKgmVMpUM" target="_blank">The Intersection of Gender, Race and Cultural Boundaries, or Why is Computer Science in Malaysia Dominated by Women?</a> examines the inherent intersectional complexity of race, gender, and culture that shapes participation in computing education.</p>
					</li>
					<li>
						<p><a href="https://dl.acm.org/doi/10.1145/2538862.2538933" target="_blank">They can't find us: the search for informal CS education
</a> demonstrates how search engines, CS education terminology, and culture interact to connect educated White families to informal CS learning opportunities, while obscuring them from less privileged families.</p>
					</li>
					<li>
						<p><a href="https://dl.acm.org/doi/10.1145/3017680.3017755" target="_blank">Visions of Computer Science Education: Unpacking Arguments for and Projected Impacts of CS4All Initiatives</a> analyzes the abundance of arguments for K-12 CS for All efforts, and how they intersect with varying political ideologies.</p>
					</li>
					<li>
						<p><a href="https://dl.acm.org/citation.cfm?doid=3230977.3230992" target="_blank">On Theory Use in Computing Education Research</a> examines the use of theory in computing education and how it is often weaponized to prevent the publication of new ideas.</p>
					</li>
					<li>
						<p><a href="https://hepgjournals.org/doi/abs/10.17763/1943-5045-88.1.26" target="_blank">Ethics, Identity, and Political Vision: Toward a Justice-Centered Approach to Equity in Computer Science Education</a> advocates for CS education researchers and teachers to more directly engage the sociopolitical context of CS education curricula and teaching.</p>
					</li>
					<li>
						<p><a href="https://dl.acm.org/doi/abs/10.1145/2445196.2445250" target="_blank">Halving fail rates using peer instruction: a study of four computer science courses</a> presents one of the few rigorously examined teaching methods that promotes improved learning, especially for students marginalized by CS education cultures.</p>
					</li>
					<li>
						<p><a href="https://dl.acm.org/doi/abs/10.1145/1978942.1979381" target="_blank">African American men constructing computing identity
</a> examines how race, culture, and stigma can warp genuine interests in computing, and how informal learning interventions can counter these forces.</p>
					</li>
					<li>
						<p><a href="https://doi.org/10.1177%2F0042085913491219" target="_blank">COMPUGIRLS’ Standpoint: Culturally Responsive Computing and Its Effect on Girls of Color</a> illustrates the impact of culturally repsonsive computing on girls of color.</p>
					</li>
					<li>
						<p><a href="https://www.tandfonline.com/doi/abs/10.1080/10508406.2017.1307199?casa_token=-YvaFyMYanAAAAAA:VfyZ6I7V3qdbaMFnkivanvj5Z76Jg4nZ-RBnCm0fYR4hc_vkNOvwSKR_WPtj9O9OyWPd4DJOz7Cp" target="_blank">Digital Youth Divas: Exploring Narrative-Driven Curriculum to Spark Middle School Girls’ Interest in Computational Activities</a> explores how to engage girls of color by centering their stories.</p>
					</li>
					<li>
						<p><a href="https://doi.org/10.1080/10508406.2017.1307199" target="_blank">Becoming Technosocial Change Agents: Intersectionality and Culturally Responsive Pedagogies as Vital Resources for Increasing Girls’ Participation in Computing</a> explores the importanc of intersectional views on culturally responsive pedagogy.</p>
					</li>
				</ul>

				<p>If you've read all of the above and are looking for more literature, be sure to follow all of the SIGCSE conferences, and other relevant education and learning science journals, monitoring the <a href="http://acm.org/dl" target="_blank">ACM Digital Library</a> and the NSF funded website <a href="https://csedresearch.org" target="_blank">CSEdResearch.org</a>, which surveys the broad expanse of CS education research, including article summaries and evaluation instruments.</p>

				<h3 id="teaching-guidance">What books provide guidance on CS teaching?</h3>

				<p>While there are many books that provide guidance on teaching in general (e.g., Tools for teaching (Davis, 2009), How learning works: Seven research-based principles for smart teaching (Ambrose et al., 2010), Teaching what you don’t know (Huston, 2009), <a href="https://ies.ed.gov/ncee/wwc/practiceguide/1" target="_blank">What Works Clearinghouse</a>), there are only a handful of books written to guide CS educators (alphabetically):</p>

				<ul>
					<li><a href="https://www.amazon.com/Coding-Playground-Marina-Umaschi-Bers/dp/1138225622" target="_blank">Coding as a playground: Programming and computational thinking in the early childhood classroom</a> (Bers, 2017). A review of the opportunities in teaching younger children to code.</li>
					<li><a href="https://www.amazon.com/Computer-Science-K-12-possibilities-innovative/dp/1986171817" target="_blank">Computer science K-12: Imagining the possibilities!</a> (Bergman, 2018). Full of rich case studies, activities, projects, and practical guidance on organizing and managing CS classrooms.</li>
					<li><a href="https://www.amazon.co.uk/Computer-Science-Teacher-computing-classroom/dp/1780173946" target="_blank">Computer Science Teacher: Insight Into the Computing Classroom</a> (Clark, 2017). Focuses on secondary CS teaching and what the role entails, providing a rich set of case studies and quotes.</li>
					<li><a href="https://mitpress.mit.edu/books/computational-thinking" target="_blank">Computational Thinking</a> (Denning &amp; Tedre, 2019). A historical introduction to computational thinking.</li>
					<li><a href="https://www.shuchigrover.com/atozk12cs/about/" target="_blank">Computer Science in K-12: An A-Z Handbook on Teaching Programming</a> (Grover, 2020) includes 26 chapters featuring foundational programming concepts and practices, as well as well-researched pedagogies for teaching introductory programming. With chapter contributions from researchers and classroom teachers, the book shares concrete examples as well as abstract principles distilled from research studies and classroom practice along with many illustrative examples (in block- and text-based programming) that can be used in classrooms.</li>
					<li><a href="https://www.amazon.com/Guide-Teaching-Computer-Science-Activity-Based/dp/144716069X" target="_blank">Guide to teaching computer science: An activity-based approach</a> (Hazzan et al. 2015). Includes detailed learning activities, curriculum reviews, CS education research, lesson planning, and course design. Some pre-service CS teachers find the concrete examples help; others find it jargony and overly complex.</li>
					<li><a href="https://www.amazon.com/Connected-Code-Programming-Catherine-Foundation/dp/0262027755_" target="_blank">Connected code: Why children need to learn programming</a> (Kafai et al., 2016). Argues for moving beyond computational thinking to computational participation, leveraging social networks and digital making. Discusses examples of youth participation with programmable toys, tools, and textiles and the ethical challenges that emerge in these social contexts.</li>
					<li><a href="https://www.amazon.com/Computational-Thinking-Coding-Every-Student/dp/1506341284" target="_blank">Computational thinking and coding for every student</a> (Krauss and Prottsman, 2016). Includes strategies and activities for teaching computational thinking, with several lessons and annotated resources.</li>
					<li><a href="https://www.amazon.com/Teaching-Computing-Secondary-Schools-Practical/dp/1138238066" target="_blank">Teaching Computing in Secondary Schools</a> (Lau, 2017). Offers a framework for planning and delivering CS curricula.</li>
					<li><a href="https://www.amazon.com/Computer-Science-Education-Perspectives-Teaching/dp/1350057118" target="_blank">Computer science education: Perspectives on teaching and learning in school</a> (Sentance et al. 2018). An edited book full of rich summaries about CS education research, but written less for teachers and more for those interested in research.</li>
					<li><a href="https://www.amazon.com/Teaching-Computing-Practitioners-Henry-Walker-ebook/dp/B07CMHSZ6T" target="_blank">Teaching computing: A practitioner's perspective</a> (Walker, 2018). Full of teaching tips for higher education faculty teaching CS.</li>
					<li><a href="https://www.amazon.com/Invent-Learn-Tinkering-Engineering-Classroom/dp/0989151107" target="_blank">Invent to learn: Making, tinkering, and engineering in the classroom</a> (Martinez and Stager, 2013). A practical guide to bringing tinkering into the classroom via project-based learning.</li>
					<li><a href="http://teachtogether.tech/en/" target="_blank">Teaching tech together</a>. This is an informal survey of research useful for teaching programming. Greg put it together to help others become better teachers of computing.</li>
				</ul>

				<p>Is one missing from this list? Let me know and I'll add it.</p>

				<h3 id="conferences-and-journals">What conferences and journals publish CER?</h3>

				<p>Most academic fields have exclusively academic venues for publication, with few practitioners participating in or reading the research that researchers produce. The CER community is unique (and I believe quite fortunate) in that practitioners are deeply involved in the academic research community (partly because most faculty conducting research are teachers themselves). Below I note several conferences and journals where you can publish computing education research (see SIGCSE for <a href="http://sigcse.org/sigcse/resources/publish" target="_blank">a broader list</a>). Note that I separate the pure research venues from the venues that combine both research and practice since the combined venues are often dominated by practioners, which can make it hard to have focused research conversations and rigorous peer review.</p>

				<h4 id="research-only">Research only venues</h4>
				<ul>
					<li>
						<p><strong>ICER</strong> (the ACM International Computing Education Research conference) is the only academic conference that strictly publishes research. All of the reviewers who peer review submissions are trained researchers with Ph.D.s. ICER tends to focus on theoretically, methodologically, and empirically-rich work, advancing the science of computing education. It is held around the world but is generally in North America every other year.</p>
					</li>
					<li>
						<p><strong>TOCE</strong> (the ACM Transactions on Computing Education) publishes research, and is similar in scope to ICER, but in a journal format. Like ICER, the editorial board and reviewers are all trained researchers.</p>
					</li>
					<li>
						<p><strong>CSE</strong> (the Journal of Computer Science Education) publishes research and is similar to TOCE and ICER in its reviewing community and similar in research rigor and prestige. However, unlike TOCE and ICER, publications in CSE are generally expected to have more direct implications for teachers.</p>
					</li>
					<li>
						<p><strong>ICLS</strong> (the International Conference on Learning Sciences) does not strictly focus on computing education, but publishes high quality research on learning sciences. Accepts both qualitative and quantitative work, especially of mixed methods. Also tends to focus more on K-12 than the venues focusing strictly on CER.</p>
					</li>
					<li>
						<p><strong>JLS</strong> (the Journal of Learning Sciences) is one of the top education research journals and expects a strong connection to learning theory and mostly wants empirical work. It is not a journal that publishes HCI, so work must be connected to cognition, sociocultural context, or other theory, and not system design.</p>
					</li>
					<li>
						<p><strong>CSCL</strong> (the International Conference on Computer-Supported Collaborative Learning) focuses on issues related to learning through collaboration and promoting productive collaborative discourse with the help of the computer and other communications technologies.</p>
					</li>
					<li>
						<p><strong>IJCSCL</strong> (the International Journal of Computer-Supported Collaborative Learning), like CSCL, focuses on learning through collaboration.</p>
					</li>
					<li>
						<p><strong>L@S</strong> (the ACM Conference on Learning at Scale) is a computer science conference that focuses on techniques for scaling instruction. Some of the work published here concerns computing education, but many other domains are represented as well. Often focuses on MOOCs and other forms of online learning.</p>
					</li>
					<li>
						<p><strong>RESPECT</strong> (the IEEE Conference on Research on Equity and Sustained Participation in Engineering, Computing, and Technology) is a conference focused on engagement, participation, and equity in STEM fields. It has research and experience report tracks, and expects empirical papers grounded in theory.</p>
					</li>
					<li>
						<p><strong>IDC</strong> (ACM SIGCHI Interaction Design and Children) is an HCI conference with a focus on children, focusing on design artifacts for kids and enabling kids to be designers, with a special focus on participatory design as a methodology.</p>
					</li>
					<li>
						<p><strong>CHI</strong> (ACM SIGCHI Conference on Human Factors in Computing) is an HCI conference with a focus on any aspect of interactions between people and computers, including programming. As one of the largest and broadest ACM conferences, it's easy for research on learning to get lost here, but so does every other topic!</p>
					</li>
					<li>
						<p><strong>AERA</strong> (the American Education Research Association conference) has a division for engineering and computing education that publishes papers on computational thinking.</p>
					</li>
					<li>
						<p><strong>JEE</strong> (the Journal of Engineering Education). High-quality but with few international collaborations (like the MIMN studies in CER). Occasionally has papers related to computing.</p>
					</li>
					<li>
						<p><strong>IEEE Global Engineering Education Conference</strong>. I know little about this conference; if someone has opinions to share, please send them to me!</p>
					</li>
					<li>
						<p><strong>IEEE Transactions on Education</strong>. I know little about this journal. Feel free to share opinions!</p>
					</li>
					<li>
						<p><strong>Journal of Education Computing Research</strong>. I know little about this journal. Feel free to share opinions!</p>
					</li>
				</ul>

				<h4 id="research-and-practice">Research and practice venues</h4>

				<ul>
					<li><strong>SIGCSE</strong> (the SIGCSE Technical Symposium on Computer Science Education) publishes both research and practice papers in a short format, bringing together researchers and teachers. This is the largest conference on computer science education and generally attracts teachers. There is a dedicated research track separate from experience reports, though the research track has a 6-page limit, making it unsuitable for many forms of research, such as qualitative work or more substantial quantitative work. Generally held in North America.</li>
					<li><strong>ITiCSE</strong> (the Annual Conference on Innovation and Technology in Computer Science Education) publishes both research and practice papers, with a focus on practice. Generally held in Europe.</li>
					<li><strong>Koli Calling</strong> (International Conference on Computing Education Research), held in Finland every year, publishes research and practice papers with a focus on qualitative research. A small but dedicated community.</li>
					<li><strong>WiPSCE</strong> (Workshop in Primary and Secondary Computing Education) aims to bring together researchers and practitioners, and publishes both research and practice papers. It is generally held in Europe.</li>
					<li><strong>ACE</strong> (the Australasian Computing Education Conference) is a regional conference with a mix of research and practice papers, bringing together education researchers and practitioners. Held in Australia or New Zealand, but welcomes attendees from anywhere.</li>
					<li><strong>LaTiCE</strong> (the International Conference on Learning and Teaching in Computing and Engineering) publishes both research and practice papers. Held primarily in Asia.</li>
					<li><strong>FIE</strong> (the ASEE Frontiers in Education conference) is more broad and more practitioner focused than SIGCSE and occasionally has CER work.</li>
				</ul>

				<h3 id="sigcse">What is SIGCSE?</h3>

				<p>
					<a href="http://sigcse.org/" target="_blank">SIGCSE</a>, like other ACM Special Interest Groups (SIGs), is an organization that focuses on a particular topic within ACM, namely computer science education. It sponsors ACM conferences (e.g., the SIGCSE Technical Symposium and ICER) and influences their structure and focus. Note that SIGCSE the group organizes SIGCSE the conference. I know, it's confusing, but aren't you glad you read this?
				</p>

				<h3 id="experience-reports">What's the difference between a research paper and an experience report?</h3>

				<p>
					This is an important question, since many of the conference venues in the computing education community publish both. Unfortunately, the community hasn't developed much clarity about the differences between these. The result is that many papers published in the SIGCSE experience report track look like research papers, and many of the papers published in the SIGCSE research track look like experience reports. What's the essential difference?
				</p>

				<p>
					In my opinion, the key distinction between research and an experience report is your audience, which implies your goals: are you writing to researchers, who aspire to build upon everything we know to advance theories about what we know about CS teaching and learning? In contrast, if you're writing to teachers, you're likely sharing practical knowledge, such as an interesting method you tried, a surprising experience, or a teaching method others might experiment with. The critical difference is that in research, we're trying to be certain that we know something, but it's okay if we don't know how to put that knowledge into action yet, whereas in practice, we're trying to learn how to teach something, even if we're not certain it will work. Another way to characterize the difference are some of the evaluation criteria. Research papers should be <em>novel with respect to everything we know</em> and <em>sound</em>, but not necessarily immediately useful. Experience report papers should be <em>novel with respect to common knowledge</em> (but not necessarily novel with respect to all knowledge), <em>useful</em> and <em>interesting</em>, but not necessarily sound.
				</p>

				<p>
					I believe that both are valuable in their own ways. Research allows us to build confidence in what we know, whereas sharing experience allows us to teach each other. We need both for a thriving practice of CS teaching and a thriving body of knowledge to inform that practice.
				</p>

				<h3 id="blogs">How can I keep up with the latest research, practice, and policy?</h3>

				<p>
					There are a few excellent blogs (in alphabetical order):
				</p>

				<ul>
					<li>Mark Guzdial's <a href="https://computinged.wordpress.com/" target="_blank">Computing Education Research</a> blog has been active since 2009 and contains thousands of posts that explain computing education research to a broader community.</li>
					<li>Felienne Hermans has a blog about <a href="http://www.felienne.com/archives/category/blog" target="_blank">programming and inclusion</a>.</li>
					<li>Amy Ko's <a href="https://medium.com/bits-and-behavior" target="_blank">Bits &amp; Behavior</a> publication at Medium covers CER, software engineering, HCI, and broader issues in academia.</li>
					<li>Shriram Krishnamurthi's <a href="https://parentheticallyspeaking.org/articles/" target="_blank">Parenthetically Speaking</a> discussions a range of topics on academia, programming languages, and computing education.</li>
					<li>William Lau's blog on <a href="http://www.mrlaulearning.com/" target="_blank">CS education and teaching more broadly</a>.</li>
					<li><a href="https://laurenmarg.com/leetblog/" target="_blank">Lauren Margulieux's blog</a> discusses learning sciences, discipline-based education reseach, and computing education.</li>
					<li>Alfred Thompson's <a href="http://blog.acthompson.net/" target="_blank">Computer Science Teacher</a> blog covers a range of computing education, research, and policy issues.</li>
				</ul>
				
				<p>Is this list missing you? Let me know!</p>
				
				<h3 id="community">How can I connect with the community?</h3>

				<p>There are several online communities to join:</p>

				<ul>
					<li>The ACM ICER conference maintains a Discord server. Write Amy Ko <a href="mailto:ajko@uw.edu">ajko@uw.edu</a> for an invite. It tends to be CER focused.</li>
					<li>The CS for All Consortium maintains <a href="csforall.slack.com">a Slack team</a>. <a href="https://www.csforall.org/become_a_member/" target="_blank">Join as a member</a> to access it.</li>
					<li>There's a private group on Facebook called <a href="https://www.facebook.com/groups/1546763215587966" target="_blank">Computer Science Education: Researchers and Practitioners</a>.</li>
					<li>Twitter is very active. Amy has a <a href="https://twitter.com/i/lists/1074089287874826245" target="_blank">list of Computing Education researchers</a>.</li>
				</ul>

			</div>
		);
		
	}
}

export { CER };
