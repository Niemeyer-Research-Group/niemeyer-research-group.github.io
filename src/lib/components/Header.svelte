<script lang="ts">

    import Alert from './Alert.svelte';
    import External from './External.svelte';
    import Link from './Link.svelte';
    import Social from './Social.svelte';
    import Image from './Thumbnail.svelte';

</script>

<section class="info">
	<a href="/"
		><Image
            url={'/images/headshots/mug-ken.jpg'}
            alt="Headshot of Headshot of Kyle E. Niemeyer"
        /></a
    >
	<h1>Kyle E. Niemeyer, Ph.D.</h1>
	<div class="metadata">
		<span class="small"
            ><em
                ><External to="https://www.mypronouns.org/he-him"
                    >he/him/his</External
                ></em
            ></span
        >
		<strong
            ><External
                to="https://facultyaffairs.oregonstate.edu/faculty-handbook/faculty-appointments"
                >Associate Professor</External
            ></strong
        >
        <strong
            ><External to="https://engineering.oregonstate.edu/MIME"
                >Associate Head for Undergraduate Programs</External
            ></strong
        >
        <span
            ><External to="https://engineering.oregonstate.edu/MIME"
                >School of Mechanical, Industrial, and Manufacturing Engineering</External
            ></span
        >
        <span
            ><External to="https://oregonstate.edu"
                >Oregon State University</External
            ></span
        >
        <span class="small"
            >- <External to="https://joss.theoj.org"
                >Associate Editor-in-Chief, <em>JOSS</em></External
            ></span
        >
		<Social />
	</div></section>

<small style="line-height: 1.4">
    <Alert
        >I am looking for one Ph.D. student and one postdoc to work on funded
		positions starting as soon as 15 September 2025, but open until filled.
        Please see the descriptions on the <Link to="/lab" at={"/lab"}>Lab</Link>
        page.
    </Alert>
</small>

<hr/>
<nav>
	<div class="links">
		<Link to="/" at={"/"}>Research</Link>
		<Link to="/lab" at={"/lab"}>Lab</Link>
		<Link to="/publications" at={"/publications"}>Publications</Link>
		<Link to="/consulting" at={"/consulting"}>Consulting</Link>
		<!-- <Link to="/essays" at={"/essays"}>Essays</Link> -->
		<Link to="/talks" at={"/talks"}>Talks</Link>
		<Link to="/classes" at={"/classes"}>Classes</Link>
		<!-- <Link to="/impact" at={"/impact"}>Impact</Link> -->
		<Link to="/funding" at={"/funding"}>Funding</Link>
		<Link to="/bio" at={"/bio"}>Bio</Link>
		<Link to="/commitments" at={"/commitments"}>Commitments</Link>
		<Link to="/contact" at={"/contact"}>Contact</Link>
		<Link to="/code-of-conduct" at={"/code-of-conduct"}>Group CoC</Link>
		<!-- <Link to="/cv">CV</Link> -->
	</div>
</nav>

<hr class="small-hr"/>

<style>
	nav,
	.metadata {
        font-size: var(--small-font-size);
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        gap: 0;
    }
    
	.small {
        font-size: calc(var(--small-font-size) * 0.8);
    }

	.links {
        font-size: var(--small-font-size);
        line-height: 1.5;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: calc(var(--padding) / 2);
    }

    :global(.links > *) {
        padding-left: var(--padding);
        padding-right: var(--padding);
        border-radius: var(--roundedness);
    }

    :global(.links > a:hover) {
        background-color: var(--border-color);
    }

    :global(nav .at) {
        background-color: var(--annotation-color);
    }

    @media only screen and (min-width: 800px) {
        nav {
            position: sticky;
            top: var(--margin);
        }
        .small-hr {
            display: none;
        }
    }

    @media only screen and (max-width: 800px) {
        nav {
            white-space: nowrap;
        }
    }
</style>