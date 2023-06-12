<script lang="ts">

	import External from "./External.svelte";
	import Link from "./Link.svelte";
	import Image from "./Thumbnail.svelte";

</script>

<section class="info">
	<a href="/"><Image url={"/images/headshots/mug-ken.jpg"} alt="Headshot of Kyle E. Niemeyer"/></a>
	<h1>Kyle E. Niemeyer, Ph.D.</h1>
	<External to="https://pronouns.org/he-him">he/him/his</External>
	<br/><External to="https://facultyaffairs.oregonstate.edu/faculty-handbook/faculty-appointments">Associate Professor</External>
	<br/><External to="https://www.fororegonstate.org/stay-informed/impact-stories/detail/welty-faculty-fellow">Welty Faculty Fellow</External>
	<br/><External to="https://engineering.oregonstate.edu/MIME">School of Mechanical, Industrial, and Manufacturing Engineering</External>
	<br/><External to="https://oregonstate.edu">Oregon State University</External>
	<br/><External to="https://joss.theoj.org">Associate Editor-in-Chief, <em>JOSS</em></External>
	<br/><a href="mailto:kyle.niemeyer@oregonstate.edu">email</a> &sdot; <External to="https://twitter.com/kyleniemeyer">twitter</External> &sdot; <External to="https://mastodon.social/@kyleniemeyer" ref="me">mastadon</External>
</section>
<section class="small-info">
	<a href="/"><Image url={"/images/headshots/mug-ken.jpg"} alt="Headshot of Kyle E. Niemeyer"/></a>
	<div>
		<h1 style="margin-top: 0; margin-bottom: 0;">Kyle E. Niemeyer</h1>
		<External to="https://facultyaffairs.oregonstate.edu/faculty-handbook/faculty-appointments">Associate Professor</External>
		<br/><External to="https://engineering.oregonstate.edu/MIME">School of MIME</External> &middot; <External to="https://oregonstate.edu">Oregon State</External>
		<br/><a href="mailto:kyle.niemeyer@oregonstate.edu">email</a> &sdot; <External to="https://twitter.com/kyleniemeyer">twitter</External> &sdot; <External to="https://mastodon.social/@kyleniemeyer" ref="me">mastadon</External>
	</div>
</section>

<p><mark>I'm on sabbatical until Sept. 2023.</mark></p>

<hr/>
<nav>
	<Link to="/" at={"/"}>Research</Link>
	<Link to="/lab" at={"/lab"}>Lab</Link>
	<Link to="/publications" at={"/publications"}>Publications</Link>
	<!-- <Link to="/essays" at={"/essays"}>Essays</Link> -->
	<Link to="/talks" at={"/talks"}>Talks</Link>
	<Link to="/classes" at={"/classes"}>Classes</Link>
	<!-- <Link to="/impact" at={"/impact"}>Impact</Link> -->
	<Link to="/funding" at={"/funding"}>Funding</Link>
	<Link to="/bio" at={"/bio"}>Bio</Link>
	<Link to="/contact" at={"/contact"}>Contact</Link>
	<Link to="/code-of-conduct" at={"/code-of-conduct"}>Group CoC</Link>
	<!-- <Link to="/cv">CV</Link> -->
</nav>

<hr class="small-hr"/>

<style>
	:global(nav > *) {
		padding: var(--padding);
		border-radius: var(--roundedness);
	}

	:global(nav > a:hover) {
		background-color: var(--border-color);
	}

	:global(nav > .at) {
		background-color: var(--annotation-color);
	}

	.small-info {
		display: flex;
		flex-direction: row;
		flex-basis: 1;
	}

	@media only screen and (min-width: 800px) {
		nav {
			position: sticky;
			top: var(--margin);
		}
		.small-info {
			display: none;
		}
		.small-hr {
			display: none;
		}
	}

	@media only screen and (max-width: 800px) {
		.info {
			display: none;
		}

		nav {
			overflow-x: scroll;
			white-space: nowrap;
		}
	}
</style>