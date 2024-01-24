
import type ProfileSpec from "../lib/models/ProfileSpec";
import { Discoveries } from "./Discoveries";
import { Publications } from "./Pubs";
import { People } from "./People";
import { Posts } from "./Posts";

export const Kyle: ProfileSpec = {
	sources: {
		cnf: {
			name: "Combustion and Flame",
			short: "CNF"
		},
		poci: {
			name: "Proceedings of the Combustion Institute",
			short: "POCI"
		},
		jcp: {
			name: "Journal of Computational Physics",
			short: "JCP"
		},
		cpc: {
			name: "Computer Physics Communications",
			short: "CPC"
		},
		ctm: {
			name: "Combustion Theory and Modelling",
			short: "CTM"
		},
		fuel: {
			name: "Fuel",
			short: "Fuel"
		},
		joss: {
			name: "Journal of Open Source Software",
			short: "joss"
		},
		gmd: {
			name: "Geoscientific Model Development",
			short: "GMD"
		},
		enf: {
			name: "Energy & Fuels",
			short: "ENF"
		}
	},
	pubs: Publications,
	people: People,
    discoveries: Discoveries,
	posts: Posts,
	populations: [
		/*{
			"id": "public",
			"population": "The public",
			"alt": "A picture of Amy being interviewed for a television segment.",
			"description": "The press often reports on my research, interviews me, or consults with me on my expertise"
		},*/
	],
	impacts: [
		{
			kind: "press",
			start: 2024,
			end: 2024,
			url: "https://podcast.sustainoss.org/preview/VKPE6Jkl",
			title: "Karthik Ram & James Howison on Research Software Visibility Infrastructure Priorities",
			description: "In a podcast episode about sustaining open source software, Karthik Ram spotlighted my URSSI Research Software Engineering schools funded by the Sloan Foundation.",
			author: "Richard Littauer",
			source: "Sustain podcast",
			who: "public"
		},
		{
			kind: "press",
			start: 2017,
			end: 2017,
			url: "https://ecampus.oregonstate.edu/research/podcast/e56/",
			title: "RIA #56: Dr. Kyle Niemeyer on Open Science",
			description: "I was interviewed on a podcast, talking about my research and open science.",
			author: "Katie Linder",
			source: "Research in Action podcast",
			who: "public"
		},
		{
			kind: "press",
			start: 2016,
			end: 2016,
			description: "I was interviewed about my work and background for the school blog.",
			title: "Faculty Spotlight: Kyle Niemeyer",
			url: "https://dev.blogs.oregonstate.edu/mimenews/2016/11/23/faculty-spotlight-kyle-niemeyer/",
			author: "Steve Frandzel",
			source: "MIME",
			who: "public"
		},
		{
			kind: "press",
			start: 2015,
			end: 2015,
			description: "I was interviewed about computational modeling of wind turbines.",
			url: "https://arstechnica.com/science/2015/01/the-future-of-control-putting-virtual-wind-turbines-inside-real-ones/",
			title: "The future of control: Putting virtual wind turbines inside real ones",
			author: "John Timmer",
			source: "Ars Technica",
			who: "public"
		}
		/*
		{
			"kind": "curriculum",
			"start": 2020,
			"end": null,
			"description": "We influenced the teaching of HCI education in higher education",
			"url": null,
			"who": "academia"
		},
		{
			"kind": "resource",
			"start": 2016,
			"end": null,
			"description": "I write and share online books that summarize the state of knowledge in HCI and Software Engineering",
			"url": "https://faculty.washington.edu/ken/books",
			"who": "academia"
		},
		{
			"kind": "resource",
			"start": 2016,
			"end": 2016,
			"description": "Co-authored a whitepaper discussing the importance of computing education research",
			"url": "http://cra.org/ccc/wp-content/uploads/sites/2/2015/01/CSEdResearchWhitePaper2016.pdf",
			"who": "cer"
		},
		{
			"kind": "resource",
			"start": 2018,
			"end": null,
			"description": "I've helped shape the peer review processes for the ACM Transactions on Computing Education journal",
			"url": "https://toce.acm.org/",
			"who": "cer"
		}*/
	],
	degrees: [
		{
			institution: "Case Western Reserve University",
			degree: "Doctorate in Mechanical Engineering",
			start: 2010,
			end: 2013,
			thesis: "Dissertation: Reducing the Cost of Chemistry in Reactive-Flow Simulations: Novel Mechanism Reduction Strategies and Acceleration via Graphics Processing Units",
			committee: "James S. T'ien (chair), Chih-Jen Sung, Joseph M. Prahl, Donald L. Feke"
		},
		{
			institution: "Case Western Reserve University",
			degree: "Masters of Science in Aerospace Engineering",
			start: 2008,
			end: 2010,
			thesis: "Thesis: Skeletal Mechanism Generation for Surrogate Fuels",
			committee: "Chih-Jen Sung (chair), James S. T'ien, J. Iwan D. Alexander, Mandhapati P. Raju"
		},
		{
			institution: "Case Western Reserve University",
			degree: "Bachelor of Science in Aerospace Engineering (summa cum laude)",
			start: 2005,
			end: 2009,
			thesis: "Thesis: Individual Differences in Programming, Testing, and Debugging in a Statistical End-User Programming Environment",
            committee: ""
		}
	],
	patents: [],
	jobs: [
		{
			"title": "AAAS Science & Technology Policy Fellow",
			"organization": "US Department of Energy",
			"department": "Industrial Efficiency & Decarbonization Office",
			"startdate": 2022,
			"enddate": null,
			"academic": false
		},
		{
			"title": "Associate Head for Undergraduate Programs",
			"organization": "Oregon State University",
			"department": "School of Mechanical, Industrial, and Manufacturing Engineering",
			"startdate": 2023,
			"enddate": null,
			"academic": true
		},
		{
			"title": "Associate Professor",
			"organization": "Oregon State University",
			"department": "School of Mechanical, Industrial, and Manufacturing Engineering",
			"startdate": 2020,
			"enddate": null,
			"academic": true
		},
		{
			"title": "Assistant Professor",
			"organization": "Oregon State University",
			"department": "School of Mechanical, Industrial, and Manufacturing Engineering",
			"startdate": 2015,
			"enddate": 2020,
			"academic": true
		},
		{
			"title": "Assistant Professor (Senior Research)",
			"organization": "Oregon State University",
			"department": "School of Mechanical, Industrial, and Manufacturing Engineering",
			"startdate": 2014,
			"enddate": 2015,
			"academic": true
		},
		{
			"title": "Postdoctoral Scholar",
			"organization": "Oregon State University",
			"department": "School of Mechanical, Industrial, and Manufacturing Engineering",
			"startdate": 2013,
			"enddate": 2014,
			"academic": true
		},
		{
			"title": "Summer Research Intern",
			"organization": "United Technologies Research Center",
			"department": "Combustion Group",
			"startdate": 2011,
			"enddate": 2011,
			"academic": false
		},
		{
			"title": "Associate Science Writer",
			"organization": "Ars Technica",
			"department": "",
			"startdate": 2011,
			"enddate": 2013,
			"academic": false
		},
		{
			"title": "NASA Glenn Research Center",
			"organization": "United Technologies Research Center",
			"department": "Combustion Branch",
			"startdate": 2008,
			"enddate": 2008,
			"academic": false
		},
		{
			"title": "Graduate Research Assistant",
			"organization": "Case Western Reserve University",
			"department": "Department of Mechanical and Aerospace Engineering",
			"startdate": 2008,
			"enddate": 2013,
			"academic": true
		},
		{
			"title": "Teaching Assistant",
			"organization": "Case Western Reserve University",
			"department": "Department of Mechanical and Aerospace Engineering",
			"startdate": 2007,
			"enddate": 2010,
			"academic": true
		},
		{
			"title": "Undergraduate Research Assistant",
			"organization": "Case Western Reserve University",
			"department": "Department of Mechanical and Aerospace Engineering",
			"startdate": 2007,
			"enddate": 2007,
			"academic": true
		}
	],
	recognitions: [
		{
			"title": "AAAS Science & Technology Policy Fellow",
			"year": 2022,
			"description": "A competitive fellowship program that places science and engineering researchers in policy-related positions in the executive branch of the federal government for one year."
		},
		{
			"title": "Welty Faculty Fellow (Oregon State University)",
			"year": 2021,
			"description": "An endowed named faculty position that provides discretionary funds to support my research activities."
		},
		{
			"title": "Better Scientific Software (BSSw) Fellowship",
			"year": 2019,
			"description": "A competitive fellowship that supported my activities in teaching software engineering skills to graduate researchers."
		},
		{
			"title": "Senior Member, American Institute of Aeronautics and Astronautics",
			"year": 2019,
			"description": "For more than eight years of technical leadership and professional contributions."
		},
		{
			"title": "National Science Foundation Graduate Research Fellowship",
			"year": 2010,
			"description": "A five-year fellowship recognizing outstanding graduate students in NSF-supported STEM disciplines."
		},
		{
			"title": "National Defense Science & Engineering Graduate Fellowship",
			"year": 2009,
			"description": "A three-year fellowship in recognition of U.S. citizens with promise to advance science and engineering disciplinesof military importance."
		},
		{
			"title": "National Science Foundation Graduate Research Fellowship, Honorable Mention",
			"year": 2009,
			"description": "Recognition of an outstanding graduate students in NSF-supported STEM disciplines."
		},
		{
			"title": "The Case Alumni Association Prize for Achievement",
			"year": 2009,
			"description": "Case Western Reserve University's recognition for the graduating senior with the best academic record in the Case School of Engineering."
		}
	],
	editing: [
		{
			title: "Associate Editor in Chief",
			venue: "Journal of Open Source Software",
			type: "journal",
			commitment: {
				start: "2018-11-01",
				end: null,
				hours: 2,
				priority: 1
			}
		},
		{
			title: "Editor",
			venue: "Journal of Open Source Software",
			type: "journal",
			commitment: {
				start: "2016-05-01",
				end: "2018-10-31",
				hours: 1,
				priority: 0
			}
		}
	],
	reviewing: [
		{
			venue: "National Science Foundation (CISE, CFS)",
			title: "NSF Panelist",
			years: [2016, 2017, 2018, 2019, 2021],
			level: "panelist",
			commitment: {
				start: "08-15",
				end: "05-15",
				hours: 0.5,
				priority: 1
			}
		},
		{
			venue: 'International Symposium on Combustion',
			title: 'Reviewer',
			years: [2014, 2016, 2018, 2020, 2024],
			level: 'reviewer',
			commitment: {
				start: '00-01',
				end: '00-25',
				hours: 3,
				priority: 1
			}
		},
		{
			venue: 'International Symposium on Combustion',
			title: 'Colloquium Co-Chair',
			years: [2022],
			level: 'pc',
			commitment: {
				start: '00-01',
				end: '00-25',
				hours: 6,
				priority: 1
			}
		},

	],
	doctoralCommittees: [
		{
			name: "Olivier Mesnard",
			institution: "George Washington University",
			department: "Mechanical and Aerospace Engineering",
			startdate: 2022,
			enddate: 2022
		},
		{
			name: "Pi-Yueh Chuang",
			institution: "George Washington University",
			department: "Mechanical and Aerospace Engineering",
			startdate: 2022,
			enddate: 2022
		},
		{
			name: "Derek Bean",
			institution: "Oregon State University",
			department: "Mechanical Engineering",
			startdate: 2015,
			enddate: 2022
		},
	],
	service: [
		{
            title: 'Associate Head for Undergraduate Programs',
            committee: 'School of Mechanical, Industrial, and Manufacturing Engineering',
            level: 'departmental',
            description:
                "I serve as the School of MIME's Associate Head for Undergraduate Programs.",
            commitment: {
                start: '2023-12-16',
                end: null,
                hours: 20,
                priority: 0,
            },
        },
		{
            title: 'Task force member',
            committee: 'Research Computing 2030 Task Force',
            level: 'university',
            description:
                "I serve on this task force that is examining the university's research computing capacity and needs, benchmarking capabilities of aspirational peer universities, and recommending future operational models.",
            commitment: {
                start: '2023-09-15',
                end: '2024-03-31',
                hours: 1,
                priority: 0,
            },
        },
		{
            title: 'Search committee member',
            committee: 'Director of Supercomputing Center Search Committee',
            level: 'university',
            description:
                "I am a member of the search committee to find a director of the new university-level Supercomputing Center.",
            commitment: {
                start: '2023-09-15',
                end: '2024-03-31',
                hours: 1,
                priority: 0,
            },
        },
		{
			title: "Undergraduate Program Coordinator",
			committee: "Mechanical Engineering",
			level: "departmental",
			description: "I oversee the Mechanical Engineering undergraduate degree program, which has over 1000 students. I chair the undergraduate program committee, organize discussions of proposed changes, and implement the changes with the support of staff. I led the design, discussion, and initiated the implementation of a major revision to the curriculum, which aimed to give students more customization of their degree, and also modernize requirements and outcomes.",
			commitment: {
				start: "2021-06-01",
				end: "2022-08-31",
				hours: 2,
				priority: 1,
			}
		}
	],
	funding: [
		{
			id: "draftmodeling",
			title: "Modeling Wood Heater Chimney Draft",
			funder: "LBNL",
			award: null,
			investigators: "Kyle E. Niemeyer (PI)",
			amount: 125000,
			category: "research",
			description: "Supporting researchers at LBNL, developing software for modeling chimney draft from wood heaters.",
			url: null,
			private: false,
			commitment: {
				start: "2024-03-01",
				end: "2025-08-31",
				hours: 1,
				priority: 1
			}
		},
		{
			id: "sloanschools",
			title: "Designing and launching a school for research software development and engineering",
			funder: "Sloan Foundation",
			award: null,
			investigators: "Kyle E. Niemeyer (PI)",
			amount: 410000,
			category: "research",
			description: "Supports the development of materials for and operation of four weeklong research software development summer/winter schools.",
			url: "https://sloan.org/grant-detail/10072",
			private: false,
			commitment: {
				start: "2022-09-15",
				end: "2025-08-31",
				hours: 2,
				priority: 1
			}
		},
		{
			id: "f2ft2",
			title: "Optimizing Bio-jet Fuel Blends with the Feedstock to Function tool",
			funder: "Department of Energy",
			award: null,
			investigators: "Kyle E. Niemeyer (PI)",
			amount: 195473,
			category: "research",
			description: "With researchers at LBNL, develops an approach for optimizing blends of bio-based jet fuels for meeting desired properties, using machine-learning models for predicting the properties.",
			url: "https://feedstock-to-function.lbl.gov",
			private: false,
			commitment: {
				start: "2021-10-01",
				end: "2024-09-15",
				hours: 2,
				priority: 1
			}
		},
		{
			id: "strongshock",
			title: "Sandia Strong Shock Grand Challenge",
			funder: "Department of Energy",
			award: null,
			investigators: "Camille Palmer (PI), Todd Palmer (co-PI), and Kyle E. Niemeyer (co-PI)",
			amount: 771336,
            myamount: 174871,
			category: "research",
			description: "Under researchers at Sandia National Laboratories, explores numerical methods for capturing strong shock waves and radiation-hydrodynamics coupling.",
			url: null,
			private: false,
			commitment: {
				start: "2021-12-01",
				end: "2023-09-15",
				hours: 1,
				priority: 1
			}
		},
		{
			id: "cement",
			title: "Center for Exascale Monte Carlo Neutron Transport (CEMeNT)",
			funder: "Department of Energy",
			award: "DE-NA003967",
			investigators: "Todd Palmer (PI), Camille Palmer, Kyle E. Niemeyer, Mike Bailey , Lizhong Chen, Ryan McClarren (Notre Dame), Dmitriy Anistratov (NC State), and Tim Kelley (NC State)",
			amount: 4300000,
            myamount: 456765,
			category: "research",
			description: "A large, multi-institution center with the overarching goal of enabling simulations of neutron transport using an advanced, dynamic exascale Monte Carlo approach.",
			url: "https://www.energy.gov/nnsa/articles/nnsa-announces-selection-predictive-science-academic-alliance-program-centers",
			commitment: {
				start: "2020-09-15",
				end: "2025-09-15",
				hours: 1,
				priority: 1
			}
		},
		{
			id: "nsfcantera",
			title: "Extensible and community-driven thermodynamics, transport, and chemical kinetics modeling with Cantera: expanding to diverse scientific domains",
			funder: "National Science Foundation",
			award: "#1931592",
			investigators: "Steven DeCaluwe (PI), Greg Jackson, and Bob Kee (Colorado School of Mines); Kyle Niemeyer (PI, Oregon State); C. Franklin Goldsmith (PI, Brown); Raymond Speth (PI, MIT); Bryan Weber (PI, UConn); and Richard West (PI, Northeastern)",
			amount: 2542365,
            myamount: 317419,
			category: "research",
			description: "Extends the software library Cantera to provide new cross-disciplinary research capabilities and provides a foundation for further community-driven improvements to the framework.",
			url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1931592&HistoricalAwards=false",
			commitment: {
				start: "2020-01-01",
				end: "2024-12-31",
				hours: 1,
				priority: 1
			}
		},
        {
			id: "nsfocean",
			title: "Submesoscale-Resolving Large Eddy Simulations Using Reduced Biogeochemical Models",
			funder: "National Science Foundation",
			award: "#1924658",
			investigators: "Peter Hamlington and Nikki Lovenduski (CU Boulder); Kyle Niemeyer (PI, Oregon State)",
			amount: 532546,
            myamount: 247888,
			category: "research",
			description: "This project adapts techniques from the field of combustion used to reduce large chemical kinetics models to reduce the size of large ocean biogeochemical models, enabling physically accurate simulations of the upper ocean.",
			url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1924658&HistoricalAwards=false",
			commitment: {
				start: "2019-09-01",
				end: "2024-08-31",
				hours: 1,
				priority: 1
			}
		},
        {
			id: "livefuels",
			title: "Live Fuels: Identification of Key Processes Controlling Ignition, Burning Rate, and Fuel Consumption",
			funder: "SERDP",
			award: "RC19-1092",
			investigators: "David Blunck (PI), Kyle Niemeyer, Christopher Hagen; William Jolly and Bret Butler (US Forest Service)",
			amount: 2582192,
            myamount: 375143,
			category: "research",
			description: ".",
			url: "https://www.serdp-estcp.org/projects/details/0a352aa5-af0c-4bcb-81ba-dbe8a62f7af0/rc19-1092-project-overview",
			commitment: {
				start: "2019-08-01",
				end: "2024-07-31",
				hours: 1,
				priority: 1
			}
		},
        {
			id: "bssw",
			title: "Better Scientific Software (BSSw) Fellowship",
			funder: "Department of Energy",
			award: null,
			investigators: "Kyle Niemeyer (PI)",
			amount: 31533,
			category: "research",
			description: "This fellowship, supported by DOE Office of Science through the Exascale Computing Project, supported the development of modules for teaching software engineering practices for research.",
			url: "https://bssw.io/fellows/kyle-niemeyer",
			commitment: {
				start: "2019-01-01",
				end: "2020-03-31",
				hours: 1,
				priority: 1
			}
		},
        {
			id: "f2ft",
			title: "Support of the Feedstock to Function Tool (F2FT) Project",
			funder: "Department of Energy",
			award: "7449593",
			investigators: "Kyle Niemeyer (PI)",
			amount: 224361,
			category: "research",
			description: "Under lead organization LBL, this grant supported the development of machine-learning models that predict thermophysical properties of alternative jet fuel blends.",
			url: null,
			commitment: {
				start: "2018-12-01",
				end: "2021-09-15",
				hours: 1,
				priority: 1
			}
		},
		{
			id: "combustionworkshop2",
			title: "Support for Workshop and Mentoring of Junior Researchers at the US National Combustion Meeting",
			funder: "National Science Foundation",
			award: "1901570",
			investigators: "Jacqueline O'Connor (Penn State), Richard West (Northeastern), Kyle Niemeyer, and Nicole Labbe (CU Boulder)",
			amount: 27838,
			category: "service",
			description: "This grant enabled a workshop for early career faculty and staff researchers in the combustion and fire fields.",
			url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1901570&HistoricalAwards=false",
			commitment: {
				start: "2019-01-01",
				end: "2019-12-31",
				hours: 0.5,
				priority: 1
			}
		},
		{
			id: "sootmodeling",
			title: "CDS&E: Leveraging hardware acceleration for accurate particle dynamics in turbulent flows",
			funder: "National Science Foundation",
			award: "1761683",
			investigators: "Guillaume Blanquart (Caltech); Kyle Niemeyer",
			amount: 550000,
			myamount: 268612,
			category: "research",
			description: "This project aims to improve the predictive capabilities of numerical frameworks for simulating the transport and evolution of populations of nanoparticles in complex flow fields, such as soot formed by combustion.",
			url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1761683&HistoricalAwards=false",
			commitment: {
				start: "2018-08-01",
				end: "2023-07-31",
				hours: 0.5,
				priority: 1
			}
		},
		{
			id: "si2workshop2018",
			title: "2018 Software Infrastructure for Sustained Innovation (SI2) Principal Investigators Workshop",
			funder: "National Science Foundation",
			award: "1831393",
			investigators: "Francis Timmes (Arizona State), Sandra Gesing (Notre Dame), Kyle Niemeyer, Rafael Ferreira da Silva (USC), and Paul Bauman (Buffalo)",
			amount: 37401,
			category: "service",
			description: "This grant supported the PI workshop for the NSF Software Infrastructure for Sustained Innovation (SI2) program, in 2018.",
			url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1831393&HistoricalAwards=false",
			commitment: {
				start: "2018-06-01",
				end: "2019-05-31",
				hours: 0.5,
				priority: 1
			}
		},
		{
			id: "combustionworkshop",
			title: "Workshop: Building a sustainable combustion research community",
			funder: "National Science Foundation",
			award: "1733968",
			investigators: "Kyle Niemeyer, Nicole Labbe (CU Boulder), Jacqueline O'Connor (Penn State), and Richard West (Northeastern)",
			amount: 15195,
			myamount: 15195,
			category: "service",
			description: "This grant enabled a workshop for early career faculty and staff researchers in the combustion and fire fields.",
			url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1733968&HistoricalAwards=false",
			commitment: {
				start: "2017-03-01",
				end: "2017-12-31",
				hours: 0.5,
				priority: 1
			}
		},
		{
			id: "fuelindex",
			title: "Further Development of Fuel Autoignition Index Based on Infrared Absorption",
			funder: "Chevron",
			award: null,
			investigators: "Christopher Hagen (PI) and Kyle Niemeyer",
			amount: 100000,
			myamount: 10966,
			category: "research",
			description: "This project aimed to develop a metric for quantifying the tendency of certain operating conditions that lead to pre-ignition in low-temperature compression-ignition engines.",
			url: null,
			commitment: {
				start: "2017-03-01",
				end: "2018-06-30",
				hours: 0.5,
				priority: 1
			}
		},
		{
			id: "si2workshop2017",
			title: "2017 Software Infrastructure for Sustained Innovation (SI2) Principal Investigator Workshop",
			funder: "National Science Foundation",
			award: "1702722",
			investigators: "Ganesh Gopalakrishnan (U. Utah), Matthew Turk (UIUC), Yung-Hsiang Lu (Purdue), Matthew Knepley (Rice), and Kyle Niemeyer",
			amount: 94993,
			category: "service",
			description: "This grant supported the PI workshop for the NSF Software Infrastructure for Sustained Innovation (SI2) program, in 2017.",
			url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1702722&HistoricalAwards=false",
			commitment: {
				start: "2016-12-01",
				end: "2017-11-30",
				hours: 0.5,
				priority: 1
			}
		},
		{
			id: "wssspe4",
			title: "The 4th Workshop on Sustainable Software for Science: Best Practices and Experiences (WSSSPE4)",
			funder: "National Science Foundation",
			award: "1648293",
			investigators: "Daniel Katz (UIUC), Gabrielle Allen (UIUC), and Kyle Niemeyer",
			amount: 40000,
			myamount: 0,
			category: "service",
			description: "This grant supported the PI workshop for the NSF Software Infrastructure for Sustained Innovation (SI2) program, in 2017.",
			url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1648293&HistoricalAwards=false",
			commitment: {
				start: "2016-08-01",
				end: "2017-07-31",
				hours: 0.5,
				priority: 1
			}
		},
		{
			id: "nvidiak40-2",
			title: "Tesla K40 GPU hardware donation",
			funder: "NVIDIA",
			award: null,
			investigators: "Kyle Niemeyer",
			amount: 3000,
			myamount: 3000,
			category: "research",
			description: "This was a hardware donation in support of my research program.",
			url: null,
			commitment: {
				start: "2016-03-01",
				end: "2016-03-01",
				hours: 0,
				priority: 2
			}
		},
		{
			id: "smoldering",
			title: "Ignition, Propagation, and Emissions of Smoldering Combustion: Experimental Analysis and Physics Based-Modeling",
			funder: "SERDP",
			award: "RC-2651",
			investigators: "David Blunck (PI), Kyle Niemeyer; Bret Butler and Wei Min Hao (US Forest Service)",
			amount: 2059094,
			myamount: 468387,
			category: "research",
			description: "The focus of this project was smoldering combustion, and using a combination of experimental and computational studies to understand the controlling processes.",
			url: "https://www.serdp-estcp.org/projects/details/7f7970f0-0b0f-44fd-a3d7-ba6e61fd7cb5/rc-2651-project-overview",
			commitment: {
				start: "2016-05-01",
				end: "2021-04-30",
				hours: 1,
				priority: 1
			}
		},
		{
			id: "swept",
			title: "Swept time-space domain decomposition rule for breaking the latency barrier",
			funder: "NASA",
			award: "NNX15AU66A",
			investigators: "Qiqi Wang (MIT), Kyle Niemeyer, and David Gleich (Purdue University)",
			amount: 696444,
			myamount: 273454,
			category: "research",
			description: "This grant supported the development and investigation of the swept time-space decomposition rule, which is a numerical scheme that could accelerate computational fluid dynamics simulations when solved on large, distributed supercomputing systems.",
			url: "https://www.nasa.gov/aeroresearch/solicitations/2015-nra-awards",
			commitment: {
				start: "2015-09-01",
				end: "2018-08-31",
				hours: 1,
				priority: 1
			}
		},
		{
			id: "LTCindex",
			title: "Advanced Internal Combustion Engine Fuel Modeling and Testing Phase II",
			funder: "Chevron",
			award: null,
			investigators: "Christopher Hagen (PI) and Kyle Niemeyer",
			amount: 142178,
			myamount: 42516,
			category: "research",
			description: "This project further investigated a metric for quantifying the suitability of future gasoline fuels for use in advanced compression-ignition engines.",
			url: null,
			commitment: {
				start: "2015-09-01",
				end: "2016-08-31",
				hours: 1,
				priority: 1
			}
		},
		{
			id: "si2sse",
			title: "SI2-SSE: An intelligent and adaptive parallel CPU/GPU co-processing software library for accelerating reactive-flow simulations",
			funder: "National Science Foundation",
			award: "1535065",
			investigators: "Kyle Niemeyer (PI) and Chih-Jen Sung (University of Connecticut)",
			amount: 528644,
			myamount: 314287,
			category: "research",
			description: "This grant supported research into algorithms and software for accelerating reactive-flow simulations using GPUs and other many-core processors.",
			url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1535065&HistoricalAwards=false",
			commitment: {
				start: "2015-09-01",
				end: "2018-08-31",
				hours: 1,
				priority: 1
			}
		},
		{
			id: "pdemhd",
			title: "Pulse detonation engine for advanced oxy-combustion of coal-based fuels",
			funder: "Department of Energy",
			award: "DE-FE0025822",
			investigators: "David Blunck (PI), Sourabh Apte, and Kyle Niemeyer",
			amount: 874750,
			myamount: 169500,
			category: "research",
			description: "This project studied a novel power-generation system based on coupling a pulse detonation engine with magnetohydrodynamic generator for direct power extraction, using a combination of experimental studies and computational modeling.",
			url: "https://www.netl.doe.gov/plp/FE0025822-OSU-NETL-project.pdf",
			commitment: {
				start: "2015-09-01",
				end: "2017-03-31",
				hours: 1,
				priority: 1
			}
		},
		{
			id: "oregonbest",
			title: "Arc Position Sensing Technology Commercialization",
			funder: "Oregon BEST",
			award: null,
			investigators: "Kyle Niemeyer",
			amount: 149975,
			myamount: 149975,
			category: "research",
			description: "This project was part of the Oregon BEST commercialization program, and a partnership with KW Associates (now Ampere Scientific), to study a method for locating electrical arc positions in vacuum arc remelting furances.",
			url: null,
			commitment: {
				start: "2015-06-01",
				end: "2016-12-31",
				hours: 1,
				priority: 1
			}
		},
		{
			id: "nvidiak40",
			title: "Tesla K40 GPU hardware donation",
			funder: "NVIDIA",
			award: null,
			investigators: "Kyle Niemeyer",
			amount: 3000,
			myamount: 3000,
			category: "research",
			description: "This was a hardware donation in support of my research program.",
			url: null,
			commitment: {
				start: "2015-01-01",
				end: "2015-01-01",
				hours: 0,
				priority: 2
			}
		},
		{
			id: "lucid",
			title: "A tool to estimate the electrical energy generated from turbines inserted in fresh water pipes",
			funder: "NSF Center for e-Design",
			award: null,
			investigators: "Christopher Hoyle and Kyle Niemeyer",
			amount: 30000,
			myamount: 30000,
			category: "research",
			description: "This project was in partnership with Lucid Energy/Oregon BEST, and supported research into predicting how much electricity could be generated by Lucid's in-pipe turbines.",
			url: null,
			commitment: {
				start: "2015-01-01",
				end: "2015-12-31",
				hours: 1,
				priority: 1
			}
		}
	],
	travel: [
		{
			url: 'https://github.com/si2-urssi/winterschool-Jan2024',
			title: 'URSSI Winter School',
			details: "I'm running a 2.5 day training school on software engineering skills for researchers. ",
			category: 'research',
			commitment: {
				start: '2024-01-03',
				end: '2024-01-05',
				hours: 25,
				priority: 0,
			}
		},
		{
            url: 'https://event.asme.org/MEED',
            title: 'ASME Mechanical Engineering Education Summit',
            details: 'Networking with mechanical engineering program leadership on education issues',
            category: 'service',
            commitment: {
                start: '2024-03-18',
                end: '2024-03-21',
                hours: 30,
                priority: 1,
            },
        },
		{
			url: '',
			title: 'URSSI Summer School',
			details: "I'm running a 3.5 day training school on software engineering skills for researchers. ",
			category: 'research',
			commitment: {
				start: '2024-06-18',
				end: '2024-06-21',
				hours: 35,
				priority: 0,
			}
		},
        {
            url: 'https://www.combustionsymposia.org',
            title: 'Interational Symposium on Combustion',
            details: 'Networking with my research and practice community',
            category: 'research',
            commitment: {
                start: '2024-07-21',
                end: '2024-07-26',
                hours: 30,
                priority: 1,
            },
        },
        {
            title: 'Vacation',
            details: "I'll be on vacation for the holidays.",
            category: 'personal',
            commitment: {
                start: '2024-12-20',
                end: '2025-01-02',
                hours: 56,
                priority: 0,
            },
        },
	],
	talks: [
		{
			date: "2023-07-12",
			image: "aceee-jul-2023.jpeg",
			alt: "Title slide of the talk, which says 'Strategies for tackling the computational cost of modeling reacting fluids and related problems'.",
			slides: "https://doi.org/10.5281/zenodo.8144168",
			recording: null,
			title: "Right Onsite: Accelerating deployment of onsite clean energy technology in the industrial sector",
			url: "https://www.aceee.org/2023-industry-summer-study",
			venue: "2023 ACEEE Summer Study on Energy Efficiency in Industry",
			description: "Conference talk based on a program I supported while working at the US Department of Energy, seeking to accelerate the adoption of clean onsite energy systems in industry.",
			keynote: false
		},
		{
			date: "2023-04-11",
			image: "pennstate-apr-2023.png",
			alt: "Title slide of the talk, which says 'Strategies for tackling the computational cost of modeling reacting fluids and related problems'.",
			slides: "",
			recording: null,
			title: "Strategies for tackling the computational cost of modeling reacting fluids and related problems",
			url: "https://www.me.psu.edu/events/event-detail.aspx?EventID=c9e3c018-4779-4953-b373-9",
			venue: "Department of Mechanical Engineering, Pennsylvania State University",
			description: "Invited department seminar describing my group's work on numerical methods in combustion, and how we extend methods developed in this field to others.",
			keynote: false
		},
		{
			date: "2023-03-31",
			image: "cwru-mar-2023.png",
			alt: "Title slide of the talk, which says 'Strategies for tackling the computational cost of modeling reacting fluids and related problems'.",
			slides: "",
			recording: null,
			title: "Strategies for tackling the computational cost of modeling reacting fluids and related problems",
			url: null,
			venue: "Department of Mechanical & Aerospace Engineering, Case Western Reserve University",
			description: "Invited department seminar describing my group's work on numerical methods in combustion, and how we extend methods developed in this field to other domains.",
			keynote: false
		},
		{
			date: "2023-01-27",
			image: "uconn-mar-2023.png",
			alt: "Title slide of the talk, which says 'Strategies for tackling the computational cost of modeling reacting fluids and related problems'.",
			slides: "https://doi.org/10.5281/zenodo.7579345",
			recording: null,
			title: "Strategies for tackling the computational cost of modeling reacting fluids and related problems",
			url: "https://me.engr.uconn.edu/blog/2023/01/19/strategies-for-tackling-the-computational-cost-of-modeling-reacting-fluids-and-related-problems/",
			venue: "Department of Mechanical Engineering, University of Connecticut",
			description: "Invited department seminar describing my group's work on numerical methods in combustion, and how we extend methods developed in this field to others.",
			keynote: false
		},
		{
			date: "2021-04-22",
			image: "adsa2021.png",
			alt: "The title slide, which says 'Using JupyterBooks for interactive teaching and fun'.",
			slides: "https://doi.org/10.5281/zenodo.7506627",
			title: "Using JupyterBooks for interactive teaching and fun",
			recording: null,
			url: null,
			venue: "Academic Data Science Alliance (ADSA) Education special interest group",
			description: "Invited talk describing my approach to combining live handwritten lectures with JupyterBooks for examples and online references.",
			keynote: false
		},
		{
			date: "2021-04-01",
			image: "stout2021.png",
			alt: "The title slide, which says 'Strategies for tackling the computational cost of modeling reacting fluids'.",
			slides: null,
			title: "Strategies for tackling the computational cost of modeling reacting fluids",
			recording: "https://www.youtube.com/watch?v=BcYxT53Xtso",
			url: null,
			venue: "Engineering Lecture Series, University of Wisconsin-Stout",
			description: "Describes the challenges of performing accurate simulations of combustion and reacting fluid flows, which require handling complex, large, and stiff chemical kinetic models. Also reviews work my group has done to tackle these and related problems.",
			keynote: false
		},
		{
			date: "2019-03-11",
			image: "boulder2019.png",
			alt: "",
			slides: "https://doi.org/10.5281/zenodo.3483886",
			title: "How to Make Friends and Influence People with Open Science",
			recording: null,
			url: "https://boulderfluidthermal.org/talk/how-to-make-friends-and-influence-people-with-open-science/",
			venue: "Boulder Fluid and Thermal Sciences Seminar Series, University of Colorado, Boulder",
			description: "Provides an overview on how to practice open science in your research: making your publications open access, archiving your data openly, and sharing your open-source research software. Also talks about the benefits of working openly.",
			keynote: false
		},
		{
			date: "2018-10-12",
			image: "texasam2018.png",
			alt: "Title slide, that says `Background and recent progress in using detailed chemical kinetics for numerical combustion modeling`.",
			slides: "https://doi.org/10.5281/zenodo.7506723",
			title: "Background and recent progress in using detailed chemical kinetics for numerical combustion modeling",
			recording: null,
			url: null,
			venue: "Department of Aerospace Engineering, Texas A&M University",
			description: "Describes how modern combustion and reacting-flow simulations represent chemical kinetics, and discusses the challenges of using accurate, detailed kinetic models. Reviews techniques for accommodating large, detailed kinetic models in numerical combustion simulations, including model reduction/simplification, tabulation, and use of improved integration algorithms, and presents some perspectives for the future of chemical kinetics in numerical combustion.",
			keynote: false
		},
		{
			date: "2018-06-11",
			image: "cig2018.png",
			alt: "Title slide, that says 'Best practices for sustainable and open research software in computational research'.",
			slides: "https://doi.org/10.5281/zenodo.1286959",
			title: "Best practices for sustainable and open research software in computational research",
			recording: null,
			url: null,
			venue: "CGU, CSSS, CIG, ES-SSA, & CSAFM 2018 Joint Meeting",
			description: "This talk discusses principles of software citation, venues for sharing and publication of research software, and best practices for reproducibility in computational research. In addition, shares strategies for ensuring sustainability of software projects.",
			keynote: true
		},
		{
			date: "2018-03-22",
			image: "boulder2018.png",
			alt: "Title slide, that says 'Incorporating detailed chemistry in reactive-flow simulations by exploiting system stiffness and processor architecture'.",
			slides: "https://doi.org/10.5281/zenodo.7506784",
			title: "Incorporating detailed chemistry in reactive-flow simulations by exploiting system stiffness and processor architecture",
			recording: null,
			url: "https://boulderfluidthermal.org/talk/incorporating-detailed-chemistry-in-reactive-flow-simulations-by-exploiting-system-stiffness-and-processor-architecture/",
			venue: "Boulder Fluid and Thermal Sciences Seminar Series, University of Colorado, Boulder",
			description: "A revised version of my talk given at UT Austin in 2017. Summarizes work on complementary efforts to reduce the computational expense of integrating chemical kinetics in reacting-flow and combustion simulations using modern processing architectures.",
			keynote: false
		},
		{
			date: "2017-08-29",
			image: "galway2017.png",
			alt: "Title slide, that says 'New community standards and open tools for chemical kinetics'.",
			slides: "https://doi.org/10.5281/zenodo.7506827",
			title: "New community standards and open tools for chemical kinetics",
			recording: null,
			url: null,
			venue: "Combustion Chemistry Centre, National University of Ireland, Galway",
			description: "Describes a pair of related, collaborative projects for a standardized method of describing fundamental combustion experimental measurements in a human- and machine-readable way (and tools for working with such data), and a study that uses these tools to examine the impacts of discrepancies in model parameters found across the literature.",
			keynote: false
		},
		{
			date: "2017-07-26",
			image: "utaustin2017.png",
			alt: "Title slide, that says 'Enabling next-generation combustion simulations by intelligent integration'.",
			slides: "https://doi.org/10.5281/zenodo.7506859",
			title: "Enabling next-generation combustion simulations by intelligent integration",
			recording: null,
			url: "https://oden.utexas.edu/news-and-events/events/1189/",
			venue: "Institute for Computational Engineering and Sciences, University of Texas at Austin",
			description: "Summarizes work on complementary efforts to reduce the computational expense of integrating chemical kinetics in reacting-flow and combustion simulations using modern processing architectures.",
			keynote: false
		},
		{
			date: "2017-05-08",
			image: "osu-research-computing2017.png",
			alt: "Title slide that says 'Software in science and engineering research: the case for open source and proper citation'.",
			slides: "https://doi.org/10.6084/m9.figshare.4985570",
			title: "Software in science and engineering research: the case for open source and proper citation",
			recording: "https://media.oregonstate.edu/media/t/0_3upv3tsj",
			url: null,
			venue: "Research Computing Seminar Series, Oregon State University",
			description: "This talk discusses principles of software citation, venues for sharing and publication of research software, and best practices for reproducibility in computational research.",
			keynote: false
		},
		/*{
			date: "2017-02-03",
			image: "mimedesign2017.png",
			alt: "Title slide that says 'How to Practice Open Science to Make Friends and Influence People'.",
			slides: null,
			title: "How to Practice Open Science to Make Friends and Influence People",
			recording: null,
			url: null,
			venue: "Oregon State University MIME Design Seminar Series",
			description: "This talk provided an overview of how to practice open science in research: making your publications open access, archiving your data openly, and sharing your open-source research software.",
			keynote: false
		},
		{
			date: "2016-11-18",
			image: "",
			alt: "",
			slides: null,
			title: "Good-Enough Practices for Computing in Research",
			recording: null,
			url: null,
			venue: "Oregon State University MIME Design Seminar Series",
			description: "",
			keynote: false
		},*/
		{
			date: "2016-10-28",
			image: "osuappliedmath2016.png",
			alt: "Title slide that says 'Novel modeling tools for next-generation combustion'.",
			slides: null,
			title: "Novel modeling tools for next-generation combustion",
			recording: null,
			url: null,
			venue: "Applied Mathematics and Computation Seminar, Oregon State University",
			description: "Talks about why we need to study combustion and reactive-flow modeling, and the challenges of accurate modeling; also describes my efforts to reduce the cost of accurate chemistry in reactive-flow simulations, in particular reducing the size of chemical models and developing new strategies for exploiting GPUs.",
			keynote: false
		},
		{
			date: "2016-03-07",
			image: "osu-research-computing2016.png",
			alt: "Title slide that says 'Making effective use of graphics processing units (GPUs) in computations'.",
			slides: null,
			title: "Making effective use of graphics processing units (GPUs) in computations",
			recording: "https://media.oregonstate.edu/media/t/0_4ggds95m",
			url: null,
			venue: "Research Computing Seminar Series, Oregon State University",
			description: "This seminar explores the use of GPUs in general, describe examples of the use of GPUs in computations, and introduce some best practices for GPU computing.",
			keynote: false
		},
		{
			date: "2015-11-12",
			image: "caltech2015.png",
			alt: "Title slide that says 'Novel computational modeling tools for next-generation combustion'.",
			slides: null,
			title: "Novel computational modeling tools for next-generation combustion",
			recording: null,
			url: null,
			venue: "Department of Mechanical and Civil Engineering, Caltech",
			description: "Talks about why we need to study combustion and reactive-flow modeling, and the challenges of accurate modeling; also describes my efforts to reduce the cost of accurate chemistry in reactive-flow simulations, in particular reducing the size of chemical models and developing new strategies for exploiting GPUs.",
			keynote: false
		},
		{
			date: "2015-10-02",
			image: "utah2015.png",
			alt: "Title slide that says 'Novel computational modeling tools for next-generation combustion'.",
			slides: null,
			title: "Novel computational modeling tools for next-generation combustion",
			recording: null,
			url: null,
			venue: "Department of Chemical Engineering, The University of Utah",
			description: "This is a slightly updated version of the talk I gave at Caltech about my research.",
			keynote: false
		},
	],
	panels: [
		/*{
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
		},*/
	],
	classes: [
		{
			id: "intermediate-thermo",
			alt: "Figure showing the words Computational Thermo inside a piston-cylinder.",
			number: "ME 540",
			level: "graduate",
			title: "Intermediate Thermodynamics",
			description: "This graduate thermodynamics course covers how to solve advanced problems in thermodynamics using computational tools, including phase and chemical equilibrium, and introduces statistical thermodynamics.",
			hours: 8,
			links: [
				{
					"description": "Kyle's ebook for the course",
					"link": "https://kyleniemeyer.github.io/computational-thermo/"
				},
			],
			offerings: [
				{size: 30, term: 3, year: 2024, responses: null, score1: null, score2: null},
				{size: 12, term: 3, year: 2022, responses: 4, score1: 5.8, score2: 5.8},
                {size: 21, term: 3, year: 2020, responses: 10, score1: null, score2: null},
			]
		},
		{
			id: "rocket-propulsion",
			alt: "Photo of Apollo 11 Saturn V launch vehicle, lifting off on 16 July 1969,",
			number: "ME 499",
			level: "undergraduate",
			title: "Rocket Propulsion",
			description: "The undergraduate elective course covers the fundamentals of rocket propulsion, focusing on chemical propulsion types (liquid, solid, hybrid).",
			hours: 8,
			links: [
				{
					"description": "Kyle's online notes for the course",
					"link": "https://kyleniemeyer.github.io/rocket-propulsion/"
				},
			],
			offerings: [
				{size: 40, term: 2, year: 2025, responses: null, score1: null, score2: null},
				{size: 42, term: 2, year: 2022, responses: 14, score1: 5.9, score2: 5.9},
                {size: 22, term: 2, year: 2020, responses: 9, score1: 5.9, score2: 6.0},
			]
		},
        {
			id: "software-dev-course",
			alt: "Figure showing mathematical and scientific icons surrounding the Python logo",
			number: "ME 599",
			level: "graduate",
			title: "Software Development for Engineering Research",
			description: "This project-based graduate course aims at advancing computational research skills.",
			hours: 8,
			links: [
				{
					"description": "Syllabus for the Winter 2019 offering",
					"link": "https://softwaredevengresearch.github.io/syllabus-s2019/"
				},
			],
			offerings: [
				{size: 20, term: 2, year: 2025, responses: null, score1: null, score2: null},
				{size: 16, term: 2, year: 2022, responses: 6, score1: 5.9, score2: 5.9},
                {size: 7, term: 3, year: 2019, responses: 3, score1: 5.8, score2: 5.8},
                {size: 17, term: 3, year: 2018, responses: 6, score1: 5.5, score2: 5.8},
			]
		},
        {
			id: "gas-dynamics",
			alt: "Two-dimensional Schlieren image of supersonic air flowing at Mach 2 over a wedge, with oblique shock waves followed by Prandtl-Meyer expansion fans; source: Penn State University Gas Dynamics Laboratory",
			number: "ME 461/561",
			level: "slash",
			title: "Gas Dynamics",
			description: "This combined undergraduate/graduate course introduces compressible fluid flows, including flows in nozzles and diffusers, as well as shocks/expansion waves and their interactions. It also introduces supersonic flight and propulsion systems.",
			hours: 8,
			links: [
				{
					"description": "Kyle's online notes for the course",
					"link": "https://kyleniemeyer.github.io/gas-dynamics-notes/"
				},
			],
			offerings: [
				{size: 34, term: 1, year: 2021, responses: 10, score1: 5.8, score2: 5.9},
                {size: 58, term: 1, year: 2020, responses: 14, score1: 5.0, score2: 5.2},
                {size: 52, term: 1, year: 2019, responses: 21, score1: 5.1, score2: 5.1},
                {size: 32, term: 1, year: 2018, responses: 14, score1: 5.5, score2: 5.6},
                {size: 15, term: 1, year: 2017, responses: 12, score1: 5.3, score2: 5.1},
			]
		},
        {
			id: "numerical-methods",
			alt: "Photo of Grace Hopper with a COBOL manual standing in front of an old computer in 1952",
			number: "ME 373",
			level: "undergraduate",
			title: "Mechanical Engineering Methods",
			description: "This third-year course covers analytical and numerical methods for solving ordinary and partial differential equations, with applications to problems in mechanical engineering.",
			hours: 8,
			links: [
				{
					"description": "Kyle's ebook for the course",
					"link": "https://kyleniemeyer.github.io/ME373-book/"
				},
			],
			offerings: [
				{size: 50, term: 3, year: 2024, responses: null, score1: null, score2: null},
				{size: 111, term: 2, year: 2020, responses: 40, score1: 4.8, score2: 5.4},
                {size: 89,  term: 2, year: 2020, responses: 20, score1: 4.4, score2: 4.9},
                {size: 113, term: 2, year: 2019, responses: 32, score1: 4.3, score2: 4.5},
                {size: 98,  term: 2, year: 2019, responses: 36, score1: 4.6, score2: 4.9},
                {size: 111, term: 1, year: 2017, responses: 81, score1: 4.4, score2: 4.9},
                {size: 76, term: 2, year: 2017, responses: 45, score1: 4.5, score2: 4.6},
                {size: 92, term: 2, year: 2017, responses: 70, score1: 4.8, score2: 5.0},
                {size: 93, term: 2, year: 2016, responses: 78, score1: 4.5, score2: 4.9},
                {size: 81, term: 2, year: 2015, responses: 67, score1: 4.4, score2: 4.6},
			]
		},
        {
			id: "space-systems",
			alt: "Figure showing orbital parameters, created by Peo~commonswiki and hosted on Wikimedia Commons",
			number: "AAE 412/512",
			level: "slash",
			title: "Space Systems Engineering",
			description: "This is a combined senior and graduate course on topics related to space systems, including orbital mechanics and trajectory design, propulsion systems, stability and control of spacecraft, and space mission engineering.",
			hours: 8,
			links: [
				{
					"description": "Kyle's ebook for the course",
					"link": "https://kyleniemeyer.github.io/space-systems-notes/"
				},
			],
			offerings: [
				{size: 92, term: 1, year: 2020, responses: 23, score1: 5.7, score2: 5.7},
			]
		},
        {
			id: "adv-combustion",
			alt: "",
			number: "ME 599",
			level: "graduate",
			title: "Advanced Combustion",
			description: "This was an advanced graduate-level course on fundamental principles of combustion, co-taught with David Blunck.",
			hours: 8,
			links: [],
			offerings: [
				{size: 7, term: 1, year: 2016, responses: 5, score1: 3.1, score2: 4.0},
			]
		},
        {
			id: "mime101",
			alt: "",
			number: "MIME 101",
			level: "undergraduate",
			title: "Introduction to MIME",
			description: "This was a first-year course providing an overview of mechanical, industrial, and manufacturing engineering as well as academic success skills",
			hours: 6,
			links: [],
			offerings: [
				{size: 72, term: 1, year: 2015, responses: 45, score1: 4.1, score2: 4.7},
			]
		},
        {
			id: "fluid-dynamics",
			alt: "Image of smoke swirls and flow",
			number: "ME 331",
			level: "undergraduate",
			title: "Introductory Fluid Mechanics",
			description: "This third-year course introduces concepts and applications of fluid mechanics and dimensional analysis.",
			hours: 8,
			links: [],
			offerings: [
				{size: 15, term: 1, year: 2014, responses: 13, score1: 4.5, score2: 4.8},
                {size: 11, term: 1, year: 2013, responses: 8, score1: 5.0, score2: 4.8},
			]
		},
        {
			id: "capstone",
			alt: "Image of a house of quality used to design products",
			number: "ESE 497",
			level: "undergraduate",
			title: "MIME Capstone Design",
			description: "This is a senior-level design capstone course for Energy Systems Engineering (ESE) students, covering real-world product design, project management, and professional communication skills.",
			hours: 8,
			links: [],
			offerings: [
				{size: 14, term: 1, year: 2014, responses: 12, score1: 4.0, score2: 4.6},
			]
		}
	],
	commitments: [
		{
            title: 'Reading',
            description: 'Books and papers',
            category: 'research',
            annually: false,
            commitment: { start: null, end: null, hours: 2, priority: 1 },
        },
		{
            title: 'Fundraising',
            description: 'Brainstorming new ideas, writing proposals, making budgets',
            category: 'research',
            annually: false,
            commitment: { start: null, end: null, hours: 2, priority: 1 },
        },
        {
            title: 'Advising',
            description:
                'Graduate student meetings, feedback, and collaboration',
            category: 'research',
            annually: false,
            commitment: { start: null, end: null, hours: 4, priority: 0 },
        },
        // {
        //     title: 'Seminars',
        //     description: 'MIME',
        //     category: 'research',
        //     annually: false,
        //     commitment: { start: null, end: null, hours: 1, priority: 0 },
        // },
        {
            title: 'Miscellany',
            description: 'Crises, oversights, and other surprises',
            category: 'service',
            annually: false,
            commitment: { start: null, end: null, hours: 2, priority: 0 },
        },
        {
            title: 'Autumn faculty meetings',
            description: 'MIME',
            category: 'service',
            annually: true,
            commitment: { start: '09-15', end: '12-15', hours: 0.25, priority: 0 },
        },
        {
            title: 'Winter faculty meetings',
            description: 'MIME',
            category: 'service',
            annually: true,
            commitment: { start: '01-01', end: '03-15', hours: 0.25, priority: 0 },
        },
        {
            title: 'Spring faculty meetings',
            description: 'MIME',
            category: 'service',
            annually: true,
            commitment: { start: '04-01', end: '06-15', hours: 0.25, priority: 0 },
        },
	],
	years: {
		"2006": "Freshman year of college",
		"2007": "Sophomore year of college",
		"2008": "Junior year of college",
		"2009": "Graduated from BS; 1st year of MS",
		"2010": "Defended MS thesis; began PhD work",
		"2011": null,
		"2012": null,
		"2013": "Job search, finished PhD, started postdoc at OSU",
		"2014": "Shifted to research faculty position",
		"2015": "Started tenure-track position",
		"2016": null,
		"2017": null,
		"2018": null,
		"2019": null,
		"2020": "Promoted to Associate Professor and received tenure; COVID-19; divorce",
		"2021": "COVID-19; began as ME Undergraduate Program Coordinator",
		"2022": "Sabbatical (Fall); began AAAS STP Fellowship in DC @ DOE",
		"2023": "Sabbatical (Winter/Spring); ended AAAS Fellowship in December; returned to Corvallis and began AHUG position",
	}
}

export default Kyle;
