<script lang="ts">

	import Linkable from '$lib/components/Linkable.svelte';
    import External from '$lib/components/External.svelte';
    import Link from '$lib/components/Link.svelte';

	import { profile } from "$lib/models/stores";

	$: pubCount = Math.round($profile.getPublications(paper => paper.kind.indexOf("refereed") === 0 || paper.kind.indexOf("journal") >= 0).length / 10) * 10;
	//$: bestAwardCount = $profile.getPublications(paper => paper.award !== undefined && paper.award.filter(award => award.includes("best paper")).length > 0).length;
	//$: mipAwardCount = $profile.getPublications(paper => paper.award !== undefined && paper.award.filter(award => award.includes("most influential")).length > 0).length;

</script>

<h1>Professional and personal takes on my professorly life.</h1>

<Linkable id="short">Short Bio</Linkable>

<p>
	Kyle E. Niemeyer is an Associate Professor and Welty Faculty Fellow at <External to="https://oregonstate.edu">Oregon State University</External> in the <External to="https://engineering.oregonstate.edu/MIME">School of Mechanical, Industrial, and Manufacturing Engineering</External>. 
	He also serves as the Associate School Head for Undergraduate Programs (as of December 2023).
	He leads the Niemeyer Research Group, which uses computational modeling to study various phenomena involving fluid flows, including combustion and chemical kinetics, and related topics like numerical methods and parallel computing. 
	He is also a strong advocate of open access, open source software, and open science in general, and has contributed in the area of standardizing research software citation.
	Kyle's work spans more than 
	<!-- Compute number of publications, rounding to nearest 10 -->
	{ pubCount } <Link to="/publications">peer-reviewed publications</Link>, 
	and he has received multiple prestigious fellowships throughout his career, including the <External to="https://www.aaaspolicyfellowships.org">AAAS Science & Technology Policy Fellowship</External> in 2022, the <External to="https://bssw.io/pages/bssw-fellowship-program">Better Scientific Software (BSSw) Fellowship</External> in 2019, the <External to="http://www.nsfgrfp.org">NSF Graduate Research Fellowship</External> in 2010, and the <External to="https://ndseg.org">National Defense Science and Engineering Graduate Fellowship</External> in 2009.
	Kyle received his Ph.D. in Mechanical Engineering from <External to="https://case.edu/">Case Western Reserve University</External> in 2013, working with <External to="https://me.engr.uconn.edu/blog/faculty/sung-chih-jen-jackie/">Professor Jackie Sung</External> in the <External to="http://combdiaglab.engr.uconn.edu/">Combustion Diagnostics Laboratory</External> (now at the University of Connecticut). 
	He received BS and MS degrees in Aerospace Engineering from <External to="https://case.edu/">Case Western Reserve University</External> in 2009 and 2010, respectively.
</p>

<Linkable id="lineage">Academic Lineage</Linkable>

<p>
	My full academic lineage can be found at my <External to="http://www.genealogy.ams.org/id.php?id=180371">Mathematics Genealogy Project profile</External>, but briefly, I was advised by:
</p>
<ul>
	<li><External to="https://me.engr.uconn.edu/blog/faculty/sung-chih-jen-jackie/">Jackie Sung</External>, (Ph.D., Princeton University), who was advised by</li>
	<li><External to="https://mae.princeton.edu/people/faculty/law">Chung K. Law</External>, (Ph.D., University of California, San Diego), who was advised by</li>
	<li><External to="https://en.wikipedia.org/wiki/Forman_A._Williams">Forman A. Williams</External> (Ph.D., Caltech), who had <External to="https://en.wikipedia.org/wiki/Richard_Feynman">Richard Feynman</External> on his dissertation committee and was advised by</li>
	<li><External to="https://en.wikipedia.org/wiki/Stanford_S._Penner">Stanford S. (Sol) Penner</External> (Ph.D., University of Wisconsin–Madison), who was advised by</li>
	<li><External to="https://en.wikipedia.org/wiki/Farrington_Daniels">Farrington Daniels</External> (Ph.D., Harvard) and <External to="https://en.wikipedia.org/wiki/Theodore_von_Kármán">Theodore von Kármán</External> (Dr. phil., University of Göttingen), the latter of whom was advised by</li>
	<li><External to="https://en.wikipedia.org/wiki/Ludwig_Prandtl">Ludwig Prandtl</External>.</li>
</ul>

<p>As an undergraduate, I was also advised by</p>
<ul>
	<li><External to="https://en.wikipedia.org/wiki/Joseph_M._Prahl">Joseph Prahl</External> (Ph.D., Harvard University), and</li>
	<li><External to="https://www.hernandezresearch.com">Christopher Hernandez</External> (Ph.D., Stanford University).</li>
</ul>

<!--
<Linkable id="promotion">Promotion Documents</Linkable>

<p>
	These are the documents I submitted for tenure-track faculty positions in 2008, for my tenure and promotion to Associate Professor, and for my later promotion to Professor.
	I hope they're helpful to anyone pursuing a career in academia.
	While you read them, remember: careers come together one day at a time, one paper at a time, not all at once!
	I've felt imposter syndrome most of my life because people didn't tell me this.
</p>

<ul>
	<li><Link to="/promotion/Assistant-Statements.pdf">Research and teaching statements</Link> for my 2008 academic job search.</li>
	<li><Link to="/promotion/Associate-Statements.pdf">Research, teaching, and service statements</Link> for tenure and promotion to Associate Professor.</li>
	<li><Link to="/promotion/Associate-CV.pdf">Curriculum vita</Link> for tenure and promotion to Associate Professor.</li>
	<li><Link to="/promotion/Full-Statements.pdf">Research, teaching, service, and diversity statements</Link> for tenure and promotion to Professor.</li>
	<li><Link to="/promotion/Full-CV.pdf">Curriculum vita</Link> for tenure and promotion to Professor.</li>
</ul>
-->
