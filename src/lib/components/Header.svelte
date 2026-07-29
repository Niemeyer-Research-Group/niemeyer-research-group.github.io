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
                >Professor of Mechanical Engineering</External
            ></strong
        >
        <strong
            ><External to="https://engineering.oregonstate.edu/MIME"
                >Associate Head for Academic Affairs</External
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
        >We are recruiting a Ph.D. student to work on a funded position, open
        until filled. Please see the description on the
        <Link to="/(app)/lab">Lab</Link> page.
    </Alert>
</small>

<hr/>
<nav>
	<div class="links">
		<Link to="/(app)">Research</Link>
		<Link to="/(app)/lab">Lab</Link>
		<Link to="/(app)/publications">Publications</Link>
		<Link to="/(app)/software">Software</Link>
		<!-- <Link to="/(app)/essays">Essays</Link> -->
		<Link to="/(app)/talks">Talks</Link>
		<Link to="/(app)/classes">Classes</Link>
		<!-- <Link to="/(app)/impact">Impact</Link> -->
		<Link to="/(app)/funding">Funding</Link>
		<Link to="/(app)/commitments">Commitments</Link>
		<Link to="/(app)/contact">Contact</Link>
		<Link to="/(app)/code-of-conduct">Group CoC</Link>
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