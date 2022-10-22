import type ProfileSpec from "./ProfileSpec";

export const Amy: ProfileSpec = {
	sources: {
		"cacm": {
			"name": "Communications of the ACM (CACM)",
			"short": "CACM"
		},
		"icer": {
			"name": "ACM International Computing Education Research Conference (ICER)",
			"short": "ICER"
		},
		"idc": {
			"name": "ACM Interaction Design for Children",
			"short": "IDC"
		},
		"chi": {
			"name": "ACM SIGCHI Conference on Human Factors in Computing Systems (CHI)",
			"short": "CHI"
		},
		"sigcse": {
			"name": "ACM Technical Symposium on Computer Science Education (SIGCSE), Research Track",
			"short": "SIGCSE"
		},
		"iticse": {
			"name": "ACM Conference on Innovation and Technology in Computer Science Education",
			"short": "ITiCSE"
		},
		"sigcsex": {
			"name": "ACM Technical Symposium on Computer Science Education (SIGCSE), Experience Report Track",
			"short": "SIGCSE"
		},
		"icse": {
			"name": "ACM/IEEE International Conference on Software Engineering (ICSE)",
			"short": "ICSE"
		},
		"seip": {
			"name": "ACM/IEEE International Conference on Software Engineering (ICSE), Software Engineering in Practice",
			"short": "SEIP"
		},
		"seet": {
			"name": "International Conference on Software Engineering (ICSE), Software Engineering Education and Training Track",
			"short": "SEET"
		},
		"ese": {
			"name": "Empirical Software Engineering",
			"short": "ESE"
		},
		"toce": {
			"name": "ACM Transactions on Computing Education",
			"short": "TOCE"
		},
		"tochi": {
			"name": "ACM Transactions on Computer-Human Interaction",
			"short": "TOCHI"
		},
		"uist": {
			"name": "ACM Symposium on User Interface Software and Technology (UIST)",
			"short": "UIST"
		},
		"vlhcc": {
			"name": "IEEE Symposium on Visual Languages and Human-Centered Computing (VL/HCC)",
			"short": "VL/HCC"
		},
		"tse": {
			"name": "IEEE Transactions on Software Engineering",
			"short": "TSE"
		},
		"hcipacm": {
			"name": "Proceedings of the ACM on Human-Computer Interaction",
			"short": "PACMHCI"
		}
	},
	pubs: [
		{
			"id": "cider",
			"kind": "journal article",
			"authors": ["@olesona", "@meron", "Christopher Perdriau", "@ajko"],
			"deadname": false,
			"year": 2022,
			"title": "Teaching inclusive design skills with the CIDER assumption elicitation technique",
			"source": "@tochi",
			"pages": null,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3549074",
			"local": "Oleson2022CIDER.pdf",
			"contribution": "Contributes a teaching method for helping students identify design assumptions that exclude."
		},
		{
			"id": "teachermotives",
			"kind": "refereed conference paper",
			"authors": ["@jayne", "@ajko"],
			"deadname": false,
			"year": 2022,
			"title": "“I would be afraid to be a bad CS teacher”: Factors Influencing Participation in Pre-Service Secondary CS Teacher Education",
			"source": "@icer",
			"pages": "237-246",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3501385.3543966",
			"local": "Everson2022TeacherMotivation.pdf",
			"contribution": "Finds that teacher candidates displayed many conceptions of justice that motivated them to teach CS, including repairing past wrongs in education, improving representation, and expanding literacy, but fears of added course preparation and opportunity costs were signficant deterrents."
		},
		{
			"id": "demographics",
			"kind": "refereed conference paper",
			"authors": ["@olesona", "@bxie", "@salac", "@jayne", "@megumi", "@ajko"],
			"equalfirst": true,
			"deadname": false,
			"year": 2022,
			"title": "A decade of demographics in computing education research: A critical review of trends in collection, reporting, and use",
			"source": "@icer",
			"pages": "323–343",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3501385.3543967",
			"local": "OlesonXie2022Demographics.pdf",
			"contribution": "Finds that most computing education research studied adults, did not mention how demographics data was gathered, and used imprecise and sometimes hegemonic aggregate terms about diversity."
		},
		{
			"id": "tilecode",
			"kind": "refereed conference paper",
			"authors": ["@st3f", "Tom Ball", "@ajko"],
			"deadname": false,
			"year": 2022,
			"title": "How families design and program games: a qualitative analysis of a 4-week online in-home study with a cellular-automata programming platform",
			"source": "@idc",
			"pages": "237-252",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3501712.3529724",
			"local": "Druga2022FamilyGameDesign.pdf",
			"contribution": "Finds that inter-generational collaboration patterns and use of resources are distinct from individual and pair programming."
		},
		{
			"id": "airesources",
			"kind": "refereed conference paper",
			"authors": ["@st3f", "Nancy Otero", "@ajko"],
			"deadname": false,
			"year": 2022,
			"title": "The Landscape of Teaching Resources for AI Education",
			"source": "@iticse",
			"pages": "96-102",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3502718.3524782",
			"local": "Druga2022AIResources.pdf",
			"contribution": "Finds that most AI education resources do not consider teacher needs and do not align with emerging AI literacy standards."
		},
		{
			"id": "ccc",
			"kind": "book",
			"authors": ["@ajko", "Anne Beitlers", "@brettwo", "@mattjd", "@olesona", "@mararyan", "@st3f", "@jayne"],
			"deadname": false,
			"year": 2021,
			"title": "Critically Conscious Computing: Methods for Secondary Education",
			"source": "Online",
			"pages": null,
			"publisher": "Self-published",
			"doi": "https://criticallyconsciouscomputing.org",
			"local": null,
			"contribution": "A book for secondary educators who want to teach CS from critical lens, examining it from technical, sociotechnical, and sociopoitical stance."
		},
		{
			"id": "studentamp",
			"kind": "refereed conference paper",
			"authors": ["@bxie", "@olesona", "@jayne", "@ajko"],
			"deadname": false,
			"year": 2022,
			"title": "Surfacing Equity Issues in Large Computing Courses with Peer-Ranked, Demographically-Labeled Student Feedback",
			"source": "@hcipacm",
			"pages": "1-39",
			"doi": "https://dl.acm.org/doi/10.1145/3512912",
			"local": "Xie2022StudentAmp.pdf",
			"publisher": "ACM",
			"contribution": "Developed and evaluated tool that contextualizes student feedback for teaching teams to identify equity issues."
		},
		{
			"id": "strategywriting",
			"kind": "refereed conference paper",
			"authors": ["Maryam Arab", "@latoza", "@jliang9", "@ajko"],
			"deadname": false,
			"year": 2022,
			"title": "An Exploratory Study of Sharing Strategic Programming Knowledge",
			"source": "@chi",
			"pages": "1-15",
			"doi": "https://doi.org/10.1145/3491102.3502070",
			"local": "Arab2022StrategyWriting.pdf",
			"publisher": "ACM",
			"contribution": "Finds that developers can share strategies for programming, but they struggle in choosing a level of detail and understanding the diversity of the potential audience, requiring substantial feedback, but also that developers struggle to give feedback on strategies."
		},
		{
			"id": "aifamily",
			"kind": "refereed conference paper",
			"authors": ["@st3f", "@feec", "@ajko"],
			"deadname": false,
			"year": 2022,
			"title": "Family as a Third Space for AI Literacies: How Do Children and Parents Learn about AI Together?",
			"source": "@chi",
			"pages": "1-17",
			"doi": "https://doi.org/10.1145/3491102.3502031",
			"local": "Druga2022FamilyAILiteracy.pdf",
			"publisher": "ACM",
			"contribution": "Finds that parents mediate children's learning by taking on different roles, including mentor, student, collaborator, and tinkerer, and that family learning promotes new framings of consumer devices in homes."
		},
		{
			"id": "coconstructedcriticalcs",
			"kind": "refereed conference paper",
			"authors": ["@jayne", "@megumi", "@ajko"],
			"deadname": false,
			"year": 2022,
			"title": "“A key to reducing inequities in like, AI, is by reducing inequities everywhere first”: Emerging Critical Consciousness in a Co-Constructed Secondary CS Classroom",
			"source": "@sigcse",
			"pages": "209-215",
			"doi": "https://doi.org/10.1145/3478431.3499395",
			"local": "Everson2021CoConstructedCriticalCS.pdf",
			"publisher": "ACM",
			"contribution": "Finds that before there is space for critical consciousness about CS, teachers have to navigate issues of trust, positionality, and inequitable systems of education.",
			"award": ["best paper"]
		},
		{
			"id": "houseofcomputing",
			"kind": "refereed conference paper",
			"authors": ["@mararyan", "@ajko"],
			"deadname": false,
			"year": 2022,
			"title": "The House of Computing: Integrating Counternarratives into Computer Systems Education",
			"source": "@sigcsex",
			"pages": "279-285",
			"doi": "https://doi.org/10.1145/3478431.3499394",
			"local": "KirdaniRyan2022HouseofComputing.pdf",
			"publisher": "ACM",
			"contribution": "Teaching computer systems through the lens of sociopolitical and historical choices can open space for student reexamination of technical knowledge and values."
		},
		{
			"id": "howtoo",
			"kind": "refereed conference paper",
			"authors": ["Maryam Arab", "@jliang9", "Yang Kyu Yoo", "@ajko", "@latoza"],
			"deadname": false,
			"year": 2021,
			"title": "HowToo: A Platform for Sharing, Finding, and Using Programming Strategies",
			"source": "@vlhcc",
			"pages": "1-9",
			"doi": "https://doi.org/10.1109/VL/HCC51201.2021.9576337",
			"local": "Arab2021HowToo.pdf",
			"publisher": "IEEE",
			"contribution": "Contributes HowToo, a system for encoding strategic programming knowledge as step-by-step procedures for structuring programming tasks. Finds that novice developers found the platform helpful for guiding their work, except when they were rushing toward deadlines."
		},
		{
			"id": "codedif",
			"kind": "refereed conference paper",
			"authors": ["@bxie", "@mattjd", "Baker Franke", "Emily McLeod", "@minli", "@ajko"],
			"deadname": false,
			"year": 2021,
			"title": "Domain Experts’ Interpretations of Assessment Bias in a Scaled, Online Computer Science Curriculum",
			"source": "ACM Learning at Scale",
			"pages": "77-89",
			"doi": "https://doi.org/10.1145/3430895.3460141",
			"local": "Xie2021CodeDIF.pdf",
			"publisher": "ACM",
			"contribution": "Finds systemtic test gender and bias in Code.org's assessments, but barriers to interpreting psychometric results."
		},
		{
			"id": "cognimates",
			"kind": "refereed conference paper",
			"authors": ["@st3f", "@ajko"],
			"deadname": false,
			"year": 2021,
			"title": "How Do Children’s Perceptions of Machine Intelligence Change when Training & Coding Smart Programs?",
			"source": "@idc",
			"pages": "49-61",
			"doi": "https://doi.org/10.1145/3459990.3460712",
			"local": "Druga2021Cognimates.pdf",
			"publisher": "ACM",
			"contribution": "Discovers that children, after building and training small machine learned programs, come to view smart devices as less intelligent, shifting agency from the device to developers."
		},
		{
			"id": "falx",
			"kind": "refereed conference paper",
			"authors": ["@clwang", "Yu Feng", "Rastislav Bodik", "Isil Dillig", "Alvin Cheung", "@ajko"],
			"deadname": false,
			"year": 2021,
			"title": "Falx: Synthesis-Powered Visualization Authoring",
			"source": "@chi",
			"pages": "1-15",
			"doi": "https://doi.org/10.1145/3411764.3445249",
			"local": "Wang2021Falx.pdf",
			"publisher": "ACM",
			"award": ["best paper"],
			"contribution": "Contributes a synthesizer-powered visualization tool that allows users to specify examples of how concrete data values should be rendered, and receive one or more data visualizations that transform data accordingly. Finds that users can effectively adopt Falx to create visualizations."
		},
		{
			"id": "robustapi",
			"kind": "journal article",
			"authors": ["@kthayer", "Sarah Chasins", "@ajko"],
			"deadname": false,
			"year": 2021,
			"title": "A Theory of Robust API Knowledge",
			"source": "@toce",
			"pages": "21(1), Article 8",
			"doi": "https://doi.org/10.1145/3444945",
			"local": "Thayer2021TheoryOfRobustAPIKnowledge.pdf",
			"publisher": "ACM",
			"contribution": "Contributes a novel theory of robust API knowledge, including knowledge about the domain that an API models, knowledge of the semantics of API functionality, and knowledge of API usage patterns."
		},
		{
			"id": "gradingfeedback",
			"kind": "journal article",
			"authors": ["Qiang Hao", "David Smith", "Lu Ding", "@ajko", "Camille Ottaway", "Jack Wilson", "Kai Hicks", "Alistair Turcan", "Timothy Poehlman", "Tyler Greer"],
			"deadname": false,
			"year": 2021,
			"title": "Towards Understanding the Effective Design of Automated Formative Feedback for Programming Assignments",
			"source": "Computer Science Education",
			"pages": "23 pages",
			"doi": "https://doi.org/10.1080/08993408.2020.1860408",
			"local": null,
			"publisher": "ACM",
			"contribution": "Finds that feedback addressing the gap between expected and actual outputs is critical to effective learning and that feedback lacking sufficient detail on these gaps leads to gaming behaviors."
		},
		{
			"id": "csdif",
			"kind": "refereed conference paper",
			"authors": ["@mattjd", "@ajko", "@brettwo"],
			"deadname": false,
			"year": 2021,
			"title": "Investigating Item Bias in a CS1 exam with Differential Item Functioning",
			"source": "@sigcse",
			"pages": "1142-1148",
			"doi": "https://doi.org/10.1145/3408877.3432397",
			"local": "Davidson2021ItemBias.pdf",
			"publisher": "ACM",
			"contribution": "Demonstrates how to conduct a DIF analysis through a case study of a particular large CS1 exam, which revealed some item bias."
		},
		{
			"id": "infobook",
			"kind": "book",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2020,
			"title": "Foundations of Information",
			"source": "Online",
			"pages": null,
			"doi": "https://faculty.washington.edu/ajko/books/foundations-of-information/",
			"local": null,
			"publisher": "Self-published",
			"contribution": "This book covers information, and all of the things that intersect with it: power, politics, oppression, data, knowledge, encoding, metadata; information technology, management, and policy; and the many domains in which information is crucial, including science, social media, automation, health, democracy, and sustainabiity. It serves as the foundation of our survey course on information, INFO 200 Intellectual Foundations of Informatics."
		},
		{
			"id": "csdesignk12",
			"kind": "journal article",
			"authors": ["@olesona", "@ajko", "@brettwo"],
			"deadname": false,
			"year": 2020,
			"title": "On the Role of Design in K-12 Computing Education",
			"source": "@toce",
			"pages": "Article 2",
			"doi": "https://doi.org/10.1145/3427594",
			"local": null,
			"publisher": "ACM",
			"contribution": "Disentangles the role of design in K-12 CS education, finding that design ideas are pervasive in curricula and standards, but conflict program space and problem space design, masking the distinct challenges of problem space design."
		},
		{
			"id": "criticalcsed",
			"kind": "refereed magazine article",
			"authors": ["@ajko", "@olesona", "@mararyan", "@yreg", "@bxie", "@minatari", "@mattjd", "@st3f", "@dloksa", "@glnelson"],
			"deadname": false,
			"year": 2020,
			"title": "It’s Time for More Critical CS Education",
			"source": "@cacm",
			"pages": "31-33",
			"doi": "https://doi.org/10.1145/3424000",
			"local": "Ko2021CriticalCSEd.pdf",
			"publisher": "ACM",
			"contribution": "Argues that CS educators at all levels have the responsibility of the role of computing in injustice."
		},
		{
			"id": "mladvocacy",
			"kind": "refereed conference paper",
			"authors": ["@yreg", "@ajko"],
			"deadname": false,
			"year": 2020,
			"title": "Learning Machine Learning with Personal Data Helps Stakeholders Ground Advocacy Arguments in Model Mechanics",
			"source": "@icer",
			"pages": "67–78",
			"doi": "https://doi.org/10.1145/3372782.3406252",
			"local": "Register2020PersonalData.pdf",
			"publisher": "ACM",
			"blog": "https://medium.com/@yimregister/how-to-teach-machine-learning-to-empower-learners-to-speak-up-for-themselves-35c505db941b",
			"contribution": "Finds that teaching machine learning by tracing an algorithm with learners' personal data increases the extent to which they can identify bias in self-advocacy arguments."
		},
		{
			"id": "codeitzagency",
			"kind": "refereed conference paper",
			"authors": ["@bxie", "@glnelson", "@akkarh", "@wkwok16", "@ajko"],
			"deadname": false,
			"year": 2020,
			"title": "The Effect of Informing Agency in Self-Directed Online Learning Environments",
			"source": "ACM Learning at Scale (L@S)",
			"pages": "77–89",
			"doi": "https://doi.org/10.1145/3386527.3405928",
			"local": "Xie2020Agency.pdf",
			"publisher": "ACM",
			"blog": "https://medium.com/bits-and-behavior/designing-for-agency-in-online-learning-7632e6ac6f04",
			"contribution": "Finds that affording more agency in learning environments may increase motivation, but may not improve learning because of the increased burden on decision-making."
		},
		{
			"id": "hcipckchallenge",
			"kind": "refereed workshop paper",
			"authors": ["@olesona", "@ajko"],
			"deadname": false,
			"year": 2020,
			"title": "Toward the Development of HCI Pedagogical Content Knowledge",
			"source": "ACM SIGCHI Symposium on HCI Education (EduCHI 2020)",
			"pages": null,
			"doi": null,
			"local": "Oleson2020HCIPCK.pdf",
			"publisher": "ACM",
			"contribution": "Discusses the need for research on HCI educator's pedagogical content knowledge."
		},
		{
			"id": "hcidifficulties",
			"kind": "refereed conference paper",
			"authors": ["@olesona", "@meron", "@ajko"],
			"deadname": false,
			"year": 2020,
			"title": "Computing Students' Learning Difficulties in HCI Education",
			"source": "@chi",
			"pages": "1-14",
			"doi": "https://doi.org/10.1145/3313831.3376149",
			"authorizer": "https://dl.acm.org/doi/10.1145/3313831.3376149?cid=81100500360",
			"local": "Oleson2020HCILearningDifficulties.pdf",
			"publisher": "ACM",
			"blog": "https://medium.com/bits-and-behavior/seven-tips-to-improve-hci-education-fa64db5da4f5",
			"contribution": "Investigates the challenges that computing students face in learning HCI, finding challenges in understanding design as distinct from engineering, understanding design methods, finding resources to support design, interpreting feedback, scoping design problems, choosing between alternatives, and designing for diversity."
		},
		{
			"id": "scout",
			"kind": "refereed conference paper",
			"authors": ["@amaswea", "Chenglong Wang", "@olesona", "James Fogarty", "@ajko"],
			"deadname": false,
			"year": 2020,
			"title": "Scout: Rapid Exploration of Interface Layout Alternatives through High-Level Design Constraints",
			"source": "@chi",
			"pages": "1-13",
			"doi": "https://doi.org/10.1145/3313831.3376593",
			"authorizer": "https://dl.acm.org/doi/10.1145/3313831.3376593?cid=81100500360",
			"local": "Swearngin2020Scout.pdf",
			"publisher": "ACM",
			"contribution": "Presents a system to support designers ideation of user interface layouts, allowing designers to provide high-level preferences, obtain a set of layouts that meet those preferences, provide feedback on those preferences, and iteratively converge towards preferred layouts. An evaluation showed that designers who used Scout accelerated ideation and found more diverse designs that designers without it."
		},
		{
			"id": "metajournaling",
			"kind": "refereed conference paper",
			"authors": ["@dloksa", "@bxie", "@kwikh", "@ajko"],
			"deadname": false,
			"year": 2020,
			"title": "Investigating Novices' In Situ Reflections on Their Programming Process",
			"source": "@sigcse",
			"pages": "149-155",
			"doi": "https://doi.org/10.1145/3328778.3366846",
			"authorizer": "https://dl.acm.org/doi/10.1145/3328778.3366846?cid=81100500360",
			"local": "Loksa2020SelfRegulationJournals.pdf",
			"publisher": "ACM",
			"contribution": "Presents evidence that self-regulation during programming is highly variable in practice, and that teaching self-regulation skills to improve programming outcomes may require differentiated instruction based on students self-awareness and existing programming practices."
		},
		{
			"id": "programmingstrategies",
			"kind": "journal article",
			"authors": ["@latoza", "Maryam Arab", "@dloksa", "@ajko"],
			"deadname": false,
			"year": 2020,
			"title": "Explicit Programming Strategies",
			"source": "@ese",
			"pages": "2416–2449",
			"doi": "https://doi.org/10.1007/s10664-020-09810-1",
			"local": "Latoza2020ExplicitProgrammingStrategies.pdf",
			"publisher": "Springer",
			"blog": "https://medium.com/@latoza/solving-problems-strategically-aab8ed572cfb",
			"contribution": "Presents the concept of explicit programming strategies, the idea of encoding manual procedures for solving programming programmers to accelerate software development problem solving. Presents a notation for encoding strategies and evidence that developers using explicit strategies, independent of expertise, were more successful at the design and debugging tasks."
		},
		{
			"id": "greatengineer2",
			"kind": "journal article",
			"authors": ["@plli", "@ajko", "Andrew Begel"],
			"deadname": false,
			"year": 2019,
			"title": "What Distinguishes Great Software Engineers?",
			"source": "@ese",
			"pages": "1-31",
			"doi": "https://doi.org/10.1007/s10664-019-09773-y",
			"local": "Li2019WhatDistinguishesEngineers.pdf",
			"publisher": "Springer",
			"contribution": "Via a survey of nearly 2,000 developers, finds that great engineers are distinguished by writing good code, adapting to future business value and costs, being great decision-makers, avoiding making others’ jobs harder, and continuously learning."
		},
		{
			"id": "traceassess",
			"kind": "refereed conference paper",
			"authors": ["@glnelson", "@andrewhu", "@bxie", "@ajko"],
			"deadname": false,
			"year": 2019,
			"title": "Towards Validity for a Formative Assessment for Language-Specific Program Tracing Skills",
			"source": "ACM Koli Calling International Conference on Computing Education Research",
			"pages": "1-10",
			"doi": "https://doi.org/10.1145/3364510.3364525",
			"local": "Nelson2019TracingValidity.pdf",
			"publisher": "ACM",
			"contribution": "Contributes theoretical perspectives on how to assess program tracing skills, and how to think about assessment validity."
		},
		{
			"id": "replication",
			"kind": "journal article",
			"authors": ["Qiang Hao", "David H. Smith IV", "Naitra Iriumi", "Michaeil Tsikerdekis", "@ajko"],
			"deadname": false,
			"year": 2019,
			"title": "A Systematic Investigation of Replications in Computing Education Research",
			"source": "@toce",
			"pages": "19(4), Article 42",
			"doi": "https://doi.org/10.1145/3345328",
			"local": "Hao2019Replications.pdf",
			"publisher": "ACM",
			"contribution": "Analyzed the replication rate and trends in computing education, finding that only about 2% of studies were replicated in the field in the last decade."
		},
		{
			"id": "studydesign",
			"kind": "book chapter",
			"authors": ["@ajko", "Sally Fincher"],
			"deadname": false,
			"year": 2019,
			"title": "A Study Design Design Process",
			"source": "Cambridge Handbook on Computing Education Research (Sally Fincher, Anthony Robin, Eds.)",
			"pages": null,
			"doi": "https://doi.org/10.1017/9781108654555.005",
			"local": "Ko2019StudyDesign.pdf",
			"publisher": "Cambridge Press",
			"contribution": "Describes a process for designing studies in the domain of computing education research, though the process is more broadly useful for empirical study design in general."
		},
		{
			"id": "cerhandoutside",
			"kind": "book chapter",
			"authors": ["Andrew Begel", "@ajko"],
			"deadname": false,
			"year": 2019,
			"title": "Learning Outside the Classroom",
			"source": "Cambridge Handbook on Computing Education Research (Sally Fincher, Anthony Robin, Eds.)",
			"pages": null,
			"doi": "https://doi.org/10.1017/9781108654555.022",
			"local": "Begel2019OutsideClassroom.pdf",
			"publisher": "Cambridge Press",
			"contribution": "Surveys the small but growing literature on informal learning of computing and the contexts, technologies, and skills that support it. Identifies a several open questions about how to support informal learning and integrate it with more formal learning."
		},
		{
			"id": "cerhandbooktools",
			"kind": "book chapter",
			"authors": ["Lauri Malmi", "Ian Utting", "@ajko"],
			"deadname": false,
			"year": 2019,
			"title": "Tools and Environments",
			"source": "Cambridge Handbook on Computing Education Research (Sally Fincher, Anthony Robin, Eds.)",
			"pages": null,
			"doi": "https://doi.org/10.1017/9781108654555.027",
			"local": "Malmi2019ToolsEnvironments.pdf",
			"publisher": "Cambridge Press",
			"contribution": "Surveys the role of tools in learning computing, and the genres of tools that researchers have explored, including IDEs, e-books, automated assessment and feedback, and visualization. Identifies a range of open questions."
		},
		{
			"id": "cs1theory",
			"kind": "journal article",
			"authors": ["@bxie", "@dloksa", "@glnelson", "@mattjd", "Dongsheng Dong", "@kwikh", "@alextan", "@lkhwa", "@minli", "@ajko"],
			"deadname": false,
			"year": 2019,
			"title": "A Theory of Instruction for Introductory Programming Skills",
			"source": "Computer Science Education",
			"pages": "49 pages",
			"doi": "https://doi.org/10.1080/08993408.2019.1565235",
			"local": "Xie2019IntroCSTheoryOfInstruction.pdf",
			"publisher": "Taylor & Francis",
			"blog": "https://medium.com/bits-and-behavior/improving-intro-cs-by-explicitly-teaching-programming-skills-20641f920fa9",
			"contribution": "Proposes a theory that identifies four distinct skills that novices learn incrementally: tracing, writing syntax, comprehending reusable abstractions of programming knowledge (templates). Demonstrates that teaching these skills incrementally can result in improved completion rate on practice exercises and decreased error rate and improved understanding of the post-test."
		},
		{
			"id": "boostingproductivity",
			"kind": "book chapter",
			"authors": ["Brad A Myers", "@ajko", "@latoza", "YoungSeok Yoon"],
			"deadname": false,
			"year": 2019,
			"title": "Human-Centered Methods to Boost Productivity",
			"source": "Sadowski C., Zimmermann T. (eds) Rethinking Productivity in Software Engineering. Apress, Berkeley, CA",
			"pages": "to appear",
			"doi": "https://doi.org/10.1007/978-1-4842-4221-6_13",
			"local": "Sadowski2019RethinkingProductivityInSoftwareEngineering.pdf",
			"publisher": "Apress",
			"contribution": "Describes several methods for understanding how to increase developer productivity."
		},
		{
			"id": "fourlenses",
			"kind": "book chapter",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2019,
			"title": "Individual, Team, Organization, and Market: Four Lenses of Productivity",
			"source": "Sadowski C., Zimmermann T. (Eds) Rethinking Productivity in Software Engineering. Apress, Berkeley, CA",
			"pages": "to appear",
			"doi": "https://doi.org/10.1007/978-1-4842-4221-6_6",
			"local": "Sadowski2019RethinkingProductivityInSoftwareEngineering.pdf",
			"publisher": "Apress",
			"contribution": "Discusses several levels of abstraction useful for reasoning about software engineering productivity."
		},
		{
			"id": "noproductivity",
			"kind": "book chapter",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2019,
			"title": "Why Not to Measure Productivity",
			"source": "Sadowski C., Zimmermann T. (eds) Rethinking Productivity in Software Engineering. Apress, Berkeley, CA",
			"pages": "to appear",
			"doi": "https://doi.org/10.1007/978-1-4842-4221-6_3",
			"local": "Sadowski2019RethinkingProductivityInSoftwareEngineering.pdf",
			"publisher": "Apress",
			"contribution": "Presents several arguments for the dangers of measuring software developer productivity."
		},
		{
			"id": "teachingstrategies",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "@latoza", "Stephen Hull", "Ellen Ko", "@wkwok16", "@janeq97", "@akkarh", "Rishin Pandit"],
			"deadname": false,
			"year": 2019,
			"title": "Teaching Explicit Programming Strategies to Adolescents",
			"source": "@sigcse",
			"pages": "469-475",
			"publisher": "ACM",
			"authorizer": "https://dl.acm.org/authorize?N677481",
			"doi": "https://doi.org/10.1145/3287324.3287371",
			"local": "Ko2019TeachingExplicitStrategies.pdf",
			"contribution": "Attempts to teach explicit strategies for reuse and debugging, finding that adolescents struggle to follow systematic approaches to problem solving."
		},
		{
			"id": "teachaccess2",
			"kind": "refereed conference paper",
			"authors": ["@skawas", "@laurav4", "@ajko"],
			"deadname": false,
			"year": 2019,
			"title": "Teaching Accessibility: A Design Exploration of Faculty Professional Development at Scale",
			"source": "@sigcse",
			"pages": "983-989",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3287324.3287399",
			"authorizer": "https://dl.acm.org/authorize?N677482",
			"local": "Kawas2019AccessibilityMicroPD.pdf",
			"contribution": "Describes and evaluates a vision for teaching higher education CS faculty how to integrate accessibility topics into their classes, discovering many personal and organizational barriers to adoption."
		},
		{
			"id": "irteval",
			"kind": "refereed conference paper",
			"authors": ["@bxie", "@mattjd", "@minli", "@ajko"],
			"deadname": false,
			"year": 2019,
			"title": "An Item Response Theory Evaluation of a Language-Independent CS1 Knowledge Assessment",
			"source": "@sigcse",
			"pages": "699-705",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3287324.3287370",
			"authorizer": "https://dl.acm.org/authorize?N677495",
			"local": "Xie2019IRTEvaluation.pdf",
			"blog": "https://medium.com/bits-and-behavior/improving-cs-assessment-with-careful-data-analysis-10e1304de055",
			"contribution": "Evaluates the SCS1 language independent concept inventory, demonstrating how to use IRT to evaluate assessments, and that the SCS1 has several items that may be too hard to be useful."
		},
		{
			"id": "higheredteaching",
			"kind": "book",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2019,
			"title": "Informatics Teaching Guide",
			"source": "Online",
			"pages": null,
			"publisher": "Self-published",
			"doi": "https://faculty.washington.edu/ajko/books/informatics-teaching-guide/",
			"local": null,
			"contribution": "Supports new higher education teachers, including new faculty, guest faculty, doctoral student teachers, and teaching assistants. It uses our undergraduate Informatics program for examples, but is in essence a practical, but also research-informed introduction to teaching in a university."
		},
		{
			"id": "scoutdemo",
			"kind": "juried conference paper",
			"authors": ["@amaswea", "@ajko", "James Fogarty"],
			"deadname": false,
			"year": 2018,
			"title": "Scout: Mixed-Initiative Exploration of Design Variations through High-Level Design Constraints",
			"source": "@uist",
			"pages": "134-136",
			"doi": "https://doi.org/10.1145/3266037.3271626",
			"publisher": "ACM",
			"local": "Swearngin2018Scout.pdf",
			"contribution": "Describes early work on a system to support rapid design exploration of user interface layouts."
		},
		{
			"id": "certheory",
			"kind": "refereed conference paper",
			"authors": ["@glnelson", "@ajko"],
			"deadname": false,
			"year": 2018,
			"title": "On Use of Theory in Computing Education Research",
			"source": "@icer",
			"pages": "31-39",
			"acceptrate": 22,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3230977.3230992",
			"authorizer": "https://dl.acm.org/authorize?N677498",
			"local": "Nelson2018Theory.pdf",
			"award": ["best paper"],
			"contribution": "Argues that our desire to both advance explanatory theory and advance design splits our attention, which prevents us from excelling at both; that our emphasis on applying and refining general theories of learning is done at the expense of domain-specific theories of computer science knowledge; and our use of theory as a critical lens in peer review prevents the publication of designs that may accelerate design progress."
		},
		{
			"id": "inclusivepck",
			"kind": "refereed conference paper",
			"authors": ["@olesona", "Christopher Mendez", "Zoe Steine-Hanson", "Claudia Hilderbrand", "Christopher Perdriau", "Margaret Burnett", "@ajko"],
			"deadname": false,
			"year": 2018,
			"title": "Pedagogical Content Knowledge for Teaching Inclusive Design",
			"source": "@icer",
			"pages": "69-77",
			"acceptrate": 22,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3230977.3230998",
			"authorizer": "https://dl.acm.org/authorize?N677496",
			"local": "Oleson2018InclusivePCK.pdf",
			"contribution": "Through interviews and observations, identifies 11 components of pedagogical content knowledge required to teach inclusive design in HCI education, including strategies for anticipating and addressing resistance to the topic of inclusion, strategies for modeling and scaffolding perspective taking, and strategies for tailoring instruction to students’ prior beliefs and biases."
		},
		{
			"id": "transfer",
			"kind": "refereed conference paper",
			"authors": ["@kwikh", "@bxie", "@ajko"],
			"deadname": false,
			"year": 2018,
			"title": "Experiences of Computer Science Transfer Students",
			"source": "@icer",
			"pages": "115-123",
			"acceptrate": 22,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3230977.3231004",
			"authorizer": "https://dl.acm.org/authorize?N677497",
			"local": "Kwik2018Transfers.pdf",
			"contribution": "Finds that while transfer students in one university were more diverse demographically, the support of the university for transfer student orientation mitigated any social effects of transferring, but did not eliminate gaps in academic performance."
		},
		{
			"id": "rewire",
			"kind": "refereed conference paper",
			"authors": ["@amaswea", "Wil Li", "Mira Dontcheva", "Morgan Dixon", "@ajko"],
			"deadname": false,
			"year": 2018,
			"title": "Rewire: Interface Design Assistance from Examples",
			"source": "@chi",
			"pages": "Paper 504",
			"publisher": "ACM",
			"acceptrate": 25,
			"doi": "https://doi.org/10.1145/3173574.3174078",
			"authorizer": "https://dl.acm.org/authorize?N658027",
			"local": "Swearngin2018Rewire.pdf",
			"contribution": "Presents a technique for automatically converting screenshots of imagines into vector representations for use by designers. Demonstrates that designers find the technique accurate enough and superior to replicating user interfaces manually."
		},
		{
			"id": "ellblockstudio",
			"kind": "refereed conference paper",
			"authors": ["@banerjee", "@jcyip", "@ajko", "Caroline Pitt", "Kiley R. Sobel", "Kung Lee", "Leanne Liu", "Meng Wang", "Zoran Popovic"],
			"deadname": false,
			"year": 2018,
			"title": "Empowering Families Facing English Literacy Challenges to Jointly Engage in Computer Programming",
			"source": "@chi",
			"pages": "Paper 602",
			"acceptrate": 25,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3173574.3174196",
			"authorizer": "https://dl.acm.org/authorize?N658026",
			"local": "Banerjee2018WeCode.pdf",
			"award": ["best paper honorable mention"],
			"contribution": "Investigates how a programming-by-demonstration programming environment with no English text can facilitate joint-media engagement between children and their parents."
		},
		{
			"id": "mentors2",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "@lkhwa", "@kdavis", "@jcyip"],
			"deadname": false,
			"year": 2018,
			"title": "Informal Mentoring of Adolescents about Computing: Relationships, Roles, Qualities, and Impact",
			"source": "@sigcse",
			"pages": "236-244",
			"acceptrate": 37,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3159450.3159475",
			"authorizer": "https://dl.acm.org/authorize?N658190",
			"local": "Ko2018Mentorship.pdf",
			"contribution": "Investigates the nature of informal computing mentoring relationships amongst students seeking to be the first in their family to attend college. Demonstrates that mentorship occurs even in low-resource settings with little CS expertise, and most often amongst peers and siblings."
		},
		{
			"id": "tracing",
			"kind": "refereed conference paper",
			"authors": ["@bxie", "@glnelson", "@ajko"],
			"deadname": false,
			"year": 2018,
			"title": "An Explicit Strategy to Scaffold Novice Program Tracing",
			"source": "@sigcse",
			"pages": "344-349",
			"publisher": "ACM",
			"acceptrate": 37,
			"doi": "https://doi.org/10.1145/3159450.3159527",
			"authorizer": "https://dl.acm.org/authorize?N658959",
			"local": "Xie2018TracingStrategies.pdf",
			"contribution": "Describes and evaluates a simple but powerful strategy for scaffolding the tracing of program execution. With less than 30 minutes of practice, novices in a CS1 course had midterm grades 7% higher."
		},
		{
			"id": "teachaccess1",
			"kind": "refereed conference paper",
			"authors": ["@kshino", "@skawas", "@ajko", "Richard E. Ladner "],
			"deadname": false,
			"year": 2018,
			"title": "Who Teaches Accessibility? A Survey of U.S. Computing Faculty",
			"source": "@sigcse",
			"pages": "197-202",
			"acceptrate": 37,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3159450.3159484",
			"authorizer": "https://dl.acm.org/authorize?N658199",
			"local": "Shinohara2018AccessComputingSurvey.pdf",
			"contribution": "Investigates the prevalence of instruction on accessibility among computing and information science faculty. Finds that nearly all HCI faculty teach something about accessibility, that most faculty want to teach it, but don't have the experience, and don't know how it fits into their course content."
		},
		{
			"id": "msrkeynote",
			"kind": "abstract",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2018,
			"title": "Mining the Mind, Minding the Mine: Grand Challenges in Comprehension and Mining",
			"source": "ACM International Conference on Mining Software Repositories",
			"pages": "118",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3196398.3196477",
			"local": "Ko2018MiningMind.pdf",
			"contribution": "Argues that program comprehension and mining software repositories research are mutually relevant in surprising ways."
		},
		{
			"id": "pstutor1",
			"kind": "refereed workshop paper",
			"authors": ["@dloksa", "@ajko"],
			"deadname": false,
			"year": 2017,
			"title": "Modeling Programming Problem Solving Through Interactive Worked Examples",
			"source": "Workshop on Evaluation and Usability of Programming Languages and Tools (PLATEAU)",
			"pages": "",
			"doi": null,
			"local": "Loksa2017PLATEAU.pdf",
			"publisher": "ACM",
			"contribution": "Briefly overviews a vision for programming process worked examples that demonstrate an expert working through a programming problem."
		},
		{
			"id": "gidgetabandoment",
			"kind": "refereed conference paper",
			"authors": ["@yanan15", "@mjslee", "@ajko"],
			"deadname": false,
			"year": 2017,
			"title": "Predicting Abandonment in Online Coding Tutorials",
			"source": "@vlhcc",
			"pages": "191-199",
			"acceptrate": 29,
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/VLHCC.2017.8103467",
			"local": "Yan2017GidgetAbandonment.pdf",
			"contribution": "Investigates the feasibility of predicting when a learner will abandon a coding tutorial, finding that account activation and help-seeking behavior predict continued learning, while tutorial features indicating struggle predicted abandonment."
		},
		{
			"id": "pltutor1",
			"kind": "refereed conference paper",
			"authors": ["@glnelson", "@bxie", "@ajko"],
			"deadname": false,
			"year": 2017,
			"title": "Comprehension First: Evaluating a Novel Pedagogy and Tutoring System for Program Tracing in CS1",
			"source": "@icer",
			"pages": "2-11",
			"acceptrate": 27,
			"publisher": "ACM",
			"authorizer": "http://dl.acm.org/authorize?N42754",
			"doi": "https://doi.org/10.1145/3105726.3106178",
			"local": "Nelson2017PLTutor.pdf",
			"contribution": "Contributes a new theory of what it means to know a programming language, a novel pedagogy and computer-based tutorial for teaching this knowledge, and evidence that 1) the tutorial promotes significantly higher learning gains over conventional programming language tutorials, and 2) that these gains predict the majority of the variance in CS1 midterm grades."
		},
		{
			"id": "bootcamps",
			"kind": "refereed conference paper",
			"authors": ["@kthayer", "@ajko"],
			"deadname": false,
			"year": 2017,
			"title": "Barriers Faced by Coding Bootcamp Students",
			"source": "@icer",
			"pages": "245-253",
			"acceptrate": 27,
			"publisher": "ACM",
			"authorizer": "http://dl.acm.org/authorize?N42766",
			"doi": "https://doi.org/10.1145/3105726.3106176",
			"local": "Thayer2017CodingBootcamps.pdf",
			"blog": "https://medium.com/bits-and-behavior/what-i-learned-from-researching-coding-bootcamps-f594c15bd9e0",
			"contribution": "Finds that bootcamps can be an alternate path into the software industry for people who missed earlier computing education opportunities, particularly for women, but students face great personal costs and risks, including significant time, money, and effort before, during, and after bootcamps."
		},
		{
			"id": "mentors1",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "@kdavis"],
			"deadname": false,
			"year": 2017,
			"title": "Computing Mentorship in a Software Boomtown: Relationships to Adolescent Interest and Beliefs",
			"source": "@icer",
			"pages": "236-244",
			"acceptrate": 27,
			"publisher": "ACM",
			"authorizer": "http://dl.acm.org/authorize?N42765",
			"doi": "https://doi.org/10.1145/3105726.3106177",
			"local": "Ko2017Mentorship.pdf",
			"contribution": "Finds that interest in computing was strongly related to having a mentoring relationship and not to gender or socioeconomic status, that teens with mentors also engaged in significantly more computing education and had more diverse beliefs about peers who engaged in computing education, and that teens who took a class from an instructor who aimed to become students’ teacher-mentor had significantly greater positive changes in interest in computing than those who already had a mentor."
		},
		{
			"id": "nonengineers",
			"kind": "refereed workshop paper",
			"authors": ["@plli", "@ajko", "Andrew Begel"],
			"deadname": false,
			"year": 2017,
			"title": "Cross-Disciplinary Perspectives on Collaborations with Software Engineers",
			"source": "International Workshop on Cooperative and Human Aspects of Software Engineering (CHASE)",
			"pages": "2-8",
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/CHASE.2017.3",
			"local": "Li2017CrossDisciplinary.pdf",
			"blog": "https://medium.com/bits-and-behavior/what-makes-software-developers-great-cross-disciplinary-collaborators-590f94f2f722",
			"contribution": "Finds that non-software developers who collaborate with software developers described great software engineers as masters of their own technical domain, open-minded to the input of others, proactively informing everyone, and seeing the big picture of how pieces fit together."
		},
		{
			"id": "genie",
			"kind": "refereed conference paper",
			"authors": ["@amaswea", "@ajko", "James Fogarty"],
			"deadname": false,
			"year": 2017,
			"title": "Genie: Input Retargeting on the Web through Command Reverse Engineering",
			"source": "@chi",
			"pages": "4703-4714",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3025453.3025506",
			"authorizer": "http://dl.acm.org/authorize?N37843",
			"local": "Swearngin2017Genie.pdf",
			"blog": "https://medium.com/bits-and-behavior/genie-input-retargeting-on-the-web-through-command-reverse-engineering-f9c7a294b23f",
			"contribution": "Presents Genie, a system to reverse engineer and retarget interactive commands on a website, which allows users to engage with the web via arbitrary input modalities, including speech, keyboard, and command-line input."
		},
		{
			"id": "answerdash",
			"kind": "refereed conference paper",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2017,
			"title": "A Three-Year Participant Observation of Software Startup Software Evolution",
			"source": "@seip",
			"pages": "3-12",
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/ICSE-SEIP.2017.29",
			"local": "Ko2017AnswerDashReflection.pdf",
			"blog": "https://medium.com/bits-and-behavior/nine-factors-that-shape-software-evolution-78112ee79b3c",
			"contribution": "Describes an analysis my personal diary reflecting on 9,000 hours of software startup work, presenting nine claims about software engineering work."
		},
		{
			"id": "ideagardenjvlc",
			"kind": "journal article",
			"authors": ["Will Jernigan", "Amber Horvath", "@mjslee", "Margaret M. Burnett", "Taylor Cuilty", "Sandeep Kuttal", "Anicia Peters", "Irwin Kwan", "Faezeh Bahmani", "@ajko", "Christopher J. Mendez", "@olesona"],
			"deadname": false,
			"year": 2017,
			"title": "General Principles for a Generalized Idea Garden",
			"source": "Journal of Visual Languages and Computing",
			"pages": "51-65",
			"publisher": "Elsevier",
			"doi": "http://dx.doi.org/10.1016/j.jvlc.2017.04.005",
			"local": "Jernigan2017IdeaGarden.pdf",
			"contribution": "Describes the general architecture for the Idea Garden paradigm and a series of studies that suggest it's effectiveness at unblocking learners' problem solving."
		},
		{
			"id": "tutorialeval",
			"kind": "refereed conference paper",
			"authors": ["@kimsk", "@ajko"],
			"deadname": false,
			"year": 2017,
			"title": "A Pedagogical Analysis of Online Coding Tutorials",
			"source": "@sigcse",
			"pages": "321-326",
			"acceptrate": 30,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3017680.3017728",
			"local": "Kim2017CodingTutorialEvaluation.pdf",
			"blog": "https://medium.com/bits-and-behavior/coding-tutorials-the-good-the-bad-and-the-ugly-b45afc8821f6",
			"contribution": "Using a set of pedagogical principles, evaluates the current state of tutorial instruction, finding that only a few tutorials follow best practices."
		},
		{
			"id": "uist",
			"kind": "book",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2017,
			"title": "User Interface Software and Technology",
			"source": "Online",
			"pages": null,
			"publisher": "Self-published",
			"doi": "https://faculty.washington.edu/ajko/books/user-interface-software-and-technology/",
			"local": null,
			"contribution": "An online, self-published book that surveys the past, present, and future of user interfaces from theoretical, practical, and ethical perspectives."
		},
		{
			"id": "plreally",
			"kind": "refereed workshop paper",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2016,
			"title": "What is a Programming Language, Really?",
			"source": "ACM Workshop on Workshop on Evaluation and Usability of Programming Languages and Tools (PLATEAU)",
			"pages": "32-33",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/3001878.3001880",
			"authorizer": "http://dl.acm.org/authorize?N26205",
			"local": "Ko2016WhatAreProgrammingLanguages.pdf",
			"contribution": "Reflects on the implications of various definitions of programming languages on research and practice."
		},
		{
			"id": "accesscomputingteachaccess",
			"kind": "refereed magazine article",
			"authors": ["@ajko", "Richard Ladner"],
			"deadname": false,
			"year": 2016,
			"title": "AccessComputing Promotes Teaching Accessibility",
			"source": "ACM Inroads",
			"pages": "65-68",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/2968453",
			"authorizer": "http://dl.acm.org/authorize?N27707",
			"local": "Ko2016TeachingAccessibility.pdf",
			"contribution": "Discusses AccessComputing efforts to implement and disseminate curriculum on accessibility into academia and industry."
		},
		{
			"id": "csproblemsolving2",
			"kind": "refereed conference paper",
			"authors": ["@dloksa", "@ajko"],
			"deadname": false,
			"year": 2016,
			"title": "The Role of Self-Regulation in Programming Problem Solving Process and Success",
			"source": "@icer",
			"pages": "83-91",
			"acceptrate": 25,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/2960310.2960334",
			"authorizer": "http://dl.acm.org/authorize?N10039",
			"local": "Loksa2016SelfRegulation.pdf",
			"contribution": "Finds that while most novices engage in self-regulation to navigate and inform their problem solving efforts, these self-regulation efforts are only effective when accompanied by programming knowledge adequate to succeed at solving a given problem."
		},
		{
			"id": "monitoring",
			"kind": "book chapter",
			"authors": ["@ajko"],
			"deadname": true,
			"year": 2016,
			"title": "The World is Your Test Suite",
			"source": "Perspectives on Data Science for Software Engineering, 1st Edition",
			"pages": "",
			"publisher": "Morgan Kaufmann",
			"local": null,
			"doi": "http://www.amazon.com/Perspectives-Data-Science-Software-Engineering/dp/0128042060/ref=sr_1_3?s=books&ie=UTF8&qid=1455825322&sr=1-3",
			"contribution": "Discusses the importance of monitoring, bug reporting, and user feedback in verifying requirements."
		},
		{
			"id": "studyingprogramming",
			"kind": "refereed magazine article",
			"authors": ["Brad A. Myers", "@ajko", "@latoza", "YoungSeok Yoon"],
			"deadname": false,
			"year": 2016,
			"title": "Programmers are Users Too: Human Centered Methods for Improving Tools for Programming",
			"source": "IEEE Computer",
			"pages": "44-52",
			"doi": "https://doi.org/10.1109/MC.2016.200",
			"publisher": "IEEE",
			"local": "Myers2016ProgrammersAreUsers.pdf",
			"contribution": "Argues that HCI methods are directly applicable to designing and developing software development tools, and provides an overview of several methods that have been used in research to invent and evaluate new developer tools."
		},
		{
			"id": "csproblemsolving1",
			"kind": "refereed conference paper",
			"authors": ["@dloksa", "@ajko", "William Jernigan", "@olesona", "Chris Mendez", "Margaret M. Burnett"],
			"deadname": false,
			"year": 2016,
			"title": "Programming, Problem Solving, and Self-Awareness: Effects of Explicit Guidance",
			"source": "@chi",
			"pages": "1449-1461",
			"acceptrate": 23,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/2858036.2858252",
			"authorizer": "http://dl.acm.org/authorize?N04874",
			"local": "Loksa2016ProgrammingProblemSolving.pdf",
			"contribution": "Teaching novice programmers the structure of programming problem solving activities and to be aware of which activity they are conducting and whether they are succeeding has a substantial impact on their productivity, self-efficacy, independence, and growth mindset."
		},
		{
			"id": "ccccer",
			"kind": "technical report",
			"authors": ["Steve Cooper", "Jeff Forbes", "Armando Fox", "Susan Hambrusch", "@ajko", "Beth Simon"],
			"deadname": true,
			"year": 2016,
			"title": "The Importance of Computing Education Research",
			"source": "CRA Computing Community Consortium",
			"pages": "",
			"publisher": "Computing Research Association",
			"doi": "http://cra.org/ccc/resources/ccc-led-whitepapers/",
			"local": "Cooper2016ImportanceofCSEd.pdf",
			"contribution": "Argues for the foundational role of computing education research in computer science departments."
		},
		{
			"id": "cooperativesoft",
			"kind": "book",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2016,
			"title": "Cooperative Software Development",
			"source": "Online",
			"pages": null,
			"publisher": "Self-published",
			"doi": "https://faculty.washington.edu/ajko/books/cooperative-software-development/",
			"local": null,
			"contribution": "An online, self-published book that covers software engineering fundamentals, but from a human, social, collaborative, and organizational perspective, rather than from a purely technical perspective."
		},
		{
			"id": "scry",
			"kind": "refereed conference paper",
			"authors": ["@burg", "@ajko", "Michael D. Ernst"],
			"deadname": false,
			"year": 2015,
			"title": "Explaining Visual Changes in Web Interfaces",
			"source": "@uist",
			"pages": "259-268",
			"publisher": "ACM",
			"authorizer": "http://dl.acm.org/authorize?N08341",
			"doi": "https://doi.org/10.1145/2807442.2807473",
			"local": "Burg2015ExplainingWebChanges.pdf",
			"contribution": "An algorithm and interface that allows web developers to select a before and after state of a web site to see the code that caused the changes."
		},
		{
			"id": "gidget6",
			"kind": "refereed conference paper",
			"authors": ["William Jernigan", "Amber Horvath", "@mjslee", "Margaret M. Burnett", "Taylor Cuilty", "Sandeep Kuttal", "Anicia N. Peters", "Irwin Kwan", "Faezeh Bahmani", "@ajko"],
			"deadname": false,
			"year": 2015,
			"title": "A Principled Evaluation for a Principled Idea Garden",
			"source": "@vlhcc",
			"pages": "235-243",
			"acceptrate": 29,
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/VLHCC.2015.7357222",
			"local": "Jernigan2015PrincipledEvaluationIdeaGarden.pdf",
			"contribution": "In-context help on programming problem solving helps learners with diverse learning strategies work more independently."
		},
		{
			"id": "gidget5",
			"kind": "refereed conference paper",
			"authors": ["@mjslee", "@ajko"],
			"deadname": false,
			"year": 2015,
			"title": "Comparing the Effectiveness of Online Learning Approaches on CS1 Learning Outcomes",
			"source": "@icer",
			"pages": "237-246",
			"acceptrate": 26,
			"publisher": "ACM",
			"authorizer": "http://dl.acm.org/authorize?N05630",
			"doi": "http://dx.doi.org/10.1145/2787622.2787709",
			"local": "Lee2015EvaluatingGidget.pdf",
			"contribution": "Mastery learning approaches to teaching programming produce better skills in program tracing than task-free open-ended creative environments."
		},
		{
			"id": "greatengineer1",
			"kind": "refereed conference paper",
			"authors": ["@plli", "@ajko", "Jiamin Zhu"],
			"deadname": false,
			"year": 2015,
			"title": "What Makes a Great Software Engineer?",
			"source": "@icse",
			"pages": "700-710",
			"acceptrate": 18,
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/ICSE.2015.335",
			"local": "Li2015GreatEngineers.pdf",
			"blog": "https://medium.com/bits-and-behavior/what-makes-a-great-software-engineer-e8cbb25cfac0",
			"contribution": "Software engineering expertise is much more about personality, interpersonal skills, and decision-making expertise than about technical knowledge and ability."
		},
		{
			"id": "lemonaid3",
			"kind": "refereed conference paper",
			"authors": ["@pchilana", "@ajko", "Jacob O. Wobbrock"],
			"deadname": false,
			"year": 2015,
			"title": "From User-Centered Design to Adoption-Centered Design: A Case Study of a Research System Becoming a Product",
			"source": "@chi",
			"pages": "1749-1758",
			"acceptrate": 24,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/2702123.2702412",
			"authorizer": "http://dl.acm.org/authorize?N98647",
			"local": "Chilana2015Adoption.pdf",
			"award": ["best paper"],
			"contribution": "Research prototypes and evidence of their usability and usefulness are only a tiny part of creating a successful whole product."
		},
		{
			"id": "designmethods",
			"kind": "book",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2015,
			"title": "Design Methods",
			"source": "Online",
			"pages": null,
			"publisher": "Self-published",
			"doi": "https://faculty.washington.edu/ajko/books/design-methods",
			"local": null,
			"contribution": "An online, self-published book that surveys HCI and Design methods in a simple, accessible, and direct manner."
		},
		{
			"id": "gidget4",
			"kind": "refereed conference paper",
			"authors": ["@mjslee", "Faezeh Bahmani", "Irwin Kwan", "Jillian LaFerte", "@charters", "Amber Horvath", "@fanny", "Jill Cao", "Catherine Law", "@besweth", "Sheridan Long", "Margaret M. Burnett", "@ajko"],
			"deadname": false,
			"year": 2014,
			"title": "Principles of a Debugging-First Puzzle Game for Computing Education",
			"source": "@vlhcc",
			"pages": "57-64",
			"acceptrate": 30,
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/VLHCC.2014.6883023",
			"local": "Lee2014GidgetPrinciples.pdf",
			"contribution": "Teaching debugging first, while redirecting blame to the computer instead of the learner, can increase learning efficiency and engage learners of all genders equally."
		},
		{
			"id": "newsproblems",
			"kind": "refereed workshop paper",
			"authors": ["@ajko", "@dosono", "@neeraja"],
			"deadname": false,
			"year": 2014,
			"title": "Thirty Years of Software Problems in the News",
			"source": "International Workshop on Cooperative and Human Aspects of Software Engineering (CHASE)",
			"pages": "32-39",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/2593702.2593719",
			"authorizer": "http://dl.acm.org/authorize?N89379",
			"local": "Ko2014News.pdf",
			"contribution": "Software failures reported in the news describe mostly minor consequences, though reports of death, injury, or loss of access to basic needs is increasing."
		},
		{
			"id": "adultattitudes",
			"kind": "refereed conference paper",
			"authors": ["@charters", "@mjslee", "@ajko", "@dloksa"],
			"deadname": false,
			"year": 2014,
			"title": "Challenging Stereotypes and Changing Attitudes: The Effect of a Brief Programming Encounter on Adults' Attitudes toward Programming",
			"source": "ACM Symposium on Computer Science Education",
			"pages": "653-658",
			"acceptrate": 39,
			"publisher": "ACM",
			"authorizer": "http://dl.acm.org/authorize?N89370",
			"doi": "https://doi.org/10.1145/2538862.2538938",
			"local": "Charters2014ChangingAttitudes.pdf",
			"contribution": "Adult attitudes toward programming, while generally negative, can be quickly turned positive with a brief exposure to a debugging game."
		},
		{
			"id": "practicalguide",
			"kind": "journal article",
			"authors": ["@ajko", "@latoza", "Margaret M. Burnett"],
			"deadname": false,
			"year": 2013,
			"title": "A Practical Guide to Controlled Experiments of Software Engineering Tools with Human Participants",
			"source": "@ese",
			"pages": "110-141",
			"publisher": "Springer",
			"doi": "https://doi.org/10.1007/s10664-013-9279-3",
			"local": "Ko2013SEToolEvaluations.pdf",
			"volume": 20,
			"issue": 1,
			"contribution": "Software engineering researchers rarely evaluate new tools with software developers, but there are several best practices that can make such evaluations less risky and difficult to conduct."
		},
		{
			"id": "timelapse",
			"kind": "refereed conference paper",
			"authors": ["@burg", "Richard Bailey", "@ajko", "Michael D. Ernst"],
			"deadname": false,
			"year": 2013,
			"title": "Interactive Record/Replay for Web Application Debugging",
			"source": "@uist",
			"pages": "473-484",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/2501988.2502050",
			"authorizer": "http://dl.acm.org/authorize?N89371",
			"local": "Burg2013Timelapse.pdf",
			"award": ["best paper honorable mention"],
			"contribution": "A system for recording inputs to a web application and replaying them deterministically with minimal time or space overhead."
		},
		{
			"id": "gidget3",
			"kind": "refereed conference paper",
			"authors": ["@mjslee", "@ajko", "Irwin Kwan"],
			"deadname": false,
			"year": 2013,
			"title": "In-Game Assessments Increase Novice Programmers' Engagement and Learning Efficiency",
			"source": "@icer",
			"pages": "153-160",
			"acceptrate": 30,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/2493394.2493410",
			"authorizer": "http://dl.acm.org/authorize?N89372",
			"local": "Lee2013Assessments.pdf",
			"award": ["best paper"],
			"contribution": "Including brief assessments in a programming game improves engagement and learning efficiency."
		},
		{
			"id": "lemonaid2",
			"kind": "refereed conference paper",
			"authors": ["@pchilana", "@ajko", "Jacob O. Wobbrock"],
			"deadname": false,
			"year": 2013,
			"title": "A Multi-Site Field Study of Crowdsourced Contextual Help: Usage and Perspectives of End-Users and Software Teams",
			"source": "@chi",
			"pages": "217-226",
			"acceptrate": 20,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/2470654.2470685",
			"authorizer": "http://dl.acm.org/authorize?N89373",
			"local": "Chilana2013LemonAidFieldStudy.pdf",
			"contribution": "Contextual help is well-liked by both end-users and software teams in real world use."
		},
		{
			"id": "lemonaidworkshop",
			"kind": "juried workshop paper",
			"authors": ["@pchilana", "@ajko", "Jacob O. Wobbrock"],
			"deadname": false,
			"year": 2013,
			"title": "Crowdsourced Q&A-based Contextual Help for Web Applications: Challenges and Opportunities",
			"local": "Chilana2013LemonAidWorkshop.pdf",
			"publisher": "ACM",
			"source": "CSCW Workshop on Social Media Question Asking",
			"pages": "",
			"doi": null,
			"contribution": "Summarizes preliminary work on the LemonAid prototype."
		},
		{
			"id": "lemonaid1",
			"kind": "refereed conference paper",
			"authors": ["@pchilana", "@ajko", "Jacob O. Wobbrock"],
			"deadname": false,
			"year": 2012,
			"title": "LemonAid: Selection-Based Crowdsourced Contextual Help for Web Applications",
			"source": "@chi",
			"pages": "1549-1558",
			"acceptrate": 25,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/2207676.2208620",
			"authorizer": "http://dl.acm.org/authorize?N89385",
			"local": "Chilana2012LemonAid.pdf",
			"contribution": "A technique for extracting queries from selections of user interface elements that provides reliable, relevant help retrieval."
		},
		{
			"id": "reflect",
			"kind": "refereed conference paper",
			"authors": ["Travis Kriplean", "Michael Toomim", "Jonathan Morgan", "Alan Borning", "@ajko"],
			"deadname": false,
			"year": 2012,
			"title": "Is This What You Meant? Promoting Listening on the Web with Reflect",
			"source": "@chi",
			"pages": "1559-1568",
			"acceptrate": 25,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/2207676.2208621",
			"authorizer": "http://dl.acm.org/authorize?N89386",
			"local": "Kriplean2012Reflect.pdf",
			"contribution": "A technique for demonstrating listening on the web through restatement that engages lurkers in supporting common ground in groups."
		},
		{
			"id": "frictionary",
			"kind": "juried conference paper",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2012,
			"title": "Mining Whining in Support Forums with Frictionary",
			"source": "ACM Conference on Human Factors in Computing Systems (CHI), alt.chi",
			"pages": "191-200",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/2212776.2212797",
			"authorizer": "http://dl.acm.org/authorize?N89374",
			"local": "Ko2012Frictionary.pdf",
			"contribution": "A technique for extracting aggregate patterns in software problems by analyzing the natural language text of technical support discussion forums."
		},
		{
			"id": "facebookcasestudy",
			"kind": "juried conference paper",
			"authors": ["@pchilana", "Christina Holsberry", "Flavio Oliveira", "@ajko"],
			"deadname": false,
			"year": 2012,
			"title": "Designing for a Billion Users: A Case Study of Facebook",
			"source": "ACM Conference on Human Factors in Computing Systems, Case Studies (CHI)",
			"pages": "419-431",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/2212776.2212819",
			"authorizer": "http://dl.acm.org/authorize?N89387",
			"local": "Chilana2012Facebook.pdf",
			"contribution": "Efforts to make a universal product can limit innovation, both because of the diversity of user knowledge and the limits of interpreting data science patterns."
		},
		{
			"id": "gidget1",
			"kind": "refereed conference paper",
			"authors": ["Michael J. Lee", "@ajko"],
			"deadname": false,
			"year": 2011,
			"title": "Personifying Programming Tool Feedback Improves Novice Programmers' Learning",
			"source": "@icer",
			"pages": "109-116",
			"acceptrate": 30,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/2016911.2016934",
			"authorizer": "http://dl.acm.org/authorize?N89389",
			"local": "Lee2011Gidget.pdf",
			"contribution": "Giving a computer eyes and having it use personal pronouns that double the amount of time that learners engaging in discretionary computing education by focusing their attention on instructional material."
		},
		{
			"id": "feedlack",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "@xing"],
			"deadname": false,
			"year": 2011,
			"title": "Feedlack Detects Missing Feedback in Web Applications",
			"source": "@chi",
			"pages": "2177-2186",
			"acceptrate": 25,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1978942.1979260",
			"authorizer": "http://dl.acm.org/authorize?N89382",
			"local": "Ko2011FeedLack.pdf",
			"contribution": "A static program analysis for finding all inputs in a user interface that do not produce some form of feedback."
		},
		{
			"id": "beta",
			"kind": "refereed conference paper",
			"authors": ["@plli", "Ryan Kivett", "Zhiyuan Zhan", "Sung-eok Jeon", "Nachiappan Nagappan", "Brendan Murphy", "@ajko"],
			"deadname": false,
			"year": 2011,
			"title": "Characterizing the Differences Between Pre- and Post- release Versions of Software",
			"source": "@seip",
			"pages": "716-725",
			"acceptrate": 18,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1985793.1985894",
			"authorizer": "http://dl.acm.org/authorize?N89380",
			"local": "Li2011PrePostDefects.pdf",
			"contribution": "Beta-testers use more applications, engage in more self-install, come from non-representative countries, and use more advanced hardware, skewing data on crashes, hangs, and kernel panics that is used for bug triage."
		},
		{
			"id": "openbugs2",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "@pchilana"],
			"deadname": false,
			"year": 2011,
			"title": "Design, Discussion, and Dissent in Open Bug Reports",
			"source": "iConference",
			"pages": "106-113",
			"acceptrate": 63,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1940761.1940776",
			"authorizer": "http://dl.acm.org/authorize?N89395",
			"local": "Ko2011ContentiousBugReports.pdf",
			"contribution": "Developers in open source can be passionate about making decisions that positively impact users, but often lack the information necessary to do this objectively, instead relying on anecdote, speculation, and hyperbole."
		},
		{
			"id": "gestalt",
			"kind": "refereed conference paper",
			"authors": ["@kayur", "Naomi Bancroft", "Steven M. Drucker", "James Fogarty", "@ajko", "James A. Landay"],
			"deadname": false,
			"year": 2010,
			"title": "Gestalt: Integrated Support for Implementation and Analysis in Machine Learning Processes",
			"source": "@uist",
			"pages": "37-46",
			"acceptrate": 18,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1866029.1866038",
			"authorizer": "http://dl.acm.org/authorize?N89396",
			"local": "Patel2010Gestalt.pdf",
			"contribution": "A development environment that supports the translation of data into machine learned classifier  that improves the ability of developers to find and fix defects."
		},
		{
			"id": "cleanroom",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "Jacob O. Wobbrock"],
			"deadname": false,
			"year": 2010,
			"title": "Cleanroom: Edit-Time Error Detection with the Uniqueness Heuristic",
			"source": "@vlhcc",
			"pages": "7-14",
			"acceptrate": 29,
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/VLHCC.2010.11",
			"local": "Ko2010Cleanroom.pdf",
			"award": ["best paper"],
			"contribution": "Detecting and highlighting identifiers that only appear once in dynamic languages helps developers find and fix challenging defects more quickly."
		},
		{
			"id": "openbugs1",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "@pchilana"],
			"deadname": false,
			"year": 2010,
			"title": "How Power Users Help and Hinder Open Bug Reporting",
			"source": "@chi",
			"pages": "1665-1674",
			"acceptrate": 24,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1753326.1753576",
			"authorizer": "http://dl.acm.org/authorize?N89398",
			"local": "Ko2010HowPowerUsersHelpAndHinderOpenBugReporting.pdf",
			"award": ["best paper honorable mention"],
			"contribution": "Most bug reports submitted from non-core open source contributors describe non-issues that devolve into technical support, providing little valuable information to the core community."
		},
		{
			"id": "complexdomains",
			"kind": "refereed conference paper",
			"authors": ["@pchilana", "Jacob O. Wobbrock", "@ajko"],
			"deadname": false,
			"year": 2010,
			"title": "Understanding Usability Practices in Complex Domains: Implications for Training the Next Generation of Usability Professionals",
			"source": "@chi",
			"pages": "2337-2346",
			"publisher": "ACM",
			"acceptrate": 24,
			"doi": "http://doi.acm.org/10.1145/1753326.1753678",
			"authorizer": "http://dl.acm.org/authorize?N89399",
			"local": "Chilana2010ComplexDomains.pdf",
			"contribution": "Lack of domain expertise can be a significant hurdle for conducting effective user research and usability testing."
		},
		{
			"id": "codebios",
			"kind": "refereed conference paper",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2009,
			"title": "Attitudes and Self-Efficacy in Young Adults' Computing Autobiographies",
			"source": "@vlhcc",
			"pages": "67-74",
			"acceptrate": 25,
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/VLHCC.2009.5295297",
			"local": "Ko2009CodeAutobiographies.pdf",
			"contribution": "First encounters with code must be accessible, error-tolerant and socially engaging, and must occur repeatedly across a lifetime to lead to deeper investment in computing education."
		},
		{
			"id": "whyline3",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "Brad A. Myers"],
			"deadname": false,
			"year": 2009,
			"title": "Finding Causes of Program Output with the Java Whyline",
			"source": "@chi",
			"pages": "1569-1578",
			"acceptrate": 24,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1518701.1518942",
			"authorizer": "http://dl.acm.org/authorize?N89392",
			"local": "Ko2009JavaWhylineUI.pdf",
			"contribution": "A user interface for debugging that supports why and why not questions that enables developers to localize faults significantly faster than breakpoint debuggers."
		},
		{
			"id": "whydebugclassifier2",
			"kind": "refereed conference paper",
			"authors": ["Todd Kuleza", "Weng-Keen Wong", "Simone Stumpf", "Stephen Perona", "Rachel White", "Margaret M. Burnett", "Ian Oberst", "@ajko"],
			"deadname": false,
			"year": 2009,
			"title": "Fixing the Program My Computer Learned: Barriers for End Users, Challenges for the Machine",
			"source": "International Conference on Intelligent User Interfaces (IUI)",
			"pages": "187-196",
			"acceptrate": 29,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1502650.1502678",
			"authorizer": "http://dl.acm.org/authorize?N89394",
			"local": "Kulesza2009FixingTheProgram.pdf",
			"contribution": "Enabling end users to debug machined learned programs by asking why questions about classifications causes end-users to locally optimize one class at the expense of other classes."
		},
		{
			"id": "interactivebehaviors",
			"kind": "refereed conference paper",
			"authors": ["Brad A. Myers", "Sun Young Park", "Yoko Nakano", "Greg Mueller", "@ajko"],
			"deadname": false,
			"year": 2008,
			"title": "How Designers Design and Program Interactive Behaviors",
			"source": "@vlhcc",
			"pages": "177-184",
			"acceptrate": 29,
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/VLHCC.2008.4639081",
			"local": "Myers2008InteractiveBehaviors.pdf",
			"contribution": "Designers report that behavior is much more difficult to define than appearance, that it requires collaborating with developers, and that communicating behavior to developers is of particular difficulty.",
			"award": ["most influential paper honorable mention"]
		},
		{
			"id": "whyline2",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "Brad A. Myers"],
			"deadname": false,
			"year": 2008,
			"title": "Debugging Reinvented: Asking and Answering Why and Why Not Questions about Program Behavior",
			"source": "@icse",
			"pages": "301-310",
			"acceptrate": 15,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1368088.1368130",
			"authorizer": "http://dl.acm.org/authorize?N89305",
			"local": "Ko2008JavaWhyline.pdf",
			"award": ["best paper", "most influential paper"],
			"contribution": "Static and dynamic program slicing algorithms for extracting and answering developers questions about program output that substantially decrease fault localization time."
		},
		{
			"id": "informationneeds",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "Rob DeLine", "Gina Venolia"],
			"deadname": false,
			"year": 2007,
			"title": "Information Needs in Collocated Software Development Teams",
			"source": "@icse",
			"pages": "344-353",
			"acceptrate": 14,
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/ICSE.2007.45",
			"local": "Ko2007InformationNeeds.pdf",
			"contribution": "Developers have many distinct information needs to be productive; some are frequent and well-served, such as information about changes to artifacts and coworker progress, but others are infrequent but critical, such as information about requirements, design rationale, and reproduction steps."
		},
		{
			"id": "devwhiteboards",
			"kind": "refereed conference paper",
			"authors": ["Mauro Cherubini", "Gina Venolia", "Rob DeLine", "@ajko"],
			"deadname": false,
			"year": 2007,
			"title": "Let's Go to the Whiteboard: How and Why Software Developers Draw Code",
			"source": "@chi",
			"pages": "557-566",
			"acceptrate": 26,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1240624.1240714",
			"authorizer": "http://dl.acm.org/authorize?N89309",
			"local": "Cherubini2007DevelopersDrawCode.pdf",
			"contribution": "Most of the diagrams that software developers make are transient and facilitate interpersonal communication and decision making and not for specifying or documenting program behavior."
		},
		{
			"id": "linguisticbugs",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "Brad A. Myers", "Duen Horng Chau"],
			"deadname": false,
			"year": 2006,
			"title": "A Linguistic Analysis of How People Describe Software Problems in Bug Reports",
			"source": "Visual Languages and Human-Centric Computing",
			"pages": "127-134",
			"acceptrate": 28,
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/VLHCC.2006.3",
			"local": "Ko2006LinguisticsOfBugReports.pdf",
			"contribution": "There is regularity in the grammar of bug report titles, suggesting the potential for applying natural language processing to searching, filtering, mining, and aggregating bug reports."
		},
		{
			"id": "crystal",
			"kind": "refereed conference paper",
			"authors": ["Brad A. Myers", "David Weitzman", "@ajko", "Duen Horng Chau"],
			"deadname": false,
			"year": 2006,
			"title": "Answering Why and Why Not Questions in User Interfaces",
			"source": "@chi",
			"pages": "397-406",
			"publisher": "ACM",
			"acceptrate": 23,
			"doi": "https://doi.org/10.1145/1124772.1124832",
			"authorizer": "http://dl.acm.org/authorize?N89304",
			"local": "Myers2006Crystal.pdf",
			"contribution": "Algorithms and user interfaces that allow end users to ask 'why' questions about unexpected application behavior."
		},
		{
			"id": "barista",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "Brad A. Myers"],
			"deadname": false,
			"year": 2006,
			"title": "Barista: An Implementation Framework for Enabling New Tools, Interaction Techniques and Views for Code Editors",
			"source": "@chi",
			"pages": "387-396",
			"acceptrate": 23,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1124772.1124831",
			"authorizer": "http://dl.acm.org/authorize?N89303",
			"local": "Ko2006Barista.pdf",
			"contribution": "Abstractions that make it easy to build rich multimedia interfaces in a code editor without sacrificing the ability to write code as text."
		},
		{
			"id": "citrus",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "Brad A. Myers"],
			"deadname": false,
			"year": 2005,
			"title": "Citrus: A Language and Toolkit for Simplifying the Creation of Structured Editors for Code and Data",
			"source": "@uist",
			"pages": "",
			"acceptrate": 19,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1095034.1095037",
			"authorizer": "http://dl.acm.org/authorize?887034",
			"local": "Ko2005Citrus.pdf",
			"contribution": "A programming language and library with language-level support for constraints, restrictions and change notifications on primitive and aggregate data."
		},
		{
			"id": "devinterrupt",
			"kind": "refereed conference paper",
			"authors": ["James Fogarty", "@ajko", "Htet Htet Aung", "Elspeth Golden", "Karen P. Tang", "Scott E. Hudson"],
			"deadname": false,
			"year": 2005,
			"title": "Examining Task Engagement in Sensor-Based Statistical Models of Human Interruptibility",
			"source": "@chi",
			"pages": "331-340",
			"publisher": "ACM",
			"acceptrate": 25,
			"doi": "https://doi.org/10.1145/1054972.1055018",
			"authorizer": "http://dl.acm.org/authorize?N89310",
			"local": "Fogarty2005ProgrammersInterruptibility.pdf",
			"award": ["best paper"],
			"contribution": "Developers' interruptibility can be predicted with high certainty by observing and classifying features of programming activity."
		},
		{
			"id": "maintenancetasks",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "Htet Htet Aung", "Brad A. Myers"],
			"deadname": false,
			"year": 2005,
			"title": "Eliciting Design Requirements for Maintenance-Oriented IDEs: A Detailed Study of Corrective and Perfective Maintenance Tasks",
			"source": "@icse",
			"pages": "126-135",
			"acceptrate": 14,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1062455.1062492",
			"authorizer": "http://dl.acm.org/authorize?N89318",
			"local": "Ko2005MaintenanceTasks.pdf",
			"slides": "talks/ICSE2005MaintenanceTasks.pdf",
			"award": ["best paper"],
			"contribution": "When developers fix a big or enhance a feature, they find a set of task-relevant code fragments and navigate dependencies between these fragments, but spend up to 35% of their time simply operating navigational controls in IDEs."
		},
		{
			"id": "barriers",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "Brad A. Myers", "Htet Htet Aung"],
			"deadname": false,
			"year": 2004,
			"title": "Six Learning Barriers in End-User Programming Systems",
			"source": "@vlhcc",
			"pages": "199-206",
			"acceptrate": 32,
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/VLHCC.2004.47",
			"local": "Ko2004LearningBarriers.pdf",
			"slides": "talks/VLHCC2004LearningBarriers.pdf",
			"award": ["most influential paper"],
			"contribution": "When people write programs, they face at least six distinct problems: 1) identifying a solution, 2) finding abstractions to implement the solution, 3) coordinating these abstractions, 4) properly configuring these abstractions, 5) identifying possible causes of program failures, and 6) getting information about program execution."
		},
		{
			"id": "whyline1",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "Brad A. Myers"],
			"deadname": false,
			"year": 2004,
			"title": "Designing the Whyline: A Debugging Interface for Asking Questions About Program Failures",
			"source": "@chi",
			"pages": "151-158",
			"doi": "https://doi.org/10.1145/985692.985712",
			"publisher": "ACM",
			"acceptrate": 16,
			"authorizer": "http://dl.acm.org/authorize?N89312",
			"local": "Ko2004Whyline.pdf",
			"slides": "talks/CHI2004Whyline.pdf",
			"contribution": "Algorithms and user interfaces for extracting and answering why and why not questions about program behavior."
		},
		{
			"id": "errormodel",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "Brad A. Myers"],
			"deadname": false,
			"year": 2003,
			"title": "Development and Evaluation of a Model of Programming Errors",
			"source": "@vlhcc",
			"pages": "7-14",
			"publisher": "IEEE",
			"acceptrate": 33,
			"doi": "https://doi.org/10.1109/HCC.2003.1260196",
			"local": "Ko2003ModelOfErrors.pdf",
			"slides": "talks/VLHCC2003ProgrammingErrors.pdf",
			"award": ["best paper", "most influential paper"],
			"contribution": "Software defects are caused by cognitive breakdowns in specification, implementation and debugging activities and analysis of these breakdowns can be used to identify tools that prevent these breakdowns."
		},
		{
			"id": "statscomprehension",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "Bob Uttl"],
			"deadname": false,
			"year": 2003,
			"title": "Individual Differences in Program Comprehension Strategies in Unfamiliar Environments",
			"source": "IEEE International Workshop on Program Comprehension (IWPC)",
			"pages": "175-184",
			"publisher": "IEEE",
			"acceptrate": 40,
			"doi": "https://doi.org/10.1109/WPC.2003.1199201",
			"local": "Ko2003ComprehensionStrategies.pdf",
			"slides": "talks/IWPC2003ComprehensionStrategies.pdf",
			"contribution": "Programming expertise shapes strategy, but domain expertise is a better predictor of bug fixing success than strategy."
		},
		{
			"id": "visuallytesting",
			"kind": "refereed conference paper",
			"authors": ["Margaret M. Burnett", "Bing Ren", "@ajko", "Curtis Cook", "Gregg Rothermel"],
			"deadname": false,
			"year": 2001,
			"title": "Visually Testing Recursive Programs in Spreadsheet Languages",
			"source": "IEEE Symposia on Human-Centric Computing Languages and Environments",
			"pages": "288-295",
			"publisher": "IEEE",
			"acceptrate": 30,
			"doi": "https://doi.org/10.1109/HCC.2001.995276",
			"local": "Burnett2001TestingVisualRecursion.pdf",
			"contribution": "Two technique for testing recursive spreadsheets, neither of which can be understood by spreadsheet users."
		},
		{
			"id": "walkthrough1",
			"kind": "refereed conference paper",
			"authors": ["Thomas R.G. Green", "Margaret M. Burnett", "@ajko"],
			"deadname": false,
			"year": 2000,
			"title": "Using the Cognitive Walkthrough to Improve the Design of a Visual Programming Experiment",
			"source": "@vlhcc",
			"pages": "172-179",
			"publisher": "IEEE",
			"acceptrate": 32,
			"doi": "https://doi.org/10.1109/VL.2000.874381",
			"local": "Green2000UsingCWsForStudies.pdf",
			"contribution": "An adaptation of the cognitive walkthrough technique that helps identify uncontrolled source of variations in experiments on developers tools."
		},
		{
			"id": "whydebugclassifier1",
			"kind": "journal article",
			"authors": ["Todd Kulesza", "Simone Stumpf", "Weng-Keen Wong", "Margaret M. Burnett", "Stephen Perona", "@ajko", "Ian Oberst"],
			"deadname": false,
			"year": 2011,
			"title": "Why-Oriented End-User Debugging of Naive Bayes Text Classification",
			"source": "ACM Transactions on Interactive Intelligent Systems, 1(1), Article 2",
			"pages": "31 pages",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/2030365.2030367",
			"authorizer": "http://dl.acm.org/authorize?N89388",
			"local": "Kulesza2011EndUserDebugging.pdf",
			"volume": 1,
			"issue": 1,
			"article": 2,
			"contribution": "A technique that allows end-users to debug the underlying logic of machine learned classifiers."
		},
		{
			"id": "eusessurvey",
			"kind": "journal article",
			"authors": ["@ajko", "Robin Abraham", "Laura Beckwith", "Alan Blackwell", "Margaret M. Burnett", "Martin Erwig", "Chris Scaffidi", "Joseph Lawrance", "Henry Lieberman", "Brad A. Myers", "Mary Beth Rosson", "Gregg Rothermel", "Mary Shaw", "Susan Wiedenbeck"],
			"deadname": false,
			"year": 2011,
			"title": "The State of the Art in End-User Software Engineering",
			"source": "ACM Computing Surveys, 43(3), Article 21",
			"pages": "44 pages",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1922649.1922658",
			"authorizer": "http://dl.acm.org/authorize?N89384",
			"local": "Ko2011EndUserSoftwareEngineering.pdf",
			"volume": 43,
			"issue": 3,
			"article": 21,
			"contribution": "Defines end-user programming and end-user software engineering, then presents the extensive history of efforts to integrate software engineering activities into programming environments."
		},
		{
			"id": "whyline4",
			"kind": "journal article",
			"authors": ["@ajko", "Brad A. Myers"],
			"deadname": false,
			"year": 2010,
			"title": "Extracting and Answering Why and Why Not Questions about Java Program Output",
			"source": "ACM Transactions on Software Engineering and Methodology, 22(2)",
			"pages": "Article 4",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1824760.1824761",
			"authorizer": "http://dl.acm.org/authorize?N89397",
			"local": "Ko2010WhylineImplementation.pdf",
			"volume": 20,
			"issue": 2,
			"article": 4,
			"contribution": "An application of static and dynamic program slicing, precise call graphs, reachability analyses, and value provenance that enables developers to localize faults through why and why not questions."
		},
		{
			"id": "seekrelatecollect",
			"kind": "journal article",
			"authors": ["@ajko", "Brad A. Myers", "Michael J. Coblenz", "Htet Htet Aung"],
			"deadname": false,
			"year": 2006,
			"title": "An Exploratory Study of How Developers Seek, Relate, and Collect Relevant Information during Software Maintenance Tasks",
			"source": "@tse",
			"pages": "971-987",
			"doi": "https://doi.org/10.1109/TSE.2006.116",
			"publisher": "IEEE",
			"local": "Ko2006SeekRelateCollect.pdf",
			"volume": 33,
			"issue": 12,
			"contribution": "Developers work on software maintenance tasks by searching for relevant code, navigating dependencies, and constructing a mental model of the dependencies of a feature, suggesting the need for environments that explicitly support feature location through dependency navigation."
		},
		{
			"id": "errorframework",
			"kind": "journal article",
			"authors": ["@ajko", "Brad A. Myers"],
			"deadname": false,
			"year": 2005,
			"title": "A Framework and Methodology for Studying the Causes of Software Errors in Programming Systems",
			"source": "Journal of Visual Languages and Computing",
			"pages": "41-84",
			"publisher": "Elsevier",
			"doi": "http://dx.doi.org/10.1016/j.jvlc.2004.08.003",
			"local": "Ko2004SoftwareErrorsFramework.pdf",
			"volume": 16,
			"issue": 1,
			"contribution": "Software defects arise from latent errors in specifications, developer knowledge, tool support, and program implementation, ultimately producing runtime failures."
		},
		{
			"id": "walkthrough2",
			"kind": "journal article",
			"authors": ["@ajko", "Margaret M. Burnett", "Thomas R.G. Green", "Karen J. Rothermel", "Curtis R. Cook"],
			"deadname": false,
			"year": 2002,
			"title": "Improving the Design of Visual Programming Language Experiments Using Cognitive Walkthroughs",
			"source": "Journal of Visual Languages and Computing, 13(5)",
			"pages": "517-544",
			"publisher": "Elsevier",
			"doi": "http://dx.doi.org/10.1006/jvlc.2002.0245",
			"local": "Ko2002CWExperiments.pdf",
			"volume": 13,
			"contribution": "An adaption of the cognitive walkthrough for finding potential difficulties of novice users in an evaluation of a developer tool."
		},
		{
			"id": "feasibility",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "Yann Riche"],
			"deadname": false,
			"year": 2011,
			"title": "The Role of Conceptual Knowledge in API Usability",
			"source": "@vlhcc",
			"pages": "173-176",
			"acceptrate": 35,
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/VLHCC.2011.6070395",
			"local": "Ko2011FeasibilityAssessments.pdf",
			"contribution": "Test the feasibility of a feature in an API requires architectural and terminology knowledge of the API, which is often missing from documentation."
		},
		{
			"id": "postusability",
			"kind": "refereed conference paper",
			"authors": ["@pchilana", "@ajko", "Jacob O. Wobbrock", "Tovi Grossman", "George Fitzmaurice"],
			"deadname": false,
			"year": 2011,
			"title": "Post-Deployment Usability: A Survey of Current Practices",
			"source": "@chi",
			"pages": "2243-2246",
			"acceptrate": 25,
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1978942.1979270",
			"authorizer": "http://dl.acm.org/authorize?N89383",
			"local": "Chilana2011PostDeploymentUsability.pdf",
			"contribution": "Technical support and design are rarely linked in software companies despite significant opportunities for user research, usability feedback, and feature ideas."
		},
		{
			"id": "openbugs3",
			"kind": "refereed conference paper",
			"authors": ["@pchilana", "@ajko", "Jacob O. Wobbrock"],
			"deadname": false,
			"year": 2010,
			"title": "Understanding Expressions of Unwanted Behaviors in Open Bug Reporting",
			"source": "@vlhcc",
			"pages": "203-206",
			"acceptrate": 29,
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/VLHCC.2010.35",
			"local": "Chilana2010ExpectationViolation.pdf",
			"contribution": "The more a bug reporter expresses the issue in terms of a violation of community expectations of program behavior rather than individual expectations, the more likely it is to be fixed."
		},
		{
			"id": "futureofprogramming",
			"kind": "juried workshop paper",
			"authors": ["Brad A. Myers", "@ajko"],
			"deadname": true,
			"year": 2009,
			"title": "The Past, Present and Future of Programming in HCI",
			"source": "Human-Computer Interaction Consortium (HCIC)",
			"pages": null,
			"doi": null,
			"publisher": "HCI Consortium",
			"local": "Myers2009FutureOfProgrammingInHCI.pdf",
			"contribution": "Summarizes past work on programming interfaces and open challenges in supporting the broader set of programming activities."
		},
		{
			"id": "infowork",
			"kind": "refereed conference paper",
			"authors": ["Chris Scaffidi", "@ajko", "Brad A. Myers", "Mary Shaw"],
			"deadname": false,
			"year": 2006,
			"title": "Dimensions Characterizing Programming Feature Usage by Information Workers",
			"source": "@vlhcc",
			"pages": "59-62",
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/VLHCC.2006.21",
			"local": "Scaffidi2006InformationWorkers.pdf",
			"contribution": "End user programmers use of programming is typically limited to one of three language features: macros for automation, linked structure queries, or imperative features."
		},
		{
			"id": "icsedc",
			"kind": "abstract",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2006,
			"title": "Debugging by Asking Questions About Program Output",
			"source": "@icse",
			"pages": "989-992",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1134285.1134471",
			"authorizer": "http://dl.acm.org/authorize?N89302",
			"local": "Ko2006DoctoralConsortium.pdf",
			"contribution": "A doctoral consortium abstract, summarizing progress on the Whyline for Java."
		},
		{
			"id": "eupoverview",
			"kind": "abstract",
			"authors": ["Brad A. Myers", "@ajko", "Margaret M. Burnett"],
			"deadname": false,
			"year": 2006,
			"title": "Invited Research Overview: End-User Programming",
			"source": "@chi",
			"pages": "75-80",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1125451.1125472",
			"authorizer": "http://dl.acm.org/authorize?N89315",
			"local": "Myers2006ResearchOverview.pdf",
			"contribution": "A brief summary of the research area of end-user programming."
		},
		{
			"id": "slate",
			"kind": "refereed conference paper",
			"authors": ["Michael J. Coblenz", "@ajko", "Brad A. Myers"],
			"deadname": false,
			"year": 2005,
			"title": "Using Objects of Measurement to Detect Spreadsheet Errors",
			"source": "@vlhcc",
			"pages": "314-316",
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/VLHCC.2005.67",
			"local": "Coblenz2005Slate.pdf",
			"contribution": "A language feature for specifying the unit of analysis for values in a spreadsheet, allowing the language to identify type errors as unit of analysis mismatch."
		},
		{
			"id": "textediting",
			"kind": "refereed conference paper",
			"authors": ["@ajko", "Htet Htet Aung", "Brad A. Myers"],
			"deadname": false,
			"year": 2005,
			"title": "Design Requirements for More Flexible Structured Editors from a Study of Programmers' Text Editing",
			"source": "@chi",
			"pages": "1557-1560",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1056808.1056965",
			"authorizer": "http://dl.acm.org/authorize?N89319",
			"local": "Ko2005TextEditing.pdf",
			"slides": "talks/CHI2005TextEditing.pdf",
			"contribution": "When writing code in a text editor, developers regularly pass through invalid syntactic states, making strict structured editors infeasible."
		},
		{
			"id": "vldcabstract2",
			"kind": "abstract",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2004,
			"title": "Designing a Flexible and Supportive Direct-Manipulation Programming Environment",
			"source": "@vlhcc",
			"pages": "277-278",
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/VLHCC.2004.18",
			"local": "Ko2004FlexibleAndSupportive.pdf",
			"contribution": "Finds that structured editors need some room for passing between unstructured phases to flexibly support editing."
		},
		{
			"id": "vldcabstract",
			"kind": "abstract",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2003,
			"title": "Preserving Non-Programmers Motivation with Error-Prevention and Debugging Support Tools",
			"source": "IEEE Symposia Human-Centric Computing Languages and Environments",
			"pages": "271-272",
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/HCC.2003.1260245",
			"local": "Ko2003NonProgrammerMotivation.pdf",
			"contribution": "Summarizes Amy's early thoughts on her dissertation work."
		},
		{
			"id": "aliceinquiry",
			"kind": "abstract",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2003,
			"title": "A Contextual Inquiry of Expert Programmers in an Event-Based Programming Environment",
			"source": "@chi",
			"pages": "1036-1037",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/765891.766135",
			"authorizer": "http://dl.acm.org/authorize?N89313",
			"local": "Ko2003AliceContextualInquiry.pdf",
			"contribution": "Summarizes preliminary insights on debugging, showing that end-user programmers often start from faulty assumptions about runtime behavior."
		},
		{
			"id": "userfeedback",
			"kind": "refereed workshop paper",
			"authors": ["@mjslee", "@ajko"],
			"deadname": false,
			"year": 2012,
			"title": "Representations of User Feedback in an Agile, Collocated Software Team",
			"source": "International Workshop on Cooperative and Human Aspects of Software Engineering (CHASE)",
			"pages": "76-82",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1109/CHASE.2012.6223028",
			"local": "Lee2012UserFeedback.pdf",
			"contribution": "As issues reported by end users are transformed from emails, to support ticket, to discussion, to bug report, to feature specification, information from the original request is lost, but remains in the distributed memory of the team."
		},
		{
			"id": "userfeedback2",
			"kind": "refereed workshop paper",
			"authors": ["@ajko", "@mjslee", "@ferrari", "@stephenip", "@charlie"],
			"deadname": false,
			"year": 2011,
			"title": "A Case Study of Post-Deployment User Feedback Triage",
			"source": "International Workshop on Cooperative and Human Aspects of Software Engineering (CHASE)",
			"pages": "8-Jan",
			"publisher": "ACM",
			"doi": "https://doi.org/10.1145/1984642.1984644",
			"authorizer": "http://dl.acm.org/authorize?N89381",
			"local": "Ko2011UserFeedbackTriage.pdf",
			"contribution": "User feedback is often ignored in because software teams perceive most feedback as minority opinion that conflicts with prior architectural decisions."
		},
		{
			"id": "bioinformatics",
			"kind": "refereed workshop paper",
			"authors": ["@pchilana", "Carole Palmer", "@ajko"],
			"deadname": false,
			"year": 2009,
			"title": "Comparing Bioinformatics Software Development by Computer Scientists and Biologists: An Exploratory Study",
			"source": "Workshop on Software Engineering for Computational Science and Engineering",
			"pages": "",
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/SECSE.2009.5069165",
			"local": "Chilana2009BioinformaticsDevelopment.pdf",
			"contribution": "Colleagues play a significant role in information seeking activities by developers in bioinformatics because of the high demand for domain knowledge."
		},
		{
			"id": "jasper",
			"kind": "refereed workshop paper",
			"authors": ["Michael J. Coblenz", "@ajko", "Brad A. Myers"],
			"deadname": false,
			"year": 2006,
			"title": "JASPER: An Eclipse Plug-In to Facilitate Software Maintenance Tasks",
			"source": "Proceedings of the 2006 OOPSLA Workshop on Eclipse Technology eXchange",
			"pages": "65-69",
			"doi": "https://doi.org/10.1145/1188835.1188849",
			"authorizer": "http://dl.acm.org/authorize?N89301",
			"publisher": "ACM",
			"local": "Coblenz2006Jasper.pdf",
			"contribution": "A tool for organizing related code fragments during software maintenance tasks."
		},
		{
			"id": "reflectbeta",
			"kind": "juried conference paper",
			"authors": ["Travis Kriplean", "Michael M. Toomim", "Jonathan T. Morgan", "Alan Borning", "@ajko"],
			"deadname": false,
			"year": 2011,
			"title": "Supporting Active Listening and Grounding on the Web through Restatement",
			"source": "ACM Conference on Computer Supported Cooperative Work (CSCW), Horizons Workshop",
			"pages": null,
			"doi": null,
			"publisher": "ACM",
			"local": "Kriplean2011Reflect.pdf",
			"contribution": "Shares preliminary work on a vision for an internet that incentivizes listening."
		},
		{
			"id": "prelemonaid",
			"kind": "juried workshop paper",
			"authors": ["@pchilana", "@ajko", "Jacob O. Wobbrock"],
			"deadname": false,
			"year": 2011,
			"title": "Designing Crowdsourced, Context-Sensitive Help for Web Applications",
			"source": "Workshop on Crowdsourcing and Human Computation",
			"publisher": "ACM",
			"local": "Chilana2011CrowdsourcingHelp.pdf",
			"pages": null,
			"doi": null,
			"contribution": "Summarizes progress on the LemonAid help system."
		},
		{
			"id": "talkingaboutusers",
			"kind": "juried workshop paper",
			"authors": ["@ajko", "Parmit K. Chilana"],
			"deadname": false,
			"year": 2010,
			"title": "How Do Open Source Developers Talk about Users?",
			"source": "CHI 2010 Workshop on The Future of FLOSS in CHI Research and Practice",
			"pages": null,
			"doi": null,
			"publisher": "ACM",
			"local": "Ko2010HowDevelopersTalkAboutUsers.pdf",
			"contribution": "Shows that many open source developers speak in generalities about users and their needs, leaning on stereotypes and instinct instead of evidence."
		},
		{
			"id": "unfamiliar",
			"kind": "juried workshop paper",
			"authors": ["@pchilana", "@ajko", "Jacob O. Wobbrock"],
			"deadname": false,
			"year": 2009,
			"title": "Designing Software for Unfamiliar Domains",
			"source": "Workshop on Cooperative and Human Aspects of Software Engineering (CHASE)",
			"pages": "",
			"doi": "https://doi.org/10.1109/CHASE.2009.5071405",
			"publisher": "IEEE",
			"local": "Chilana2009UnfamiliarDomains.pdf",
			"contribution": "A brief abstract summarizing progress on how designers work with domain experts, finding that learning about a domain is the biggest challenge."
		},
		{
			"id": "whylinebeta",
			"kind": "juried workshop paper",
			"authors": ["@ajko", "Brad A. Myers"],
			"deadname": false,
			"year": 2008,
			"title": "Source-Level Debugging with the Whyline",
			"source": "Workshop on Cooperative and Human Aspects of Software Engineering",
			"pages": "69-72",
			"doi": "https://doi.org/10.1145/1370114.1370132",
			"authorizer": "http://dl.acm.org/authorize?N89306",
			"publisher": "ACM",
			"local": "Ko2008SourceLevelDebugging.pdf",
			"contribution": "Describes a pilot study of the Whyline for Java, showing that users were twice as fast at fixing a particular defect than without the Whyline."
		},
		{
			"id": "eupfactors",
			"kind": "abstract",
			"authors": ["@ajko", "Brad A. Myers"],
			"deadname": false,
			"year": 2005,
			"title": "Human Factors Affecting Dependability in End-User Programming",
			"source": "1st Workshop on End-User Software Engineering (WEUSE)",
			"pages": "4-Jan",
			"doi": "https://doi.org/10.1145/1083231.1083245",
			"authorizer": "http://dl.acm.org/authorize?N89317",
			"publisher": "ACM",
			"local": "Ko2005HumanFactorsInEUP.pdf",
			"contribution": "Enumerates many cognitive biases that shape the mistake that people make when engaging in end user programming."
		},
		{
			"id": "productivitytools",
			"kind": "abstract",
			"authors": ["@ajko", "Brad A. Myers", "Michael J. Coblenz", "Jeffrey Stylos"],
			"deadname": false,
			"year": 2006,
			"title": "End-User Programming Productivity Tools",
			"source": "2nd Workshop on End-User Software Engineering (WEUSE)",
			"pages": null,
			"doi": null,
			"publisher": "ACM",
			"local": "Ko2005ProductivityTools.pdf",
			"contribution": "Shares examples of research from the Natural Programming project."
		},
		{
			"id": "morenaturaleuse",
			"kind": "abstract",
			"authors": ["Brad A. Myers", "@ajko", "SunYoung Park", "Jeffrey Stylos", "@latoza", "Jack Beaton"],
			"deadname": false,
			"year": 2008,
			"title": "More Natural End-User Software Engineering",
			"source": "International Workshop on End-User Software Engineering",
			"pages": "30-34",
			"doi": "https://doi.org/10.1145/1370847.1370854",
			"publisher": "ACM",
			"authorizer": "http://dl.acm.org/authorize?N89307",
			"local": "Myers2008MoreNaturalEUSE.pdf",
			"contribution": "Shares recent progress on the Natural Programming project."
		},
		{
			"id": "morenaturalui",
			"kind": "juried workshop paper",
			"authors": ["Brad A. Myers", "@ajko"],
			"deadname": false,
			"year": 2005,
			"title": "More Natural and Open User Interface Tools",
			"source": "Workshop on the Future of User Interface Design Tools",
			"pages": "1-2",
			"doi": null,
			"authorizer": null,
			"publisher": "ACM",
			"local": "Myers2005InterfaceTools.pdf",
			"contribution": "A 2 page abstract on progress on Brad Myer's Natural Programming project."
		},
		{
			"id": "softwarescience",
			"kind": "juried workshop paper",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2006,
			"title": "The Role of Science in Supporting Software Development",
			"source": "Workshop on Supporting the Social Side of Large-Scale Software Development, at the 2006 ACM Conference on Computer Supported Cooperative Work",
			"pages": null,
			"doi": null,
			"publisher": "ACM",
			"local": "Ko2006RoleOfScience.pdf",
			"contribution": "Argues that progress on inventions requires scientific, theoretical explanations of their value."
		},
		{
			"id": "sequalitative",
			"kind": "book chapter",
			"authors": ["@ajko"],
			"deadname": true,
			"year": 2010,
			"title": "Software Engineering Through Qualitative Methods",
			"source": "Making Software: What Really Works, and Why We Believe It",
			"pages": "55-63",
			"local": "Ko2010QualitativeMethods.pdf",
			"doi": "http://www.amazon.com/Making-Software-Really-Works-Believe/dp/0596808321",
			"publisher": "O'Reilly Media, Inc.",
			"contribution": "Argues that qualitative methods are essential for understanding the dynamics of software engineering teamwork."
		},
		{
			"id": "ischoolmovement",
			"kind": "refereed magazine article",
			"authors": ["Jacob O. Wobbrock", "@ajko", "Julie A. Kientz"],
			"deadname": false,
			"year": 2009,
			"title": "New to the Movement: Reflections on the Future of Information Schools from Inspired Junior Faculty",
			"source": "Interactions",
			"pages": "69-71",
			"authorizer": "http://dl.acm.org/authorize?N89391",
			"doi": "http://doi.acm.org/10.1145/1572626.1572641",
			"local": "Wobbrock2009InformationSchools.pdf",
			"publisher": "ACM",
			"volume": 16,
			"issue": 5,
			"contribution": "Presents a unification of information science and human-computer interaction concerns."
		},
		{
			"id": "naturalprogramming",
			"kind": "refereed magazine article",
			"authors": ["Brad A. Myers", "John F. Pane", "@ajko"],
			"deadname": false,
			"year": 2004,
			"title": "Natural Programming Languages and Environments",
			"source": "@cacm",
			"pages": "47-52",
			"doi": "https://doi.org/10.1145/1015864.1015888",
			"authorizer": "http://dl.acm.org/authorize?N89311",
			"local": "Myers2004NaturalProgramming.pdf",
			"publisher": "ACM",
			"volume": 47,
			"issue": 9,
			"contribution": "Describes the Natural Programming project, which sought to make it possible for people to express their ideas in the same way they think about them."
		},
		{
			"id": "identifyingendusers",
			"kind": "technical report",
			"authors": ["@ajko", "Brad A. Myers", "Mary Shaw"],
			"deadname": true,
			"year": 2005,
			"title": "Identifying Types of End Users: Hints from an Informal Survey",
			"source": "Carnegie Mellon University ISRI Technical Report, no. CMU-HCII-05-101 and Human Computer Interaction Institute Technical Report, no CMU-ISRI-05-110",
			"pages": null,
			"doi": null,
			"publisher": "Carnegie Mellon University",
			"local": "Scaffidi2005IdentifyingEndUsers.pdf",
			"contribution": "Presents a clustering of end user programming activities, finding revealing variation in advanced feature usage."
		},
		{
			"id": "gidget2",
			"kind": "refereed conference paper",
			"authors": ["@mjslee", "@ajko"],
			"deadname": false,
			"year": 2012,
			"title": "Investigating the Role of Purposeful Goals on Novices' Engagement in a Programming Game",
			"source": "@vlhcc",
			"pages": "163-166",
			"acceptrate": 25,
			"publisher": "IEEE",
			"doi": "https://doi.org/10.1109/VLHCC.2012.6344507",
			"local": "Lee2012GidgetGoals.pdf",
			"contribution": "Representing data as animate, vertebrate objects instead of abstract, inanimate objects greatly increases engagement in online coding tutorials."
		},
		{
			"id": "honorsthesis",
			"kind": "technical report",
			"authors": ["@ajko"],
			"deadname": true,
			"year": 2002,
			"title": "Individual Differences in Programming, Testing, and Debugging Strategies in a Statistical End-User Programming Environment",
			"source": "Oregon State University, Honors Thesis",
			"pages": null,
			"doi": null,
			"publisher": "Oregon State University",
			"local": "Ko2002HonorsThesis.pdf",
			"contribution": "Programming expertise shapes strategy, but domain expertise is a better predictor of bug fixing success than strategy"
		},
		{
			"id": "dissertationproposal",
			"kind": "technical report",
			"authors": ["@ajko"],
			"deadname": true,
			"year": 2006,
			"title": "Asking and Answering Questions about the Causes of Software Behaivors",
			"source": "Carnegie Mellon University, Thesis Proposal",
			"pages": null,
			"doi": null,
			"publisher": "Carnegie Mellon University",
			"local": "Ko2006ThesisProposal.pdf",
			"contribution": "Proposes the Java Whyline."
		},
		{
			"id": "dissertation",
			"kind": "technical report",
			"authors": ["@ajko"],
			"deadname": false,
			"year": 2008,
			"title": "Asking and Answering Questions about the Causes of Software Behavior",
			"source": "Carnegie Mellon University Dissertation",
			"pages": null,
			"doi": "http://reports-archive.adm.cs.cmu.edu/anon/hcii/CMU-HCII-08-106.pdf",
			"publisher": "Carnegie Mellon University",
			"local": "Ko2008Dissertation.pdf",
			"contribution": "Describes the discoveries of several investigations into debugging and presents the concept, implementation, and evaluation of interrogtative debugging, and the several prototypes that embody it, including the Whyline for Alice, the Whyline for Java, and Crystal."
		}
	],
	"people": [
		{
			"id": "annes",
			"name": "Anne Beitlers",
			"active": true,
			"advised": false,
			"level": "faculty",
			"dept": "Education",
			"coadvisor": null,
			"bio": "Annes is faculty in the College of Education. We often collaborate on teacher education research, teaching, and administration.",
			"url": "https://www.linkedin.com/in/anne-beitlers-241a3939/",
			"startdate": 2016,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "emans",
			"name": "Eman Sharif",
			"active": true,
			"advised": true,
			"level": "phd",
			"dept": "Computer Science",
			"coadvisor": null,
			"bio": "Eman is a PhD student in Computer Science and Engineering. She is interested in broadening participation in computing through social justice oriented curricula.",
			"url": "https://scholar.google.com/citations?user=aPnsRikAAAAJ&hl=en",
			"startdate": 2022,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "audreylm",
			"name": "Audrey Le Meur",
			"active": true,
			"advised": true,
			"level": "undergrad",
			"dept": "Computer Science",
			"coadvisor": null,
			"bio": "Audrey is a Computer Science major at the University of Minnesota Morris. She is interested K-12 and undergraduate CS education as a tool for broadening participation in computing. Specifically, she studies pedagogy and curriculum to improve self-efficacy and belonging, and pathways to teaching K-12 CS.",
			"url": "https://www.linkedin.com/in/audrey-le-meur-733168168",
			"startdate": 2022,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "jaredl",
			"name": "Jared Lim",
			"active": true,
			"advised": true,
			"level": "undergrad",
			"dept": "Informatics",
			"coadvisor": null,
			"bio": "Jared is an Informatics undergraduate in his 3rd year at the Information School. He is interested in improving access to CS education and in establishing a critically conscious pedagogy.",
			"url": "https://www.linkedin.com/in/jared-ordona-lim/",
			"startdate": 2022,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "paulp",
			"name": "Paul Pham",
			"active": true,
			"advised": true,
			"level": "undergrad",
			"dept": "Education + Informatics",
			"coadvisor": null,
			"bio": "Paul is an Informatics and Education, Communities, and Organizations double major. He is interested in the intersection between critical, justice-oriented pedagogy and CS education to better understand how to make it more accessible and equitable to learn.",
			"url": "https://www.linkedin.com/in/pkdpham/",
			"startdate": 2022,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "lenaa",
			"name": "Lena Armstrong",
			"active": true,
			"advised": true,
			"level": "undergrad",
			"dept": "Computer Science + Cognitive Science",
			"coadvisor": null,
			"bio": "Lena is a computer science and cognitive science double major at the University of Pennsylvania. She is interested in improving CS education and mitigating algorithmic bias to create more inclusive and meaningful experiences with technology.",
			"url": "https://www.linkedin.com/in/lena-armstrong/",
			"startdate": 2022,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "leahperl",
			"name": "Leah Perlmutter",
			"active": true,
			"advised": false,
			"level": "phd",
			"dept": "Computer Science & Engineering",
			"coadvisor": null,
			"bio": "Leah is a PhD candidate in Computer Science and Engineering. She is interested in TA practices, CS identity construction, and CS culture.",
			"url": "https://homes.cs.washington.edu/~lrperlmu/",
			"startdate": 2022,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "kmack3",
			"name": "Kelly Mack",
			"active": true,
			"advised": false,
			"level": "phd",
			"dept": "Computer Science & Engineering",
			"coadvisor": null,
			"bio": "Kelly (she/her) is a PhD student in Computer Science and Engineering exploring how to make accessible technology to support people with disabilities, especially in the context of higher education.",
			"url": "https://kmack3.github.io/",
			"startdate": 2022,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "salac",
			"name": "Jean Salac",
			"active": true,
			"advised": true,
			"level": "postdoc",
			"dept": "The Information School",
			"coadvisor": null,
			"bio": "Jean is interested in justice-focused computing pedagogy for young learners.",
			"url": "https://jeansalac.github.io/",
			"startdate": 2022,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "megumi",
			"name": "Megumi Kivuva",
			"active": true,
			"advised": true,
			"level": "phd",
			"dept": "Bard College",
			"coadvisor": null,
			"bio": "Megumi is an undergraduate at Bard College in her final year studying Computer Science and Spanish Studies. She is interested in justice-centered CS education, specifically ways to make CS more inclusive for Black students",
			"url": "https://fmegumikivuva.wixsite.com/portfolio",
			"startdate": 2021,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "feec",
			"name": "Fee Christoph",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "University of Michigan",
			"coadvisor": null,
			"bio": "Fee is an undergraduate at the University of Michigan, finishing up her degrees in Computer Science and Interarts Performance. She is interested in interdisciplinary education, and the ways in which diverse fields of study can enhance and complement one another. Some of her main focuses include broadening participation in computing, empowering students to critique the current state of computing, and collaboratively imagining alternatives to computing.",
			"url": "https://feechristoph.com/",
			"startdate": 2021,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "wangash",
			"name": "Ashley Wang",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Design",
			"coadvisor": null,
			"bio": "Ashley was an undergraduate in Design, interested in designing tools that emphasize equity and accessibility. They helped create illustrations and design language for the Critically Conscious Computing book.",
			"url": "https://www.ashleyewang.com/",
			"startdate": 2021,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "jessiehl",
			"name": "Jessie Huynh",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Design",
			"coadvisor": null,
			"bio": "Jessie is an undergraduate in the Design division in the School of Art + Art History + Design, and contributes to the STEP CS book.",
			"url": "https://www.jessiehuynh.com",
			"startdate": 2021,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "clwang",
			"name": "Chenglong Wang",
			"active": false,
			"advised": false,
			"level": "phd",
			"dept": "Computer Science",
			"coadvisor": null,
			"bio": "Chenglong is a Ph.D. student in Computer Science & Engineering, interested in interactive program synthesis.",
			"url": "http://chenglongwang.org",
			"startdate": 2015,
			"enddate": 2021,
			"achievements": []
		},
		{
			"id": "brianc",
			"name": "Brian Chan",
			"active": false,
			"advised": true,
			"level": "masters",
			"dept": "Computer Science",
			"coadvisor": null,
			"bio": "Brian is a BS/MS student in Computer Science and Engineering interested in making algorithm visualization easier to incorporate into lectures.",
			"url": "https://faculty.washington.edu/ajko/lab/brianc",
			"startdate": 2020,
			"enddate": 2022,
			"achievements": []
		},
		{
			"id": "latoza",
			"name": "Thomas D. LaToza",
			"active": true,
			"advised": false,
			"level": "faculty",
			"dept": "Computer Science",
			"coadvisor": null,
			"bio": "Thomas is faculty at George Mason University's Department of Computer Science. We've collaborated heavily on methods, programming strategies, and tools.",
			"url": "https://cs.gmu.edu/~tlatoza/",
			"startdate": 2004,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "brettwo",
			"name": "Brett Wortzman",
			"active": true,
			"advised": false,
			"level": "faculty",
			"dept": "Computer Science",
			"coadvisor": null,
			"bio": "Brett is faculty in the Paul G. Allen School of Computer Science and Engineering where he often teaches CSE 142. We often collaborate on studies we run in his class.",
			"url": "https://homes.cs.washington.edu/~brettwo/",
			"startdate": 2018,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "minli",
			"name": "Min Li",
			"active": true,
			"advised": false,
			"level": "faculty",
			"dept": "College of Education",
			"coadvisor": null,
			"bio": "Min is faculty in the College of Education where she studies educational measurement and psychometrics. We collaborate on research related to assessment.",
			"url": "https://education.uw.edu/people/faculty/minli",
			"startdate": 2017,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "jcyip",
			"name": "Jason Yip",
			"active": true,
			"advised": false,
			"level": "faculty",
			"dept": "iSchool",
			"coadvisor": null,
			"bio": "Jason is my colleague in the iSchool where he studies collaborative learning in families. We collaborate on research related to CS and design learning.",
			"url": "http://bigyipper.com",
			"startdate": 2018,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "kdavis",
			"name": "Katie Davis",
			"active": true,
			"advised": false,
			"level": "faculty",
			"dept": "iSchool",
			"coadvisor": null,
			"bio": "Katie is my colleague in the iSchool where she studies new media in young people's personal, social, and academic lives.",
			"url": "http://katiedavisresearch.com",
			"startdate": 2017,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "jayne",
			"name": "Jayne Everson",
			"active": true,
			"advised": true,
			"level": "phd",
			"dept": "Computer Science",
			"coadvisor": null,
			"bio": "Jayne is a PhD student in Computer Science and Engineering. She studies the implicit assumptions in classrooms that prevent belonging in CS.",
			"url": "https://jayneeverson.com",
			"startdate": 2020,
			"enddate": null,
			"achievements": [
				"ACM SIGCSE Best Paper Award (2022)"
			]
		},
		{
			"id": "perdriau",
			"name": "Chris Perdriau",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Oregon State University",
			"coadvisor": null,
			"bio": "Chris is a CS student at Oregon State University studying HCI and psychology. He is interested in making technology more inclusive for underserved communities.",
			"url": "https://github.com/ChristopherPerdriau",
			"startdate": 2020,
			"enddate": 2021,
			"achievements": ["NSF Graduate Research Fellowship (2021)"]
		},
		{
			"id": "anael",
			"name": "Anael Kuperwajs Cohen",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Macalester College",
			"coadvisor": null,
			"bio": "Anael is a CS and applied mathematics and statistics double major with a cognitive science concentration at Macalester College. She is interested in breaking down barriers for women and other minorities within the field of CS by pursuing a career in CS education.",
			"url": "https://anaelkuperwajs.github.io/",
			"startdate": 2020,
			"enddate": 2021,
			"achievements": []
		},
		{
			"id": "minatari",
			"name": "Mina Tari",
			"active": false,
			"advised": false,
			"level": "phd",
			"dept": "The Information School",
			"coadvisor": null,
			"bio": "Mina was a PhD student in the Information School exploring women of color's experiences in introductory computing courses. She's a homegrown UW student, coming from the Informatics and Gender, Women, and Sexuality Studies programs. Mina works with Amy and the lab to apply a critical feminist lens to questions regarding equity in computing education.",
			"url": "http://minatari.com/",
			"startdate": 2018,
			"enddate": 2022,
			"achievements": [
				"Husky 100, recognizing top UW students (2017)"
			]
		},
		{
			"id": "jliang9",
			"name": "Jenny Liang",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Computer Science & The Information School",
			"coadvisor": null,
			"bio": "Jenny was an undergrad studying computer science and informatics. She worked with Amy to study how to use explicit programming strategies to improve collaboration and learning of developers.",
			"url": "http://jennyliang.me",
			"startdate": 2020,
			"enddate": 2021,
			"achievements": [
				"NSF Graduate Research Fellowship (2021)",
				"Husky 100, recognizing top UW students (2020)"
			]
		},
		{
			"id": "eboris",
			"name": "Emilia Borisova",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Pre-major",
			"coadvisor": null,
			"bio": "Emilia was an undergraduate student pursuing Informatics and helped with Mara's research on understanding the personal and interpersonal factors influencing computing career choices.",
			"url": "https://www.linkedin.com/in/emilia-borisova",
			"startdate": 2020,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "st3f",
			"name": "Stefania Druga",
			"active": true,
			"advised": true,
			"level": "phd",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Stefania Druga a Ph.D. candidate in the Information School. Studies computer-supported creative coding for youth and the design of AI literacy tools and resources for Families. She is co-advised by Benjamin Mako Hill.",
			"url": "http://www.drugastefania.com",
			"startdate": 2019,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "chandrashree",
			"name": "Chandrashree Karnani",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Chandrashree is studying data science in the Informatics program. She's interested in how data can be used to make informed decisions. She's helping with Yim's work on machine learning literacy.",
			"url": "http://www.linkedin.com/in/chandrashree-karnani-4824b0178",
			"startdate": 2019,
			"enddate": 2019,
			"achievements": []
		},
		{
			"id": "zcolah",
			"name": "Zoshua Colah",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Zoshua is an Informatics major specializing in UX Design and Data Science who spends his time helping freshman and sophomore students learn more about tech.",
			"url": "https://zcolah.myportfolio.com/",
			"startdate": 2019,
			"enddate": 2019,
			"achievements": []
		},
		{
			"id": "mararyan",
			"name": "Mara Kirdani-Ryan",
			"active": true,
			"advised": true,
			"level": "phd",
			"dept": "Computer Science",
			"coadvisor": null,
			"bio": "Mara is a PhD Student in Computer Science and Engineering. They study how to encourage computing students to pursue work that allows for greater self-expression and acts as a force for collective liberation.",
			"url": "https://marakr.com",
			"startdate": 2018,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "chriszh",
			"name": "Christina Zhang",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Computer Science and the Information School",
			"coadvisor": null,
			"bio": "Christina is an undergraduate majoring in Computer Science and Informatics. She's working on supporting research on intelligent programmin tutors.",
			"url": "https://www.linkedin.com/in/christina9/",
			"startdate": 2019,
			"enddate": 2019,
			"achievements": []
		},
		{
			"id": "mattjd",
			"name": "Matt Davidson",
			"active": false,
			"advised": false,
			"level": "phd",
			"dept": "College of Education",
			"coadvisor": null,
			"bio": "Matt was a doctoral student in the College of Education. He studied how to use process data to make assessments more equitable and informative.",
			"url": "http://mattjohndavidson.github.io/",
			"startdate": 2017,
			"enddate": 2022,
			"achievements": []
		},
		{
			"id": "meron",
			"name": "Meron Solomon",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "pre-major",
			"coadvisor": null,
			"bio": "Meron is an undergraduate who helped design and teach an innovative new computing course to Upward Bound students in 2019.",
			"url": "https://www.linkedin.com/in/meron-solomon-aa81a5169/",
			"startdate": 2019,
			"enddate": null,
			"achievements": []
		},
		{
			"id": "patold",
			"name": "Patrick Old",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Patrick was an undergraduate studying Informatics and Oceanography. He worked on a project to observe his growth as a teacher via participant observation.",
			"url": "https://www.linkedin.com/in/pat-old/",
			"startdate": 2018,
			"enddate": 2019,
			"achievements": []
		},
		{
			"id": "andrewhu",
			"name": "Anne Drew Hu",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Computer Science and Education",
			"coadvisor": null,
			"bio": "Andrew was a CS & Education double major interested in pedagogical techniques and student motivation in CS Ed. He's now a Ph.D. student at Michigan State University's College of Education.",
			"url": "http://students.washington.edu/andrewhu",
			"startdate": 2018,
			"enddate": 2020,
			"achievements": [
				"Husky 100, recognizing top UW students (2020)"
			]
		},
		{
			"id": "olesona",
			"name": "Alannah Oleson",
			"active": true,
			"advised": true,
			"level": "phd",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Alannah is a PhD candidate in the Information School. They study educational interventions to support critical and ethical software design processes, with a particular focus on countering design bias and marginalization.",
			"url": "https://alannaholeson.com/",
			"startdate": 2018,
			"enddate": null,
			"achievements": [
				"Husky 100, recognizing top UW students (2022)",
				"NSF Graduate Research Fellowship (2018)"
			]
		},
		{
			"id": "yreg",
			"name": "Yim Register",
			"active": true,
			"advised": false,
			"level": "phd",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Yim is a PhD student in the Information School, broadly interested in machine learning literacy. Before joining UW, they studied cognitive science at the University of Rochester.",
			"url": "http://students.washington.edu/yreg/",
			"startdate": 2018,
			"enddate": null,
			"achievements": ["NSF Graduate Research Fellowship (2019)"]
		},
		{
			"id": "janeq97",
			"name": "Jane Quichocho",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Jane helped the lab on various learning to code projects.",
			"url": "https://www.linkedin.com/in/jane-quichocho-08a9b714b/",
			"startdate": 2018,
			"enddate": 2019,
			"achievements": []
		},
		{
			"id": "wkwok16",
			"name": "William Kwok",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "William is an undergraduate in the Information School. He supported the lab's research on programming tutors by advancing design, development, instruction, and ideation relation to expressing agency when learning computing online.",
			"url": "http://williamk.info/?q=cc",
			"startdate": 2018,
			"enddate": 2019,
			"achievements": []
		},
		{
			"id": "akkarh",
			"name": "Harshitha Akkaraju",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Harshitha is an undergraduate in the Information School. She supported the lab's research on programming tutors by advancing design, development, instruction, and ideation relation to expressing agency when learning computing online.",
			"url": "https://harshitha-akkaraju.github.io/",
			"startdate": 2018,
			"enddate": 2019,
			"achievements": []
		},
		{
			"id": "laurav4",
			"name": "Laura Vonessen",
			"active": false,
			"advised": false,
			"level": "phd",
			"dept": "Computer Science",
			"coadvisor": "Katharina Reinecke",
			"bio": "For her qualifying exam, Laura led a project on faculty professional development for teaching accessibility, sponsored by AccessComputing, with help from Saba Kawas.",
			"url": "https://homes.cs.washington.edu/~laurav4/",
			"startdate": 2018,
			"enddate": 2019,
			"achievements": []
		},
		{
			"id": "banerjee",
			"name": "Rahul Banerjee",
			"active": false,
			"advised": false,
			"level": "phd",
			"dept": "Computer Science",
			"coadvisor": null,
			"bio": "Rahul worked in the Center for Game Science and has worked with the lab on programming by demonstration systems for creating interactive games.",
			"url": "https://homes.cs.washington.edu/~banerjee/",
			"startdate": 2015,
			"enddate": 2020,
			"achievements": []
		},
		{
			"id": "kshino",
			"name": "Kristen Shinohara",
			"active": false,
			"advised": false,
			"level": "phd",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Kristen was a PhD student advised by Jake Wobbrock and Wanda Pratt. She worked with Amy multiple times as a teaching assistant, and later on nationwide survey of higher education instruction on accessibility. She graduated in 2017 and joined the faculty at Rochester Institute of Technology.",
			"url": "http://www.kristenshinohara.com/",
			"startdate": 2008,
			"enddate": 2017,
			"achievements": []
		},
		{
			"id": "yanan15",
			"name": "Annie Yan",
			"active": false,
			"advised": false,
			"level": "phd",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Annie is a Ph.D. student in the Information School working with Carol Palmer. Annie worked with Amy on predicting dropout in a coding tutorial.",
			"url": "https://ischool.uw.edu/people/phd/yanan15",
			"startdate": 2016,
			"enddate": 2021,
			"achievements": []
		},
		{
			"id": "kimsk",
			"name": "Ada Kim",
			"active": false,
			"advised": false,
			"level": "phd",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Ada was a Ph.D. student in the Information School working with Katie Davis. Ada worked with Amy on a pedagogical analysis of coding tutorials as part of a research practicum.",
			"url": "https://adakim.info",
			"startdate": 2016,
			"enddate": 2018,
			"achievements": []
		},
		{
			"id": "skawas",
			"name": "Saba Kawas",
			"active": false,
			"advised": false,
			"level": "phd",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Saba was a PhD student in the Information School working with Katie Davis. Saba worked with Amy on a nationwide survey of the teaching of accessibility in higher education in the United States.",
			"url": "https://www.linkedin.com/in/saba-kawas-7b82b582",
			"startdate": 2016,
			"enddate": 2022,
			"achievements": []
		},
		{
			"id": "bxie",
			"name": "Benjamin Xie",
			"active": false,
			"advised": true,
			"level": "phd",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Benji was a PhD student in the Information School, and briefly a postdoc in the lab. He designs interactions with data that support their interpretations and uses for equity-oriented goals.",
			"url": "http://benjixie.com/",
			"startdate": 2016,
			"enddate": 2022,
			"dissertation": "Xie2021Dissertation.pdf",
			"achievements": [
				"Husky 100, recognizing top UW students (2021)",
				"NSF Graduate Research Fellowship (2017)"
			]
		},
		{
			"id": "glnelson",
			"name": "Greg Nelson",
			"active": false,
			"advised": true,
			"level": "phd",
			"dept": "Computer Science",
			"coadvisor": null,
			"bio": "Greg was a PhD student in Computer Science and Engineering. He studied HCI and computing education broadly, specifically on programming language learning and assessment.",
			"url": "http://www.greglnelson.info/",
			"startdate": 2016,
			"enddate": 2021,
			"dissertation": "Nelson2021Dissertation.pdf",
			"achievements": [
				"Assistant Professor, University of Maine, Department of Computer Science (2022-present)",
				"ACM ICER John Henry Best Paper Award (2018)",
				"NSF Graduate Research Fellowship (2015)"
			]
		},
		{
			"id": "kthayer",
			"name": "Kyle Thayer",
			"active": false,
			"advised": true,
			"level": "phd",
			"dept": "Computer Science",
			"coadvisor": "Katharina Reinecke",
			"bio": "Kyle was a PhD student in Computer Science and Engineering, co-advised by Katharina Reinecke. His dissertation investigated barriers to learning to code knowledge through bootcamps, developed a novel theory of API knowledge, and contributed a new way to mine the web for API usage patterns. He is now a Lecturer at the University of Washington Information school, where he continues investigating the intersection of diversity and computing education as a teacher and researcher.",
			"url": "http://www.kylethayer.com",
			"startdate": 2015,
			"enddate": 2020,
			"dissertation": "Thayer2020Dissertation.pdf",
			"achievements": [
				"Assistant Teaching Professor, The Information School, University of Washington (2019-present)"
			]
		},
		{
			"id": "amaswea",
			"name": "Amanda Swearngin",
			"active": false,
			"advised": true,
			"level": "phd",
			"dept": "Computer Science",
			"coadvisor": "James Fogarty",
			"bio": "Amanda was a Ph.D. student in Computer Science & Engineeering. Her dissertation contributed design tools that leverage program analysis, program synthesis, constraint solving, and machine learning. She is now a Research Engineer at Apple in Accessibility and Machine Learning.",
			"url": "https://amaswea.github.io/",
			"startdate": 2015,
			"enddate": 2019,
			"dissertation": "Swearngin2019Dissertation.pdf",
			"achievements": [
				"Apple Research (2020-present)",
				"NSF Graduate Research Fellowship (2016)"
			]
		},
		{
			"id": "dloksa",
			"name": "Dastyni Loksa",
			"active": false,
			"advised": true,
			"level": "phd",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Dastyni was a Ph.D. student in the the Information School. His dissertation focused on problem solving in programming, with a particular focus on self-regulated learning, spanning the fields of HCI and computing education. After graduating, he joined as tenure-track faculty at Towson University, teaching CS and preparing CS teachers.",
			"url": "http://students.washington.edu/dloksa/",
			"startdate": 2013,
			"enddate": 2020,
			"dissertation": "Loksa2020Dissertation.pdf",
			"achievements": [
				"Assistant Professor, Towson University, Computer Science (2020-present)"
			]
		},
		{
			"id": "zaxim",
			"name": "Zakariya Dehlawi",
			"active": false,
			"advised": true,
			"level": "phd",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Zak was a Ph.D. student in the the Information School, co-advised by Amy Ko and Barbara Endicott-Popovsky. He received his Master of Science in Security Informatics from Johns Hopkins in 2011 and bachelor degrees in Computer Engineering and Political Science from the University of Washington in 2009. His research focused on security practices in software teams and organizations. After leaving the Ph.D. program, he worked as Senior Security Engineer at Security Innovation, Inc.",
			"url": "https://www.linkedin.com/in/zakariya-dehlawi-7836a515",
			"startdate": 2014,
			"enddate": 2018,
			"achievements": []
		},
		{
			"id": "plli",
			"name": "Paul Luo Li",
			"active": false,
			"advised": true,
			"level": "phd",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Paul Luo Li was a Ph.D. student in the Information School at the University of Washington, advised by Amy. His dissertation work focused on software engineering expertise. After graduating, Paul continued his full-time role as a Senior Data Scientist at Microsoft.",
			"url": "https://www.linkedin.com/in/paul-li-7387903/",
			"startdate": 2009,
			"enddate": 2016,
			"dissertation": "Li2016Dissertation.pdf",
			"achievements": [
				"Senior Data Scientist, Microsoft (2016-present)"
			]
		},
		{
			"id": "mjslee",
			"name": "Michael J. Lee",
			"active": false,
			"advised": true,
			"level": "phd",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Michael Lee was a PhD student in the Information School at the University of Washington, advised by Amy Ko. His dissertation work focused on educational programming games, and game design factors that affect learning and engagement. After graduating, Mike began as an Assistant Professor at the New Jersey Institute of Technology in Information Systems.",
			"url": "http://pixel42.com/",
			"startdate": 2009,
			"enddate": 2015,
			"dissertation": "Lee2015Dissertation.pdf",
			"achievements": [
				"Associate Professor, New Jersey Institute of Technology, Information Systems (2015-present)",
				"ACM ICER John Henry Best Paper Award (2013)"
			]
		},
		{
			"id": "burg",
			"name": "BJ Burg",
			"active": false,
			"advised": true,
			"level": "phd",
			"dept": "Computer Science",
			"coadvisor": "Michael Ernst",
			"bio": "BJ was a Ph.D. student in the CSE Department at the University of Washington, co-advised with Mike Ernst. Her dissertation focused on web development productivity tools to support debugging, program comprehension, and reverse engineering tool. After graduating, BJ joined Apple's WebKit team.",
			"url": "http://brrian.org/",
			"startdate": 2011,
			"enddate": 2015,
			"dissertation": "Burg2015Dissertation.pdf",
			"achievements": [
				"Senior Software Engineer, Apple (2015-present)",
				"ACM UIST Best Paper Nominee (2015)"
			]
		},
		{
			"id": "kayur",
			"name": "Kayur Patel",
			"active": false,
			"advised": false,
			"level": "phd",
			"dept": "Computer Science",
			"coadvisor": "James Fogarty and James Landay",
			"bio": "Kayur Patel was a Ph.D. student in Computer Science at the University of Washington, co-advised by James Fogarty and James Landay. His dissertation focused on tools for supporting the development of machine learned classifiers.",
			"url": "http://www.kayur.org/",
			"startdate": 2007,
			"enddate": 2012,
			"dissertation": "Patel2012Dissertation.pdf",
			"achievements": [
				"Research Scientist, Apple (2018-present)",
				"Research Scientist, Google (2013-2018)"
			]
		},
		{
			"id": "pchilana",
			"name": "Parmit K. Chilana",
			"active": false,
			"advised": true,
			"level": "phd",
			"dept": "Information School",
			"coadvisor": "Jacob Wobbrock",
			"bio": "Parmit K. Chilana was a PhD student at the Information School co-advised by Jake Wobbrock. Her dissertation focused on crowdsourced help systems and organizational factors in gathering and understanding user feedback about software. After graduating, Parmit began as an Assistant Professor at the University of Waterloo.",
			"url": "http://hci.cs.sfu.ca/",
			"startdate": 2008,
			"enddate": 2013,
			"dissertation": "Chilana2013Dissertation.pdf",
			"achievements": [
				"Assistant Professor, Simon Fraser University, Computer Science (2016-present)",
				"Assistant Professor, University of Waterloo, Management Sciences, (2013-2016)",
				"Facebook PhD Fellowship (2010)",
				"Canadian Social Sciences and Humanities Research Council (SSHRC) Doctoral Award (2009)"
			]
		},
		{
			"id": "zilouchi",
			"name": "Roshanak Zilouichian",
			"active": false,
			"advised": true,
			"level": "postdoc",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Roshanak was a postdoc in the lab working on collaboration, consensus, information visualization, and creativity support tools. After completing her postdoc, she began as a Data Scientist at Microsoft.",
			"url": "https://www.linkedin.com/in/roshanak-zilouchian-757385a/",
			"startdate": 2015,
			"enddate": 2016,
			"achievements": []
		},
		{
			"id": "kwikh",
			"name": "Harrison Kwik",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Computer Science",
			"coadvisor": null,
			"bio": "Harrison was an undergraduate in computer science interested in equitable learning of computing. He's supported the lab's research on programming tutors while independently investigating the experiences of CS transfer students. After graduating, he began a Ph.D. at Northwestern University.",
			"url": "https://resprit.com/",
			"startdate": 2016,
			"enddate": 2018,
			"achievements": ["NSF Graduate Research Fellowship (2021)"]
		},
		{
			"id": "lkhwa",
			"name": "Leanne Hwa",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Leanne was an Informatics undergraduate interested in computing education, mentorship, and identity. She supported the lab's research on programming tutors while independently investigating the role of informal computing mentors amongst south Seattle teens.",
			"url": "https://github.com/lkhwa",
			"startdate": 2016,
			"enddate": 2018,
			"achievements": [
				"Husky 100, recognizing top UW students (2019)"
			]
		},
		{
			"id": "alextan",
			"name": "Alex Tan",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Alex is an Informatics undergraduate in computing education. He supported the lab's research on programming tutors.",
			"url": "https://www.linkedin.com/in/alexhtan/",
			"startdate": 2017,
			"enddate": 2018,
			"achievements": []
		},
		{
			"id": "besweth",
			"name": "Michael Beswetherick",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Michael helped engineer Gidget while an Informatics undergrad. He now helps engineer NY Times.",
			"url": "https://www.linkedin.com/in/michael-beswetherick-8b924944/",
			"startdate": 2012,
			"enddate": 2013,
			"achievements": []
		},
		{
			"id": "stackhouse",
			"name": "Andre Stackhouse",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Andre helped engineer Gidget while an Informatics undergrad, then at Code.org. He now helps engineer Bing at Microsoft.",
			"url": "https://www.linkedin.com/in/captainstack/",
			"startdate": 2012,
			"enddate": 2013,
			"achievements": []
		},
		{
			"id": "charters",
			"name": "Polina Charters",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Polina was a Psychology student who helped develop many of the instruments for our studies of Gidget, and also ran a study evaluating attitude shifts among adults who played Gidget. She went on to our Masters in HCI+Design.",
			"url": "https://www.linkedin.com/in/polinacharters/",
			"startdate": 2013,
			"enddate": 2014,
			"achievements": []
		},
		{
			"id": "fanny",
			"name": "Fanny Luor",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Fanny was a Design student who illustrated all of the art for Gidget. She went on to design and illustrate at Airbnb and Dropbox.",
			"url": "https://www.linkedin.com/in/fanny-luor-946aab2b/",
			"startdate": 2013,
			"enddate": 2014,
			"achievements": []
		},
		{
			"id": "nadav",
			"name": "Nadav Ashkenazi",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Nadav was a Computer Science and Informatics student who helped engineer Gidget. He went on to Google to help build Earth VR.",
			"url": "https://www.linkedin.com/in/nadavash/",
			"startdate": 2013,
			"enddate": 2014,
			"achievements": []
		},
		{
			"id": "staffan",
			"name": "Staffan Hellman",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Staffan was an Informatics student who helped engineer Gidget. He went on to work at Weebly.",
			"url": "https://www.linkedin.com/in/hellmans/",
			"startdate": 2014,
			"enddate": 2015,
			"achievements": []
		},
		{
			"id": "raden",
			"name": "Steven Raden",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Steven was an Informatics student who helped design and engineer Gidget. He went on to work at IBM as a UX designer.",
			"url": "https://www.linkedin.com/in/steven-raden-76031a62/",
			"startdate": 2014,
			"enddate": 2015,
			"achievements": []
		},
		{
			"id": "menten",
			"name": "William Menten-Weil",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Liam was an Informatics student who helped design and engineer our work on programming problem solving tutors, focusing specifically on an advanced tutorial authoring interface.",
			"url": "https://www.linkedin.com/in/william-menten-weil-944a15ab/",
			"startdate": 2016,
			"enddate": 2017,
			"achievements": []
		},
		{
			"id": "dakota",
			"name": "Dakota Miller",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Dakota was an Informatics student who helped design and engineer our work on programming problem solving tutors, focusing specifically on an advanced tutorial authoring interface.",
			"url": "https://www.linkedin.com/in/dakota-miller-01010954/",
			"startdate": 2016,
			"enddate": 2017,
			"achievements": []
		},
		{
			"id": "rowell",
			"name": "Alexandra Rowell",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Alex was an Informatics student who helped design and engineer our work on programming problem solving tutors, focusing specifically on how to present expert identity.",
			"url": "https://www.linkedin.com/in/alexandrarowell",
			"startdate": 2016,
			"enddate": 2017,
			"achievements": []
		},
		{
			"id": "xing",
			"name": "Xing Zhang",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Electrical Engineering",
			"coadvisor": null,
			"bio": "Xing was an Electrical Engineering student that helped evaluate Feedlack, our verification tool for finding missing feedback in interfaces.",
			"url": "https://www.linkedin.com/in/xingz2/",
			"startdate": 2011,
			"enddate": 2012,
			"achievements": []
		},
		{
			"id": "stephenip",
			"name": "Stephen Ip",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Stephen was an Informatics student who helped with our studies of bug triage.",
			"url": "https://www.linkedin.com/in/stevenip/",
			"startdate": 2011,
			"enddate": 2012,
			"achievements": []
		},
		{
			"id": "charlie",
			"name": "Charlie Tran",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Charlie was an Informatics student who helped with our studies of bug triage. He went on to become a program manager at Microsoft.",
			"url": "https://www.linkedin.com/in/ctran7/",
			"startdate": 2011,
			"enddate": 2012,
			"achievements": []
		},
		{
			"id": "ferrari",
			"name": "Valentina Ferrari",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Valentina was an Informatics student who helped with our studies of bug triage. She went on to become a UX designer at Adobe.",
			"url": "https://www.linkedin.com/in/valentinaferrariux/",
			"startdate": 2011,
			"enddate": 2012,
			"achievements": []
		},
		{
			"id": "neeraja",
			"name": "Neeraja Duriseti",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Neeraja was an Informatics and Applied Math student who helped analyze a corpus of tens of thousands of news articles about software failures.",
			"url": "https://www.linkedin.com/in/neeraja-duriseti-0734054b/",
			"startdate": 2010,
			"enddate": 2011,
			"achievements": []
		},
		{
			"id": "dosono",
			"name": "Bryan Dosono",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Bryan was an Informatics student who helped analyze a corpus of tens of thousands of news articles about software failures. He went on to do a Ph.D. in Information Science at Syracuse University.",
			"url": "http://www.bdosono.com/",
			"startdate": 2010,
			"enddate": 2011,
			"achievements": []
		},
		{
			"id": "padma",
			"name": "Padma Vaithyam",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Padma was an Informatics student who helped design and engineer Gidget. She went on to Microsoft as a software engineer.",
			"url": "https://www.linkedin.com/in/padma-vaithyam-137b6739/",
			"startdate": 2012,
			"enddate": 2013,
			"achievements": []
		},
		{
			"id": "jiang",
			"name": "Diana Jiang",
			"active": false,
			"advised": true,
			"level": "undergrad",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Diana was an Informatics student who helped design and engineer Gidget.",
			"url": "https://www.linkedin.com/in/jiangdiana/",
			"startdate": 2012,
			"enddate": 2013,
			"achievements": []
		},
		{
			"id": "crhxn",
			"name": "Casey Hickerson",
			"active": false,
			"advised": true,
			"level": "phd",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Casey was at the iSchool briefly and studied design practices.",
			"url": "https://www.linkedin.com/in/crhickerson",
			"startdate": 2009,
			"enddate": 2010,
			"achievements": []
		},
		{
			"id": "ajko",
			"name": "Amy J. Ko",
			"active": true,
			"advised": true,
			"level": "director",
			"dept": "Information School",
			"coadvisor": null,
			"bio": "Amy is the director of the lab.",
			"url": "https://faculty.washington.edu/ajko",
			"startdate": 2008,
			"enddate": null,
			"achievements": []
		}
	],
	"projects": [
		{
			"id": "csjustice",
			"active": true,
			"name": "Justice-focused computing education",
			"shortName": "CS justice",
			"description": "Computing is powerful, but that power is often used by dominant groups in ways that disregard, exclude, or even harm marginalized groups, amplifying and reinforcing sexist, racist, and ableist structures and ideas. My lab is exploring teaching methods, learning technologies, and teacher education paradigms that center these power dynamics in CS education.",
			"funding": ["@csjustice", "@csassess", "@fmitf", "@googlecser"],
			"people": ["@ajko", "@jayne", "@olesona", "@kshino", "@skawas", "@laurav4", "@meron", "@perdriau", "@megumi"],
			"papers": ["cognimates", "criticalcsed", "hcidifficulties", "inclusivepck", "hcipckchallenge", "teachaccess1", "teachaccess2", "accesscomputingteachaccess", "csdesignk12", "coconstructedcriticalcs", "houseofcomputing", "ccc", "coconstructedcriticalcs", "houseofcomputing"],
			"links": [],
			"startdate": 2019,
			"stopdate": null
		},
		{
			"id": "csdiversity",
			"active": true,
			"name": "Broadening participation in computing",
			"shortName": "Broadening participation",
			"description": "The world is full of structural barriers to developing interest in and learning computing. My lab investigates these barriers and ways to eradicate them, including issues around accessibility, mentorship, culture, identity, and resources, with the goal of increasing the diversity of people in computing disciplines.",
			"funding": ["@accesscomp", "@gidget", "@csassess", "@fairassess"],
			"people": ["@ajko", "@kthayer", "@banerjee", "@kwikh", "@kshino", "@laurav4", "@skawas", "@lkhwa", "@jcyip", "@kdavis"],
			"papers": ["codedif", "codebios", "bootcamps", "ellblockstudio", "transfer", "mentors1", "mentors2", "csdif", "studentamp", "ccc", "coconstructedcriticalcs", "houseofcomputing", "codedif"],
			"links": [
				{ "title": "See WeCode", "url": "https://youtu.be/t56g4DYIuUA" }
			],
			"startdate": 2009,
			"stopdate": null
		},
		{
			"id": "mlliteracy",
			"active": true,
			"name": "Understanding machine learning",
			"shortName": "ML literacy",
			"description": "While most programs are still written by developers, many are now built by gathering large amounts of data and automatically creating machine learned programs. My lab is investigating the immense comprehension challenges imposed by these probablistic forms of program behavior, as well as the literacy required to understand how they are shaping program behavior and society.",
			"funding": ["@csassess"],
			"people": ["@ajko", "@st3f", "@yreg", "@kayur", "@chandrashree"],
			"papers": ["cognimates", "mladvocacy", "gestalt", "whydebugclassifier2", "whydebugclassifier1", "airesources", "ccc", "aifamily", "coconstructedcriticalcs", "cognimates"],
			"links": [],
			"startdate": 2004,
			"stopdate": null
		},
		{
			"id": "pllearning",
			"active": true,
			"name": "Programming language learning",
			"shortName": "PL learning",
			"description": "Robust understanding of a programming language is a key foundation for being able to create software. My lab investigates what it means to know a programming language, invents and evaluates educational technologies that streamline learning of a programming language, and invents and evaluates assessments that help identify what learners do and do not know about a programming language.",
			"funding": ["@csassess", "@gidget", "@seif", "@msft", "@fairassess"],
			"people": ["@ajko", "@bxie", "@glnelson", "@kwikh", "@mjslee", "@yanan15", "@akkarh", "@wkwok16", "@brettwo", "@minli"],
			"papers": ["traceassess", "cs1theory", "gidget6", "pltutor1", "tutorialeval", "tracing", "statscomprehension", "irteval", "gidget1", "gidget2", "gidget3", "gidget4", "gidget5", "gidget6", "adultattitudes", "gidgetabandoment", "codeitzagency", "cerhandoutside", "csdif", "tilecode", "ccc"],
			"links": [
				{ "title": "Try Gidget", "url": "http://helpgidget.org" }
			],
			"startdate": 2010,
			"stopdate": null
		},
		{
			"id": "problemsolving",
			"active": true,
			"name": "Programming problem solving",
			"shortName": "Problem solving",
			"description": "A critical part of creating software is being able to understand programming problems, identify solutions to solve them, and systematically implement, verify, and debug programs, and avoid mistakes throughout. My lab investigates effective ways of learning these skills, and orchestrating them with self-regulation, process, and strategy.",
			"funding": ["@explore", "@csassess", "@strategies", "@gidget", "@seif", "@endusersynth"],
			"people": ["@ajko", "@dloksa", "@bxie", "@olesona", "@jliang9", "@latoza"],
			"papers": ["csproblemsolving1", "csproblemsolving2", "ideagardenjvlc", "tracing", "teachingstrategies", "errormodel", "errorframework", "metajournaling", "programmingstrategies", "pstutor1", "howtoo", "strategywriting", "tilecode", "strategywriting", "howtoo"],
			"links": [],
			"startdate": 2003,
			"stopdate": null
		},
		{
			"id": "apilearning",
			"active": true,
			"name": "API learning",
			"shortName": "API learning",
			"description": "Most modern software is built by reusing APIs, libraries, frameworks, and other code that others have carefully designed and tested. Unfortunately, such reuse often requires robust learning of API features. My lab investigates barriers to learning API's robustly and invents more effective ways of learning APIs.",
			"funding": ["@csassess"],
			"people": ["@ajko", "@kthayer"],
			"papers": ["barriers", "bootcamps", "feasibility", "bioinformatics", "robustapi"],
			"links": [],
			"startdate": 2004,
			"stopdate": null
		},
		{
			"id": "softexpertise",
			"active": false,
			"name": "Software engineering expertise",
			"shortName": "SE expertise",
			"description": "Engineering production software requires far more than knowing how to code. We've investigated the skills that are required for developers to be great engineers, including not only technical skills, but communication, collaboration, design, and business skills as well.",
			"funding": ["@explore", "@career"],
			"people": ["@ajko", "@plli", "@pchilana"],
			"papers": ["greatengineer2", "greatengineer1", "answerdash", "nonengineers", "informationneeds", "facebookcasestudy", "devwhiteboards", "complexdomains", "answerdash", "unfamiliar"],
			"links": [],
			"startdate": 2013,
			"stopdate": 2019
		},
		{
			"id": "uimining",
			"active": true,
			"name": "User interface mining",
			"shortName": "UI mining",
			"description": "User interfaces are structured documents, allowing us to analyze, reverse engineer, and transform them. My lab is applying techniques from program analysis and synthesis to automatically transform interfaces to be more accessible, usable, and useful.",
			"funding": ["@career", "@explore"],
			"people": ["@ajko", "@amaswea", "@burg", "@clwang"],
			"papers": ["citrus", "genie", "rewire", "frictionary", "scry", "feedlack", "scout", "falx"],
			"links": [
				{ "title": "See Falx", "url": "https://www.youtube.com/watch?v=rQE0zrgzV6Y" },
				{ "title": "See Scout", "url": "https://www.youtube.com/watch?v=y8pTC6FEsKc" },
				{ "title": "See Genie", "url": "https://www.youtube.com/watch?v=Ivtvyy7m-qc" },
				{ "title": "See Rewire", "url": "https://www.youtube.com/watch?v=9LA8feFOsOo" },
				{ "title": "Try Frictionary", "url": "http://faculty.uw.edu/ajko/demo/frictionary" },
				{ "title": "See Scry", "url": "https://www.youtube.com/watch?v=pUvtbn_Ldu0" }
			],
			"startdate": 2006,
			"stopdate": null
		},
		{
			"id": "methods",
			"active": true,
			"name": "Theory and methods",
			"shortName": "Methods",
			"description": "Studying programming is hard. We invent new methods for studying programming, and reflect on the science of studying programming, to help accelerate progress on improving it.",
			"funding": ["@csassess", "@career"],
			"people": ["@ajko", "@glnelson"],
			"papers": ["walkthrough1", "walkthrough2", "practicalguide", "certheory", "softwarescience", "plreally", "studydesign", "futureofprogramming", "studyingprogramming", "ischoolmovement", "sequalitative"],
			"links": [],
			"startdate": 2003,
			"stopdate": null
		},
		{
			"id": "reviews",
			"active": true,
			"name": "Literature reviews and surveys",
			"shortName": "Lit reviews",
			"description": "A critical part of scholarly progress is synthesizing and explaining what we've learned. Sometimes this results in robust discussions of prior work; other times we go further, publishing standalone papers and book chapters that help newcomers make sense of what we know.",
			"funding": ["@career", "@gidget", "@csassess", "@explore"],
			"people": ["@ajko"],
			"papers": ["cerhandbooktools", "eusessurvey", "cerhandoutside", "cerhandbooktools", "boostingproductivity", "fourlenses", "noproductivity", "monitoring", "uist", "cooperativesoft", "designmethods", "ccc", "infobook"],
			"links": [],
			"startdate": 2009,
			"stopdate": null
		},
		{
			"id": "understanding",
			"active": false,
			"name": "Understanding program behavior",
			"shortName": "Program understanding",
			"description": "Finding and fixing bugs is challenging. My lab studies debugging and invents tools that it make program understanding easier by combining human intelligence with machine intelligence.",
			"funding": ["@career", "@grfp", "@ndseg"],
			"people": ["@ajko", "@burg"],
			"papers": ["vldcabstract", "vldcabstract2", "aliceinquiry", "seekrelatecollect", "maintenancetasks", "devinterrupt", "jasper", "timelapse", "cleanroom", "barista", "textediting", "whyline1", "whyline2", "whyline3", "whyline4", "whylinebeta", "icsedc", "dissertation", "eusessurvey", "morenaturalui"],
			"links": [
				{ "title": "See Timelapse", "url": "https://www.youtube.com/watch?v=Uw0PP00xafs" },
				{ "title": "See Barista", "url": "https://www.youtube.com/watch?v=rR8glIsliSo" },
				{ "title": "See Whyline for Alice", "url": "https://www.youtube.com/watch?v=fP8swbzeDuY" },
				{ "title": "See Whyline for Java", "url": "https://www.youtube.com/watch?v=pbElN8nfe3k" },
				{ "title": "Whyline for Java source", "url": "https://github.com/amyjko/whyline" },
				{ "title": "Try Cleanroom", "url": "http://faculty.uw.edu/ajko/demo/cleanroom" },
				{ "title": "Feedlack source", "url": "https://github.com/amyjko/feedlack" }
			],
			"startdate": 2004,
			"stopdate": null
		},
		{
			"id": "triage",
			"active": false,
			"name": "Bug triage and user feedback",
			"shortName": "Bug triage",
			"description": "When software gets shared with the world, helping people use it, and understanding their struggles in using it, are critical to improving it. My lab has studied challenges in gathering user feedback, and invented several tools that both provide better technical support, while also gathering data to improve software.",
			"funding": ["@career", "@googlelemon", "@c4clemon", "@wfund"],
			"people": ["@ajko", "@pchilana", "@mjslee", "@dosono", "@padma"],
			"papers": ["beta", "postusability", "talkingaboutusers", "openbugs1", "openbugs2", "openbugs3", "userfeedback", "userfeedback2", "newsproblems", "linguisticbugs", "prelemonaid", "lemonaid1", "lemonaid2", "lemonaid3", "crystal"],
			"links": [
				{ "title": "See Crystal", "url": "https://www.youtube.com/watch?v=XqkLlKHQeKI" },
				{ "title": "See LemonAid", "url": "https://www.youtube.com/watch?v=IkKObjGv42o" },
				{ "title": "See AnswerDash", "url": "https://www.youtube.com/watch?v=Lay6EWYVhjY" }
			],
			"startdate": 2004,
			"stopdate": null
		},
		{
			"id": "euse",
			"active": false,
			"name": "End-user software engineering",
			"shortName": "End-user programming",
			"description": "Many people write code to support their own work (e.g., teachers write grading spreadsheets, scientists write scripts to process data, people automate their homes). In these end-user programming contexts, people face many of the same challenges that arise in professional software engineering, just without the same incentives to be systematic in testing, debugging, and maintenance. Our work has investigated these contexts and invented tools to support them.",
			"funding": ["@grfp", "@ndseg"],
			"people": ["@ajko"],
			"papers": ["eupoverview", "eusessurvey", "interactivebehaviors", "morenaturaleuse", "designerdescriptions", "identifyingendusers", "infowork", "ellblockstudio", "ideagardenjvlc", "gidget6", "whydebugclassifier1", "gestalt", "whydebugclassifier2", "productivitytools", "slate", "whyline1", "barriers", "aliceinquiry", "vldcabstract", "errormodel", "visuallytesting", "eupfactors"],
			"links": [],
			"startdate": 2004,
			"stopdate": null
		}
	],
	"posts": [
		{
			"url": "https://medium.com/bits-and-behavior/academia-needs-to-dream-bigger-485bdbcfd194",
			"title": "Academia needs to dream bigger",
			"date": "2022.10",
			"tags": ["academia"],
			"img": "dreambig",
			"alt": "A blurry collection of unfocused pink lights amidst a background of bluish grey."
		},
		{
			"url": "https://medium.com/bits-and-behavior/autumn-sabbatical-update-reconnecting-reinventing-recovering-dfe7a6b7b713",
			"title": "Autumn sabbatical update: Reconnecting, reinventing, recovering",
			"date": "2022.9",
			"tags": ["academia", "computing education", "diversity", "productivity"],
			"img": "sabbatical2-1",
			"alt": "Amy in sunglasses, a sun cat, against a backdrop of sand, waves, and blue skies."
		},
		{
			"url": "https://medium.com/bits-and-behavior/icer-2022-trip-report-together-again-as-bits-and-atoms-7ccf0440d1ec",
			"title": "ICER 2022 trip report: Together again, as bits and atoms",
			"date": "2022.8",
			"tags": ["trip report", "computing education"],
			"img": "icer22",
			"alt": "A mountain top view of the northwest end of Lake Lugano and the city of Lugano tightly nested around it, with many larger mountain ranges in the hazy distance."
		},
		{
			"url": "https://medium.com/bits-and-behavior/dagstuhl-trip-report-educational-programming-languages-ad9117ee615b",
			"title": "Dagstuhl trip report: Educational programming languages",
			"date": "2022.8",
			"tags": ["trip report", "K-12", "teaching", "computing education"],
			"img": "edpldagstuhl",
			"alt": "A group of researchers and two children standing on tiered steps facing the camera directly."
		},
		{
			"url": "https://medium.com/bits-and-behavior/csta-2022-trip-report-teaching-equity-and-a-bit-of-professional-healing-46e48982d9d7",
			"title": "CSTA 2022 trip report: teaching, equity, and a bit of professional healing",
			"date": "2022.7",
			"tags": ["trip report", "K-12", "teaching", "computing education"],
			"img": "csta22",
			"alt": "A stage with the CSTA logo and a rainbow city skyline."
		},
		{
			"url": "https://medium.com/bits-and-behavior/dagstuhl-trip-report-theories-of-programming-382543a3e540",
			"title": "Dagstuhl trip report: theories of programming",
			"date": "2022.7",
			"tags": ["trip report", "programming languages", "software engineering", "HCI", "science"],
			"img": "theorydagstuhl",
			"alt": "A group photo of the Dagstuhl castle of every attendee in the workshop on a staircase."
		},
		{
			"url": "https://medium.com/bits-and-behavior/sabbatical-2-e2ea332301c3",
			"title": "Sabbatical #2",
			"date": "2022.6",
			"tags": ["academia", "personal"],
			"img": "sabbatical2",
			"alt": "A blue sky with clouds"
		},
		{
			"url": "https://medium.com/bits-and-behavior/im-mostly-leaving-twitter-813dc41e21a4",
			"title": "I'm (mostly) leaving Twitter",
			"date": "2022.6",
			"tags": ["HCI", "information"],
			"img": "byetwitter",
			"alt": "An illustration of a blue Twitter logo with a white bird and several stick figures climbing a top it into a human pyramid, some falling off, and two people on the other side of the illustration having a conversation."
		},
		{
			"url": "https://medium.com/bits-and-behavior/on-the-internet-we-are-all-bystanders-967c5e4d9def",
			"title": "On the internet, we are all bystanders",
			"date": "2022.5",
			"tags": ["society", "gender", "HCI"],
			"img": "bystander",
			"alt": "A network of circles with stick figure faces inside, some in shock, some in tears, some angry. All of them watch at a distance one while stick figure towers over another with a weapon, and the other is on their knees waiting for the next blow."
		},
		{
			"url": "https://medium.com/bits-and-behavior/chi-2022-ecep-2022-equity-oh-my-40f3ffdf816",
			"title": "CHI 2022, ECEP 2022, equity oh my",
			"date": "2022.5",
			"tags": ["trip report", "HCI", "computing education"],
			"img": "chiecep22",
			"alt": "A view of a stage, a large projector screen, and hundreds of people staring at them."
		},
		{
			"url": "https://medium.com/bits-and-behavior/a-student-guide-to-computing-education-activism-e816fdbba501",
			"title": "A guide to student activism in computing education",
			"date": "2022.4",
			"tags": ["academia", "diversity", "computing education"],
			"img": "activism",
			"alt": "A group of Google protesters outside a Google building, 'My outrage can't fit this sign.'"
		},
		{
			"url": "https://amyjko.medium.com/im-a-happy-trans-kid-44a9c2557e67",
			"title": "I'm a happy trans kid!",
			"date": "2022.4",
			"tags": ["personal", "gender"],
			"img": "happy",
			"alt": "Amy smiling at the camera with a backdrop of eclectic objects in a restaurant."
		},
		{
			"url": "https://amyjko.medium.com/life-at-the-limit-ff2b3b466125",
			"title": "Life at the limit",
			"date": "2022.3",
			"tags": ["personal", "productivity"],
			"img": "limit",
			"alt": "A 1980's photo of a women with curly hair in a recliner nursing a baby with a bottle and a small child holding a stuffed panda on the floor."
		},
		{
			"url": "https://medium.com/bits-and-behavior/a-visit-to-ann-arbor-to-discuss-equity-justice-and-engineering-education-79b17ff6be5e",
			"title": "A visit to Ann Arbor to discuss equity, justice, and engineering education",
			"date": "2022.3",
			"tags": ["trip report", "computing education", "society"],
			"img": "stpp",
			"alt": "A brick entrance with glass doors and a sign etched Joan and Sanford Weill Hall."
		},
		{
			"url": "https://amyjko.medium.com/we-will-not-be-caged-b6cb24d73f44",
			"title": "We will not be caged",
			"date": "2022.3",
			"tags": ["gender", "diversity", "society"],
			"img": "cages",
			"alt": "A foggy illustration of a grey sky and a brow field of empty steel cages."
		},
		{
			"url": "https://medium.com/bits-and-behavior/sigcse-2022-trip-report-reunited-cf5fd2bce3e",
			"title": "SIGCSE 2022 Trip Report: Reunited",
			"date": "2022.3",
			"tags": ["trip report", "computing education"],
			"img": "sigcse2022",
			"alt": "The SIGCSE 2022 registration booth."
		},
		{
			"url": "https://medium.com/bits-and-behavior/on-pacing-and-programming-pedagogy-12c25f9b2c9d",
			"title": "On pacing and programming pedagogy",
			"date": "2022.2",
			"tags": ["programming languages", "computing education"],
			"img": "pacing",
			"alt": "A child assembling legos."
		},
		{
			"url": "https://medium.com/bits-and-behavior/dagstuhl-trip-report-people-programs-and-programming-errors-6d2430e6492f",
			"title": "Dagstuhl trip report: People, programs, and programming errors",
			"date": "2022.2",
			"tags": ["programming languages", "computing education"],
			"img": "errors",
			"alt": "A photograph of the in-person Dagstuhl attendees with a screenshot of the virtual attendees in Zoom."
		},
		{
			"url": "https://medium.com/bits-and-behavior/tinkering-towards-semi-seamless-hybrid-classroom-discussions-391b35ccca21",
			"title": "Tinkering towards semi-seamless hybrid classroom discussions",
			"date": "2022.1",
			"tags": ["teaching", "K-12", "academia"],
			"img": "hybridav",
			"alt": "A photograph of a projector screen showing an Ohyay virtual classroom and several video feeds."
		},
		{
			"url": "https://medium.com/bits-and-behavior/programming-evolves-privilege-reins-e1aa664c2719",
			"title": "Programming evolves, privilege reigns",
			"date": "2022.1",
			"tags": ["computing education", "programming languages"],
			"img": "commodore",
			"alt": "A screenshot of a Commodore 64 program printing hello world."
		},
		{
			"url": "https://medium.com/bits-and-behavior/finding-hope-in-the-year-2122-6b1ec137736a",
			"title": "Finding hope in the year 2122",
			"date": "2021.12",
			"tags": ["society", "automation", "policy"],
			"img": "2122",
			"alt": "A silhouette of road signs set against a pink, orange, and blue sunset."
		},
		{
			"url": "https://medium.com/bits-and-behavior/critically-conscious-computing-a-new-book-for-the-critical-secondary-cs-educator-c7ec9fa4a45e",
			"title": "Critically Conscious Computing — A new book for secondary CS educators",
			"date": "2021.12",
			"tags": ["computing education"],
			"img": "cccbook",
			"alt": "Several applications of computing, including VR, news, robotics, information, and automation."
		},
		{
			"url": "https://medium.com/bits-and-behavior/im-the-new-editor-in-chief-of-acm-transactions-on-computing-education-866ffa9a0044",
			"title": "I’m the new Editor-in-Chief of ACM Transactions on Computing Education",
			"date": "2021.11",
			"tags": ["computing education", "academia"],
			"img": "toce",
			"alt": "A succession of printed journal issues, fading grey to the left, with a light bulb, question mark, thought bubble, database, and exclamation point leaping out on the right."
		},
		{
			"url": "https://amyjko.medium.com/the-price-of-a-gender-transition-ab9d9f04c360",
			"title": "The price of a gender transition",
			"date": "2021.11",
			"tags": ["personal", "gender"],
			"img": "coins",
			"alt": "A glass jar full of coins and a small baby plant growing out of it."
		},
		{
			"url": "https://amyjko.medium.com/post-op-peace-42801a6e356",
			"title": "Post-op peace",
			"date": "2021.9",
			"tags": ["personal", "gender"],
			"img": "op",
			"alt": "Amy laying on white sheet, smiling at the camera."
		},
		{
			"url": "https://medium.com/bits-and-behavior/icer-2021-a-daily-dose-of-digital-discourse-46ee6c8099cd",
			"title": "ICER 2021: A daily dose of digital discourse",
			"date": "2021.8",
			"tags": ["trip report", "computing education"],
			"img": "icer2021",
			"alt": "A screenshot of the ICER 2021 Clowdr landing page."
		},
		{
			"url": "https://amyjko.medium.com/im-having-bottom-surgery-yay-a7c0d1ca72d",
			"title": "I’m Having Bottom Surgery, Yay!",
			"date": "2021.7",
			"tags": ["personal", "gender"],
			"img": "surgery",
			"alt": "An illustration of a flame, or perhaps a vulva."
		},
		{
			"url": "https://medium.com/bits-and-behavior/tips-for-squandering-tenure-64c011163063",
			"title": "Tips for squandering tenure",
			"date": "2021.6",
			"tags": ["academia"],
			"img": "squandering",
			"alt": "An illustration of a grey slanted tower with a stick figure working in front of a screen in the top. The background fades from blue on the top to red on the bottom; the grass at the foot of the tower fades from green to yellow to brown, to black."
		},
		{
			"url": "https://medium.com/bits-and-behavior/research-advising-and-vulnerability-2123a2e4dd0e",
			"title": "Research, advising, and vulnerability",
			"date": "2021.6",
			"tags": ["academia", "diversity", "gender", "productivity"],
			"img": "vulnerablelab",
			"alt": "A screenshot of an Ohyay room showing several circular video feeds of student faces, several doodles, and a chat full of banter."
		},
		{
			"url": "https://medium.com/bits-and-behavior/respect-2021-toward-justice-focused-computing-education-65848b637db2",
			"title": "RESPECT 2021: Toward justice-focused computing education",
			"date": "2021.5",
			"tags": ["trip report", "computing education"],
			"img": "respect2021",
			"alt": "A screenshot of the RESPECT Whova landing page, showing navigation and overview text."
		},
		{
			"url": "https://amyjko.medium.com/dark-thoughts-in-trans-solitude-abffc51da91e",
			"title": "Dark thoughts in trans solitude",
			"date": "2021.5",
			"tags": ["gender", "personal"],
			"img": "darkthoughts",
			"alt": "A dark grey human form on a light grey watercolor backdrop."
		},
		{
			"url": "https://medium.com/bits-and-behavior/chi-2021-trip-report-trying-to-establishing-connection-8fb0db536115",
			"title": "CHI 2021 trip report: \"trying to establishing connection…\"",
			"date": "2021.5",
			"tags": ["trip report"],
			"img": "chi2021",
			"alt": "\"Making Waves, Combining Strengths\", with several links to program, sessions, accessibility, sponsors, posters, and more."
		},
		{
			"url": "https://medium.com/bits-and-behavior/imagining-equitable-hybrid-learning-841f98c22705",
			"title": "Imagining equitable hybrid learning",
			"date": "2021.5",
			"tags": ["ed tech", "teaching"],
			"img": "hybridlearning",
			"alt": "An illustration depicting an instructor in the center of a circular room with glowing red displays, several circular tables with students with glowing red laptops, and several floating faces at the periphery, also glowing red."
		},
		{
			"url": "https://medium.com/bits-and-behavior/ohyay-and-the-pedagogical-power-of-emojis-9570e606d2a0",
			"title": "Ohyay and the pedagogical power of emojis",
			"date": "2021.5",
			"tags": ["ed tech", "teaching"],
			"img": "ohyay",
			"alt": "A screenshot of Ohyay showing Amy, a slide that says 'What did you think of that activity? (Use emoji reactions)', and several floating emoji reactions."
		},
		{
			"url": "https://medium.com/bits-and-behavior/my-hybrid-conference-wishlist-ea8e93add83d",
			"title": "My hybrid conference wishlist",
			"date": "2021.4",
			"tags": ["academia"],
			"img": "hybrid",
			"alt": "A four panel strip. Top left: stick figures and virtual attendees all on computers. Top right: Collaboration at a table. Bottom left: independent activities. Bottom right: Out in the world as seen through the window."
		},
		{
			"url": "https://amyjko.medium.com/learning-to-love-myself-in-photos-ef72370523a3",
			"title": "Learning to love myself in photos",
			"date": "2021.4",
			"tags": ["personal", "gender", "diversity"],
			"img": "photos",
			"alt": "9 month old Amy smiling and crawling on a wooden deck."
		},
		{
			"url": "https://medium.com/bits-and-behavior/i-wrote-a-book-about-information-8be0a3f07c4",
			"title": "I wrote a book about information!",
			"date": "2021.4",
			"tags": ["design", "diversity", "information", "society", "teaching"],
			"img": "info-book",
			"alt": "A collage of all 18 chapters of the book, showing 90,000 words and dozens of images, arranged in a row with varying height columns of text."
		},
		{
			"url": "https://amyjko.medium.com/the-gender-transition-that-wasnt-781d7e2fe8bd",
			"title": "The gender transition that wasn't",
			"date": "2021.3",
			"tags": ["personal", "gender"],
			"img": "transition",
			"alt": "A three stick figures joyfully dancing on three grey face coverings."
		},
		{
			"url": "https://medium.com/bits-and-behavior/2021-sigcse-technical-symposium-virtual-diffusion-9bd69858464a",
			"title": "2021 SIGCSE Technical Symposium: Virtual Diffusion",
			"date": "2021.3",
			"tags": ["trip report", "computing education"],
			"img": "sigcse21",
			"alt": "A screenshot of the Pathable platform landing page, showing the SIGSE 2021 logo."
		},
		{
			"url": "https://medium.com/bits-and-behavior/decoding-data-feminism-1840471ae2a8",
			"title": "Decoding Data Feminism",
			"date": "2021.3",
			"tags": ["book summary", "computing education", "society"],
			"img": "datafem",
			"alt": "A photograph of the Data Feminism jacket cover, showing the title \"Data Feminism\", authors Catherine D'Ignazio and Lauren F. Klein, and a backdrop of hundreds of data visualizations."
		},
		{
			"url": "https://medium.com/bits-and-behavior/zoom-is-a-vile-teaching-tool-cd19851a4cf9",
			"title": "Zoom is a vile teaching tool",
			"date": "2021.3",
			"tags": ["HCI", "teaching", "ed tech"],
			"img": "vilezoom",
			"alt": "A screen shot of Zoom, showing Amy's screen in the top left and several gray rectangles with student names like 'student1', 'student2', and 'student3'."
		},
		{
			"url": "https://amyjko.medium.com/encounters-with-male-fragility-as-a-man-as-a-woman-2020c05b349f",
			"title": "Encounters with male fragility, as a man, as a woman",
			"date": "2021.2",
			"tags": ["gender", "personal"],
			"img": "malefragility",
			"alt": "Women holding a sign that says 'I just had sexism'"
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-u-s-has-categorically-failed-its-k-12-teachers-and-thus-itself-dadb0b6fb8b6",
			"title": "The U.S. has categorically failed its K-12 teachers, and thus itself",
			"date": "2021.2",
			"tags": ["K-12", "society"],
			"img": "school",
			"alt": "A photograph of a crumbling, dirty school hallway of a school in New Jersey."
		},
		{
			"url": "https://medium.com/bits-and-behavior/my-robotic-pandemic-productivity-9ce692c8b935",
			"title": "My robotic pandemic productivity",
			"date": "2021.2",
			"tags": ["personal", "productivity"],
			"img": "robotic",
			"alt": "A blocky grey robot stands in front of a desk an inelegantly operates a mouse and keyboard."
		},
		{
			"url": "https://medium.com/bits-and-behavior/a-review-of-computer-science-in-k-12-an-a-to-z-handbook-on-teaching-programming-7f45b1b38ae0",
			"title": "A Review of Computer Science in K-12, An A to Z Handbook on Teaching Programming",
			"date": "2021.2",
			"tags": ["K-12", "book summary", "computing education"],
			"img": "teachk12prog",
			"alt": "A photograph of the book over showing a robotic butterfly and the book title, blurred in the background."
		},
		{
			"url": "https://amyjko.medium.com/work-play-rest-recover-1dd2d1630809",
			"title": "Work, play, rest, recover",
			"date": "2021.1",
			"tags": ["personal"],
			"img": "workplay",
			"alt": "A stick figure laying alone on a large grassy field under a blue sky, all in watercolor."
		},
		{
			"url": "https://medium.com/bits-and-behavior/anti-black-racism-harms-us-all-b57dab6a4386",
			"title": "Anti-Black racism hurts us all",
			"date": "2021.1",
			"tags": ["diversity", "gender", "society"],
			"img": "mlk",
			"alt": "A protester holds up their homemade sign on a box that says, 'Black Trans Lives Matter No Justice No Peace'"
		},
		{
			"url": "https://amyjko.medium.com/the-shortest-day-109896f2aba2",
			"title": "The shortest day",
			"date": "2020.12",
			"tags": ["personal"],
			"img": "shortestday",
			"alt": "Two wavy horizontal watercolor lines, one purple, one green, woven together."
		},
		{
			"url": "https://amyjko.medium.com/what-trans-liberation-means-to-me-e4571fbf5b6e",
			"title": "What trans liberation means to me",
			"date": "2020.12",
			"tags": ["personal", "gender", "society"],
			"img": "transliberation",
			"alt": "A feminine figure leaning over, head facing down, pushing against two walls grey walls of an enclosure."
		},
		{
			"url": "https://medium.com/bits-and-behavior/nobles-algorithms-of-oppression-indexes-search-engine-bias-4ef63aba9742",
			"title": "Noble’s “Algorithms of Oppression” indexes search engine bias",
			"date": "2020.11",
			"tags": ["book summary", "diversity", "information", "society"],
			"img": "algorithmsof",
			"alt": "A screenshot of Google search with the query 'is google oppressi' and the suggestion 'what is oppression google scholar'"
		},
		{
			"url": "https://medium.com/bits-and-behavior/block-based-what-differentiating-programming-languages-environments-and-editors-59ae451af0a9",
			"title": "Block-based what? Differentiating programming languages, environments, and editors",
			"date": "2020.11",
			"tags": ["K-12", "computing education", "ed tech", "programming languages", "teaching"],
			"img": "blockbased",
			"alt": "A Scratch program that, when clicked, redundantly updates a character's speech bubble to say 'editor!' 28 times."
		},
		{
			"url": "https://medium.com/bits-and-behavior/encouraging-more-critical-computing-a-virtual-trip-report-4ec38cf68635",
			"title": "Encouraging more critical computing: A (virtual) trip report",
			"date": "2020.11",
			"tags": ["academia", "computing education", "trip report"],
			"img": "critcomped",
			"alt": "A photograph of a display showing a slide titled \"Critical Computing Education\", with an iPad hovering above showing Zoom."
		},
		{
			"url": "https://amyjko.medium.com/my-trans-rights-wish-list-for-the-biden-administration-e3d41f63df0c",
			"title": "My trans rights wish list for the Biden administration",
			"date": "2020.11",
			"tags": ["personal", "gender", "policy", "society"],
			"img": "biden2020",
			"alt": "Joe Biden holding the hands of Sarah McBride."
		},
		{
			"url": "https://medium.com/bits-and-behavior/having-hard-classroom-conversations-67e57007b753",
			"title": "Having hard classroom conversations",
			"date": "2020.10",
			"tags": ["computing education", "society", "teaching"],
			"img": "hardconversations",
			"alt": "A photo of a Black Lives Matter protest showing a row of police on the left and a row of protested on the right"
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-half-life-of-computing-education-20b3f34f8cd0",
			"title": "The half life of computing education",
			"date": "2020.10",
			"tags": ["computing education", "society", "K-12"],
			"img": "terminator",
			"alt": "An illustration of a Terminator robot with a thought bubble that says IF OBJ.IS_HUMAN DESTROY OBJ"
		},
		{
			"url": "https://amyjko.medium.com/coming-out-of-hiding-db4a04088643",
			"title": "Coming out (of hiding)",
			"date": "2020.10",
			"tags": ["personal", "diversity", "gender"],
			"img": "closet",
			"alt": "A sad, scared child hiding in a dark room with yellow light shining under the door frame."
		},
		{
			"url": "https://amyjko.medium.com/my-parenting-past-and-present-bf09f9956153",
			"title": "My parenting past and present",
			"date": "2020.9",
			"tags": ["personal", "diversity", "gender"],
			"img": "parenting",
			"alt": "My daughter at age 2, asking to be held."
		},
		{
			"url": "https://medium.com/bits-and-behavior/processing-the-untold-histories-mcilwains-black-software-the-internet-racial-justice-from-c453ba1f7885",
			"title": "Processing the untold histories McIlwain’s “Black Software: The Internet & Racial Justice, from the AfroNet to Black Lives Matter”",
			"date": "2020.9",
			"tags": ["diversity", "book summary"],
			"img": "blacksoft",
			"alt": "The cover of Black Software, with a Black Lives Matter fist."
		},
		{
			"url": "https://amyjko.medium.com/what-a-year-to-transition-253831b4c643",
			"title": "What a year for a gender transition",
			"date": "2020.9",
			"tags": ["personal", "gender"],
			"img": "eggirl",
			"alt": "An illustration of an egg, cracking."
		},
		{
			"url": "https://medium.com/bits-and-behavior/studying-programming-language-learning-a-3-year-recap-bda469e5be04",
			"title": "Studying programming language learning: a 3-year recap",
			"date": "2020.9",
			"tags": ["computing education", "grant report", "programming languages"],
			"img": "cyberlearning",
			"alt": "A figure showing four types of programming language knowledge"
		},
		{
			"url": "https://medium.com/bits-and-behavior/i-led-an-anti-racist-cs-education-reading-group-this-summer-93e4adc78c24",
			"title": "I led an anti-racist CS education reading group this summer",
			"date": "2020.8",
			"tags": ["diversity", "policy", "society"],
			"img": "antiracistreading",
			"alt": "University of Washington Cherry Blossoms"
		},
		{
			"url": "https://medium.com/bits-and-behavior/a-generational-reflection-on-virginia-eubankss-automating-inequality-3740751d3ab9",
			"title": "A generational reflection on Virginia Eubanks’s \"Automating Inequality\"",
			"date": "2020.8",
			"tags": ["diversity", "book summary", "policy", "society"],
			"img": "eubanks",
			"alt": "A screenshot of the book cover of Automating Inequality."
		},
		{
			"url": "https://medium.com/bits-and-behavior/acm-icer-2020-trip-report-virtual-serendipity-6134c8ddb9d8",
			"title": "ACM ICER 2020 trip report: virtual serendipity",
			"date": "2020.8",
			"tags": ["academia", "diversity", "computing education", "trip report"],
			"img": "icer2020",
			"alt": "A screenshot of the ICER 2020 Discord, showing people introducing themselves."
		},
		{
			"url": "https://medium.com/bits-and-behavior/fifty-trans-hurdles-7bb4e859f860",
			"title": "Fifty trans hurdles",
			"date": "2020.8",
			"tags": ["personal", "diversity", "academia", "society"],
			"img": "hurdles",
			"alt": "A perspective drawing of a 2-lane track, with a racer on the right with 3 hurdles and a racer on the right with fifty."
		},
		{
			"url": "https://medium.com/bits-and-behavior/taking-refuge-from-the-internet-9c1c521a5a56",
			"title": "Taking refuge from the internet",
			"date": "2020.7",
			"tags": ["personal", "diversity", "information", "society"],
			"img": "speech",
			"alt": "A woman in a bubble, staring out at three angry men yelling at her."
		},
		{
			"url": "https://medium.com/bits-and-behavior/computer-science-taught-me-that-books-werent-important-it-was-wrong-63ead2fdad7a",
			"title": "Computer science taught me that books weren't important. It was wrong.",
			"date": "2020.7",
			"tags": ["academia", "personal", "computing education"],
			"img": "books",
			"alt": "Dark Matters, Artificial Unintelligence, Joy of Search, Automating Inequality, Algorithms of Oppression, Black Software"
		},
		{
			"url": "https://amyjko.medium.com/i-turned-40-heres-what-i-ve-learned-101f892cfa82",
			"title": "I turned 40; here’s what I’ve learned",
			"date": "2020.7",
			"tags": ["personal", "diversity"],
			"img": "turned40",
			"alt": "A photograph of Amy when she was an infant, laying on her belly"
		},
		{
			"url": "https://medium.com/bits-and-behavior/reflections-on-ruha-benjamins-race-after-technology-87f737a69e62",
			"title": "Reflections on Ruha Benjamin’s \"Race After Technology\"",
			"date": "2020.7",
			"tags": ["academia", "computing education", "diversity", "personal", "book summary"],
			"img": "raceaftertech",
			"alt": "An interpretation of Rodin’s “The Thinker”, a top Ruha Benjamin’s stunning book."
		},
		{
			"url": "https://medium.com/bits-and-behavior/why-our-academic-major-is-racist-d42725592af7",
			"title": "Our undergraduate program is racist",
			"date": "2020.6",
			"tags": ["academia", "computing education", "diversity"],
			"img": "racistinfo",
			"alt": "A top row with a series of dots being filtered by narrow funnels, and a bottom row with a series of dots not being filtered."
		},
		{
			"url": "https://amyjko.medium.com/what-it-feels-like-to-lose-civil-rights-cfe38c6b2468",
			"title": "What it feels like to lose civil rights",
			"date": "2020.6",
			"tags": ["personal", "diversity", "society", "gender"],
			"img": "civilrights",
			"alt": "Angry red white and blue squiggles."
		},
		{
			"url": "https://medium.com/bits-and-behavior/a-synopsis-of-costanza-chocks-design-justice-e00a476008fa",
			"title": "A synopsis of Costanza-Chock’s “Design Justice”: nothing for us without us",
			"date": "2020.6",
			"tags": ["computing education", "design", "diversity", "society", "book summary"],
			"img": "designjustice",
			"alt": "A group of stick figures collaborating in various ways, with a green stick figure in the middle (the designer) participating."
		},
		{
			"url": "https://medium.com/bits-and-behavior/my-strained-relationship-with-radicalism-and-pragmatism-495fba42ae5e",
			"title": "My strained relationship with radicalism and pragmatism",
			"date": "2020.6",
			"tags": ["computing education", "diversity", "personal", "society", "policy"],
			"img": "radicalism",
			"alt": "Three grey-blue blobs, one vertical, one circular in slight motion, and one oblong, racing to the future."
		},
		{
			"url": "https://medium.com/bits-and-behavior/ideas-from-the-code-and-cognition-lab-2020-edition-b5f2f752bb65",
			"title": "Ideas from the Code and Cognition Lab (2020 edition)",
			"date": "2020.6",
			"tags": ["computing education", "diversity", "programming languages"],
			"img": "2020ideas",
			"alt": "A red, green, and blue thread, squiggly and overlapping, terminating in a point on the right."
		},
		{
			"url": "https://amyjko.medium.com/my-slow-escape-from-gendered-self-loathing-482e54977c88",
			"title": "My slow escape from gendered self-loathing",
			"date": "2020.5",
			"tags": ["personal", "diversity", "gender"],
			"img": "loathing",
			"alt": "A beast on the left, squatting, and a woman on the right, sitting, with her arm around its back."
		},
		{
			"url": "https://medium.com/bits-and-behavior/on-the-inherent-injustice-of-admissions-ccada556409",
			"title": "On the inherent injustice of admissions",
			"date": "2020.5",
			"tags": ["academia", "diversity"],
			"img": "admissions",
			"alt": "A crowd of people rushing to a locked safe space to escape a firey cloud."
		},
		{
			"url": "https://medium.com/bits-and-behavior/paulo-freires-pedagogy-of-the-oppressed-a-manifesto-on-education-and-social-change-dbd63cd9fc17",
			"title": "Paulo Freire’s “Pedagogy of the Oppressed”: a manifesto on education and social change",
			"date": "2020.5",
			"tags": ["society", "diversity", "teaching", "book summary"],
			"img": "oppressed",
			"alt": "Multiple layers of faded colors surrounding a struggling person, with a smear through the top pointing a way out."
		},
		{
			"url": "https://medium.com/bits-and-behavior/on-the-future-of-academic-conferences-c0a54f027423",
			"title": "On the future of academic conferences",
			"date": "2020.5",
			"tags": ["academia"],
			"img": "conferences",
			"alt": "Four groups of stick figures chatting in a hallway, but with dashed grey borders around each person."
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-motive-is-the-message-e464933f505d",
			"title": "The motive is the message",
			"date": "2020.4",
			"tags": ["personal", "HCI"],
			"img": "communication",
			"alt": "A comic strip of a stick person pushing the world hello to another person, but it collapses, jumbled."
		},
		{
			"url": "https://medium.com/bits-and-behavior/my-new-appreciation-for-history-28db2577e488",
			"title": "My new appreciation for history",
			"date": "2020.4",
			"tags": ["personal", "diversity", "society"],
			"img": "history",
			"alt": "A photograph of Amy as an infant reaching for books on a bookshelf."
		},
		{
			"url": "https://medium.com/bits-and-behavior/an-autobiographical-synopsis-of-kentaro-toyamas-geek-heresy-3b3251c23cd1",
			"title": "An autobiographical synopsis of Kentaro Toyama's \"Geek Heresy\"",
			"date": "2020.4",
			"tags": ["computing education", "personal", "diversity", "society", "book summary"],
			"img": "heresy",
			"alt": "A blue sky with red fragments of digital devices being sucked into a grey cloud."
		},
		{
			"url": "https://amyjko.medium.com/work-ethic-and-hygge-in-a-time-of-social-distancing-b76c0413a8c2",
			"title": "Work ethic and hygge in a time of social distancing",
			"date": "2020.3",
			"tags": ["academia", "personal"],
			"img": "hygge",
			"alt": "A water color illustration of the Danish geographic silhouette wrestling the Chinese geographic silhouette."
		},
		{
			"url": "https://medium.com/bits-and-behavior/im-a-professor-d732ba26c522",
			"title": "I'm a Professor!",
			"date": "2020.3",
			"tags": ["academia", "personal"],
			"img": "professor",
			"alt": "40 small thumbnails of my research, teaching, and service statements and my CV."
		},
		{
			"url": "https://amyjko.medium.com/gender-transition-in-a-pandemic-a1f7f09d7077",
			"title": "Gender transition in a pandemic",
			"date": "2020.3",
			"tags": ["personal", "gender"],
			"img": "distance",
			"alt": "A grid of black rectangles with people inside each, doing different activities. In the center, a woman cross-legged."
		},
		{
			"url": "https://medium.com/bits-and-behavior/sigcse-2020-trip-report-viral-edition-6d5f3c9a31bf",
			"title": "SIGCSE 2020 Trip report: viral edition",
			"date": "2020.3",
			"tags": ["academia", "computing education", "trip report"],
			"img": "sigcse20",
			"alt": "A photograph of the Oregon Convention Center."
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-fragile-refuge-of-routines-in-a-time-of-uncertainty-4ecce13a99d0",
			"title": "The fragile refuge of routines in a time of uncertainty",
			"date": "2020.3",
			"tags": ["academia", "personal"],
			"img": "routine",
			"alt": "Many fuzzy coronaviruses falling upon a calendar laying flat, with me hanging on the edge of the calendar trying to escape."
		},
		{
			"url": "https://medium.com/bits-and-behavior/dealing-with-demands-for-change-8c10fd0ba77e",
			"title": "Dealing with demands for change",
			"date": "2020.3",
			"tags": ["academia", "personal"],
			"img": "demands",
			"alt": "Several punctuation marks flying towards a stick figure protected by a blue orb."
		},
		{
			"url": "https://medium.com/bits-and-behavior/dealing-with-academic-criticism-ebac8ee934a9",
			"title": "Dealing with academic critcism",
			"date": "2020.2",
			"tags": ["academia", "personal"],
			"img": "feedback",
			"alt": "A person being electrocuted by red tendrils, but those tendrils transform into straight lines after passing through."
		},
		{
			"url": "https://amyjko.medium.com/a-profile-in-choosing-beauty-5681a6bddec5",
			"title": "A profile in choosing beauty",
			"date": "2020.2",
			"tags": ["personal", "gender"],
			"img": "beauty",
			"alt": "A watercolor sketch of Amy's face."
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-false-dichotomy-of-teaching-and-research-739f85458bdf",
			"title": "The false dichotomy of teaching and research",
			"date": "2020.2",
			"tags": ["academia", "teaching", "science"],
			"img": "dichotomy",
			"alt": "An illustration of a stick figure's thought bubble, with a faded mirror of the bubble in grey."
		},
		{
			"url": "https://amyjko.medium.com/the-fuel-of-discovery-2c580ffd1d39",
			"title": "The fuel of discovery",
			"date": "2020.1",
			"tags": ["academia", "personal"],
			"img": "fuel",
			"alt": "An illustration of a fuel gauge on empty."
		},
		{
			"url": "https://medium.com/bits-and-behavior/what-is-the-role-of-academia-in-a-post-truth-world-26ce3bfc116d",
			"title": "What is the role of academia in a post-truth world?",
			"date": "2020.1",
			"tags": ["academia", "society"],
			"img": "posttruth",
			"alt": "A pencil sketch of a rectangle fading from dark solid black to a diffuse fog."
		},
		{
			"url": "https://medium.com/bits-and-behavior/writing-for-myself-and-others-a-reflection-on-academic-blogging-8abdfda6b50b",
			"title": "Writing for myself and others: a reflection on academic blogging",
			"date": "2020.1",
			"tags": ["academia"],
			"img": "blogging",
			"alt": "A locked diary with words 'KEEP OUT'"
		},
		{
			"url": "https://medium.com/bits-and-behavior/a-autobiographical-synopsis-of-morgan-ames-the-charisma-machine-68792c7987fa",
			"title": "A autobiographical synopsis of Morgan Ames’ “The Charisma Machine“",
			"date": "2020.1",
			"tags": ["computing education", "diversity", "K-12", "gender", "book summary"],
			"img": "charismamachine",
			"alt": "A photograph of adolescent Amy programming at her computer."
		},
		{
			"url": "https://medium.com/bits-and-behavior/making-time-to-transition-cf2096a037b3",
			"title": "Transition and overcommitment",
			"date": "2019.12",
			"tags": ["academia", "personal", "gender"],
			"img": "overcommitment2",
			"alt": "An erratic, sharply jumping plot of ups and downs, with watercolor backdrop."
		},
		{
			"url": "https://medium.com/bits-and-behavior/a-modern-vision-for-peer-review-d5f73f0fae07",
			"title": "A modern vision for peer review",
			"date": "2019.12",
			"tags": ["academia"],
			"img": "newpeerreview",
			"alt": "An illustration of hundreds of papers being sorted past a red peer review line."
		},
		{
			"url": "https://medium.com/bits-and-behavior/koli-calling-2019-trip-report-computing-education-research-at-the-limits-572da5218414",
			"title": "Koli Calling 2019 trip report: Computing education research at the limits",
			"date": "2019.11",
			"tags": ["computing education", "trip report"],
			"img": "kolitrip19",
			"alt": "A panoramic of the Koli National Park."
		},
		{
			"url": "https://medium.com/bits-and-behavior/21st-grand-challenges-for-computing-education-f5e937d57155",
			"title": "21st Century Grand Challenges for Computing Education",
			"date": "2019.11",
			"tags": ["computing education", "academia", "policy", "diversity", "science"],
			"img": "koli19",
			"alt": "A photograph of me presenting at Koli in front of my slide."
		},
		{
			"url": "http://medium.com/@amyjko/finding-my-voice-literally-13d2c06eb3f7",
			"title": "Finding my voice (literally)",
			"date": "2019.11",
			"tags": ["personal", "academia", "gender"],
			"img": "voice",
			"alt": "Blue tendrils interleaved with pink ones."
		},
		{
			"url": "https://medium.com/bits-and-behavior/what-counts-as-computer-science-in-k-12-education-a7173ff87801",
			"title": "What counts as computer science in K-12 education?",
			"date": "2019.11",
			"tags": ["computing education", "policy", "trip report"],
			"img": "csdefinitionworkshop",
			"alt": "A photograph of Janet Gordon in front of a slide of CS definitions."
		},
		{
			"url": "https://medium.com/bits-and-behavior/trip-report-bridging-cs-for-all-across-western-and-eastern-washington-60e9543535e6",
			"title": "Trip report: Bridging CS for All across western and eastern Washington",
			"date": "2019.11",
			"tags": ["academia", "computing education", "policy", "trip report"],
			"img": "spokane19",
			"alt": "A photograph of the Spokane sunset."
		},
		{
			"url": "https://medium.com/bits-and-behavior/plateau-2019-trip-report-building-community-around-human-aspects-of-programming-languages-c70e893930ce",
			"title": "PLATEAU 2019 trip report: building community around human aspects of programming languages",
			"date": "2019.10",
			"tags": ["academia", "design", "HCI", "programming languages", "trip report"],
			"img": "plateau19",
			"alt": "A photograph of attendees chatting after the workshop."
		},
		{
			"url": "https://medium.com/bits-and-behavior/100-hours-of-name-change-labor-c652c22a89b9",
			"title": "100 hours of name change labor",
			"date": "2019.10",
			"tags": ["academia", "personal", "information", "HCI", "gender"],
			"img": "namechange",
			"alt": "An illustration showing a stick figure yelling the name 'Amy' at a wall, but it's bouncing off into a pile. A set of corporate logos behind the wall."
		},
		{
			"url": "https://medium.com/bits-and-behavior/what-coming-out-as-trans-should-look-like-395f31beeddb",
			"title": "What coming out as trans should look like",
			"date": "2019.9",
			"tags": ["academia", "personal", "gender"],
			"img": "comingoutresponse",
			"alt": "A photograph of Amy smiling at her desk."
		},
		{
			"url": "https://medium.com/bits-and-behavior/im-trans-call-me-amy-8a72a3951964",
			"title": "I'm trans! Call me Amy.",
			"date": "2019.9",
			"tags": ["academia", "personal", "gender"],
			"img": "comingout",
			"alt": "A fuzzy trans pride flag, with a small face peeking out of it."
		},
		{
			"url": "https://medium.com/bits-and-behavior/csedcon-2019-trip-report-a-deep-dive-into-cs-education-policy-98efb62eb341",
			"title": "CSEdCon 2019 trip report: a deep dive into CS education policy",
			"date": "2019.9",
			"tags": ["K-12", "policy", "computing education", "trip report"],
			"img": "csedcon19",
			"alt": "A photograph of a ballroom of CSEdCon attendees."
		},
		{
			"url": "https://amyjko.medium.com/human-centered-definitions-of-computer-science-for-public-education-42238ff6a3c1",
			"title": "Human-centered definitions of computer science for public education",
			"date": "2019.9",
			"tags": ["K-12", "policy", "computing education"],
			"img": "csdefinition",
			"alt": "A pink cloud outlined by a sharp pink line."
		},
		{
			"url": "https://amyjko.medium.com/a-graduation-speech-on-responsible-design-a6fb329299a5",
			"title": "A graduation speech on responsible design",
			"date": "2019.8",
			"tags": ["software engineering", "society", "HCI", "industry", "diversity"],
			"img": "mhcid19",
			"alt": "A photograph of the standing 2019 graduating class of the MHCI+D program"
		},
		{
			"url": "https://medium.com/bits-and-behavior/changes-coming-to-the-acm-icer-conference-494c808766dd",
			"title": "Changes coming to the ACM ICER conference",
			"date": "2019.8",
			"tags": ["academia", "computing education"],
			"img": "icerchanges",
			"alt": "An illustration of a smiley face evolving from a shriveled raisin to a happy face."
		},
		{
			"url": "https://medium.com/bits-and-behavior/acm-icer-2019-trip-report-leveling-up-on-theory-statistics-and-significance-876b6d74148d",
			"title": "ACM ICER 2019 trip report: leveling up on theory, statistics, and significance",
			"date": "2019.8",
			"tags": ["computing education", "trip report"],
			"img": "icer19",
			"alt": "A photograph of the ICER 2019 audience, sitting around round tables."
		},
		{
			"url": "https://medium.com/bits-and-behavior/2019-acm-education-advisory-council-meeting-its-complicated-b715fba0c8c",
			"title": "2019 ACM Education Advisory Council meeting: it’s complicated!",
			"date": "2019.8",
			"tags": ["academia", "K-12", "teaching", "computing education", "trip report"],
			"img": "acmed19",
			"alt": "A photograph of the ACM Education Advisory Council meeting."
		},
		{
			"url": "https://medium.com/bits-and-behavior/teaching-power-consent-and-paternalism-b9c226152caa",
			"title": "Teaching, power, consent, and paternalism",
			"date": "2019.7",
			"tags": ["academia", "K-12", "teaching", "computing education"],
			"img": "teacherpower",
			"alt": "A stick figure teacher with green good intentions in their mind, perceived as oppressive red lines by a row of scared students."
		},
		{
			"url": "https://medium.com/bits-and-behavior/managing-overcommitment-in-academia-8d281a2df09",
			"title": "Managing overcommitment in academia",
			"date": "2019.7",
			"tags": ["academia", "productivity"],
			"img": "overcommitment",
			"alt": "A photograph of my summer task grid on my whiteboard."
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-transfer-problem-in-computing-education-501d4f129897",
			"title": "The transfer problem in computing education",
			"date": "2019.7",
			"tags": ["computing education", "academia"],
			"img": "transfer",
			"alt": "A sketch of arrows aiming for targets and missing their mark."
		},
		{
			"url": "https://amyjko.medium.com/dagstuhl-trip-report-learning-and-teaching-programming-language-semantics-b8d8d9007380",
			"title": "Dagstuhl trip report: learning and teaching programming language semantics",
			"date": "2019.7",
			"tags": ["computing education", "K-12", "trip report", "programming languages", "HCI"],
			"img": "notionaldagstuhl",
			"alt": "A black and white photograph of attendees at the Dagstuhl having conversations."
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-academic-freedom-behind-american-freedom-1b201daa45a4",
			"title": "The academic freedom behind American freedom",
			"date": "2019.7",
			"tags": ["academia", "society"],
			"img": "freedom",
			"alt": "An aibrushed sketch of a university building with an US flag embedded in its center."
		},
		{
			"url": "https://medium.com/bits-and-behavior/preparing-future-stem-teachers-for-our-computational-future-c4bc1b64013d",
			"title": "Preparing future STEM teachers for our computational future",
			"date": "2019.6",
			"tags": ["computing education", "K-12", "trip report"],
			"img": "stemc",
			"alt": "A panorama of the STEM pre-service teacher preparation workshop showing several faculty in conversation."
		},
		{
			"url": "https://medium.com/bits-and-behavior/some-amateur-thoughts-on-change-3abde7005d56",
			"title": "Some amateur thoughts on change",
			"date": "2019.6",
			"tags": ["academia", "society"],
			"img": "change",
			"alt": "Four yellow puzzle pieces with different changes, each altered in succession, with little stick figures inside playing."
		},
		{
			"url": "https://medium.com/bits-and-behavior/finding-time-to-read-in-academia-3df53d81caad",
			"title": "Finding time to read in academia",
			"date": "2019.6",
			"tags": ["academia", "productivity"],
			"img": "reading",
			"alt": "An illustration of Pac Man eating a series of research papers."
		},
		{
			"url": "https://amyjko.medium.com/on-the-academic-quantified-self-b9bd174ccc69",
			"title": "On the academic quantified self",
			"date": "2019.5",
			"tags": ["academia"],
			"img": "quantified",
			"alt": "A sad looking illustrated person's head with a rigid angular red frame outlining it's form"
		},
		{
			"url": "https://medium.com/bits-and-behavior/a-visit-to-eth-zurich-computer-science-f09c49fa7da",
			"title": "A visit to ETH Zurich Computer Science",
			"date": "2019.5",
			"tags": ["academia", "trip report", "computing education", "K-12", "ed tech"],
			"img": "eth",
			"alt": "A photograph from the ETH Zurich campus."
		},
		{
			"url": "https://medium.com/bits-and-behavior/chi-2019-trip-report-the-interlocking-threats-of-hci-and-learning-2f83b5118e1d",
			"title": "CHI 2019 trip report: the interlocking threats of HCI and learning",
			"date": "2019.5",
			"tags": ["academia", "trip report", "ed tech", "computing education", "automation", "accessibility"],
			"img": "chi19",
			"alt": "A photograph of the CHI 2019 plenary showing a few attendees waiting for the keynote to start."
		},
		{
			"url": "https://medium.com/bits-and-behavior/email-slack-and-messaging-oh-my-how-i-triage-written-requests-9431f76d4b5",
			"title": "Email, Slack, and messaging, oh my! How I triage email and other requests",
			"date": "2019.4",
			"tags": ["academia", "productivity", "tutorial"],
			"img": "email",
			"alt": "A stick figure person running from a swarm of letters."
		},
		{
			"url": "https://medium.com/bits-and-behavior/on-being-introverted-in-academia-9fb5ad9fb808",
			"title": "On being an introvert in academia",
			"date": "2019.4",
			"tags": ["academia", "diversity", "personal"],
			"img": "introversion",
			"alt": "A stick figure person on the left sitting and reading a book while a group of three others talk."
		},
		{
			"url": "https://medium.com/bits-and-behavior/reflections-on-my-academic-insecurity-b2fa0df25b6e",
			"title": "Reflections on my academic insecurity",
			"date": "2019.4",
			"tags": ["personal", "academia"],
			"img": "insecurity",
			"alt": "A series of seven stick figure faces, three on each side of the one in the middle looking angry, the middle looking anxious."
		},
		{
			"url": "https://medium.com/bits-and-behavior/teaching-accessibility-in-higher-education-computing-courses-b1ac22bcec6f",
			"title": "Teaching accessibility in higher education computing courses",
			"date": "2019.4",
			"tags": ["accessibility", "academia", "computing education"],
			"img": "teachaccess",
			"alt": "A photograph of attendees of the teaching accessibility workshop sitting around circular tables."
		},
		{
			"url": "https://medium.com/bits-and-behavior/tips-for-implement-cs-for-all-in-radically-decentralized-public-k-12-education-4e2ee1b396d7",
			"title": "Tips for implementing CS for All in radically decentralized public K-12 education",
			"date": "2019.4",
			"tags": ["K-12", "computing education", "diversity"],
			"img": "script",
			"alt": "A photograph of the organizers of the SCRIPT workshop providing context for the day."
		},
		{
			"url": "https://medium.com/bits-and-behavior/my-evolving-relationship-with-video-games-884559ba9180",
			"title": "My evolving relationship with video games",
			"date": "2019.3",
			"tags": ["personal"],
			"img": "games",
			"alt": "A screenshot of Super Mario Bros."
		},
		{
			"url": "https://medium.com/bits-and-behavior/sigcse-2019-trip-report-celebrating-50-years-b3460835a09a",
			"title": "SIGCSE 2019 Trip Report",
			"date": "2019.3",
			"tags": ["trip report", "computing education"],
			"img": "sigcse19",
			"alt": "A photograph of SIGCSE 2019's projected logo on the hotel wall."
		},
		{
			"url": "https://medium.com/bits-and-behavior/grading-is-ineffective-harmful-and-unjust-lets-stop-doing-it-52d2ef8ffc47",
			"title": "Grading is ineffective, harmful, and unjust: let's stop doing it",
			"date": "2019.3",
			"tags": ["teaching", "diversity", "academia"],
			"img": "grading",
			"alt": "Two rows, the top with the grades F through A, and the bottom with increasingly happy smiley faces."
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-problem-with-learnability-in-human-computer-interaction-91e598aed795",
			"title": "The problem with learnability in human-computer interaction",
			"date": "2019.2",
			"tags": ["HCI", "argument"],
			"img": "learnability",
			"alt": "An illustration of Microsoft's Clippy avatar, saying 'Hi, I'm Clippy, I'm your worst nightmare because I'm a helper that hurts!'"
		},
		{
			"url": "https://medium.com/bits-and-behavior/cs-education-policymaking-how-a-state-bill-becomes-a-state-law-839f62a6977c",
			"title": "CS education policy: how a (state) bill becomes a (state) law",
			"date": "2019.1",
			"tags": ["policy", "computing education"],
			"img": "csedpolicy",
			"alt": "A photograph of a hearing room in the Washington state senate."
		},
		{
			"url": "https://medium.com/bits-and-behavior/competing-tensions-in-doctoral-student-advising-9ebf6af0c626",
			"title": "Competing priorities in doctoral student advising",
			"date": "2019.1",
			"tags": ["academia", "advising", "tutorial"],
			"img": "advising",
			"alt": "An illustration of a stick figure person choosing from three paths heading into the horizon."
		},
		{
			"url": "https://medium.com/bits-and-behavior/a-critique-of-academic-criticism-fce30c73947d",
			"title": "A critique of academic criticism",
			"date": "2019.1",
			"tags": ["academia", "argument"],
			"img": "criticism",
			"alt": "Two stick figures, one tall, angry, and spewing red onto one short, cowering, and afraid, with bloodied paper on the ground."
		},
		{
			"url": "https://medium.com/bits-and-behavior/big-ideas-about-information-c09e4d9c60bd",
			"title": "Big ideas about information",
			"date": "2018.12",
			"tags": ["information", "computing education", "academia"],
			"img": "biginfo",
			"alt": "A purple silhouette of a mountain range below blue skies with black binary digits transformating into black strokes along the ridgeline."
		},
		{
			"url": "https://medium.com/bits-and-behavior/a-rant-about-journalism-on-learning-to-code-da9a11dd9866",
			"title": "A rant about journalism on learning to code",
			"date": "2018.12",
			"tags": ["computing education"],
			"img": "journalism",
			"alt": "An illustration of a website saying 'click me'"
		},
		{
			"url": "https://medium.com/bits-and-behavior/credit-versus-discovery-in-academia-f4312ac7f596",
			"title": "Credit versus discovery in academia",
			"date": "2018.11",
			"tags": ["academia", "argument"],
			"img": "academiccredit",
			"alt": "An illustration of four gold stars followed by a light bulb."
		},
		{
			"url": "https://medium.com/bits-and-behavior/my-peer-review-wishlist-e783c1eccd61",
			"title": "My peer review wishlist",
			"date": "2018.11",
			"tags": ["academia", "argument", "science"],
			"img": "review",
			"alt": "An illustration of a paper that has been marked up and annotated."
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-state-of-dub-human-computer-interaction-at-the-university-of-washington-17abaa954566",
			"title": "The State of DUB: Human-Computer Interaction at the University of Washington",
			"date": "2018.10",
			"tags": ["trip report", "academia", "HCI"],
			"img": "dub18",
			"alt": "A photograph of the opening talk of the DUB 2018 retreat."
		},
		{
			"url": "https://medium.com/bits-and-behavior/reflections-on-a-decade-of-professoring-2b996ee75af7",
			"title": "Reflections on a decade of professoring",
			"date": "2018.9",
			"tags": ["academia", "personal"],
			"img": "adecade",
			"alt": "A photograph of the Mary Gates Hall commons."
		},
		{
			"url": "https://medium.com/bits-and-behavior/2018-masters-in-hci-design-commencement-speech-design-values-and-organizations-fd122b612563",
			"title": "Masters in HCI+Design commencement speech: design, values, and organizations",
			"date": "2018.8",
			"tags": ["argument", "HCI"],
			"img": "mhcid18",
			"alt": "A profile photograph of the graduating class."
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-2018-acm-international-computing-education-research-conference-espoo-finland-ed548572cca5",
			"title": "The 2018 ACM International Computing Education Research Conference in Espoo, Finland",
			"date": "2018.8",
			"tags": ["trip report", "computing education"],
			"img": "icer18",
			"alt": "A photograph of colorful housing Helsinki, Finland."
		},
		{
			"url": "https://medium.com/bits-and-behavior/2018-acm-education-council-meeting-a8d371e62034",
			"title": "2018 ACM Education Council meeting",
			"date": "2018.8",
			"tags": ["trip report", "computing education", "policy"],
			"img": "acmed18",
			"alt": "A photograph of Jane Prey leading a discussion."
		},
		{
			"url": "https://medium.com/bits-and-behavior/its-easier-to-ignore-diversity-in-schools-22eb20d56667",
			"title": "It's easier to ignore diversity in schools",
			"date": "2018.7",
			"tags": ["teaching", "diversity"],
			"img": "ignorediversity",
			"alt": "A scan of Darwin's sketches of finches."
		},
		{
			"url": "https://medium.com/bits-and-behavior/four-years-of-studying-exploratory-programming-4656586b1d3b",
			"title": "Four years of studying exploratory programming",
			"date": "2018.7",
			"tags": ["academia", "software engineering", "computing education", "grant report"],
			"img": "exploration",
			"alt": "Stock photograph of someone exploring some mountains."
		},
		{
			"url": "https://medium.com/bits-and-behavior/icse-2018-trip-report-50-years-of-software-engineering-4944992c5b",
			"title": "ICSE 2018 trip report: 50 years of software engineering",
			"date": "2018.6",
			"tags": ["trip report", "software engineering"],
			"img": "icse18",
			"alt": "A photograph of the opening plenary of the ICSE 2018 conference."
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-invisible-work-of-equity-in-higher-education-computing-and-information-science-6d0d36d78cf8",
			"title": "The invisible work of equity in higher education computing and information science",
			"date": "2018.6",
			"tags": ["academia", "computing education", "diversity"],
			"img": "invisiblework",
			"alt": "A rendering of the new UW Computer Science building."
		},
		{
			"url": "https://medium.com/bits-and-behavior/ten-years-after-the-whyline-a965d3233909",
			"title": "Ten years after the Whyline",
			"date": "2018.6",
			"tags": ["software engineering", "automation", "personal"],
			"img": "whyline10",
			"alt": "A photograph of me giving my invited talk at ICSE."
		},
		{
			"url": "https://medium.com/bits-and-behavior/research-teaching-and-service-oh-my-577932dda684",
			"title": "Research, teaching, and service, oh my",
			"date": "2018.6",
			"tags": ["academia"],
			"img": "researchteachingservice",
			"alt": "A photograph of me sitting next to two Andy's at a conference."
		},
		{
			"url": "https://medium.com/bits-and-behavior/defending-truth-one-dissertation-at-a-time-83f87b6e8626",
			"title": "Defending truth, one dissertation at a time",
			"date": "2018.5",
			"tags": ["academia", "advising", "science"],
			"img": "dissertation",
			"alt": "A photograph of the crumbling Parthenon in Athens."
		},
		{
			"url": "https://medium.com/bits-and-behavior/grand-challenges-in-program-comprehension-and-software-repository-mining-my-keynote-on-7bf2cfc182a5",
			"title": "Grand challenges in program comprehension and software repository mining: my keynote on interdisciplinarity and research relevance",
			"date": "2018.5",
			"tags": ["academia", "software engineering"],
			"img": "msricpc18",
			"alt": "The first slide of my keynote showing the talk title."
		},
		{
			"url": "https://medium.com/bits-and-behavior/meow-wolf-the-art-of-immersive-ubiquitous-computing-c00d27323ace",
			"title": "Meow Wolf: the art of immersive, ubiquitous computing",
			"date": "2018.4",
			"tags": ["trip report", "HCI"],
			"img": "meowwolf",
			"alt": "A photograph of the inside of Meow Wolf, an indescribable interior space."
		},
		{
			"url": "https://medium.com/bits-and-behavior/on-academic-split-attention-d64e5533f32",
			"title": "On academic split attention",
			"date": "2018.4",
			"tags": ["academia", "argument"],
			"img": "juggling",
			"alt": "An ancient illustration of jugglers."
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-joys-and-perils-of-teaching-doctoral-students-bad67cb76701",
			"title": "The joys and perils of teaching doctoral students",
			"date": "2018.4",
			"tags": ["academia", "advising"],
			"img": "doctoralstudents",
			"alt": "Stock photo of silhouettes of graduates throwing their caps up."
		},
		{
			"url": "https://medium.com/bits-and-behavior/how-should-one-year-of-academic-work-be-judged-796ca1847680",
			"title": "How should one year of academic work be judged?",
			"date": "2018.3",
			"tags": ["academia"],
			"img": "oneyear",
			"alt": "A photograph of me reading from notes at a Dagstuhl workshop."
		},
		{
			"url": "https://medium.com/bits-and-behavior/iconference-2018-trip-report-information-science-computing-education-and-hci-converge-fe521ba42b99",
			"title": "iConference 2018 trip report: information science, computing education, and HCI converge",
			"date": "2018.3",
			"tags": ["information", "HCI", "trip report"],
			"img": "iconf18",
			"alt": "A photograph of a talk during the 2018 iConference showing attendees in stadium seating."
		},
		{
			"url": "https://medium.com/bits-and-behavior/a-parenting-guide-to-cs-learning-f87867ce1470",
			"title": "A parenting guide to CS learning",
			"date": "2018.3",
			"tags": ["K-12", "computing education"],
			"img": "parentingguide",
			"alt": "Stock photo of a silhouette of a mother holding a baby in the park."
		},
		{
			"url": "https://medium.com/bits-and-behavior/sigcse-2018-trip-report-cs-for-all-57f1cf94155f",
			"title": "SIGCSE 2018 trip report: CS for All!",
			"date": "2018.2",
			"tags": ["computing education", "trip report"],
			"img": "sigcse18",
			"alt": "A panoramic shot of the 2018 SIGCSE plenary showing hundreds of attendees in chairs."
		},
		{
			"url": "https://medium.com/bits-and-behavior/designing-learnable-teachable-and-productive-programming-languages-dagstuhl-trip-report-81e41bde84bd",
			"title": "Designing and evaluating programming languages: Dagstuhl trip report",
			"date": "2018.2",
			"tags": ["trip report", "programming languages", "HCI"],
			"img": "pldagstuhl",
			"alt": "A photograph of the attendees of the Dagstul workshop standing on the stairs."
		},
		{
			"url": "https://medium.com/bits-and-behavior/how-i-learned-to-code-2acb503c9f84",
			"title": "How I learned to code",
			"date": "2018.2",
			"tags": ["computing education", "personal", "K-12"],
			"img": "tilife",
			"alt": "A photograph of a TI graphing calculator."
		},
		{
			"url": "https://medium.com/bits-and-behavior/a-visit-to-stanford-hci-8a392a8b774c",
			"title": "A visit to Stanford HCI",
			"date": "2018.1",
			"tags": ["trip report", "HCI"],
			"img": "stanford18",
			"alt": "A selfie of me about to give an invited talk at Stanford's HCI seminar."
		},
		{
			"url": "https://medium.com/bits-and-behavior/why-people-shouldnt-learn-to-code-1aaa43c31c9d",
			"title": "Why people shouldn't learn to code",
			"date": "2018.1",
			"tags": ["computing education"],
			"img": "dontcode",
			"alt": "A clip art robot shooting laser eyes."
		},
		{
			"url": "https://medium.com/bits-and-behavior/on-toys-that-teach-coding-5a6de92e6ad3",
			"title": "On toys that teach coding",
			"date": "2017.12",
			"tags": ["computing education", "K-12"],
			"img": "toys",
			"alt": "The Fisher Price Think & Learn Code-a-Pillar."
		},
		{
			"url": "https://medium.com/bits-and-behavior/how-i-sometimes-achieve-academic-work-life-balance-4bbfc1769820",
			"title": "How I (sometimes) achieve academic work life balance",
			"date": "2017.11",
			"tags": ["productivity", "academia"],
			"img": "balance",
			"alt": "An image of me nuzzling my daughter Ellen as a baby."
		},
		{
			"url": "https://medium.com/bits-and-behavior/what-makes-software-valuable-36a1335ad1f7",
			"title": "What makes software valuable?",
			"date": "2017.11",
			"tags": ["software engineering", "argument", "society"],
			"img": "value",
			"alt": "ASCII art of an eye."
		},
		{
			"url": "https://medium.com/bits-and-behavior/on-the-short-half-life-of-research-prototypes-in-computing-c8311c1be3b2",
			"title": "On the short half-life of research prototypes in computing",
			"date": "2017.11",
			"tags": ["academia", "science"],
			"img": "halflife",
			"alt": "A greyscale scattering of solid rectangles."
		},
		{
			"url": "https://medium.com/bits-and-behavior/a-visit-to-northwestern-university-cs-for-all-cs-x-and-interdisciplinary-learning-2d4b56fe709b",
			"title": "A visit to Northwestern University: CS for All, CS+X, and Interdisciplinary Learning",
			"date": "2017.10",
			"tags": ["trip report", "HCI", "computing education"],
			"img": "northwestern17",
			"alt": "A selfie of me with my Northwestern hosts."
		},
		{
			"url": "https://medium.com/bits-and-behavior/whats-wrong-with-blocks-languages-according-to-ben-shapiro-7a74dd77b43b",
			"title": "What's wrong with blocks languages according to Ben Shapiro",
			"date": "2017.9",
			"tags": ["K-12", "computing education"],
			"img": "blocks",
			"alt": "A screenshot of the first slide of Ben's keynote."
		},
		{
			"url": "https://medium.com/bits-and-behavior/i-wrote-a-short-book-about-human-and-social-aspects-of-software-engineering-96e662c9b5fa",
			"title": "I wrote a short book about human and social aspects of software engineering",
			"date": "2017.9",
			"tags": ["software engineering"],
			"img": "sebook",
			"alt": "Stock photo of code."
		},
		{
			"url": "https://medium.com/bits-and-behavior/vl-hcc-2017-trip-report-programming-and-play-e36681f9fd74",
			"title": "VL/HCC 2017 trip report: programming and play",
			"date": "2017.9",
			"tags": ["trip report", "software engineering", "HCI"],
			"img": "vl17",
			"alt": "A photograph of Alan Blackwell's keynote slide, showing his head exploding."
		},
		{
			"url": "https://medium.com/bits-and-behavior/on-the-public-in-public-intellectual-34285333bed",
			"title": "On the public in public intellectual",
			"date": "2017.9",
			"tags": ["academia"],
			"img": "public",
			"alt": "Jonathan Lazar (left), an exemplary public intellectual in HCI, receiving the SIGCHI Social Impact Award at CHI 2016."
		},
		{
			"url": "https://medium.com/bits-and-behavior/most-ph-d-s-arent-professors-13a741ef6868",
			"title": "Most PhDs aren't professors",
			"date": "2017.9",
			"tags": ["academia", "advising"],
			"img": "phdjobs",
			"alt": "Me and my advisor, Brad Myers, graduating with my Ph.D."
		},
		{
			"url": "https://medium.com/bits-and-behavior/how-upward-bound-guides-bootstrapping-teens-into-higher-education-a87cb34367ac",
			"title": "How Upward Bound guides bootstrapping U.S. teens into higher education",
			"date": "2017.8",
			"tags": ["K-12", "diversity", "computing education", "academia"],
			"img": "ub17",
			"alt": "My selfie with the Upward Bound students on my last day of class in summer 2017"
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-bleeding-edge-of-computing-education-research-icer-2017-trip-report-dc403ba2760a",
			"title": "The bleeding edge of computing education research: ICER 2017 trip report",
			"date": "2017.8",
			"tags": ["trip report", "computing education"],
			"img": "icer17",
			"alt": "A photograph of the ICER 2017 attendees viewing a talk."
		},
		{
			"url": "https://medium.com/bits-and-behavior/we-need-to-learn-how-to-teach-machine-learning-acc78bac3ff8",
			"title": "We need to learn how to teach machine learning",
			"date": "2017.8",
			"tags": ["trip report", "computing education"],
			"img": "mled",
			"alt": "Jackson Pollock’s 'Untitled', a sea of brown splattered paint."
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-role-of-informal-computing-mentors-in-teens-interest-in-computing-9ae642f42ba8",
			"title": "Informal mentors and teen interest in learning computing",
			"date": "2017.8",
			"tags": ["K-12", "computing education"],
			"img": "informal",
			"alt": "A figure from our research paper showing data about who participated in the study."
		},
		{
			"url": "https://medium.com/bits-and-behavior/what-is-it-like-to-chair-an-undergraduate-program-in-an-information-school-5ccfbd8c3537",
			"title": "What is it like to chair an undergraduate program in an Information School?",
			"date": "2017.7",
			"tags": ["information", "academia"],
			"img": "infochair",
			"alt": "Me and Scott Barker laughing during a photoshoot."
		},
		{
			"url": "https://medium.com/bits-and-behavior/mindstorms-what-did-papert-argue-and-what-does-it-mean-for-learning-and-education-c8324b58aca4",
			"title": "Mindstorms: what did Papert argue and what does it mean for learning and education?",
			"date": "2017.7",
			"tags": ["K-12", "computing education"],
			"img": "mindstorms",
			"alt": "A headshot of Seymour Papert."
		},
		{
			"url": "https://medium.com/bits-and-behavior/how-to-design-a-class-a1c8b419b9f5",
			"title": "How to design a class",
			"date": "2017.7",
			"tags": ["teaching", "tutorial"],
			"img": "coursedesign",
			"alt": "Stock photo of a cover sheet saying 'syllabus'"
		},
		{
			"url": "https://medium.com/bits-and-behavior/automation-education-and-the-looming-skills-deficit-a509c7647afb",
			"title": "Automation, education, and the looming skills deficit",
			"date": "2017.6",
			"tags": ["automation", "society", "software engineering"],
			"img": "automation",
			"alt": "A photograph of a manufacturing robot making a car."
		},
		{
			"url": "https://medium.com/bits-and-behavior/coding-tutorials-the-good-the-bad-and-the-ugly-b45afc8821f6",
			"title": "Coding tutorials: the good, the bad, and the ugly",
			"date": "2017.6",
			"tags": ["computing education", "paper", "ed tech"],
			"img": "codingtutorials",
			"alt": "Two screenshots of Lightbot and Gidget."
		},
		{
			"url": "https://medium.com/bits-and-behavior/programming-problem-solving-is-still-more-of-an-art-than-a-science-5e002aaa9dd9",
			"title": "Support programming problem solving with contextual help",
			"date": "2017.5",
			"tags": ["computing education", "K-12"],
			"img": "hint",
			"alt": "A screenshot of the IdeaGarden prototype showing helpful content."
		},
		{
			"url": "https://medium.com/bits-and-behavior/why-learn-to-code-113810a89491",
			"title": "Why learn to code?",
			"date": "2017.6",
			"tags": ["computing education", "argument"],
			"img": "whylearncode",
			"alt": "A photograph of a bookshelf of technical books for learning to code."
		},
		{
			"url": "https://medium.com/bits-and-behavior/managing-software-teams-in-academia-and-industry-92f3989b20a6",
			"title": "Managing software teams in academia and industry",
			"date": "2017.6",
			"tags": ["software engineering", "academia"],
			"img": "teamwork",
			"alt": "Stock photo of teamwork."
		},
		{
			"url": "https://medium.com/bits-and-behavior/accessibility-101-an-afternoon-at-the-teachaccess-bootcamp-ee317f426022",
			"title": "Accessibility 101: An afternoon at the TeachAccess bootcamp",
			"date": "2017.5",
			"tags": ["trip report", "accessibility"],
			"img": "accesstraining",
			"alt": "A photograph of the TeachAccess faculty bootcamp."
		},
		{
			"url": "https://medium.com/bits-and-behavior/icse-2017-trip-report-people-process-and-program-analysis-6553dec82637",
			"title": "ICSE 2017 trip report: people, process, and program analysis",
			"date": "2017.5",
			"tags": ["trip report", "software engineering"],
			"img": "icse17",
			"alt": "The ICSE 2017 banquet, in a swanky club full of food stands"
		},
		{
			"url": "https://medium.com/bits-and-behavior/chi-2017-automation-agency-and-learning-c6e4590ec7bf",
			"title": "CHI 2017: Automation, Agency, and Learning",
			"date": "2017.5",
			"tags": ["trip report", "HCI"],
			"img": "chi17",
			"alt": "The DUB party in a restaurant at CHI 2017 showing hundreds of attendees."
		},
		{
			"url": "https://medium.com/bits-and-behavior/how-to-be-a-great-cs-teacher-b8a0a2a3600f",
			"title": "How to be a great (CS) teacher",
			"date": "2017.5",
			"tags": ["computing education", "teaching", "tutorial"],
			"img": "greatteacher",
			"alt": "A photograph of my INFO 360 class, showing students working together."
		},
		{
			"url": "https://medium.com/bits-and-behavior/nine-factors-that-shape-software-evolution-78112ee79b3c",
			"title": "Nine factors that shape software evolution",
			"date": "2017.5",
			"tags": ["paper", "software engineering"],
			"img": "evolution",
			"alt": "A staged photograph of the team at AnswerDash making a design decision."
		},
		{
			"url": "https://medium.com/bits-and-behavior/what-makes-software-developers-great-cross-disciplinary-collaborators-590f94f2f722",
			"title": "What makes software developers great cross-disciplinary collaborators?",
			"date": "2017.5",
			"tags": ["software engineering", "paper"],
			"img": "collaboration",
			"alt": "Andy Begel giving Paul Li's talk at the CHASE workshop in front of a projector screen."
		},
		{
			"url": "https://medium.com/bits-and-behavior/genie-input-retargeting-on-the-web-through-command-reverse-engineering-f9c7a294b23f",
			"title": "Genie: Automatically adding mouse, keyboard, speech, and other input to websites",
			"date": "2017.5",
			"tags": ["paper", "HCI", "accessibility"],
			"img": "genie",
			"alt": "Amanda Swearngin giving her CHI talk at a podium."
		},
		{
			"url": "https://medium.com/bits-and-behavior/what-five-years-of-early-career-research-funding-buys-the-world-bb49bb3c08b0",
			"title": "What five years of early career research funding buys the world",
			"date": "2017.4",
			"tags": ["academia", "software engineering", "HCI", "grant report"],
			"img": "career",
			"alt": "A photograph of Jake Wobbrock, Parmit Chilana, and myself."
		},
		{
			"url": "https://medium.com/bits-and-behavior/a-glimpse-into-state-level-cs-education-policy-implementation-4e4b23501746",
			"title": "A glimpse into state-level CS education policy implementation",
			"date": "2017.4",
			"tags": ["K-12", "policy", "computing education"],
			"img": "preservice",
			"alt": "A screenshot of a colorful table from a strategic plan."
		},
		{
			"url": "https://medium.com/bits-and-behavior/review-of-grudins-from-tool-to-partner-the-evolution-of-hci-8e2155feeffd",
			"title": "Review of Grudin's \"From Tool to Partner: The Evolution of HCI\"",
			"date": "2017.1",
			"tags": ["HCI", "book summary"],
			"img": "grudin",
			"alt": "The book cover of Jonathan Grudin's book on the history of HCI."
		},
		{
			"url": "https://medium.com/bits-and-behavior/how-i-applied-learning-sciences-to-undergraduate-design-education-f0c46846ca13",
			"title": "How I applied learning sciences to undergraduate design education",
			"date": "2017.1",
			"tags": ["teaching", "academia", "tutorial"],
			"img": "learningsciences",
			"alt": "A photograph of students sorting notecards on the ground."
		},
		{
			"url": "https://medium.com/bits-and-behavior/assessment-is-a-computing-education-grand-challenge-6a49900601e3",
			"title": "Assessment is a computing education grand challenge",
			"date": "2016.12",
			"tags": ["computing education", "teaching"],
			"img": "assessment",
			"alt": "Stock photo of a multiple choice test."
		},
		{
			"url": "https://medium.com/bits-and-behavior/my-splash-2016-keynote-81cc802f5f6e",
			"title": "My SPLASH 2016 keynote: A human view of programming languages",
			"date": "2016.11",
			"tags": ["programming languages", "software engineering", "argument"],
			"img": "splashkeynote",
			"alt": "A screenshot fo the first slide of my keynote"
		},
		{
			"url": "https://medium.com/bits-and-behavior/two-truths-4c2709779dd2",
			"title": "Two truths: how science masked rural decay",
			"date": "2016.11",
			"tags": ["science", "society"],
			"img": "masked",
			"alt": "A grotesque rendering of Donald Trump's face."
		},
		{
			"url": "https://medium.com/bits-and-behavior/what-does-600k-in-nsf-research-funding-buy-86c1d66848a",
			"title": "What does $600K in NSF research funding buy?",
			"date": "2016.10",
			"tags": ["academia", "computing education", "grant report"],
			"img": "ce21",
			"alt": "A cake of Gidget the robot."
		},
		{
			"url": "https://medium.com/bits-and-behavior/a-defense-of-sabbatical-3257a544aaf3",
			"title": "A defense of sabbatical",
			"date": "2016.9",
			"tags": ["academia"],
			"img": "sabbatical",
			"alt": "Stock photo of a person staring at a lake."
		},
		{
			"url": "https://medium.com/bits-and-behavior/my-sabbatical-stretch-goal-teaching-high-school-cs-b98fc08524dd",
			"title": "My sabbatical stretch goal: teaching high school CS",
			"date": "2016.9",
			"tags": ["computing education", "K-12", "personal"],
			"img": "highschoolcs",
			"alt": "A photograph of me with my Upward Bound students."
		},
		{
			"url": "https://medium.com/bits-and-behavior/icer-2016-trip-report-5f3924668e4f",
			"title": "ICER 2016 trip report",
			"date": "2016.9",
			"tags": ["trip report", "computing education"],
			"img": "icer16",
			"alt": "A photograph of Dastyni Loksa giving his talk on self-regulation."
		},
		{
			"url": "https://medium.com/bits-and-behavior/snowbird-trip-report-automation-education-and-academia-7888451118c",
			"title": "Snowbird trip report: automation, education, and academia",
			"date": "2016.7",
			"tags": ["trip report", "computing education"],
			"img": "snowbird",
			"alt": "A panoramic shot of the Snowbird conference, showing the backs of many CS department chairs."
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-invisibility-of-prior-knowledge-e9ea1811b5e0",
			"title": "The invisibility of prior knowledge",
			"date": "2016.7",
			"tags": ["argument", "K-12"],
			"img": "priorknowledge",
			"alt": "Silhouettes of elephants."
		},
		{
			"url": "https://medium.com/bits-and-behavior/textbooks-are-awesome-b0f9b6af7105",
			"title": "Textbooks are awesome",
			"date": "2016.7",
			"tags": ["argument", "teaching", "information", "HCI"],
			"img": "textbooks",
			"alt": "Stock photo of a stack of old books."
		},
		{
			"url": "https://medium.com/bits-and-behavior/what-makes-a-great-software-engineer-e8cbb25cfac0",
			"title": "What makes a great software engineer?",
			"date": "2016.6",
			"tags": ["paper", "software engineering"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/software-and-globalism-sitting-in-a-tree-k-i-s-s-i-n-g-7f8ba9f18133",
			"title": "Software and globalism sitting in a tree, k-i-s-s-i-n-g",
			"date": "2016.6",
			"tags": ["automation", "society", "software engineering"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/accessibility-diversity-and-software-teams-e81a4cc04f9",
			"title": "Why hire people with disabilities? The value of diversity in software teams",
			"date": "2016.6",
			"tags": ["software engineering", "accessibility", "trip report"],
			"img": "hiringdisability",
			"alt": "A panoramic shot of the capacity building workshop."
		},
		{
			"url": "https://medium.com/bits-and-behavior/my-sabbatical-research-pivot-436a3e586e5c",
			"title": "My sabbatical research pivot",
			"date": "2016.5",
			"tags": ["academia", "computing education"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/programming-power-and-responsibility-4f3b4e1d9ea8",
			"title": "Programming, power, and responsibility",
			"date": "2016.5",
			"tags": ["software engineering", "society", "automation"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/if-learning-to-code-were-like-learning-to-write-f9022fa0eb7d",
			"title": "If learning to code were like learning to write...",
			"date": "2016.3",
			"tags": ["computing education", "argument"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/coding-bootcamps-versus-universities-3c50ea111b57",
			"title": "Coding bootcamps versus universities",
			"date": "2016.3",
			"tags": ["software engineering", "computing education", "academia", "argument"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/fifty-privileges-aa62968d8cc",
			"title": "Fifty privileges",
			"date": "2016.2",
			"tags": ["diversity"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-invisibility-of-failure-in-computing-education-61b88631bc86",
			"title": "The invisibility of failure in computing education",
			"date": "2016.2",
			"tags": ["computing education", "argument"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/making-money-versus-making-knowledge-4c0d0d48ce4e",
			"title": "Making money versus making knowledge",
			"date": "2016.2",
			"tags": ["academia", "industry"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/design-and-the-limits-of-automation-8b8b46ecd7c",
			"title": "Design and the limits of automation",
			"date": "2016.1",
			"tags": ["HCI", "automation"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-service-implications-of-interdisciplinarity-5e5296b9d413",
			"title": "The service implications of interdisciplinarity",
			"date": "2016.1",
			"tags": ["academia", "science"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/learning-contexts-across-the-lifetime-1e9f798f1a82",
			"title": "Learning contexts across the lifetime",
			"date": "2016.1",
			"tags": ["teaching", "ed tech"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/startup-good-and-evil-106a202a7f60",
			"title": "Startup good and evil",
			"date": "2015.12",
			"tags": ["industry", "diversity"],
			"img": "startup",
			"alt": "A black and white photo of homeless people in Pioneer Square."
		},
		{
			"url": "https://medium.com/bits-and-behavior/privilege-and-cs1-70f9298272c4",
			"title": "Privilege and CS1",
			"date": "2015.12",
			"tags": ["diversity", "academia", "computing education"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-black-hole-of-software-engineering-research-fea1c9dc698d",
			"title": "The black hole of software engineering research",
			"date": "2015.10",
			"tags": ["software engineering", "academia"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-watch-3c50e66a1409",
			"title": "The watch",
			"date": "2015.5",
			"tags": ["review", "HCI"],
			"img": "watch",
			"alt": "The Apple Watch on my wrist."
		},
		{
			"url": "https://medium.com/bits-and-behavior/i-am-tenured-a3df1bbda47",
			"title": "I am tenured",
			"date": "2014.10",
			"tags": ["academia"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/gidget-a-21st-century-approach-to-programming-literacy-85d74dd5a368",
			"title": "Gidget, a 21st century approach to programming literacy",
			"date": "2014.9",
			"tags": ["computing education", "ed tech"],
			"img": "gidget",
			"alt": "Illustrations from Gidget."
		},
		{
			"url": "https://medium.com/bits-and-behavior/computer-science-information-science-and-the-ti-82-2b810e68d333",
			"title": "Computer science, information science, and the TI-82",
			"date": "2014.6",
			"tags": ["computing education", "ed tech", "K-12", "personal"],
			"img": "ti82",
			"alt": "The screen of the TI-82 graphing calculator."
		},
		{
			"url": "https://medium.com/bits-and-behavior/programming-languages-are-the-least-usable-but-most-powerful-human-computer-interfaces-ever-invented-7509348dedc",
			"title": "Programming languages are the least usable, but most powerful human-computer interfaces ever invented",
			"date": "2014.3",
			"tags": ["programming languages", "argument", "HCI"],
			"img": "plinterface",
			"alt": "An XKCD comic."
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-economics-of-computing-for-all-bdd9e17e313a",
			"title": "The economics of computing for all",
			"date": "2013.4",
			"tags": ["computing education", "policy", "argument"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/startup-life-versus-faculty-life-f53f209eacd3",
			"title": "Startup life versus faculty life",
			"date": "2014.1",
			"tags": ["academia", "industry", "personal"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/off-the-grid-a293f942388f",
			"title": "Off the grid",
			"date": "2013.9",
			"tags": ["personal", "trip report"],
			"img": "burningman",
			"alt": "My family driving into dusty Burning Man."
		},
		{
			"url": "https://medium.com/bits-and-behavior/apple-maps-a35505296b4",
			"title": "Apple Maps",
			"date": "2012.9",
			"tags": ["information", "HCI", "argument", "review"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/reflections-on-conference-papers-and-journals-71dc4a40d573",
			"title": "Reflections on conference papers and journals",
			"date": "2012.9",
			"tags": ["academia", "science"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/a-personal-note-on-public-funding-for-education-69735e8fe1e",
			"title": "A personal note on public funding for education",
			"date": "2012.8",
			"tags": ["society", "academia", "diversity"],
			"img": "publiceducation",
			"alt": "A data visualization of how much the public spent on my education: each person gave me 4 cents."
		},
		{
			"url": "https://medium.com/bits-and-behavior/john-carmack-discusses-the-art-and-science-of-software-engineering-a56e100c27aa",
			"title": "John Carmack discusses the art and science of software engineering",
			"date": "2012.8",
			"tags": ["review", "software engineering"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/ageism-in-academia-d38dbe2b9f4a",
			"title": "Ageism in academia",
			"date": "2012.7",
			"tags": ["diversity", "academia"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/uw-msr-summer-institute-on-crowdsourcing-personalized-online-education-9b7a65c848c8",
			"title": "UW MSR Summer Institute on Crowdsourcing Personalized Online Education",
			"date": "2012.7",
			"tags": ["trip report", "computing education"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/computing-jobs-and-lumps-of-labor-e4318ff64c24",
			"title": "Computing, jobs, and lumps of labor",
			"date": "2012.7",
			"tags": ["society", "automation", "software engineering"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/feedback-learning-and-massive-open-online-courses-28c128039728",
			"title": "Feedback, learning, and massive open online courses",
			"date": "2012.6",
			"tags": ["teaching", "ed tech"],
			"img": "moocs",
			"alt": "A photograph of my design class."
		},
		{
			"url": "https://medium.com/bits-and-behavior/machining-is-now-coding-f9aa9b4fc3b3",
			"title": "Machining is now coding",
			"date": "2012.3",
			"tags": ["computing education", "software engineering", "automation", "society"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-double-edged-sword-of-efficiency-58a92741f1ff",
			"title": "The double-edged sword of efficiency",
			"date": "2012.1",
			"tags": ["software engineering", "society", "automation"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/whats-in-a-frame-5f90f08d7bd3",
			"title": "What's in a frame?",
			"date": "2012.1",
			"tags": ["information", "automation"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/what-do-professors-do-all-day-a67905b4583f",
			"title": "What do professors do all day?",
			"date": "2011.11",
			"tags": ["productivity", "academia"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/abstraction-appropriation-6a95416dd50d",
			"title": "Abstraction appropriation",
			"date": "2011.4",
			"tags": ["society", "automation"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/does-automation-free-us-or-enslave-us-a66df3901e7a",
			"title": "Does automation free us or enslave us?",
			"date": "2011.1",
			"tags": ["automation", "society"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/decision-making-in-software-engineering-eb97d2c939bd",
			"title": "Decision making in software engineering",
			"date": "2010.12",
			"tags": ["review", "software engineering"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/what-makes-code-different-than-other-media-b2b8441b7aa",
			"title": "What makes code different than other media?",
			"date": "2010.11",
			"tags": ["software engineering", "society"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/software-quality-and-ideology-dac3a1c48271",
			"title": "Software quality and ideology",
			"date": "2010.8",
			"tags": ["software engineering", "argument", "argument"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/future-me-gets-all-the-attention-8ac6c2824e49",
			"title": "Future me gets all the attention",
			"date": "2010.8",
			"tags": ["productivity"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/mozilla-summit-2010-and-dev-culture-6f1de9839b81",
			"title": "Mozilla Summit 2010 and dev culture",
			"date": "2010.7",
			"tags": ["trip report", "industry", "software engineering"],
			"img": "mozillasummit",
			"alt": "A photograph of a reception of nearly all men at the Mozilla summit."
		},
		{
			"url": "https://medium.com/bits-and-behavior/mozilla-summit-2010-day-0-470ce575b77d",
			"title": "Mozilla Summit 2010, day 0",
			"date": "2010.7",
			"tags": ["trip report", "industry"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/dealing-with-teacher-guilt-db9e4a66d7ab",
			"title": "Dealing with teacher guilt",
			"date": "2010.6",
			"tags": ["teaching"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/teaching-and-presenting-with-the-ipad-is-broken-83579bd0cf28",
			"title": "Teaching and presenting with the iPad is broken",
			"date": "2010.4",
			"tags": ["teaching", "ed tech"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/what-the-ipad-is-and-isnt-2188e1820697",
			"title": "What the iPad is and isn't",
			"date": "2010.4",
			"tags": ["review", "HCI"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/my-juxtaposition-on-the-ipad-5ef097a15897",
			"title": "My juxtaposition on the ipad",
			"date": "2010.3",
			"tags": ["HCI", "review"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/spreadsheet-error-costs-time-and-money-yet-again-3df493504643",
			"title": "Spreadsheet error costs time and money, yet again",
			"date": "2010.3",
			"tags": ["software engineering", "society"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/managing-time-management-424608e7f9eb",
			"title": "Managing time management",
			"date": "2009.12",
			"tags": ["productivity"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/emerson-interview-part-2-writing-for-hci-venues-6f6578cfe0d4",
			"title": "Emerson interview (part 2); writing software engineering research for HCI venues",
			"date": "2009.10",
			"tags": ["software engineering", "academia", "personal"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/emerson-murphy-hill-interviews-me-part-1-58cf105568e5",
			"title": "Emerson Murphy-Hill interviews me on software engineering research (part 1)",
			"date": "2009.9",
			"tags": ["software engineering", "academia", "personal"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/whats-surprising-ba0d8eba6036",
			"title": "What's surprising?",
			"date": "2009.9",
			"tags": ["academia", "science"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/the-semblance-of-objectivity-in-numbers-b9e397662cb0",
			"title": "The semblance of objectivity in numbers",
			"date": "2009.5",
			"tags": ["information", "science"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/tough-t-b45431f07b33",
			"title": "On Edward Tufte's flat teaching",
			"date": "2009.4",
			"tags": ["trip report", "review"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/halfway-home-1e16e59f26fd",
			"title": "Halfway home: The India Software Engineering Conference",
			"date": "2009.2",
			"tags": ["trip report", "software engineering"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/halfway-to-india-8d9b0b0a9a96",
			"title": "Halfway to India",
			"date": "2009.2",
			"tags": ["trip report", "software engineering"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/why-do-researchers-choose-the-disciplines-they-do-bea5b18cf6a4",
			"title": "Why do researchers choose the disciplines they do?",
			"date": "2009.1",
			"tags": ["academia", "science"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/what-up-blog-906f340b2dcc",
			"title": "What up, blog?",
			"date": "2009.1",
			"tags": ["information"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/sketching-with-words-b4c6ce1d402d",
			"title": "Sketching with words",
			"date": "2008.12",
			"tags": ["software engineering"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/rhetorical-devices-9c2eb2a25071",
			"title": "Rhetorical devices",
			"date": "2008.11",
			"tags": ["academia"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/grading-rant-dbb1bb01ee17",
			"title": "Grading rant",
			"date": "2008.11",
			"tags": ["teaching", "academia"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/bits-c65c20ac6a86",
			"title": "Bits (a poem)",
			"date": "2008.1",
			"tags": ["society", "automation"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/mediated-living-48d80aa3b7f2",
			"title": "Mediated living",
			"date": "2007.1",
			"tags": ["society", "automation"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/on-the-role-of-empiricism-in-applied-sciences-ccb85c5ec8f3",
			"title": "On the role of empiricism in applied sciences",
			"date": "2006.12",
			"tags": ["academia", "science"]
		},
		{
			"url": "https://medium.com/bits-and-behavior/on-the-static-versus-dynamic-typing-debate-415e51404528",
			"title": "On the static versus dynamic typing debate",
			"date": "2006.10",
			"tags": ["programming languages", "HCI"]
		}
	],
	"populations": [
		{
			"id": "public",
			"population": "The public",
			"alt": "A picture of Amy being interviewed for a television segment.",
			"description": "The press often reports on my research, interviews me, or consults with me on my expertise"
		},
		{
			"id": "industry",
			"population": "The software industry",
			"alt": "A photograph of the 2016 team at AnswerDash",
			"description": "My research often impacts policy and processes in software companies; I have also co-founded and consulted with startups"
		},
		{
			"id": "engineers",
			"population": "Software engineers",
			"alt": "A photograph of the 2010 Mozilla Summit",
			"description": "My research often reaches software developers through podcasts, news, social media, and tools"
		},
		{
			"id": "learningtech",
			"population": "Technologies for learning to code",
			"alt": "A screenshot of Apple's Swift Playgrounds.",
			"description": "Many of my discoveries have impacted the design of educational technologies for learning to code"
		},
		{
			"id": "academia",
			"population": "Higher education",
			"alt": "A photograph of a CHI 2019 coffee break.",
			"description": "I share much of my experience, both of my research areas and of my practice as an scholars, in books, blog posts, podcasts, and other media"
		},
		{
			"id": "cer",
			"population": "The computing education research community",
			"alt": "A photograph of my lab at SIGCSE 2019.",
			"description": "I actively seek ways to help build the computing education research community by improving or creating new infrastructure"
		},
		{
			"id": "k12cs",
			"population": "National K-12 CS education",
			"alt": "A photograph of Amy at a national meeting of CS for All state advocates.",
			"description": "I've used my research and expertise to inform national policy and national curricula"
		},
		{
			"id": "k12cswa",
			"population": "Washington state K-12 CS education",
			"alt": "A photograph of an education committee meeting at the Washington state legislature.",
			"description": "I've used my research and expertise to inform Washington state policy on K-12 CS education"
		},
		{
			"id": "k12csps",
			"population": "Puget Sound K-12 CS education",
			"alt": "A photograph a 2019 Sound CS Ed community meetup.",
			"description": "I've used my research and expertise to build community and educate youth in Puget Sound"
		}
	],
	"impacts": [
		{
			"kind": "press",
			"start": 2022,
			"end": 2022,
			"description": "I was interviewed about coding bootcamps.",
			"url": "https://prismreports.org/2022/08/12/for-profit-coding-boot-camps-prey-bipoc/",
			"title": "For-profit coding boot camps prey on BIPOC workers",
			"author": "Sravya Tadepalli",
			"source": "Prism Reports",
			"projects": ["csdiversity", "pllearning"],
			"who": "public"
		},
		{
			"kind": "press",
			"start": 2020,
			"end": 2020,
			"description": "I was interviewed about the impact of online learning on learning to code.",
			"url": "https://www.onlineeducation.com/features/can-online-education-fix-the-gender-diversity-problem-in-coding",
			"title": "Can Online Education Fix the Gender Diversity Problem in Coding?",
			"author": "Chelsea Toczauer",
			"source": "OnlineEducation.com",
			"projects": ["csdiversity", "pllearning"],
			"who": "public"
		},
		{
			"kind": "consulting",
			"start": 2019,
			"end": 2019,
			"description": "I consulted with APM's Marketplace Tech on the effects and limits of automation",
			"url": null,
			"projects": ["csjustice", "mliteracy", "euse"],
			"who": "public"
		},
		{
			"kind": "press",
			"start": 2016,
			"end": 2016,
			"description": "I co-authored an article with Susanne Hambrusch for the Huffington Post titled \"Why the Software Industry Needs Computing Education Research\"",
			"title": "Why the Software Industry Needs Computing Education Research",
			"author": "Amy J. Ko and Susanne Hambrusch",
			"source": "Huffington Post",
			"url": "http://www.huffingtonpost.com/entry/5829cf4ce4b02b1f5257a638",
			"projects": ["pllearning", "csdiversity"],
			"who": "public"
		},
		{
			"kind": "press",
			"start": 2016,
			"end": 2016,
			"description": "Tia Ghose interviewed me for LiveScience about the efficacy of coding toys",
			"title": "Do Computer Coding Toys for Kids Really Work?",
			"author": "Tia Ghose",
			"source": "LiveScience",
			"url": "http://www.livescience.com/53963-are-coding-toys-useful.html",
			"projects": ["pllearning"],
			"who": "public"
		},
		{
			"kind": "press",
			"start": 2012,
			"end": 2012,
			"description": "NewScientist featured my work on Frictionary",
			"title": "Frictionary 'mines your whines' to pinpoint software bugs",
			"author": "Paul Marks",
			"source": "NewScientist",
			"url": "http://www.newscientist.com/blogs/onepercent/2012/05/frictionary.html",
			"projects": ["triage"],
			"who": "public"
		},
		{
			"kind": "press",
			"start": 2012,
			"end": 2012,
			"description": "PC World featured our work on Facebook's design culture",
			"title": "Study: Facebook relies on good design to retain users",
			"author": "Joab Jackson",
			"source": "IDG News",
			"url": "http://www.pcworld.com/businesscenter/article/255340/study_facebook_relies_on_good_design_to_retain_users.html",
			"projects": ["triage"],
			"who": "public"
		},
		{
			"kind": "press",
			"start": 2010,
			"end": 2010,
			"description": "Seattle's King5 news interviewed me about software failures",
			"title": "Violence against technology has psychological roots",
			"author": "Owen Lei",
			"source": "King5 News",
			"url": "http://www.king5.com/news/technology/Hourglass-Syndrome-106739108.html",
			"projects": ["triage"],
			"who": "public"
		},
		{
			"kind": "press",
			"start": 2004,
			"end": 2004,
			"description": "The Associated Press interviewed me on my dissertation work on the Whyline",
			"title": "Researchers Aim to Make Debugging Simpler",
			"author": "Mike Crissey",
			"source": "Associated Press",
			"url": "https://www.eastbaytimes.com/2004/08/15/researchers-attempt-to-make-debugging-easier/",
			"projects": ["understanding"],
			"who": "public"
		},
		{
			"kind": "product",
			"start": 2013,
			"end": 2020,
			"description": "Our research on Lemonaid, our crowdsourced help tool, was the basis for AnswerDash, a company that I co-founded with Jacob Wobbrock and Parmit Chilana that offers an instant self-service answers product for web applications and e-commerce sites. The company has impacted other company's product offerings, including Zendesk's self-service technologies. AnswerDash was acquired in 2020 by CloudEngage, a platform for customer personalization",
			"url": "https://www.geekwire.com/2020/uw-spinout-answerdash-contextual-qa-service-customer-support-acquired-cloudengage/",
			"projects": ["triage"],
			"who": "industry"
		},
		{
			"kind": "knowledge",
			"start": 2014,
			"end": 2016,
			"description": "Our research on bug reporting has been read widely in industry, including by product teams at Microsoft, Adobe, Google, and ABB",
			"url": null,
			"projects": ["triage"],
			"who": "industry"
		},
		{
			"kind": "press",
			"start": 2005,
			"end": 2005,
			"description": "PC Magazine featured my research on the Whyline debugging tool",
			"title": "The Ten Biggest Problems in Computing and How We'll Solve Them",
			"author": "Alan Cohen",
			"source": "PC Magazine",
			"url": "http://www.pcmag.com/article2/0,2817,1842864,00.asp",
			"projects": ["understanding"],
			"who": "industry"
		},
		{
			"kind": "press",
			"start": 2016,
			"end": 2016,
			"description": "I was interviewed by Jeff Meyerson for the Software Engineering Daily podcast on February 24 about research, reaching tens of thousands of engineers",
			"title": "Academia to Industry in Computer Science",
			"author": "Jeff Meyerson",
			"url": "https://softwareengineeringdaily.com/2016/02/24/academia-to-industry-in-computer-science-with-andy-ko/",
			"projects": ["triage", "softexpertise"],
			"who": "engineers"
		},
		{
			"kind": "knowledge",
			"start": 2016,
			"end": 2016,
			"description": "Our ACM Learning Webinar on software engineering expertise was viewed by hundreds of thousands of developers",
			"url": "https://www.youtube.com/watch?v=OBlmLjeORUQ&feature=youtu.be&list=PLn0nrSd4xjjZa4KDqFBCMOnk52CItWqyU",
			"projects": ["triage", "softexpertise"],
			"who": "engineers"
		},
		{
			"kind": "social",
			"start": 2020,
			"end": 2020,
			"description": "Our research on software engineering expertise was read by tens of thousands of software developers on Hacker News",
			"url": "https://news.ycombinator.com/item?id=25107285",
			"projects": ["softexpertise"],
			"who": "engineers"
		},
		{
			"kind": "social",
			"start": 2017,
			"end": 2017,
			"description": "Our research on coding bootcamps has been read by tens of thousands of software developers on Hacker News",
			"url": "https://news.ycombinator.com/item?id=14679061",
			"projects": ["apilearning", "softexpertise"],
			"who": "engineers"
		},
		{
			"kind": "social",
			"start": 2018,
			"end": 2018,
			"description": "Our research on coding tutorials read by tens of thousands of software developers on Hacker News",
			"url": "https://news.ycombinator.com/item?id=16961716",
			"projects": ["pllearning"],
			"who": "engineers"
		},
		{
			"kind": "product",
			"start": 2004,
			"end": 2008,
			"description": "Our work on end-user software engineering has inspired hundreds of commercial tools for supporting end-user programming and impacted research efforts in professional software engineering",
			"url": "http://eusesconsortium.org",
			"projects": ["euse"],
			"who": "engineers"
		},
		{
			"kind": "product",
			"start": 2004,
			"end": 2008,
			"description": "Our work on understanding machine learning has indirectly shaped several of the tools used in industry to develop and debug machine learned programs",
			"url": null,
			"projects": ["mlliteracy"],
			"who": "engineers"
		},
		{
			"kind": "product",
			"start": 2010,
			"end": null,
			"description": "Our work on interface mining has been replicated in several industry projects focused on supporting interface development",
			"url": null,
			"projects": ["uimining"],
			"who": "engineers"
		},
		{
			"kind": "product",
			"start": 2004,
			"end": 2008,
			"description": "Our studies on program understanding and ideas for program understanding tools was partially the basis of the Debugger Canvas plugin for Visual Studio",
			"url": "http://research.microsoft.com/en-us/projects/debuggercanvas/",
			"projects": ["understanding"],
			"who": "engineers"
		},
		{
			"kind": "product",
			"start": 2004,
			"end": 2008,
			"description": "Frictionary was used in one of the features in AnswerDash, the company I co-founded based on my CAREER grant",
			"url": "http://www.answerdash.com/",
			"projects": ["triage"],
			"who": "engineers"
		},
		{
			"kind": "product",
			"start": 2011,
			"end": null,
			"description": "Portions of Timelapse and Scry were upstreamed to WebKit and may eventually appear in the Safari Web Inspector developer tools. These projects inspired similar features at the venture-backed startup replay.io.",
			"url": "https://www.replay.io",
			"projects": ["understanding"],
			"who": "engineers"
		},
		{
			"kind": "product",
			"start": 2010,
			"end": null,
			"description": "My work on Barista influenced the Greenfoot editor",
			"url": "http://www.greenfoot.org/",
			"projects": ["understanding"],
			"who": "learningtech"
		},
		{
			"kind": "product",
			"start": 2020,
			"end": null,
			"description": "Our work on PL Tutor influenced the JustJavaScript course by Dan Abramov",
			"url": "https://twitter.com/dan_abramov/status/1417200694591959042?s=21",
			"projects": ["pllearning"],
			"who": "learningtech"
		},
		{
			"kind": "consulting",
			"start": 2020,
			"end": 2020,
			"description": "I consulted with Microsoft's VS Code, VS Online, and GitHub Education teams about how to support CS educators",
			"url": null,
			"projects": ["pllearning", "problemsolving"],
			"who": "learningtech"
		},
		{
			"kind": "consulting",
			"start": 2016,
			"end": 2016,
			"description": "I consulted with Microsoft on their project, sharing evidence from computing education research to inform the design of their learning technologies",
			"url": "https://makecode.com/",
			"projects": ["pllearning", "problemsolving", "csdiversity"],
			"who": "learningtech"
		},
		{
			"kind": "product",
			"start": 2014,
			"end": null,
			"description": "Gidget has been played by tens of thousans of youth adults online, in summer camps, and in high schools",
			"url": "https://helpgidget.org",
			"projects": ["pllearning", "csdiversity"],
			"who": "learningtech"
		},
		{
			"kind": "product",
			"start": 2020,
			"end": null,
			"description": "Codeitz, our Python tutorial which incoporates our theory of programming instruction, is publicly available, and used to support Python instruction",
			"url": "http://codeitz.com",
			"projects": ["pllearning"],
			"who": "learningtech"
		},
		{
			"kind": "curriculum",
			"start": 2020,
			"end": null,
			"description": "We influenced the teaching of HCI education in higher education",
			"url": null,
			"projects": ["csjustice"],
			"who": "academia"
		},
		{
			"kind": "resource",
			"start": 2016,
			"end": null,
			"description": "I write and share online books that summarize the state of knowledge in HCI and Software Engineering",
			"url": "https://faculty.washington.edu/ajko/books",
			"projects": ["triage", "softexpertise"],
			"who": "academia"
		},
		{
			"kind": "resource",
			"start": 2016,
			"end": null,
			"description": "I shared my practices and experiences with productivity and time management in the Changing Academic Life podcast",
			"url": "http://www.changingacademiclife.com/blog/2017/6/18/amy-ko",
			"projects": [],
			"who": "academia"
		},
		{
			"kind": "resource",
			"start": 2016,
			"end": null,
			"description": "I share thoughts on academia and academic life on my blog, read by tens of thousands",
			"url": "https://medium.com/bits-and-behavior/tagged/academia",
			"projects": [],
			"who": "academia"
		},
		{
			"kind": "knowledge",
			"start": 2020,
			"end": null,
			"description": "Our work has opened discourse on the responsibility of CS educators to address the role of CS in injustice",
			"url": null,
			"projects": ["csjustice"],
			"who": "cer"
		},
		{
			"kind": "knowledge",
			"start": 2005,
			"end": null,
			"description": "Our work on research methods is widely read by new Ph.D. students across computer science to inform how they evaluate new developer tools and how they use theory",
			"url": null,
			"projects": ["methods"],
			"who": "cer"
		},
		{
			"kind": "knowledge",
			"start": 2018,
			"end": null,
			"description": "Greg Nelson's arguments about the role of theory in computing education research have spurred signfiicant debate in CS education. This debate was continued in a 60 minute panel session at ICER 2018 in Finland, an then another 90 minute panel session at SIGCSE in Minneapolis",
			"url": null,
			"projects": ["methods"],
			"who": "cer"
		},
		{
			"kind": "knowledge",
			"start": 2016,
			"end": null,
			"description": "Our surveys are widely-cited and used by doctoral students to quickly learn about the state of the art and knowledge",
			"url": null,
			"projects": ["reviews"],
			"who": "academia"
		},
		{
			"kind": "resource",
			"start": 2017,
			"end": 2019,
			"description": "I consulted with Google, NSF, CRA, and Code.org on strategies for strengthening the pipeline of computing education research, researchers, and research funding",
			"url": null,
			"projects": ["csdiversity"],
			"who": "cer"
		},
		{
			"kind": "resource",
			"start": 2016,
			"end": 2016,
			"description": "Co-authored a whitepaper discussing the importance of computing education research",
			"url": "http://cra.org/ccc/wp-content/uploads/sites/2/2015/01/CSEdResearchWhitePaper2016.pdf",
			"projects": [],
			"who": "cer"
		},
		{
			"kind": "resource",
			"start": 2016,
			"end": null,
			"description": "Since 2016 I've maintained a popular FAQ for newcomers to the community",
			"url": "http://faculty.washington.edu/ajko/cer",
			"projects": [],
			"who": "cer"
		},
		{
			"kind": "resource",
			"start": 2018,
			"end": null,
			"description": "I've helped shape the peer review processes for the ACM Transactions on Computing Education journal",
			"url": "https://toce.acm.org/",
			"projects": [],
			"who": "cer"
		},
		{
			"kind": "resource",
			"start": 2018,
			"end": null,
			"description": "I've helped shape the reviewing criteria for the ACM SIGCSE Technical Symposium's research track",
			"url": "https://sigcse.org/sigcse/events/symposia",
			"projects": [],
			"who": "cer"
		},
		{
			"kind": "resource",
			"start": 2020,
			"end": null,
			"description": "I've heleped shape the peer review process for ACM International Computing Education Research Conference",
			"url": "https://icer.acm.org",
			"projects": [],
			"who": "cer"
		},
		{
			"kind": "resource",
			"start": 2016,
			"end": null,
			"description": "I write blog posts on about computing education research topics are read widely amongst researchers and CS teachers",
			"url": "https://medium.com/bits-and-behavior/tagged/computing-education",
			"projects": [],
			"who": "cer"
		},
		{
			"kind": "knowledge",
			"start": 2018,
			"end": null,
			"description": "Our work on assessment has imported more rigorous methods from educational measurement into CS education",
			"url": null,
			"projects": ["pllearning"],
			"who": "cer"
		},
		{
			"kind": "press",
			"start": 2021,
			"end": 2021,
			"description": "I was interviewed by Jared O'Leary on their BootUP CS podcast, where I talked about reflection, mentorship, and vulnerability.",
			"title": "Vulnerability, Reflection, and CS Education with Amy Ko",
			"author": "Jared O'Leary",
			"url": "https://jaredoleary.com/csk8feed/73",
			"projects": ["pllearning"],
			"who": "k12cs"
		},
		{
			"kind": "policy",
			"start": 2020,
			"end": 2020,
			"description": "I've coordinated with House representatives on policies that will expand the numbers of CS teachers nationwide",
			"url": null,
			"projects": [],
			"who": "k12cs"
		},
		{
			"kind": "curriculum",
			"start": 2013,
			"end": null,
			"description": "Our research on programming problem solving, programming language learning, programming strategies, and debugging has shaped Code.org's teacher professional development and it's secondary school curricula, impacting hundreds of thousands of U.S. youth",
			"url": "https://code.org",
			"projects": ["pllearning", "problemsolving"],
			"who": "k12cs"
		},
		{
			"kind": "curriculum",
			"start": 2013,
			"end": null,
			"description": "Our research on software engineering expertise informed the curriculum at New York's Academy for Software Engineering",
			"url": "http://www.afsenyc.org/",
			"projects": ["softexpertise"],
			"who": "k12cs"
		},
		{
			"kind": "product",
			"start": 2013,
			"end": null,
			"description": "Gidget influenced the design of Code.org's Code Studio",
			"url": "https://studio.code.org",
			"projects": ["pllearning"],
			"who": "k12cs"
		},
		{
			"kind": "product",
			"start": 2014,
			"end": null,
			"description": "Gidget influenced the design of Apple's Swift Playgrounds",
			"url": "https://www.apple.com/swift/playgrounds/",
			"projects": ["pllearning"],
			"who": "k12cs"
		},
		{
			"kind": "curriculum",
			"start": 2014,
			"end": null,
			"description": "Gidget has been played by tens of thousands of youth adults online, in summer camps, and in high schools",
			"url": "https://helpgidget.org",
			"projects": ["pllearning"],
			"who": "k12cs"
		},
		{
			"kind": "policy",
			"start": 2017,
			"end": null,
			"description": "The CS for All Washington advocacy group I direct has used our research to affect statewide CS education policy",
			"url": "http://csforallwa.org",
			"projects": ["csjustice"],
			"who": "k12cswa"
		},
		{
			"kind": "policy",
			"start": 2018,
			"end": null,
			"description": "Our research on transfer students has influenced admissions policy at the University of Washington",
			"url": null,
			"projects": ["csdiversity"],
			"who": "k12cswa"
		},
		{
			"kind": "community",
			"start": 2016,
			"end": null,
			"description": "As part of our research, we have taught in the University of Washington's Upward Bound program each summer, reaching dozens of students underrepresented in computing from Seattle's low-income immigrant and refugee communities",
			"url": "https://www.washington.edu/omad/upward-bound/",
			"projects": ["csdiversity"],
			"who": "k12cswa"
		},
		{
			"kind": "community",
			"start": 2017,
			"end": null,
			"description": "I've run a quarterly meetup, Sound CS Ed, to bring together hundreds of CS education teachers, researchers, policy makers, and product designers in Puget Sound",
			"url": "http://soundcsed.org",
			"projects": [],
			"who": "k12csps"
		},
		{
			"kind": "curriculum",
			"start": 2018,
			"end": 2019,
			"description": "I have served on the Seattle Public Schools CS Advisory board, shaping strategic goals",
			"url": null,
			"projects": [],
			"who": "k12csps"
		}
	],
	"degrees": [
		{
			"institution": "Carnegie Mellon University",
			"degree": "Doctorate in Human-Computer Interaction",
			"start": 2002,
			"end": 2008,
			"thesis": "Thesis: Asking and Answering Questions about the Causes of Software Behaviors",
			"committee": "Brad Myers (CMU, Chair), Bonnie John (CMU), Jonathan Aldrich (CMU), Gail Murphy (UBC)"
		},
		{
			"institution": "Oregon State University",
			"degree": "Honors Bachelor of Science in Computer Science and Psychology",
			"start": 1998,
			"end": 2002,
			"thesis": "Thesis: Individual Differences in Programming, Testing, and Debugging in a Statistical End-User Programming Environment",
			"committee": "Margaret Burnett (Computer Science) and Bob Uttl (Psychology)"
		}
	],
	"patents": [
		{
			"title": "Context- and Activity-Aware Content Selection",
			"year": "2017",
			"number": "U.S. Patent No. 9,727,561",
			"inventors": "Amy J. Ko and Victor Medina"
		},
		{
			"title": "Systems and Methods for Selection-Based Contextual Help Retrieval",
			"year": "2012",
			"number": "U.S. Patent No. 9,811,583",
			"inventors": "Parmit K. Chilana, Amy J. Ko, and Wobbrock, J.O."
		},
		{
			"title": "A Debugging Interface",
			"year": "2010",
			"number": "U.S. Patent No. 7,735,066",
			"inventors": "Amy J. Ko and Brad A. Myers"
		}
	],
	"jobs": [
		{
			"title": "Professor",
			"organization": "University of Washington, Seattle",
			"department": "The Information School + Paul G. Allen School of Computer Science & Engineering (courtesy)",
			"startdate": 2020,
			"enddate": null,
			"academic": true
		},
		{
			"title": "Associate Professor",
			"organization": "University of Washington, Seattle",
			"department": "The Information School + Paul G. Allen School of Computer Science & Engineering (courtesy)",
			"startdate": 2014,
			"enddate": 2020,
			"academic": true
		},
		{
			"title": "Co-founder and Chief Scientist",
			"organization": "AnswerDash, Inc.",
			"department": "Executive team",
			"startdate": 2015,
			"enddate": 2020,
			"academic": false
		},
		{
			"title": "Co-founder and Chief Technology Officer",
			"organization": "AnswerDash, Inc.",
			"department": "Executive team",
			"startdate": 2013,
			"enddate": 2015,
			"academic": false
		},
		{
			"title": "Assistant Professor",
			"organization": "University of Washington",
			"department": "The Information School + Paul G. Allen School of Computer Science & Engineering (courtesy)",
			"startdate": 2008,
			"enddate": 2014,
			"academic": true
		},
		{
			"title": "Research Intern",
			"organization": "Microsoft",
			"department": "Microsoft Research, Redmond",
			"startdate": 2006,
			"enddate": 2006,
			"academic": true
		},
		{
			"title": "Graduate Research Assistant",
			"organization": "Carnegie Mellon University",
			"department": "Human-Computer Interaction Institute, School of Computer Science",
			"startdate": 2002,
			"enddate": 2008,
			"academic": true
		},
		{
			"title": "Undergraduate Research Assistant",
			"organization": "Oregon State University",
			"department": "Department of Computer Science",
			"startdate": 1999,
			"enddate": 2002,
			"academic": true
		}
	],
	"recognitions": [
		{
			"title": "SIGCHI Academy",
			"year": 2022,
			"description": "A recognition given to honorary and leading individuals who have made substantial contributions ot the field of human-computer interaction, shaping the field."
		},
		{
			"title": "Oregon State University Council of Outstanding Early Career Engineers",
			"year": 2021,
			"description": "A recogntion given to distinguished Oregon State University alumni who are future leaders in their profession."
		},
		{
			"title": "Marsha Landolt Distinguished Graduate Mentor Award, Honorable Mention",
			"year": 2021,
			"description": "One of 20 faculty nominated and 2 awarded across all University of Washington campuses in 2021, in recognition of outstanding mentorship in doctoral education."
		},
		{
			"title": "ACM Senior Member",
			"year": 2020,
			"description": "For more than 10 years of technical leadership and professional contributions."
		},
		{
			"title": "ACM SIGCHI Exceptional Reviewer",
			"year": 2017,
			"description": "For one or more outstanding reviews at a SIGCHI conference"
		},
		{
			"title": "ACM SIGCHI Exceptional Reviewer",
			"year": 2016,
			"description": "For one or more outstanding reviews at a SIGCHI conference"
		},
		{
			"title": "University of Washington Presidential Entrepreneurial Faculty Fellow",
			"year": 2014,
			"description": "For entrepreneurial leadership in translating research to practice."
		},
		{
			"title": "National Science Foundation CAREER award",
			"year": 2010,
			"description": "NSF's most prestigious award in support of early-career faculty who have the potential to serve as academic role models in research and education."
		},
		{
			"title": "National Science Foundation Graduate Research Fellowship",
			"year": 2004,
			"description": "A five year fellowship recognizing outstanding graduate students in NSF-supported STEM disciplines."
		},
		{
			"title": "National Defense Science & Engineering Graduate Fellowship",
			"year": 2004,
			"description": "A three year fellowship in recognition of U.S. citizens with promise to advance science and engineering disciplinesof military importance."
		},
		{
			"title": "National Science Foundation Graduate Research Fellowship, Honorable Mention",
			"year": 2003,
			"description": "Recognition of an outstanding graduate students in NSF-supported STEM disciplines."
		},
		{
			"title": "CRA Outstanding Undergraduate, Honorable Mention",
			"year": 2001,
			"description": "Recognition of one of the top undergraduate researchers across all computer science research areas."
		},
		{
			"title": "Waldo-Cummings Outstanding Student Award",
			"year": 2001,
			"description": "Oregon State University's recognition of the top 5 undergraduates in the junior class of more than 5,000 students."
		},
		{
			"title": "ACM Student Chapter Excellence Award for School Service",
			"year": 2000,
			"description": "ACM's recognition of ACM student chapter leadership, earned while President of Oregon State University's ACM student chapter."
		},
		{
			"title": "Waldo-Cummings Outstanding Student Award (top",
			"year": 1999,
			"description": "Oregon State University's recognition of the top 5 undergraduates in the freshman class of more than 5,000 students."
		}
	],
	"editing": [
		{
			"title": "Editor in Chief",
			"venue": "ACM Transactions on Computing Education",
			"type": "journal",
			"commitment": {
				"start": "2021-12-01",
				"end": "2024-12-01",
				"hours": 3,
				"priority": 1
			}
		},
		{
			"title": "Associate Editor",
			"venue": "ACM Transactions on Computing Education",
			"type": "journal",
			"commitment": {
				"start": "2015-01-01",
				"end": "2021-08-01",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Associate Editor",
			"venue": "IEEE Transactions on Software Engineering",
			"type": "journal",
			"commitment": {
				"start": "2016-09-15",
				"end": "2019-09-15",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Co-Editor",
			"venue": "IEEE Software Special Issue on End-User Software Engineering",
			"type": "journal",
			"commitment": {
				"start": "2009-01-01",
				"end": "2009-09-15",
				"hours": 0.5,
				"priority": 0
			}
		},
		{
			"title": "Program Co-Chair",
			"venue": "@icer",
			"type": "conference",
			"commitment": {
				"start": "2019-09-01",
				"end": "2020-08-31",
				"hours": 4,
				"priority": 0
			}
		},
		{
			"title": "Program Co-Chair",
			"venue": "@icer",
			"type": "conference",
			"commitment": {
				"start": "2020-09-01",
				"end": "2021-08-20",
				"hours": 4,
				"priority": 0
			}
		},
		{
			"title": "Program Co-Chair",
			"venue": "@seet",
			"type": "conference",
			"commitment": {
				"start": "2020-01-01",
				"end": "2020-06-15",
				"hours": 2,
				"priority": 0
			}
		},
		{
			"title": "Program Sub-Committee Co-Chair",
			"venue": "@chi",
			"type": "conference",
			"commitment": {
				"start": "2011-05-01",
				"end": "2012-01-15",
				"hours": 3,
				"priority": 0
			}
		},
		{
			"title": "Program Sub-Committee Co-Chair",
			"venue": "@chi",
			"type": "conference",
			"commitment": {
				"start": "2012-05-01",
				"end": "2013-01-15",
				"hours": 3,
				"priority": 0
			}
		},
		{
			"venue": "@vlhcc",
			"title": "Program Co-Chair",
			"type": "conference",
			"commitment": {
				"start": "2011-01-15",
				"end": "2011-10-15",
				"hours": 3,
				"priority": 0
			}
		}
	],
	"reviewing": [
		{
			"venue": "National Science Foundation (CISE, EHR)",
			"title": "NSF Panelist",
			"years": [2011, 2012, 2014, 2017, 2018, 2020],
			"level": "panelist",
			"commitment": {
				"start": "09-15",
				"end": "06-15",
				"hours": 0.5,
				"priority": 1
			}
		},
		{
			"venue": "Princeton University Press",
			"title": "Book reviewer",
			"years": [2020],
			"level": "reviewer",
			"commitment": {
				"start": "10-15",
				"end": "11-15",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"venue": "@icse",
			"title": "Program Board Member",
			"years": [2018, 2019],
			"level": "pc",
			"commitment": {
				"start": "08-15",
				"end": "12-15",
				"hours": 4,
				"priority": 0
			}
		},
		{
			"venue": "Programming Experience Workshop (PX)",
			"title": "Program Committee Member",
			"years": [2017],
			"level": "pc"
		},
		{
			"venue": "@icer",
			"title": "Senior Program Committee Member",
			"years": [2014, 2015, 2017, 2019],
			"level": "pc"
		},
		{
			"venue": "@sigcse",
			"title": "Senior Program Committee Member",
			"years": [2016, 2017, 2018, 2019],
			"level": "pc"
		},
		{
			"venue": "Summit on Advances in Programming Languages (SNAPL)",
			"title": "Program Committee Member",
			"years": [2017],
			"level": "pc"
		},
		{
			"venue": "@icse",
			"title": "Program Committee Member",
			"years": [2014, 2016],
			"level": "pc"
		},
		{
			"venue": "Workshop on Evaluation and Usability of Programming Languages and Tools (PLATEAU)",
			"title": "Program Committee Member",
			"years": [2016],
			"level": "pc"
		},
		{
			"venue": "@chi",
			"title": "Associate Chair",
			"years": [2010, 2011, 2012, 2013],
			"level": "pc"
		},
		{
			"venue": "@uist",
			"title": "Associate Chair",
			"years": [2011],
			"level": "pc"
		},
		{
			"venue": "ACM Symposium on the Foundations of Software Engineering",
			"title": "Program Committee Member",
			"years": [2011],
			"level": "pc"
		},
		{
			"venue": "@vlhcc",
			"title": "Program Committee Member",
			"years": [2011],
			"level": "pc"
		},
		{
			"venue": "International Workshop on Search-Driven Development",
			"title": "Program Committee Member",
			"years": [2009, 2010],
			"level": "pc"
		},
		{
			"venue": "Workshop on User Evaluation for Software Engineering Researchers",
			"title": "Program Committee Member",
			"years": [2012, 2013],
			"level": "pc"
		},
		{
			"venue": "International Workshop on Live Programming",
			"title": "Program Committee Member",
			"years": [2013, 2017, 2018],
			"level": "pc"
		},
		{
			"venue": "Future Programming Workshop",
			"title": "Program Committee Member",
			"years": [2014],
			"level": "pc"
		},
		{
			"venue": "Workshop on Designing Technologies to Support Human Problem Solving",
			"years": [2018],
			"level": "reviewer"
		},
		{
			"venue": "@ese",
			"years": [2018, 2019, 2020],
			"level": "reviewer"
		},
		{
			"venue": "@chi",
			"years": [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
			"level": "reviewer",
			"commitment": {
				"start": "10-01",
				"end": "11-15",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"venue": "@vlhcc",
			"years": [2004, 2005, 2006, 2007, 2008, 2009, 2010],
			"level": "reviewer"
		},
		{
			"venue": "@uist",
			"years": [2005, 2006, 2007, 2008, 2009, 2010, 2013, 2014, 2015],
			"level": "reviewer"
		},
		{
			"venue": "Proceedings of the ACM on Human-Computer Interaction",
			"years": [2017, 2018],
			"level": "reviewer"
		},
		{
			"venue": "@toce",
			"years": [2015, 2016, 2017, 2018, 2019, 2020],
			"level": "reviewer"
		},
		{
			"venue": "International Journal of Human-Computer Studies (IJHCS)",
			"years": [2006, 2008],
			"level": "reviewer"
		},
		{
			"venue": "ACM Conference on Computer-Supported Cooperative Work (CSCW)",
			"years": [2010, 2011],
			"level": "reviewer"
		},
		{
			"venue": "ACM Symposium on Engineering Interactive Computing Systems (EICS)",
			"years": [2010],
			"level": "reviewer"
		},
		{
			"venue": "ACM Transactions on Software Engineering and Methodology (TOSEM)",
			"years": [2009],
			"level": "reviewer"
		},
		{
			"venue": "International Conference on Intelligent User Interfaces (IUI)",
			"years": [2009],
			"level": "reviewer"
		},
		{
			"venue": "@tse",
			"years": [2009],
			"level": "reviewer"
		},
		{
			"venue": "Advances in Human-Computer Interaction (AHCI)",
			"years": [2008],
			"level": "reviewer"
		},
		{
			"venue": "Graphics Interface (GI)",
			"years": [2006],
			"level": "reviewer"
		},
		{
			"venue": "Journal of Visual Languages and Computing (JVLC)",
			"years": [2004, 2005],
			"level": "reviewer"
		}
	],
	"doctoralCommittees": [
		{
			"name": "Mina Tari",
			"institution": "University of Washington",
			"department": "The Information School",
			"startdate": 2018,
			"enddate": 2022
		},
		{
			"name": "Bas Jansen",
			"institution": "Leiden University",
			"department": "Institute of Advanced Computer Science",
			"startdate": 2022,
			"enddate": 2022
		},
		{
			"name": "Sangho Su",
			"institution": "University of Waterloo",
			"department": "Computer Science",
			"startdate": 2022,
			"enddate": 2022
		},
		{
			"name": "Leah Perlmutter",
			"institution": "University of Washington",
			"department": "Computer Science & Enngineering",
			"startdate": 2021,
			"enddate": null
		},
		{
			"name": "Alex Okeson",
			"institution": "University of Washington",
			"department": "Computer Science & Enngineering",
			"startdate": 2021,
			"enddate": 2022
		},
		{
			"name": "Burren Peil",
			"institution": "University of Washington",
			"department": "Human-Centered Design and Engineering",
			"startdate": 2021,
			"enddate": null
		},
		{
			"name": "Anne Drew Hu",
			"institution": "Michigan State University",
			"department": "College of Education",
			"startdate": 2021,
			"enddate": null
		},
		{
			"name": "Jean Salac",
			"institution": "University of Chicago",
			"department": "Computer Science",
			"startdate": 2020,
			"enddate": 2021
		},
		{
			"name": "Lily Durwood",
			"institution": "University of Washington",
			"department": "Psychology",
			"startdate": 2020,
			"enddate": 2021
		},
		{
			"name": "Matthew Davidson",
			"institution": "University of Washington",
			"department": "College of Education",
			"startdate": 2020,
			"enddate": 2022
		},
		{
			"name": "Chenglong Wang",
			"institution": "University of Washington",
			"department": "Computer Science & Engineering",
			"startdate": 2019,
			"enddate": 2021
		},
		{
			"name": "Meen Chul Kim",
			"institution": "Drexel University",
			"department": "Information Science",
			"startdate": 2018,
			"enddate": 2021
		},
		{
			"name": "Srinivasan Iyer",
			"institution": "George Mason University",
			"department": "Computer Science",
			"startdate": 2018,
			"enddate": 2020
		},
		{
			"name": "David Gonzalez",
			"institution": "George Mason University",
			"department": "Computer Science",
			"startdate": 2018,
			"enddate": 2021
		},
		{
			"name": "Justin Smith",
			"institution": "North Carolina State University",
			"department": "Computer Science",
			"startdate": 2018,
			"enddate": 2019
		},
		{
			"name": "Alex Kale",
			"institution": "University of Washington",
			"department": "The Information School",
			"startdate": 2017,
			"enddate": 2021
		},
		{
			"name": "Aaron Bauer",
			"institution": "University of Washington",
			"department": "Computer Science & Engineering",
			"startdate": 2017,
			"enddate": 2019
		},
		{
			"name": "Elena Agapie",
			"institution": "University of Washington",
			"department": "Human-Centered Design and Engineering",
			"startdate": 2017,
			"enddate": 2020
		},
		{
			"name": "James Bornholt",
			"institution": "University of Washington",
			"department": "Computer Science & Engineering",
			"startdate": 2017,
			"enddate": 2018
		},
		{
			"name": "Abdullah Ali",
			"institution": "University of Washington",
			"department": "The Information School",
			"startdate": 2017,
			"enddate": 2018
		},
		{
			"name": "Yea-Seul Kim",
			"institution": "University of Washington",
			"department": "The Information School",
			"startdate": 2017,
			"enddate": 2020
		},
		{
			"name": "Lauren Milne",
			"institution": "University of Washington",
			"department": "Computer Science & Engineering",
			"startdate": 2016,
			"enddate": 2018
		},
		{
			"name": "Eric Butler",
			"institution": "University of Washington",
			"department": "Computer Science & Engineering",
			"startdate": 2016,
			"enddate": 2018
		},
		{
			"name": "Justin Huang",
			"institution": "University of Washington",
			"department": "Computer Science & Engineering",
			"startdate": 2016,
			"enddate": 2018
		},
		{
			"name": "Elena Agapie",
			"institution": "University of Washington",
			"department": "Human-Centered Design & Engineering",
			"startdate": 2016,
			"enddate": 2020
		},
		{
			"name": "Jonathan Bragg",
			"institution": "University of Washington",
			"department": "Computer Science & Engineering",
			"startdate": 2016,
			"enddate": 2018
		},
		{
			"name": "Nan-Chen Chen",
			"institution": "University of Washington",
			"department": "Human-Centered Design and Engineering",
			"startdate": 2016,
			"enddate": 2019
		},
		{
			"name": "Matthew Kay",
			"institution": "University of Washington",
			"department": "Computer Science & Engineering",
			"startdate": 2014,
			"enddate": 2016
		},
		{
			"name": "Catherine Baker",
			"institution": "University of Washington",
			"department": "Computer Science & Engineering",
			"startdate": 2012,
			"enddate": 2017
		},
		{
			"name": "Roshanak Zilouchian",
			"institution": "University of Illinois, Urbana-Champaign",
			"department": "Computer Science",
			"startdate": 2012,
			"enddate": 2014
		},
		{
			"name": "Sean Fullerton",
			"institution": "University of Washington",
			"department": "Information School",
			"startdate": 2012,
			"enddate": 2015
		},
		{
			"name": "Jared Bauer",
			"institution": "University of Washington",
			"department": "Information School",
			"startdate": 2011,
			"enddate": 2016
		},
		{
			"name": "Paul Gross",
			"institution": "Washington University in St. Louis",
			"department": "Computer Science",
			"startdate": 2011,
			"enddate": 2014
		},
		{
			"name": "Marilyn Ostergren",
			"institution": "University of Washington",
			"department": "Information School",
			"startdate": 2011,
			"enddate": 2014
		},
		{
			"name": "Jing Xie",
			"institution": "University of North Carolina, Charlotte",
			"department": "Computer Science, UNC Charlotte",
			"startdate": 2011,
			"enddate": 2012
		},
		{
			"name": "Kayur Patel",
			"institution": "University of Washington",
			"department": "Computer Science & Engineering",
			"startdate": 2008,
			"enddate": 2012
		},
		{
			"name": "Michael Toomim",
			"institution": "University of Washington",
			"department": "Computer Science & Engineering",
			"startdate": 2010,
			"enddate": 2013
		},
		{
			"name": "Travis Kriplean",
			"institution": "University of Washington",
			"department": "Computer Science & Engineering",
			"startdate": 2010,
			"enddate": 2012
		},
		{
			"name": "Elisabeth Jones",
			"institution": "University of Washington",
			"department": "Information School",
			"startdate": 2009,
			"enddate": 2011
		}
	],
	"service": [
		{
			"title": "Panel Member",
			"committee": "Kaiser Permanente Gender Health Advisory Panel",
			"level": "regional",
			"description": "Along with a group of a dozen other trans and non-binary community members, I provide guidance, ideas, feedback, and advocacy to Kaiser on their gender health services.",
			"commitment": {
				"start": "2021-02-01",
				"end": null,
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Executive Board Member",
			"committee": "Expanding Computing Education Pathways Alliance (ECEP)",
			"level": "national",
			"description": "I help define strategic actions that lead to a more inclusive project, better positioning the ECEP community to advocate for, promote, and embrace equity in computer science education.",
			"commitment": {
				"start": "2021-02-01",
				"end": "2023-02-01",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Director",
			"committee": "CS for All Washington",
			"level": "regional",
			"description": "I organize the group, which meets  monthly to inform policy, organize community, and centralize information about about Washington state's K-12 CS for All efforts on the web (https://cseforallwa.org). Supported by the NSF-funded Exploring Computing Education Pathways project (https://ecepalliance.org).",
			"commitment": {
				"start": "2018-05-01",
				"end": null,
				"hours": 2,
				"priority": 0
			}
		},
		{
			"title": "External Evaluator",
			"committee": "University of North Texas, Information Science, Academic Program Review",
			"level": "national",
			"description": "I participated in a formal evaluation of the department's programs.",
			"commitment": {
				"start": "2021-03-24",
				"end": "2021-04-02",
				"hours": 8,
				"priority": 0
			}
		},
		{
			"title": "Advisory Board Member",
			"committee": "ITU Center for Computing Education",
			"level": "international",
			"description": "I advice on the research centers scope and priorities.",
			"commitment": {
				"start": "2021-12-15",
				"end": null,
				"hours": 0,
				"priority": 0
			}
		},
		{
			"title": "Committee Member",
			"committee": "CRA-E",
			"level": "international",
			"description": "I work on projects that help create equitable pathways to participating in CS research.",
			"commitment": {
				"start": "2020-08-01",
				"end": null,
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Committee Member",
			"committee": "Code.org AP CS A advisory committee",
			"level": "national",
			"description": "I'm advising Code.org on the design and implementation of a new curriculuar effort.",
			"commitment": {
				"start": "2021-01-01",
				"end": "2022-06-15",
				"hours": 0.2,
				"priority": 0
			}
		},
		{
			"title": "Committee Member",
			"committee": "College Board AP CS Principles Standards Committee",
			"level": "national",
			"description": "I helped define assessments for the AP CS Principles exam.",
			"commitment": {
				"start": "2021-06-05",
				"end": "2021-06-21",
				"hours": 3,
				"priority": 0
			}
		},
		{
			"title": "Secretary",
			"committee": "Seattle Public Schools CS Advisory Board.",
			"level": "regional",
			"description": "I advise the city on its CS curriculum and teacher pathways.",
			"commitment": {
				"start": "2018-01-01",
				"end": "2020-03-01",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Committee member",
			"committee": "Computing Research Association (CRA) Undergraduate Research Award Committee",
			"level": "international",
			"description": "I helped select finalists and winners for the CRA award.",
			"commitment": {
				"start": "2018-01-01",
				"end": "2019-03-01",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Co-Chair",
			"committee": "SIGCSE Doctoral Consortium",
			"level": "international",
			"description": "I co-organized and co-ran the doctoral consortium, co-located with the ACM ICER conference annually.",
			"commitment": {
				"start": "2017-09-15",
				"end": "2019-09-15",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Member",
			"committee": "ACM Education Advisory Council",
			"level": "international",
			"description": "I helped create resources, curriculum standards, and education guidelines for the global CS community.",
			"commitment": {
				"start": "2017-08-01",
				"end": "2020-08-01",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Member",
			"committee": "Washington State Computer Science Leadership Team",
			"level": "regional",
			"description": "I provided expertise on CS learning to help shape state policy.",
			"commitment": {
				"start": "2017-01-01",
				"end": "2018-01-01",
				"hours": 0.1,
				"priority": 0
			}
		},
		{
			"title": "Curriculum design committee member",
			"committee": "Global Innovation Exchange (GIX), University of Washington",
			"level": "university",
			"description": "I helped design and structure the The UW Master of Science in Technology Innovation Program.",
			"commitment": {
				"start": "2015-03-01",
				"end": "2015-06-15",
				"hours": 2,
				"priority": 0
			}
		},
		{
			"title": "Co-author",
			"committee": "CRA Whitepaper on Computing Education Research",
			"level": "international",
			"description": "I co-authored this whitepaper to help spread the word about the importance of CS education research in CS departments.",
			"commitment": {
				"start": "2015-01-01",
				"end": "2015-03-15",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Director",
			"committee": "EUSES Consortium",
			"level": "national",
			"description": "I led annual meetings and maintained the website for the international research collective, and then officially ended the group.",
			"commitment": {
				"start": "2013-01-01",
				"end": "2015-08-01",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Steering Committee Member",
			"committee": "IEEE Symposium on Visual Languages and Human-Centric Computing",
			"level": "international",
			"description": "I helped select future conference locations and device conference publication policy.",
			"commitment": {
				"start": "2011-10-01",
				"end": "2015-10-01",
				"hours": 0.2,
				"priority": 0
			}
		},
		{
			"title": "Co-organizer",
			"committee": "Dagstuhl on Human-Centered Software Development Tools",
			"level": "international",
			"description": "I helped propose, plan, and run the weeklong workshop",
			"commitment": {
				"start": "2014-03-01",
				"end": "2015-08-01",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Co-founder",
			"committee": "Masters in Human-Computer Interaction and Design, University of Washington",
			"level": "university",
			"description": "I helped design, plan, and launch the inaugural year of the masters degree.",
			"commitment": {
				"start": "2013-01-01",
				"end": "2014-09-15",
				"hours": 2,
				"priority": 0
			}
		},
		{
			"title": "Co-organizer",
			"committee": "DUB Retreat, University of Washington",
			"level": "university",
			"description": "I co-organized the annual retreat for the HCI community at UW.",
			"commitment": {
				"start": "2013-06-01",
				"end": "2013-10-15",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Graduate Consortium Chair",
			"committee": "IEEE Symposium on Visual Languages and Human-Centric Computing",
			"level": "international",
			"description": "I co-organized and ran the doctoral consortium, reaching 40 doctoral students.",
			"commitment": {
				"start": "2009-01-01",
				"end": "2010-10-15",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Member",
			"committee": "iSchool Faculty Search",
			"level": "departmental",
			"description": "I helped search for and recruit data science teaching professors.",
			"commitment": {
				"start": "2020-10-15",
				"end": "2021-03-15",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Member",
			"committee": "iSchool Recognitions Committee",
			"level": "departmental",
			"description": "I helped identify, nominate, and recognize faculty, staff, and students with school-level awards.",
			"commitment": {
				"start": "2008-09-15",
				"end": "2009-06-15",
				"hours": 0.1,
				"priority": 0
			}
		},
		{
			"title": "Member",
			"committee": "iSchool Ph.D. Admissions Committee",
			"level": "departmental",
			"description": "I helped plan admissions policy, review Ph.D. applicaitons, and make final admissions recommendations.",
			"commitment": {
				"start": "2009-09-15",
				"end": "2010-06-15",
				"hours": 2,
				"priority": 0
			}
		},
		{
			"title": "Member",
			"committee": "iSchool Informatics Program Committee",
			"level": "departmental",
			"description": "I helped make decisions on program curriculum, policy, and procedures.",
			"commitment": {
				"start": "2010-09-15",
				"end": "2012-06-15",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Member",
			"committee": "iSchool Elected Faculty Council",
			"level": "departmental",
			"description": "I helped advance the interests of faculty in the school through policy change and advocacy to the dean, hepling to secure an annual dispursement of flexible funding.",
			"commitment": {
				"start": "2012-09-15",
				"end": "2013-06-15",
				"hours": 3,
				"priority": 0
			}
		},
		{
			"title": "Program Chair",
			"committee": "Masters in HCI+Design",
			"level": "university",
			"description": "I led the fourth year of the masters degree, renewing the campus-wide contract supporting its resources, hiring a new director to lead the program for the next three years, and securing a dedicated studio space in the former UW Alumni house.",
			"commitment": {
				"start": "2016-09-15",
				"end": "2017-09-15",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Member",
			"committee": "MHCI+D Faculty Search",
			"level": "university",
			"description": "I evaluated and recruited applicants to join the MHCI+D instructional faculty.",
			"commitment": {
				"start": "2012-09-15",
				"end": "2013-06-15",
				"hours": 2,
				"priority": 0
			}
		},
		{
			"title": "Member",
			"committee": "iSchool Faculty Search",
			"level": "departmental",
			"description": "I evaluated and recruited applicants to join the iSchool as tenure-track faculty.",
			"commitment": {
				"start": "2012-09-15",
				"end": "2014-04-15",
				"hours": 2,
				"priority": 0
			}
		},
		{
			"title": "Member",
			"committee": "MHCI+D Executive Committee",
			"level": "university",
			"description": "I helped set policy and procedures for the masters degree.",
			"commitment": {
				"start": "2013-09-15",
				"end": "2015-06-15",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Program Chair",
			"committee": "Informatics",
			"level": "departmental",
			"description": "I oversee the iSchool's undergraduate degree, which has nearly 500 students and graduates more than 200 per year. I identify curricular, community, and policy priorities, organize discussions of proposed changes, and implement the changes with the support of staff.I reframed the curriculum around the study, design, and development of information technology for the good of people, organizations, and society; I reduced reliance on guest faculty; I increased the inclusiveness and scalability of admissions; I grew the program by over 50%; and I increased the percept of women in the program to 40% and increased the representation of Black and Latinx by 100%.",
			"commitment": {
				"start": "2017-03-15",
				"end": "2022-06-15",
				"hours": 6,
				"priority": 1
			}
		},
		{
			"title": "Chair",
			"committee": "iSchool Informatics Admissions Committee",
			"level": "departmental",
			"description": "I designed, planned, and executed an admissions process with the support of staff, reviewing over 800 applications a year. I implemented many anti-racist efforts, including implicit bias training and removal of structurally racist evaluation criteria",
			"commitment": {
				"start": "2016-09-15",
				"end": "2020-06-15",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Member",
			"committee": "iSchool Academics Council",
			"level": "departmental",
			"description": "I deliberate with the other program chairs and the Associate Dean for Academics on school-wide policy issues, as well as approve program-level changes.",
			"commitment": {
				"start": "2016-09-15",
				"end": "2022-06-15",
				"hours": 1,
				"priority": 0
			}
		},
		{
			"title": "Member",
			"committee": "iSchool Leadership Council",
			"level": "departmental",
			"description": "I deliberate with the Dean and numerous leaders across the iSchool to make strategic choices about the school's initiatives and finances.",
			"commitment": {
				"start": "2016-09-15",
				"end": "2022-06-15",
				"hours": 0.5,
				"priority": 0
			}
		},
		{
			"title": "President",
			"committee": "Oregon State University ACM Student Chapter",
			"level": "departmental",
			"description": "I served as ACM Student Chapter president for three years, hosting the ACM International Collegiate Programming Contest, launching two years of student-taught 1 credit pass/fail courses to address curricular gaps, and bi-weekly pizza gatherings.",
			"commitment": {
				"start": "2000-09-15",
				"end": "2002-06-15",
				"hours": 2,
				"priority": 0
			}
		}
	],
	"funding": [
		{
			"id": "googlestepcsgift",
			"title": "STEP CS scholarships",
			"funder": "Google",
			"award": null,
			"investigators": "Amy J. Ko (PI), Anne Beitlers (Co-PI)",
			"amount": "$400,000",
			"category": "service",
			"description": "An unrestricted gift to support the STEP CS program.",
			"url": null,
			"private": false,
			"commitment": {
				"start": "2022-09-15",
				"end": "2026-09-15",
				"hours": 0,
				"priority": 1
			}
		},
		{
			"id": "provoststep",
			"title": "Supporting CS teacher pathways",
			"funder": "UW Provost's Office",
			"award": null,
			"investigators": "Amy J. Ko (PI), Anne Beitlers (Co-PI)",
			"amount": "$200,000",
			"category": "service",
			"description": "Provides two years of tuition subsidy for the new STEP CS secondary CS teacher education program in the College of Education.",
			"url": null,
			"private": false,
			"commitment": {
				"start": "2022-09-15",
				"end": "2024-09-15",
				"hours": 0,
				"priority": 1
			}
		},
		{
			"id": "nsfstepcssupplement",
			"title": "Supplement for Grade 6-12 Data Science Education",
			"funder": "National Science Foundation",
			"award": "#2031265",
			"investigators": "Amy J. Ko (PI), Anne Beitlers (Co-PI)",
			"amount": "$200,000",
			"category": "service",
			"description": "Provides tuition subsidy for the new STEP CS secondary CS teacher education program in the College of Education, with a focus on data science education.",
			"url": null,
			"private": false,
			"commitment": {
				"start": "2022-09-15",
				"end": "2024-09-15",
				"hours": 0,
				"priority": 1
			}
		},
		{
			"id": "ecep3",
			"title": "Equity in Computing Education Policies, Pathways, and Practices",
			"funder": "National Science Foundation",
			"award": "#2137834",
			"investigators": "Carol Fletcher (PI), Debra Richardson (Co-PI), Anne Ottenbreit-Leftwich (Co-PI), Joshua Childs (Co-PI), Sarah Dunton (Co-PI), Amy Ko (Senior Personnel)",
			"amount": "$3,599,041",
			"category": "service",
			"description": "Expands pathways for K-12 students to participate in computing education.",
			"url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2137834&HistoricalAwards=false",
			"commitment": {
				"start": "2021-10-01",
				"end": "2024-09-30",
				"hours": 0.5,
				"priority": 1
			}
		},
		{
			"id": "accesscomputing4",
			"title": "AccessComputing Alliance",
			"funder": "National Science Foundation",
			"award": "#2137312",
			"investigators": "Richard Ladner (PI), Sheryl Burgstahler (Co-PI), Raja Kushalnagar (Co-PI), Stacy Branham (Co-PI), Elain Short (Co-PI), Amy Ko (Senior Personnel)",
			"amount": "$2,850,000",
			"category": "service",
			"description": "Expands pathways for students with disabilities to participate in computing education.",
			"url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2137312&HistoricalAwards=false",
			"commitment": {
				"start": "2021-10-01",
				"end": "2024-09-30",
				"hours": 2,
				"priority": 1
			}
		},
		{
			"id": "fairassess",
			"title": "Developing Authentic and Fair Computer Science Assessments",
			"funder": "National Science Foundation",
			"award": "#2100296",
			"investigators": "Mo Zhang (PI), Amy J. Ko (PI), Min Li (Co-PI)",
			"amount": "$877,449",
			"category": "research",
			"description": "Explores ways of using problem solving process data to ensure more equitable, reliable, and valid CS assessments of programming skill.",
			"url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2100296&HistoricalAwards=false",
			"commitment": {
				"start": "2021-10-01",
				"end": "2024-09-30",
				"hours": 2,
				"priority": 1
			}
		},
		{
			"id": "endusersynth",
			"title": "End-User Programming with Synthesis-Guided Interaction Models",
			"funder": "National Science Foundation",
			"award": "#2122950",
			"investigators": "Ratislav Bodik (PI), Amy J. Ko (Co-PI)",
			"amount": "$749,739",
			"category": "research",
			"description": "Invents new applications of program synthesis to supporting learning and end-user programming.",
			"url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2122950&HistoricalAwards=false",
			"commitment": {
				"start": "2021-10-01",
				"end": "2024-09-30",
				"hours": 2,
				"priority": 1
			}
		},
		{
			"id": "googlecser",
			"title": "Broadening Participation with CS Counternarratives",
			"funder": "Google",
			"award": null,
			"investigators": "Amy J. Ko (PI), Anne Beitlers (Co-PI)",
			"amount": "$70,000",
			"category": "research",
			"description": "Explores ways of engaging students in CS counternarratives to develop critical consciousness of computing.",
			"url": "https://research.google/outreach/featured-research-collaborations/cser/recipients/",
			"private": false,
			"commitment": {
				"start": "2021-07-01",
				"end": "2022-06-30",
				"hours": 1,
				"priority": 1
			}
		},
		{
			"id": "csjustice",
			"title": "Justice-Focused Secondary CS Teacher Education",
			"funder": "National Science Foundation",
			"award": "#2031265",
			"investigators": "Amy J. Ko (PI), Anne Beitlers (Co-PI)",
			"amount": "$999,723",
			"category": "research",
			"description": "Designing and launching a justice-focused CS education masters program and studying teacher learning about CS from a justice lens.",
			"url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2031265",
			"commitment": {
				"start": "2020-05-15",
				"end": "2023-09-15",
				"hours": 4,
				"priority": 1
			}
		},
		{
			"id": "fmitf",
			"title": "Formal Verification of Accessibility",
			"funder": "National Science Foundation",
			"award": "#1836813",
			"investigators": "Michael Ernst (PI), Amy J. Ko (Co-PI), Jennifer Mankoff (Co-PI), Zach Tatlock (Co-PI)",
			"amount": "$738,125",
			"category": "research",
			"description": "New techniques to formally verify a range of accessibility properties of web applications.",
			"url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1836813",
			"commitment": {
				"start": "2019-10-01",
				"end": "2022-10-01",
				"hours": 1,
				"priority": 1
			}
		},
		{
			"id": "strategies",
			"title": "Programming Strategies",
			"funder": "National Science Foundation",
			"award": "#1703304",
			"investigators": "Thomas LaToza (PI, George Mason University), Amy J. Ko (Co-PI, University of Washington)",
			"amount": "$1,199,555",
			"category": "research",
			"description": "Develop of a new science of programming strategies.",
			"url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1703734",
			"commitment": {
				"start": "2017-08-15",
				"end": "2021-08-15",
				"hours": 2,
				"priority": 1
			}
		},
		{
			"id": "csassess",
			"title": "Automatically Synthesizing Valid, Personalized, Formative Assessments of CS1 Concepts",
			"funder": "National Science Foundation",
			"award": "#1735123",
			"investigators": "Amy J. Ko (PI, University of Washington), Min Li (Co-PI, University of Washington)",
			"amount": "$549,857",
			"category": "research",
			"description": "New model of CS1 concepts, new approaches to formative assessment and feedback, new techniques problem synthesis, and a new paradigm for intelligent tutoring of programming.",
			"url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1735123",
			"commitment": {
				"start": "2017-07-15",
				"end": "2020-07-15",
				"hours": 4,
				"priority": 1
			}
		},
		{
			"id": "accesscomp",
			"title": "BPC-AE: AccessComputing",
			"funder": "National Science Foundation",
			"award": "#1539179",
			"investigators": "Richard Ladner (PI, University of Washington), Sheryl Burgstahler (Co-PI), Amy J. Ko (Co-PI), Jacob O. Wobbrock (Co-PI)",
			"amount": "$3,797,990",
			"category": "service",
			"description": "Increases access to computing for students with disabilities.",
			"url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1539179",
			"commitment": {
				"start": "2015-06-15",
				"end": "2021-06-15",
				"hours": 2,
				"priority": 0
			}
		},
		{
			"id": "explore",
			"title": "HCC: Large: Variations to Support Exploratory Programming",
			"funder": "National Science Foundation",
			"award": "#1314399",
			"investigators": "Brad Myers (PI, Carnegie Mellon University), Amy J. Ko (Co-PI), Margaret Burnett (Co-PI, Oregon State University), Martin Erwig (Co-PI, Oregon State University), Anita Sarma (Co-PI, University of Nebraska, Lincoln), Gregg Rothermel (Co-PI, University of Nebraska, Lincoln)",
			"amount": "$2,999,991",
			"category": "research",
			"description": "New theory, tools, and techniques for supporting multiple versions and variations of programs.",
			"url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1559657",
			"commitment": {
				"start": "2013-08-15",
				"end": "2017-08-15",
				"hours": 3,
				"priority": 0
			}
		},
		{
			"id": "gidget",
			"title": "CER: Computing Education through Collaborative Debugging",
			"funder": "National Science Foundation",
			"award": "#1240786",
			"investigators": "Amy J. Ko (PI), Margaret Burnett (Co-PI, Oregon State University), Catherine Law (Co-PI, Oregon State University)",
			"amount": "$599,999",
			"category": "research",
			"description": "Debugging puzzle games as a new method for engaging, efficient learning of computer programming.",
			"url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1240786",
			"commitment": {
				"start": "2012-07-15",
				"end": "2015-07-15",
				"hours": 3,
				"priority": 0
			}
		},
		{
			"id": "career",
			"title": "CAREER: Enabling and Exploiting Evidence-Based Bug Triage",
			"funder": "National Science Foundation",
			"award": "#1153625",
			"investigators": "Amy J. Ko (PI)",
			"amount": "$592,456",
			"category": "research",
			"description": "Studies and tools for supporting analyzing and prioritizing bug reports.",
			"url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=0952733",
			"commitment": {
				"start": "2010-09-15",
				"end": "2014-09-15",
				"hours": 5,
				"priority": 0
			}
		},
		{
			"id": "wfund",
			"title": "W Fund Early Stage Capital Investment",
			"funder": "W Fund",
			"award": null,
			"investigators": "Jacob O. Wobbrock (CEO), Amy J. Ko (CTO)",
			"amount": "$500,000",
			"category": "service",
			"description": "Gap fund to support the commercialization of the LemonAid research project.",
			"url": null,
			"commitment": {
				"start": "2013-07-15",
				"end": "2014-07-15",
				"hours": 0,
				"priority": 0
			}
		},
		{
			"id": "seif",
			"title": "Mobile/Social Debugging Games for Computing Education",
			"funder": "Microsoft Research Software Engineering Innovation Foundation Award",
			"award": null,
			"investigators": "Amy J. Ko (PI)",
			"amount": "$25,000",
			"category": "research",
			"description": "Gift to support the Gidget research project.",
			"url": null,
			"commitment": {
				"start": "2013-07-15",
				"end": "2014-07-15",
				"hours": 0,
				"priority": 0
			}
		},
		{
			"id": "googlelemon",
			"title": "Selection-Based Contextual Help in the Wild",
			"funder": "Google Faculty Research Award",
			"award": null,
			"investigators": "Amy J. Ko (PI)",
			"amount": "$47,359",
			"category": "research",
			"description": "Gift to support the LemonAid research project.",
			"url": null,
			"commitment": {
				"start": "2012-07-15",
				"end": "2013-07-15",
				"hours": 0,
				"priority": 0
			}
		},
		{
			"id": "gidgetrrf",
			"title": "Automatic, Individualized Instructional Feedback to Improve Learning in an Online Programming Game",
			"funder": "University of Washington, Royalty Research Fund",
			"award": null,
			"investigators": "Amy J. Ko (PI)",
			"amount": "$32,122",
			"category": "research",
			"description": "Early stage internal grant to support Gidget.",
			"url": null,
			"commitment": {
				"start": "2012-07-15",
				"end": "2013-07-15",
				"hours": 0,
				"priority": 0
			}
		},
		{
			"id": "c4clemon",
			"title": "Chime: Bringing Crowdsourced Contextual Help to the Masses",
			"funder": "UW Center for Commercialization",
			"award": null,
			"investigators": "Jacob O. Wobbrock (PI) and Amy J. Ko (Co-PI)",
			"amount": "$50,000",
			"category": "service",
			"description": "Early stage internal grant to support the commercialization of LemonAid.",
			"url": null,
			"commitment": {
				"start": "2012-01-01",
				"end": "2013-01-01",
				"hours": 0,
				"priority": 0
			}
		},
		{
			"id": "msft",
			"title": "Software Developer Help Seeking on the Web",
			"funder": "Microsoft",
			"award": null,
			"investigators": "Amy J. Ko (PI)",
			"amount": "$6,200",
			"category": "research",
			"description": "Gift to support research on developer help seeking.",
			"url": null,
			"commitment": {
				"start": "2010-03-15",
				"end": "2011-03-15",
				"hours": 3,
				"priority": 0
			}
		},
		{
			"id": "grfp",
			"title": "NSF Graduate Research Fellowship",
			"funder": "National Science Foundation",
			"award": null,
			"investigators": "Amy J. Ko (PI)",
			"amount": "$75,000",
			"category": "research",
			"description": "A 3-year competitive fellowship for new doctoral students",
			"url": null,
			"commitment": {
				"start": "2003-08-15",
				"end": "2008-08-15",
				"hours": 0,
				"priority": 0
			}
		},
		{
			"id": "ndseg",
			"title": "National Defense Science and Engineering Graduate Fellowship",
			"funder": "Department of Defense",
			"award": null,
			"investigators": "Amy J. Ko (PI)",
			"amount": "$75,000",
			"category": "research",
			"description": "A 3-year competitive fellowship for new doctoral students",
			"url": null,
			"commitment": {
				"start": "2003-08-15",
				"end": "2006-08-15",
				"hours": 4,
				"priority": 0
			}
		}
	],
	"travel": [
		{
			url: null,
			title: "MIT",
			details: "I'm visiting the HCI community to talk about computing education research.",
			category: "research",
			commitment: {
				start: "2022-10-25",
				end: "2022-10-25",
				hours: 20,
				priority: 2
			},
			report: null
		},
		{
			url: null,
			title: "Harvard",
			details: "I'm visiting the HCI community to talk about computing education research.",
			category: "research",
			commitment: {
				start: "2022-10-24",
				end: "2022-10-24",
				hours: 8,
				priority: 2
			},
			report: null
		},
		{
			"url": null,
			"title": "Simon Fraser University",
			"details": "I'm visiting the faculty and students to talk about computing education research.",
			"category": "research",
			"commitment": {
				"start": "2022-09-19",
				"end": "2022-09-20",
				"hours": 16,
				"priority": 2
			},
			"report": null
		},
		{
			"url": "https://icer2022.acm.org/",
			"title": "2022 ACM International Computing Education Research Conference",
			"details": "I'm attending and have two student-led papers we'll present.",
			"category": "research",
			"commitment": {
				"start": "2022-08-04",
				"end": "2022-08-12",
				"hours": 40,
				"priority": 2
			},
			"report": null
		},
		{
			"url": "https://www.dagstuhl.de/en/program/calendar/semhp/?semnr=22302",
			"title": "Dagstuhl on Educational Programming Languages and Systems",
			"details": "I'm attending this workshop as a participant.",
			"category": "research",
			"commitment": {
				"start": "2022-07-24",
				"end": "2022-07-29",
				"hours": 40,
				"priority": 2
			},
			"report": null
		},
		{
			"url": "https://www.dagstuhl.de/en/program/calendar/semhp/?semnr=22231",
			"title": "Dagstuhl on Theories of Programming",
			"details": "I'm co-organzing this workshop on establishing scientific foundations of programming.",
			"category": "research",
			"commitment": {
				"start": "2022-06-06",
				"end": "2022-06-10",
				"hours": 40,
				"priority": 2
			},
			"report": "https://medium.com/bits-and-behavior/dagstuhl-trip-report-theories-of-programming-382543a3e540"
		},
		{
			"url": null,
			"title": "Exploring Computing Education Pathways 2022 Summit",
			"details": "National K-12 CS Education policy summit, including 23 U.S. states and territories.",
			"category": "research",
			"commitment": {
				"start": "2022-05-03",
				"end": "2022-05-04",
				"hours": 24,
				"priority": 2
			},
			"report": "https://medium.com/bits-and-behavior/chi-2022-ecep-2022-equity-oh-my-40f3ffdf816"
		},
		{
			"url": "https://sigcse2022.sigcse.org",
			"title": "SIGCSE 2022 Technical Symposium",
			"details": "Two of my PhD students are presenting papers; I'm co-organizing two pre-symposium workshops and presenting on three panels.",
			"category": "research",
			"commitment": {
				"start": "2022-03-01",
				"end": "2022-03-06",
				"hours": 40,
				"priority": 2
			},
			"report": "https://medium.com/bits-and-behavior/sigcse-2022-trip-report-reunited-cf5fd2bce3e"
		},
		{
			"url": "https://stpp.fordschool.umich.edu/event/2022/cultivating-socially-responsible-engineers-role-universities-and-public-policy",
			"title": "University of Michigan",
			"details": "I'm serving on a panel on Equity, Justice, and Engineering Education sponsored by the Science, Technology, and Public Policy (STPP) Program at the Ford School of Public Policy.",
			"category": "research",
			"commitment": {
				"start": "2022-03-20",
				"end": "2022-03-22",
				"hours": 16,
				"priority": 2
			},
			"report": "https://medium.com/bits-and-behavior/a-visit-to-the-university-of-michigans-interactive-and-social-computing-group-526b32a9970a"
		},
		{
			"url": "https://www.dagstuhl.de/en/program/calendar/semhp/?semnr=22052",
			"title": "Dagstuhl on Human Factors Impact on Programming Error Messages",
			"details": "Twenty-nine HCI, CS Ed, and PL researchers meet to discuss error message design.",
			"category": "research",
			"commitment": {
				"start": "2022-01-30",
				"end": "2022-02-02",
				"hours": 16,
				"priority": 2
			},
			"report": "https://medium.com/bits-and-behavior/dagstuhl-trip-report-people-programs-and-programming-errors-6d2430e6492f"
		},
		{
			"url": "http://csedcon.com",
			"title": "CSEdCon",
			"details": "I'm attending the opening and closing plenaries on K-12 CS education policy and education reform.",
			"category": "service",
			"commitment": {
				"start": "2021-11-03",
				"end": "2021-11-04",
				"hours": 4,
				"priority": 1
			},
			"report": null
		},
		{
			"url": "https://conf.researchr.org/home/RE-2021",
			"title": "RE 2021",
			"details": "I'm giving an invited keynote",
			"category": "research",
			"commitment": {
				"start": "2021-09-20",
				"end": "2021-09-24",
				"hours": 20,
				"priority": 1
			},
			"report": null
		},
		{
			"url": "http://icer2021.acm.org",
			"title": "ICER 2021",
			"details": "Conference chairing and attendance",
			"category": "research",
			"commitment": {
				"start": "2021-08-16",
				"end": "2021-08-20",
				"hours": 40,
				"priority": 2
			},
			"report": null
		},
		{
			"url": null,
			"title": "CRA-E Annual Board Meeting",
			"details": "Planning pathways into CS research.",
			"category": "research",
			"commitment": {
				"start": "2021-07-29",
				"end": "2021-07-39",
				"hours": 8,
				"priority": 1
			},
			"report": null
		},
		{
			"url": null,
			"title": "NSF Panel",
			"details": "Peer reviewing research proposals",
			"category": "research",
			"commitment": {
				"start": "2021-06-01",
				"end": "2021-06-02",
				"hours": 10,
				"priority": 1
			},
			"report": null
		},
		{
			"url": "http://respect2021.stcbp.org",
			"title": "RESPECT 2021",
			"details": "I'm giving an invited keynote",
			"category": "research",
			"commitment": {
				"start": "2021-05-23",
				"end": "2021-05-27",
				"hours": 5,
				"priority": 1
			},
			"report": "https://medium.com/bits-and-behavior/respect-2021-toward-justice-focused-computing-education-65848b637db2"
		},
		{
			"url": "http://chi2021.acm.org",
			"title": "CHI 2021",
			"details": "HCI research conference",
			"category": "research",
			"commitment": {
				"start": "2021-05-10",
				"end": "2021-05-13",
				"hours": 20,
				"priority": 1
			},
			"report": null
		},
		{
			"url": null,
			"title": "UC Irvine, Digital Learning Lab",
			"details": "Invited research talk",
			"category": "research",
			"commitment": {
				"start": "2021-04-16",
				"end": "2021-04-16",
				"hours": 2,
				"priority": 1
			},
			"report": null
		},
		{
			"url": "http://sigcse2021.sigcse.org",
			"title": "SIGCSE 2021",
			"details": "Presenting and attending.",
			"category": "research",
			"commitment": {
				"start": "2021-03-15",
				"end": "2021-03-20",
				"hours": 10,
				"priority": 1
			},
			"report": null
		},
		{
			"url": null,
			"title": "Caltech, Keller Colloquium in Computing and Mathematical Sciences",
			"details": "Invited research talk and 1 on 1 meetings with faculty and students",
			"category": "research",
			"commitment": {
				"start": "2021-03-01",
				"end": "2021-03-01",
				"hours": 5,
				"priority": 1
			},
			"report": null
		},
		{
			"url": null,
			"title": "UC Davis, Computer Science Seminar",
			"details": "Invited research talk",
			"category": "research",
			"commitment": {
				"start": "2021-02-12",
				"end": "2021-02-12",
				"hours": 2,
				"priority": 1
			},
			"report": null
		},
		{
			"url": "https://www.cis.upenn.edu/events/",
			"title": "University of Pennsylvania, Computer and Information Science Colloqium",
			"details": "Invited research talk and 1 on 1 meetings with faculty and students",
			"category": "research",
			"commitment": {
				"start": "2020-11-10",
				"end": "2020-11-10",
				"hours": 5,
				"priority": 1
			},
			"report": "https://medium.com/bits-and-behavior/encouraging-more-critical-computing-a-virtual-trip-report-4ec38cf68635"
		},
		{
			"url": null,
			"title": "IT University of Copenhagen",
			"details": "Gave one of three invited keynotes at the launch of the new Center for Computing Education Research",
			"category": "research",
			"commitment": {
				"start": "2020-11-05",
				"end": "2020-11-05",
				"hours": 3,
				"priority": 1
			},
			"report": null
		},
		{
			"url": "https://www.hcii.cmu.edu/seminar-series",
			"title": "Carnegie Mellon University, HCI Institute Seminar",
			"details": "Invited research talk and a series of 1 on 1 meetings with faculty.",
			"category": "research",
			"commitment": {
				"start": "2020-10-30",
				"end": "2020-10-30",
				"hours": 5,
				"priority": 1
			},
			"report": "https://medium.com/bits-and-behavior/encouraging-more-critical-computing-a-virtual-trip-report-4ec38cf68635"
		},
		{
			"url": "https://engineering.virginia.edu/departments/computer-science/news/distinguished-speaker-series",
			"title": "University of Virginia, CS Distinguished Speaker Series",
			"details": "Invited research talk and a series of 1 on 1 meetings with faculty.",
			"category": "research",
			"commitment": {
				"start": "2020-10-21",
				"end": "2020-10-21",
				"hours": 5,
				"priority": 1
			},
			"report": "https://medium.com/bits-and-behavior/encouraging-more-critical-computing-a-virtual-trip-report-4ec38cf68635"
		},
		{
			"url": "https://www.colorado.edu/cmci/infoscience",
			"title": "University of Colorado Boulder Information Science Colloquium",
			"details": "Invited research talk at the Department of Information Science and the College of Media, Communication and Information colloqium, with a followup discussion with early Ph.D. students.",
			"category": "research",
			"commitment": {
				"start": "2020-10-07",
				"end": "2020-10-07",
				"hours": 2,
				"priority": 1
			},
			"report": "https://medium.com/bits-and-behavior/encouraging-more-critical-computing-a-virtual-trip-report-4ec38cf68635"
		},
		{
			"url": "https://icer.acm.org",
			"title": "ICER 2020",
			"details": "The 2020 ACM International Computing Education Research conference, held online. I was the junior program chair and led the planning of the event.",
			"category": "research",
			"commitment": {
				"start": "2020-08-10",
				"end": "2020-08-13",
				"hours": 16,
				"priority": 1
			},
			"report": "https://medium.com/bits-and-behavior/acm-icer-2020-trip-report-virtual-serendipity-6134c8ddb9d8"
		},
		{
			"url": "https://shriram.github.io/pl-hci-school-2020/",
			"title": "PL+HCI Swimmer School",
			"details": "A summer school that brought together perspectives on HCI and programming languages research. I gave the first invited talk on how to discover things about programming by making and evaluating tools.",
			"category": "service",
			"commitment": {
				"start": "2020-08-03",
				"end": "2020-08-03",
				"hours": 2,
				"priority": 1
			},
			"report": null
		},
		{
			"url": null,
			"title": "ISAT/DARPA End-User Mashup Workshop",
			"details": "This brought together experts in end-user programming and 'low-code' programming to inform future research opportunities in the U.S. government. I contributed as one of the experts.",
			"category": "research",
			"commitment": {
				"start": "2020-07-16",
				"end": "2020-07-16",
				"hours": 4,
				"priority": 1
			},
			"report": null
		},
		{
			"url": "https://www.youtube.com/watch?v=anEQg2C7l9M",
			"title": "APL LGBTQ+ Panel",
			"details": "This brought together a diverse panel of LGBTQ people in science and engineering to discuss their experiences in academia, research, and engineering. I served as a panelist. The panel was recorded.",
			"category": "service",
			"commitment": {
				"start": "2020-07-16",
				"end": "2020-07-16",
				"hours": 2,
				"priority": 1
			},
			"report": null
		},
		{
			"url": "https://web.cvent.com/event/c6254b47-740f-4232-a896-064f09fd0ab1/summary",
			"title": "CSTA 2020",
			"details": "The 2020 CSTA Conference brought together CS teachers from across North America for two days, online. I attended several sessions and met many teachers through the random chat feature.",
			"category": "service",
			"commitment": {
				"start": "2020-07-13",
				"end": "2020-07-14",
				"hours": 5,
				"priority": 1
			},
			"report": null
		},
		{
			"url": "https://cra.org/crae/",
			"title": "CRA-E Annual Meeting",
			"details": "I joined the Computing Research Association's Education board; this was my first full board meeting.",
			"category": "service",
			"commitment": {
				"start": "2020-06-23",
				"end": "2020-06-23",
				"hours": 4,
				"priority": 1
			},
			"report": null
		},
		{
			"url": "http://sigcse2020.sigcse.org/",
			"title": "SIGCSE 2020",
			"details": "I traveled to Portland, fully masked and distance, ready to speak in about seven sessions. The conference was canceled the morning of the first day.",
			"category": "research",
			"commitment": {
				"start": "2020-03-11",
				"end": "2020-03-12",
				"hours": 16,
				"priority": 1
			},
			"report": "https://medium.com/bits-and-behavior/sigcse-2020-trip-report-viral-edition-6d5f3c9a31bf"
		},
		{
			"url": "http://kolicalling.fi",
			"title": "Koli Calling 2019",
			"details": "I traveled to Joensuu, Finland to attend the conference, where I gave the keynote and my student Greg Nelson presented a paper.",
			"category": "research",
			"commitment": {
				"start": "2019-11-20",
				"end": "2019-11-24",
				"hours": 40,
				"priority": 1
			},
			"report": "https://medium.com/bits-and-behavior/koli-calling-2019-trip-report-computing-education-research-at-the-limits-572da5218414"
		},
		{
			"url": null,
			"title": "Defining CS for Washington State",
			"details": "I spent the day in Olympia, Washington, on the Evergreen State College campus, working with stakeholders from across the state to shape what counts as a CS class. This was intended to help implement a new state law requiring CS electives in high schools.",
			"category": "service",
			"commitment": {
				"start": "2019-11-06",
				"end": "2019-11-06",
				"hours": 8,
				"priority": 1
			},
			"report": "https://medium.com/bits-and-behavior/what-counts-as-computer-science-in-k-12-education-a7173ff87801"
		},
		{
			"url": null,
			"title": "Networking in Eastern Washington",
			"details": "I spent four days visiting Spokane, Pullman, and surrounding cities to meet dozens of passionate CS education advocates in schools, colleges, and universities.",
			"category": "service",
			"commitment": {
				"start": "2019-10-20",
				"end": "2019-11-02",
				"hours": 32,
				"priority": 1
			},
			"report": "https://medium.com/bits-and-behavior/trip-report-bridging-cs-for-all-across-western-and-eastern-washington-60e9543535e6"
		},
		{
			"url": "https://plateau-workshop.org",
			"title": "PLATEAU 2019",
			"details": "I spent a few days in New Orleans, serving as a panelist at the workshop and mentoring doctoral students.",
			"category": "research",
			"commitment": {
				"start": "2019-10-23",
				"end": "2019-11-25",
				"hours": 24,
				"priority": 1
			},
			"report": "https://medium.com/bits-and-behavior/plateau-2019-trip-report-building-community-around-human-aspects-of-programming-languages-c70e893930ce"
		},
		{
			"url": null,
			"title": "CSEdCon 2019",
			"details": "I spent three days in Las Vegas, meeting with state leaders in K-12 CS education.",
			"category": "service",
			"commitment": {
				"start": "2019-09-11",
				"end": "2019-09-13",
				"hours": 24,
				"priority": 1
			},
			"report": "https://medium.com/bits-and-behavior/csedcon-2019-trip-report-a-deep-dive-into-cs-education-policy-98efb62eb341"
		},
		{
			"url": "https://archive.icer.acm.org/icer-2019/",
			"title": "ACM ICER 2019",
			"details": "I spent four days in Toronto, Canada, giving papers, and kicking off my role as program co-chair.",
			"category": "research",
			"commitment": {
				"start": "2019-08-12",
				"end": "2019-08-15",
				"hours": 40,
				"priority": 2
			},
			"report": "https://medium.com/bits-and-behavior/acm-icer-2019-trip-report-leveling-up-on-theory-statistics-and-significance-876b6d74148d"
		},
		{
			"url": "https://www.acm.org/education/education-governance",
			"title": "ACM Education Advisory Council Annual Meeting",
			"details": "I spent three days in Toronto, Canada, discussing CS education across the globe.",
			"category": "service",
			"commitment": {
				"start": "2019-08-05",
				"end": "2019-08-06",
				"hours": 16,
				"priority": 2
			},
			"report": "https://medium.com/bits-and-behavior/2019-acm-education-advisory-council-meeting-its-complicated-b715fba0c8c"
		},
		{
			"url": "https://www.dagstuhl.de/en/program/calendar/semhp/?semnr=19281",
			"title": "Dagstuhl - Notional Machines",
			"details": "I spent the week in western Germany at Dagstuhl, talking about notional machines.",
			"category": "research",
			"commitment": {
				"start": "2019-07-08",
				"end": "2019-07-13",
				"hours": 48,
				"priority": 2
			},
			"report": "https://amyjko.medium.com/dagstuhl-trip-report-learning-and-teaching-programming-language-semantics-b8d8d9007380"
		},
		{
			"url": null,
			"title": "NextGen STEM Teacher Preparation Retreat",
			"details": "I spent the day on the Western Washington University campus doing state planning on STEM teacher education with leaders across Washington state.",
			"category": "service",
			"commitment": {
				"start": "2019-06-24",
				"end": "2019-06-25",
				"hours": 16,
				"priority": 1
			},
			"report": "https://medium.com/bits-and-behavior/preparing-future-stem-teachers-for-our-computational-future-c4bc1b64013d"
		},
		{
			"url": "https://www.video.ethz.ch/speakers/d-infk/2019/spring/251-0100-00L.html",
			"title": "ETH Invited Talk",
			"details": "I spent two days at ETH Zurich's CS department, giving an invited talk and speaking to its many faculty and Ph.D. students.",
			"category": "research",
			"commitment": {
				"start": "2019-05-13",
				"end": "2019-05-19",
				"hours": 48,
				"priority": 2
			},
			"report": "https://medium.com/bits-and-behavior/a-visit-to-eth-zurich-computer-science-f09c49fa7da"
		},
		{
			"url": "http://chi2019.acm.org",
			"title": "ACM CHI 2019",
			"details": "I spent five days at the ACM SIGCHI Conference on Human Factors in Computing, learning about the latest discoveries in HCI, attending many receptions, and reconnecting with colleagues.",
			"category": "research",
			"commitment": {
				"start": "2019-05-06",
				"end": "2019-05-11",
				"hours": 48,
				"priority": 2
			},
			"report": "https://medium.com/bits-and-behavior/chi-2019-trip-report-the-interlocking-threats-of-hci-and-learning-2f83b5118e1d"
		},
		{
			"url": "https://sigcse2019.sigcse.org",
			"title": "ACM SIGCSE 2019",
			"details": "I spent four days, mostly sick, in Minneapolis, Minnesota, giving a few talks and mostly sleeping.",
			"category": "research",
			"commitment": {
				"start": "2019-03-26",
				"end": "2019-03-02",
				"hours": 40,
				"priority": 1
			},
			"report": "https://medium.com/bits-and-behavior/sigcse-2019-trip-report-celebrating-50-years-b3460835a09a"
		}
	],
	"talks": [
		{
			"date": "2022-09-20",
			"image": "sfu22.jpg",
			"alt": "",
			"slides": "slides/SFU22.pdf",
			"title": "The Promise and Problems of CS for All",
			"venue": "Simon Fraser University, British Columbia, Canada",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "I make the case for computing literacy, sample from my lab's many discoveries over the past decade, and call the audience to action to contribute.",
			"keynote": false
		},
		{
			"date": "2021-11-19",
			"image": "cuboulderics21.jpg",
			"alt": "The title slide, which says 'Programming as cognition, programming as politics'.",
			"slides": "slides/CUBoulder2021Programming.pdf",
			"title": "Programming as Cognition, Programming as Politics",
			"venue": "University of Colorado Boulder, Institute for Cognitive Science",
			"url": null,
			"recording": "https://www.youtube.com/watch?v=MVq9QBVwcYU",
			"practice": null,
			"description": "In this talk, I survey my 20 years of research on programming, some of which has framed it as a distributed sociocognitive activity, and some of which has framed it as a political activity. I reconcile these two perspectives by rejecting the dichotomy, and advocating for work that considers them in tandem.",
			"keynote": false
		},
		{
			"date": "2021-10-22",
			"image": "whycs21.png",
			"alt": "The title slide, which says 'Code, Calculators, Creativity, and the Many Paths to CS Education' and shows a TI-82 graphing calculator.",
			"slides": "slides/WhyCS2021Keynote.pdf",
			"title": "Code, Calculators, Creativity, and the Many Paths to CS Education",
			"venue": "2021 Washington State Why CS Summit",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "In this short keynote, I shared my path to computing and then make the case for many paths to computing through student interests.",
			"keynote": true
		},
		{
			"date": "2021-09-22",
			"image": "re21.jpg",
			"alt": "The title slide, which says 'Requirements of Oppression' and shows a Banksy piece with a small girl strip searching a soldier.",
			"slides": "slides/RE2021RequirementsOfOppression.pdf",
			"title": "Requirements of Oppression",
			"venue": "2021 IEEE International Requirements Engineering Conference",
			"url": "https://conf.researchr.org/track/RE-2021/RE-2021-keynotes",
			"recording": null,
			"practice": "https://www.youtube.com/watch?v=yf1wfyfgXvA&t=12s",
			"description": "This keynote argues that requirements are the central way that software models the matrix of oppression, and that to be anti-oppressive, requirements engineering must center the margins, humanity, and activism in its work.",
			"keynote": true
		},
		{
			"date": "2021-07-15",
			"image": "csta2021.jpg",
			"alt": "The title slide, which says 'The Roots of Inequity in K-12 CS Education' and shows an elementary CS classroom.",
			"slides": "slides/CSTA2021Keynote.pdf",
			"title": "The Roots of Inequity in K-12 CS Education",
			"venue": "2021 CSTA Conference",
			"url": "https://www.csteachers.org/page/csta-2021",
			"recording": "https://www.youtube.com/watch?v=rD3OHXyO5xU,",
			"practice": "https://www.youtube.com/watch?v=p7IzFIDfyKY",
			"description": "This is a keynote I gave the CS Teachers Association (CSTA) annual conference. It discusses the many interacting layers of inequity in K-12 CS education, including many of my own personal experiences discovering inequities in schools that I or others have created. It also offers suggestions to teachers about how they can participate in identifying and dismantling barriers.",
			"keynote": true
		},
		{
			"date": "2021-05-27",
			"image": "respect2021.jpg",
			"alt": "A slide, which says 'Deconstructing CS Culture' and shows Amy's title, along with an illustration of people climbing on a tower of binary digits.",
			"slides": "slides/RESPECT2021DeconstructingCSCulture.pdf",
			"title": "Deconstructing CS Culture",
			"venue": "2021 IEEE RESPECT Conference",
			"url": "http://respect2021.stcbp.org/guest-speakers/",
			"recording": null,
			"practice": "https://www.youtube.com/watch?v=c8TQ29I8lK4",
			"description": "This talk examined the hidden marginalization that led to the CS culture we have today, discussing CS history, Autism, immigration, queer refuges, segregation, desegregation, capitalism, and more.",
			"keynote": true
		},
		{
			"date": "2021-04-16",
			"image": "uci2021.png",
			"alt": "A slide, which says 'Recognize your power and the responsibility that comes with it.",
			"slides": "slides/UCIrvine2021CriticalComputingEducation.pdf",
			"title": "Critical Computing Education",
			"venue": "Digital Learning Lab, University of California, Irvine",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "This was the seventh time I gave my talk on critical computing education. In this version, I revised the slides to speak more to a learning sciences and education audience.",
			"keynote": false
		},
		{
			"date": "2021-03-01",
			"image": "caltech2021.jpg",
			"alt": "A slide, which says 'Computing has limits', and includes an xkcd coment that says 'An analysis of our new AI hiring algorithm has raised some concerns'",
			"slides": "slides/Caltech2021CriticalComputingEducation.pdf",
			"title": "Critical Computing Education",
			"venue": "California Institute of Technology, Computing and Mathematical Sciences, Keller Colloquium",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "This was the sixth time I gave my talk on critical computing education. In this version, I updated the research slides with new papers and evidence.",
			"keynote": false
		},
		{
			"date": "2021-02-12",
			"image": "davis2021.jpg",
			"alt": "The closing slide of the talk: 1) computing has limits, 2) data has limits, 3) CS has responsibility, and a column of doctoral student headshots and names.",
			"slides": "slides/UCDavis2021CriticalComputingEducation.pdf",
			"title": "Critical Computing Education",
			"venue": "University of California, Davis, Computer Science, Computing Education Research at Davis Seminar",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "This was the fifth time I gave my talk on critical computing education. In this version, I updated the research slides with new papers and evidence.",
			"keynote": false
		},
		{
			"date": "2020-11-10",
			"image": "penn2020.jpg",
			"alt": "A photograph of me taking a selife with my virtual audience.",
			"slides": "slides/Penn2020CriticalComputingEducation.pdf",
			"title": "Critical Computing Education",
			"venue": "University of Pennsylvania, Computer and Information Science, Seminar Series",
			"url": "https://events.seas.upenn.edu/event/cis-seminarcritical-computing-education/",
			"recording": null,
			"practice": null,
			"description": "This was the fourth time I gave my Autumn 2020 talk on critical computing education. In this version, I selected examples more situated in Philadelphia's history.",
			"keynote": false
		},
		{
			"date": "2020-11-05",
			"image": "criticalliteracy2020.png",
			"alt": "The first slide of my talk, showing the title Computing Education: A Critical Time for a Critical Literacy",
			"slides": "slides/ITUniversityCopenhagen2020.pdf",
			"title": "Computing Education: A Critical Time for a Critical Literacy",
			"venue": "IT University of Copenhagen",
			"url": "https://ccer.itu.dk/events_ccer",
			"recording": "https://video.itu.dk/video/64992966/ccer-inauguration-3",
			"practice": null,
			"description": "I was invited to give a short keynote at the IT University of Copenhagen's inauguration of Center for Computing Education Research (CCER). Michael Caspersen and Simon Peyton Jones also spoke.",
			"keynote": true
		},
		{
			"date": "2020-10-30",
			"image": "hcii20.jpg",
			"alt": "A photograph of my speaker setup, showing my first slide and my hoisted iPad showing the audience.",
			"slides": "slides/HCII2020CriticalComputingEducation.pdf",
			"title": "Critical Computing Education",
			"venue": "Carnegie Mellon University, HCI Institute, Seminar Series",
			"url": "https://hcii.cmu.edu/news/seminar/event/2020/10/seminar-amy-j-ko",
			"recording": "https://scs.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f9978dba-fc22-4cbd-abfa-ac64013a2b43",
			"practice": null,
			"description": "This was the third time I gave my Autumn 2020 talk on critical computing education. In this version, I linked my framing to my time as a graduate student at Carnegie Mellon.",
			"keynote": false
		},
		{
			"date": "2020-10-21",
			"image": "uva20.png",
			"alt": "The first slide of the talk showing the title Critical Computing Education and a photo of Black Lives Matter protests.",
			"slides": "slides/UVA2020CriticalCSEd.pdf",
			"title": "Critical Computing Education",
			"venue": "University of Virginia, Computer Science Distinguished Speaker Series",
			"url": "https://engineering.virginia.edu/events/cs-distinguished-speaker-amy-ko-critical-computing-education",
			"recording": null,
			"practice": null,
			"description": "This was the second time I gave my Autumn 2020 talk on critical computing education. In this version, I expanded discussion of my lab's research and strengthened the call to action.",
			"keynote": false
		},
		{
			"date": "2020-10-07",
			"image": "cuboulder2020.png",
			"alt": "A screenshot of the end of my talk, showing questions, a summary of the talk gist, and several faces on Zoom.",
			"slides": "slides/CUBoulder2020CriticalCSEd.pdf",
			"title": "Critical Computing Education",
			"venue": "University of Colorado joint Colloqium of the Department of Information Science and College of Media, Communication and Information",
			"url": "https://calendar.colorado.edu/event/info_seminar_amy_ko?utm_campaign=widget&utm_medium=widget&utm_source=University+of+Colorado+Boulder#.X345bC9h1Wk",
			"recording": null,
			"practice": null,
			"description": "This was the first in a series of talks about my research pivot on critical computing education. In it, I argue for the need for universal literacy about the limits of computing, the limits of data, and the responsibilty of computer science to teach these limits. I shared recent examples of research from our lab that's beginning to explore how to teach these limits.",
			"keynote": false
		},
		{
			"date": "2020-08-03",
			"image": "studyingmaking.jpg",
			"alt": "A screenshot of the first slide of the presentation, with the title Studying Programming through Making",
			"slides": "https://docs.google.com/presentation/d/1L72wv7Lv7oWqbHbw62mISiSWFKFSSyYl65HNXpSmjCU/edit?usp=sharing",
			"title": "Studying Programming through Making",
			"venue": "2020 PL+HCI Swimmer School",
			"url": "https://shriram.github.io/pl-hci-school-2020/",
			"recording": "https://www.youtube.com/watch?v=SSCeLlbk2eo",
			"practice": null,
			"description": "I gave this invited presentation on August 3rd, to at the 2020 PL+HCI \"Swimmer School\". The overarching goal was to explain how user studies shape our understanding of what we make; it also served as a retrospective of my dissertation work on the Whyline.",
			"keynote": false
		},
		{
			"date": "2020-06-15",
			"image": "msftcsed.jpg",
			"alt": "A photograph of students on the campus of Howard University, 1870",
			"slides": "https://docs.google.com/presentation/d/15UxfJnjI8P0N33xGlTqY1A39SQdxBUwQ2jflkVMmF7Q/edit#slide=id.gc6f980f91_0_0",
			"title": "CS Education in Higher Education",
			"venue": "Microsoft",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "I gave this presentation to Microsoft on June 15th; they were engaging in design envisioning to support CS teaching and wanted some background on it and how the pandemic was affecting it. I used it as an opportunity to talk about the racist and sexist history of higher education, of CS in higher education, the ways that CS pedagogy have failed to include all students, and how the pandemic has amplified these failures. I shared it on Twitter, which led to considerable sharing, solidatory, and outrage. I intentionally did not include citations for my claims because scientific evidence tends to be weaponized by those do not believe that racism or sexism exists; instead, I included a link pointing to the body of literature supporting the claims.",
			"keynote": false
		},
		{
			"date": "2019-11-22",
			"image": "koli2019.jpg",
			"alt": "A screenshot of the first slide of the keynote, showing title and Koli national park.",
			"slides": "slides/Koli2019Keynote.pdf",
			"title": "21st Century Grand Challenges in Computing Education",
			"venue": "2019 Koli Calling Computing Education Research Conference",
			"url": "http://kolicalling.fi",
			"recording": "https://www.youtube.com/watch?v=mjX3yLPKjvE",
			"practice": "https://www.youtube.com/watch?v=m9sqJz1oM-M",
			"description": "I gave this keynote at the 2019 Koli Calling conference, a computing education research conference in beautiful Koli National Park. In it, I argued that to address epistemic challenges such as climate change and stabilizing democracies, everyone in the world needs to learn the limits of computing, social responsibility with computing, data literacy, and diversity literacy.",
			"keynote": true,
			"blog": "https://medium.com/bits-and-behavior/21st-grand-challenges-for-computing-education-f5e937d57155"
		},
		{
			"date": "2019-05-01",
			"image": "eth2019.jpg",
			"alt": "A screenshot of the first slide of the keynote.",
			"slides": "slides/ETHZurich2019Programming.pdf",
			"title": "Programming: What it is and How to Teach it",
			"venue": "ETH Zurich Computer Science",
			"url": "https://www.video.ethz.ch/speakers/d-infk/2019/spring/251-0100-00L.html",
			"recording": "https://www.video.ethz.ch/speakers/d-infk/2019/spring/251-0100-00L.html",
			"practice": "https://www.youtube.com/watch?v=-crfoC6NtaE",
			"description": "I gave this invited talk in 2019 at ETH Zurich's CS department. I shared my lab's latest research on programming, including programming language learning, API learning, programming problem solving, and programming strategies.",
			"keynote": false
		},
		{
			"date": "2018-06-01",
			"image": "icse2018.png",
			"alt": "A screenshot of the first slide of the talk.",
			"slides": "slides/ICSE2018MIP.pdf",
			"title": "Big Ideas Behind the Whyline",
			"venue": "2018 International Conference on Software Engineering",
			"url": "https://www.icse2018.org",
			"recording": "https://www.youtube.com/watch?v=lx7g-T10WxQ",
			"practice": null,
			"description": "I gave this talk in 2018 in recognition for my most influential paper award on my dissertation work on the Whyline. I reflected on the ideas, both technical, scientific, and otherwise that have shaped my discoveries.",
			"keynote": false
		},
		{
			"date": "2018-05-28",
			"image": "msricpc18.png",
			"alt": "A screenshot of the first slide of the keynote.",
			"slides": "slides/MSRICPC2018Keynote.pdf",
			"title": "Mining the Mind, Minding the Mine: Grand Challenges in Comprehension and Mining",
			"venue": "2018 International Conference on Mining Software Repositories and International Conference on Program Comprehension",
			"url": "https://conf.researchr.org/home/msr-2018",
			"recording": null,
			"practice": "https://youtu.be/Oh5NuyTMB4A",
			"description": "I gave this invited joint keynote at the 2018 International Conference on Mining Software Repositories, and the International Conference on Program Comprehension. I argued that the two areas need each other, that they both need theory, and that they both need to ask more relevant questions.",
			"keynote": true,
			"blog": "https://medium.com/bits-and-behavior/grand-challenges-in-program-comprehension-and-software-repository-mining-my-keynote-on-7bf2cfc182a5"
		},
		{
			"date": "2018-01-12",
			"image": "stanford18.png",
			"alt": "An image of me presenting at Stanford.",
			"slides": "/slides/LearningToCode.pdf",
			"title": "Learning to Code: Why We Fail, How We Flourish",
			"venue": "Stanford University, HCI Seminar",
			"url": null,
			"recording": "https://www.youtube.com/watch?v=mkzHIhKaUX4&feature=youtu.be",
			"practice": null,
			"description": "I summarized our latest research on the learning to code and visited with the HCI faculty at Stanford.",
			"keynote": false
		},
		{
			"date": "2017-12-04",
			"image": "michigan2017.jpg",
			"alt": "The Michigan School of Information lobby",
			"slides": "/slides/LearningToCode.pdf",
			"title": "Learning to Code: Why We Fail, How We Flourish",
			"venue": "University of Michigan, MISC Seminar",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "I summarized my lab's latest research on the learning to code.",
			"keynote": false
		},
		{
			"date": "2018-10-30",
			"image": "northwestern2017.jpg",
			"alt": "A photograph of one of Northwestern University's beautiful atriums.",
			"slides": "/slides/LearningToCode.pdf",
			"title": "Learning to Code: Why We Fail, How We Flourish",
			"venue": "Northwestern University, CS+X Colloquium",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "I summarized our latest research on the learning to code and visited with HCI, CS education, and learning sciences faculty.",
			"keynote": false
		},
		{
			"date": "2017-10-09",
			"image": "acm2017.jpg",
			"alt": "A screenshot of the closing questions slide of the webinar",
			"slides": "slides/ACM2017StartupTrenches.pdf",
			"title": "Three Years in the Startup Trenches: Reflections on People, Product, and Software Evolution",
			"venue": "ACM Learning Center Webinar",
			"url": "https://www.sigsoft.org/resources/webinars.html",
			"recording": null,
			"practice": null,
			"description": "I gave this invited talk to about 130 engineers who attended the webinar live.",
			"keynote": false
		},
		{
			"date": "2017-02-21",
			"image": "amazon2017.jpg",
			"alt": "A talk cover graphic with two holding hands and the talk title",
			"slides": "slides/Amazon2017Stackhouse.pdf",
			"title": "Three Years in the Startup Trenches",
			"venue": "Amazon Stackhouse Talks",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "Amazon UX designers invited me to give a talk at the Stackhouse series; there were about 150 UX designers and engineers in attendance.",
			"keynote": false
		},
		{
			"date": "2016-11-04",
			"image": "splash16.png",
			"alt": "A screenshot of the first slide of the keynote.",
			"slides": "slides/SPLASH2016Keynote.pdf",
			"title": "A Human View of Programming Languages",
			"venue": "SPLASH 2016",
			"url": "https://2016.splashcon.org/details/splash-2016-keynotes/11/SPLASH-2016-Keynote-A-Human-View-of-Programming-Languages",
			"recording": "https://www.youtube.com/watch?v=TjkzAls5fsI&t=84s",
			"practice": null,
			"description": "I gave this invited keynote at SPLASH 2016, in which I built upon Seymour Papert's arguments about computing culture and the need for embracing multiple views of what programming is.",
			"keynote": true,
			"blog": "https://medium.com/bits-and-behavior/my-splash-2016-keynote-81cc802f5f6e"
		},
		{
			"date": "2015-10-09",
			"image": "acm2015.jpg",
			"alt": "The title slide of the talk.",
			"slides": "https://learning.acm.org/binaries/content/assets/leaning-center/webinar-slides/2015/whatmakesagreatsoftwareengineer_slides.pdf",
			"title": "What makes a great software engineer?",
			"venue": "ACM Learning Center Webinar",
			"url": "https://learning.acm.org/techtalks",
			"recording": "https://www.youtube.com/watch?v=OBlmLjeORUQ&feature=youtu.be&list=PLn0nrSd4xjjZa4KDqFBCMOnk52CItWqyU",
			"practice": null,
			"description": "I gave this invited talk with my student Paul Li to over 2,000 attendees, describing our work on software engineering expertise.",
			"keynote": false
		},
		{
			"date": "2011-06-17",
			"image": "coverity2011.jpg",
			"alt": "A photograph of the Golden Gate Bridge",
			"slides": "slides/Coverty2011WebDefectDetection.pdf",
			"title": "Defect Detection for the Wayward Web",
			"venue": "Coverity, San Francisco, CA",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "I described my work on software help and bug triage to the R&D and engineering team at Coverity.",
			"keynote": false
		},
		{
			"date": "2012-05-04",
			"image": "unc2011.jpg",
			"alt": "The title slide",
			"slides": "slides/Coverty2011WebDefectDetection.pdf",
			"title": "Defect Detection for the Wayward Web",
			"venue": "Microsoft, Redmond, WA",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "I described my work on software help and bug triage to the Developer Division's head of UX.",
			"keynote": false
		},
		{
			"date": "2011-04-15",
			"image": "mit2015.jpg",
			"alt": "The second slide of the talk, which says that software is a fasciating medium for expression",
			"slides": "slides/MIT2011WaywardWeb.pdf",
			"title": "Defect Detection for the Wayward Web",
			"venue": "MIT, Cambridge, MA",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "I described my work on software help and bug triage to the HCI lab at MIT CSAIL.",
			"keynote": false
		},
		{
			"date": "2011-02-24",
			"image": "unc2011.jpg",
			"alt": "The title slide",
			"slides": "slides/UNC2011WaywardWeb.pdf",
			"title": "Defect Detection for the Wayward Web",
			"venue": "UNC Charlotte, Charlotte, NC",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "I described my work on software help and bug triage to HCI and Software Engineering researchers.",
			"keynote": false
		},
		{
			"date": "2009-11-23",
			"image": "choose2009.jpg",
			"alt": "A photograph of a cloudy day in Bern, Switzerland.",
			"slides": "slides/CHOOSE2009HCISE.pdf",
			"title": "Where HCI and Software Engineering Meet",
			"venue": "CHOOSE Forum, Bern Switzerland",
			"url": "https://choose.swissinformatics.org",
			"recording": null,
			"practice": null,
			"description": "I was invited to give a keynote to the Swiss Group for Original and Outside-the-box Software Engineering (CHOOSE), a group that meets to bridge technology and industry. I talked about my dissertation research.",
			"keynote": true
		},
		{
			"date": "2009-02-24",
			"image": "isec2009.jpg",
			"alt": "A photograph of a panelist table at ISEC 2009.",
			"slides": "slides/ISEC2009JavaWhyline.pdf",
			"title": "Asking and Answering Questions about the Causes of Software Behavior",
			"venue": "India Software Engineering Conference, Pune, India",
			"url": "https://isoft.acm.org/isec2009/",
			"recording": null,
			"practice": null,
			"description": "I was invited to give a keynote on my ICSE distinguished paper award on the Whyline. I had an amazing trip to Pune and Mumbia.",
			"keynote": true
		},
		{
			"date": "2010-09-30",
			"image": "ibm2010.jpg",
			"alt": "A photograph of a presentation at the workshop.",
			"slides": "slides/IBM2010Keynote.pdf",
			"title": "Where is the User in Software Evolution?",
			"venue": "IBM T.J. Watson Research Center, Hawthorne, NY",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "I gave an invited talk at a workshop on human-centered software development.",
			"keynote": false
		},
		{
			"date": "2009-02-27",
			"image": "whyline2008.jpg",
			"alt": "A slide from the talk showing the Java Whyline",
			"slides": "slides/Ko2008JobTalk.pdf",
			"title": "Asking and Answering Questions about the Causes of Software Behavior",
			"venue": "IIT Mumbai, India",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "I described my dissertation work on the Whyline to CS department.",
			"keynote": false
		},
		{
			"date": "2009-01-14",
			"image": "whyline2008.jpg",
			"alt": "A slide from the talk showing the Java Whyline",
			"slides": "slides/Ko2008JobTalk.pdf",
			"title": "Asking and Answering Questions about the Causes of Software Behavior",
			"venue": "Intel Research Seattle, Seattle, WA",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "I described my dissertation work to the research team at Intel Research Seattle.",
			"keynote": false
		},
		{
			"date": "2008-05-30",
			"image": "whyline2008.jpg",
			"alt": "A slide from the talk showing the Java Whyline",
			"slides": "slides/Ko2008JobTalk.pdf",
			"title": "Asking and Answering Questions about the Causes of Software Behavior",
			"venue": "Accenture, Chicago, Illinois",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "I described my dissertation work to the research team at Accenture in Chicago.",
			"keynote": false
		},
		{
			"date": "2008-02-25",
			"image": "whyline2008.jpg",
			"alt": "A slide from the talk showing the Java Whyline",
			"slides": "slides/Ko2008JobTalk.pdf",
			"title": "Asking and Answering Questions about the Causes of Software Behavior",
			"venue": "Washington University in St. Louis, St. Louis, MO",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "I described my dissertation work to faculty and students in the CS department.",
			"keynote": false
		},
		{
			"date": "2008-01-31",
			"image": "whyline2008.jpg",
			"alt": "A slide from the talk showing the Java Whyline",
			"slides": "slides/Ko2008JobTalk.pdf",
			"title": "Asking and Answering Questions about the Causes of Software Behavior",
			"venue": "SRI International, Menlo Park, CA",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "I described my dissertation work to the research team at SRI.",
			"keynote": false
		},
		{
			"date": "2006-07-16",
			"image": "ubc2006.jpg",
			"alt": "The title slide of the presentation.",
			"slides": "slides/UBC2006Overview.pdf",
			"title": "Human-Centered Approaches to Software Engineering Research",
			"venue": "University of British Columbia, CS Department, Vancouver, B.C.",
			"url": null,
			"recording": null,
			"practice": null,
			"description": "I was invited to visit UBC and give a talk to the software engineering and programming languages group.",
			"keynote": false
		}
	],
	"panels": [
		{
			"date": "2022-03-21",
			"title": "Equity, Justice, and Engineering Education",
			"venue": "Science, Technology, and Public Policy (STPP) Program, Ford School of Public Policy, University of Michigan"
		},
		{
			"date": "2021-14-10",
			"title": "MIT EECS Rising Stars careers panel",
			"venue": "Massachusets Institute of Technology"
		},
		{
			"date": "2021-05-25",
			"title": "Capacity, Access, Participation, and Experience in K-12 CS Education",
			"venue": "IEEE Conference on Research in Equity and Sustained Participation in Engineering, Computing, and Technology (RESPECT)"
		},
		{
			"date": "2021-02-11",
			"title": "Women in Science",
			"venue": "North Central ESD K-12 STEM Education Summit"
		},
		{
			"date": "2020-07-22",
			"title": "LGBTQ+ in Science",
			"venue": "Applied Physics Laboratory, Johns Hopkins University"
		},
		{
			"date": "2020-16-06",
			"title": "Teaching Accesibility",
			"venue": "AccessComputing Seminar Series"
		},
		{
			"date": "2016-07-19",
			"title": "Why CS Departments Should Embrace CS Education Research",
			"venue": "CRA Snowbird Conference"
		}
	],
	"classes": [
		{
			"id": "info200",
			"alt": "A black and white version of an old painting with a child reading a newspaper",
			"link": "https://canvas.uw.edu/courses/1547979",
			"number": "INFO 200",
			"level": "undergraduate",
			"title": "Intellectual Foundations of Informatics",
			"description": "This survey course covers big ideas in information, information technology, and information systems. Students learn the history of information, foundational concepts in information, the relationship between information and computing, skills in analyzing and designing information systems, and the role of information systems in society.",
			"hours": 10,
			"links": [
				{
					"description": "Amy's book for the course",
					"link": "https://faculty.washington.edu/ajko/books/foundations-of-information/"
				},
				{
					"description": "Medium post on the big ideas in the course",
					"link": "https://medium.com/bits-and-behavior/big-ideas-about-information-c09e4d9c60bd"
				}
			],
			"offerings": [
				{ "size": 200, "term": 3, "year": 2022, "score": "N/A" },
				{ "size": 200, "term": 3, "year": 2021, "score": "N/A" },
				{ "size": 208, "term": 2, "year": 2020, "score": 4.8 },
				{ "size": 150, "term": 1, "year": 2018, "score": 4.8 }
			]
		},
		{
			"id": "info360",
			"alt": "A line drawing of two people discussing a sketch",
			"link": "courses/info360/",
			"number": "INFO 360",
			"level": "undergraduate",
			"title": "Design Methods",
			"description": "This undergraduate class teaches students design thinking skills in the domain of information and computing. It leverages multiple forms of active learning, involves a significant amount of studio-based learning, and helps students develop creative confidence.",
			"hours": 10,
			"links": [
				{
					"description": "Amy's online book for the course",
					"link": "https://faculty.washington.edu/ajko/courses/info360/"
				},
				{
					"description": "Course activities on GitHub",
					"link": "https://github.com/amyjko/info360/"
				}
			],
			"offerings": [
				{ "size": 35, "term": 2, "year": 2018, "score": 4.8 },
				{ "size": 36, "term": 1, "year": 2017, "score": 4.5 },
				{ "size": 35, "term": 2, "year": 2017, "score": 5.0 },
				{ "size": 35, "term": 1, "year": 2016, "score": 4.9 },
				{ "size": 37, "term": 1, "year": 2015, "score": 4.2 },
				{ "size": 40, "term": 1, "year": 2012, "score": 4.3 },
				{ "size": 39, "term": 1, "year": 2012, "score": 4.7 },
				{ "size": 38, "term": 1, "year": 2011, "score": 4.4 },
				{ "size": 39, "term": 1, "year": 2011, "score": 4.3 },
				{ "size": 37, "term": 3, "year": 2011, "score": 4.3 },
				{ "size": 37, "term": 3, "year": 2010, "score": 4.3 },
				{ "size": 37, "term": 3, "year": 2010, "score": 4.6 },
				{ "size": 35, "term": 1, "year": 2008, "score": 4.5 },
				{ "size": 35, "term": 1, "year": 2008, "score": 4.6 }
			]
		},
		{
			"id": "info442",
			"alt": "A photograph of Margaret Hamilton standing next to source code.",
			"link": "https://canvas.uw.edu/courses/1399096",
			"number": "INFO 442",
			"level": "undergraduate",
			"title": "Cooperative Software Development",
			"description": "This undergraduate software engineering class teaches foundations of team-based software development, leveraging the latest research on coordination, cooperation, and human cognition in software development. Students leave ready to become meaningful contributors to teams big and small, but also to understand the processes that teams use and how they can improve them.",
			"hours": 8,
			"links": [
				{
					"description": "Amy's online book for the course",
					"link": "https://faculty.washington.edu/ajko/books/cooperative-software-development/"
				}
			],
			"offerings": [
				{ "size": 33, "term": 1, "year": 2020, "score": 4.7 },
				{ "size": 33, "term": 1, "year": 2019, "score": 4.8 },
				{ "size": 37, "term": 3, "year": 2019, "score": 4.8 },
				{ "size": 35, "term": 3, "year": 2017, "score": 4.8 },
				{ "size": 38, "term": 2, "year": 2012, "score": 4.5 },
				{ "size": 26, "term": 1, "year": 2010, "score": 4.5 }
			]
		},
		{
			"id": "info490",
			"alt": "A photograph of students at the capstone fair.",
			"link": "https://ischool.uw.edu/capstone/students/informatics",
			"number": "INFO 490/491",
			"level": "undergraduate",
			"title": "Capstone",
			"description": "This undergraduate capstone sequence engages students in a 6-month project, usually culminating in a functional, deployable prototype, and often in collaboration with a client from local industry.",
			"links": [],
			"hours": 8,
			"offerings": [
				{ "size": 96, "term": 3, "year": 2013, "score": 4.1 },
				{ "size": 96, "term": 2, "year": 2013, "score": 4.0 },
				{ "size": 18, "term": 3, "year": 2012, "score": 4.7 },
				{ "size": 22, "term": 2, "year": 2011, "score": 3.5 }
			]
		},
		{
			"id": "hcid520",
			"alt": "A black and white photograph of a woman operating the ENIAC, the first computer",
			"link": "https://canvas.uw.edu/courses/1516445",
			"level": "graduate",
			"number": "HCID 520",
			"title": "User Interface Software and Technology",
			"description": "This core course in our Masters of HCI+Design teaches students they history, theory, and foundations of user interfaces. Students acquire a literacy for communicating and reasoning about interfaces.",
			"hours": 8,
			"links": [
				{
					"description": "Amy's online book for the course",
					"link": "https://faculty.washington.edu/ajko/books/user-interface-software-and-technology/"
				}
			],
			"offerings": [
				{ "year": 2022, "term": 2, "size": 35, "score": 4.7 },
				{ "year": 2021, "term": 2, "size": 35, "score": 4.2 },
				{ "year": 2020, "term": 2, "size": 35, "score": 4.9 },
				{ "year": 2019, "term": 2, "size": 34, "score": 4.8 },
				{ "year": 2018, "term": 2, "size": 33, "score": 4.8 }
			]
		},
		{
			"id": "insc541",
			"alt": "A photograph of the 2011 class amidst discussion.",
			"link": "https://myplan.uw.edu/course/#/courses/INSC541",
			"level": "graduate",
			"number": "INSC 541",
			"title": "HCI Design Foundations for Interactive Systems",
			"description": "This doctoral course teaches theoretical foundations of HCI, preparing students as designers, design researchers, and HCI researchers.",
			"links": [],
			"hours": 6,
			"offerings": [
				{ "year": 2011, "term": 3, "size": 15, "score": 4.7 },
				{ "year": 2010, "term": 2, "size": 15, "score": 4.8 }
			]
		},
		{
			"id": "edtep577",
			"alt": "",
			"link": "",
			"level": "graduate",
			"number": "EDTEP 577",
			"title": "Computer Science Equity & Justice",
			"description": "This graduate course educates teacher candidates about equity and justice issues in computer science and computer science education, while also teaching content knowledge foundations of CS. I teach it in partnership with the UW College of Education's Secondary Teacher Education Program, which I'm helping design and launch.",
			"links": [],
			"hours": 6,
			"offerings": [
				{ "year": 2023, "term": 3, "size": 15, "score": null },
				{ "year": 2022, "term": 3, "size": 9, "score": 4.8 }
			]
		}
	],
	"commitments": [
		{
			"title": "Promotion letters",
			"description": "Evaluating tenure and promotion cases",
			"category": "service",
			"annually": true,
			"commitment": { "start": "05-15", "end": "09-15", "hours": 2, "priority": 1 }
		},
		{
			"title": "Reading",
			"description": "Books and papers",
			"category": "research",
			"annually": false,
			"commitment": { "start": null, "end": null, "hours": 2, "priority": 1 }
		},
		{
			"title": "Advising",
			"description": "Doctoral student meetings, feedback, and collaboration",
			"category": "research",
			"annually": false,
			"commitment": { "start": null, "end": null, "hours": 6, "priority": 0 }
		},
		{
			"title": "Seminars",
			"description": "iSchool, DUB, CSE",
			"category": "research",
			"annually": false,
			"commitment": { "start": null, "end": null, "hours": 2, "priority": 0 }
		},
		{
			"title": "Miscellany",
			"description": "Crises, oversights, and other surprises",
			"category": "service",
			"annually": false,
			"commitment": { "start": null, "end": null, "hours": 2, "priority": 0 }
		},
		{
			"title": "Autumn faculty meetings",
			"description": "iSchool",
			"category": "service",
			"annually": true,
			"commitment": { "start": "09-15", "end": "12-15", "hours": 2, "priority": 0 }
		},
		{
			"title": "Winter faculty meetings",
			"description": "iSchool",
			"category": "service",
			"annually": true,
			"commitment": { "start": "01-01", "end": "03-15", "hours": 2, "priority": 0 }
		},
		{
			"title": "Spring faculty meetings",
			"description": "iSchool",
			"category": "service",
			"annually": true,
			"commitment": { "start": "04-01", "end": "06-15", "hours": 2, "priority": 0 }
		},
		{
			"title": "Ph.D. admissions",
			"description": "Reviews + meetings",
			"category": "research",
			"annually": true,
			"commitment": { "start": "12-15", "end": "03-15", "hours": 2, "priority": 1 }
		},
		{
			"title": "SIGCSE deadline",
			"description": "Writing",
			"category": "research",
			"annually": true,
			"commitment": { "start": "08-01", "end": "08-20", "hours": 10, "priority": 1 }
		},
		{
			"title": "CHI deadline",
			"description": "Writing",
			"category": "research",
			"annually": true,
			"commitment": { "start": "08-15", "end": "09-10", "hours": 10, "priority": 1 }
		},
		{
			"title": "ICER deadline",
			"description": "Writing",
			"category": "research",
			"annually": true,
			"commitment": { "start": "03-15", "end": "04-05", "hours": 10, "priority": 1 }
		},
		{
			"title": "Winter break",
			"description": "Family",
			"category": "personal",
			"annually": true,
			"commitment": { "start": "12-20", "end": "01-01", "hours": 30, "priority": 2 }
		},
		{
			"title": "Next 15 years of CER",
			"description": "A 2-day workshop spread across 6 months.",
			"category": "research",
			"annually": false,
			"commitment": { "start": "2020-11-15", "end": "2021-04-15", "hours": 0.5, "priority": 0 }
		},
		{
			"title": "Personal leave",
			"description": "Family",
			"category": "personal",
			"annually": false,
			"commitment": { "start": "2021-08-23", "end": "2021-09-20", "hours": 40, "priority": 2 }
		},
		{
			"title": "Sabbatical",
			"description": "Paid professional leave.",
			"category": "research",
			"annually": false,
			"commitment": { "start": "2022-06-15", "end": "2023-09-25", "hours": 20, "priority": 2 }
		},
		{
			"title": "Book writing",
			"description": "Finishing a draft of a collaborative book.",
			"category": "research",
			"annually": false,
			"commitment": { "start": "2021-06-15", "end": "2021-08-23", "hours": 10, "priority": 1 }
		}
	],
	"years": {
		"2000": "Sophomore year of college",
		"2001": "Junior year of college",
		"2002": "Graduated from college; 1st year of PhD",
		"2003": null,
		"2004": null,
		"2005": null,
		"2006": "MSR intern",
		"2007": null,
		"2008": "Job search, finished PhD, started at UW, divorce",
		"2009": null,
		"2010": null,
		"2011": null,
		"2012": "Founded AnswerDash",
		"2013": "On leave at AnswerDash",
		"2014": "Promoted to Associate with tenure; returned from AnswerDash",
		"2015": "Sabbatical",
		"2016": "Informatics program chair",
		"2017": "Informatics program chair",
		"2018": "Informatics program chair",
		"2019": "Informatics program chair; gender transition",
		"2020": "Informatics program chair; promoted to Professor; COVID-19; gender transition",
		"2021": "Informatics program chair; COVID-19; gender transition",
		"2022": "Informatics program chair; gender transition; sabbatical (Summer/Fall)",
		"2023": "Sabbatical (Winter/Spring/Summer)"
	}
}

export default Amy;