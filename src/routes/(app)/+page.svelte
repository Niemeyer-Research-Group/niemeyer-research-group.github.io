<script lang="ts">

	import Link from "$lib/components/Link.svelte";
    import External from "$lib/components/External.svelte";
	import { profile } from "$lib/models/stores";
	import Thumbnail from "$lib/components/Thumbnail.svelte";
	import Block from "$lib/components/Block.svelte";
	import getPersonImagePath from "$lib/components/getPersonImage";
	import Title from '$lib/components/Title.svelte';
    import Linkable from '$lib/components/Linkable.svelte';

</script>

<Title text="Research" />

<h1>
	We are computational engineering researchers, using numerical methods and high-performance
	computing to study physical problems in energy, transportation, and aerospace.
</h1>

<p>
	Our group brings together a diverse and exciting community of 
	<Link to={"/lab"}>students and postdoctoral researchers</Link> working on these topics;
	<Link to={"/publications"}>publishing</Link> in combustion, energy, and
	computational physics communities;
	and then <Link to={"/talks"}>presenting</Link> and <Link to={"/classes"}>teaching</Link>
	our work in the world. Our current projects are enabled by our <Link to="/funding">active grants</Link>.
</p>

<p>
	We study mainly fluid dynamics phenomena using computer simulations, particularly fluid flows
	involving chemical reactions such as combustion. Our work extends from
	analyzing and simplifying chemical kinetic reaction models for transportation fuels,
	to developing surrogate models for predicting properties of fuels and chemicals,
	and even to computationally expensive, direct numerical simulations of turbulent combustion.
	We develop and apply methods to simulate combustion and other fluid-flow problems,
	including in wildfires and the ocean.
	We also write a lot of <Link to={"/software"}>code</Link>!
</p>

<p>
	Want to do research with us?
	Read about our <Link to="/lab">lab</Link>.
</p>

<Linkable id="discoveries">Contributions</Linkable>

<p>
	Our group has made many contributions since this research began in 2008.
	Here are some of the highlights from our work.
	How we describe these is always evolving as we learn more.
</p>

<!-- Create a list of discoveries from bundles of papers, sorted by the most recent publication on the discovery. -->
{#each $profile.getDiscoveries(undefined, (a) => -$profile.getDiscoveryRange(a)[1]) as discovery}
	{@const range = $profile.getDiscoveryRange(discovery)}
    {@const keyPaper = $profile.getPublication(discovery.pubs[0])}
	{#if keyPaper }
		<Block>
			{#snippet image()}
				<Thumbnail 
					url={`/images/papers/paper-${keyPaper.id}.png`} 
					alt="A clip from the paper's text or figure"
				/>
			{/snippet}
			<strong>{discovery.contribution}</strong>
			<small
                >({range[0]}{range[0] !== range[1]
                    ? ` — ${range[1]}`
                    : ''})</small
            >
            <br />{discovery.detail}
			<p>
				{#each $profile.getPeopleFromPubs(discovery.pubs) as person}
					{#if person}
                        <Link to={'/lab/#' + person.id}>
                            <img
                                src={`${getPersonImagePath(person.id)}`}
                                alt={`${person.name} headshot`}
                                class="mini-headshot"
                            />
                        </Link>
                    {/if}
                {/each}
			</p>
			<p>
				<small>
                    {#each discovery.tags as tag}<mark class={'topic'}
                            ><Link to={`/publications?${tag}`}>{tag}</Link
                            ></mark
                        >{/each}
                    {#if discovery.video}
                        {#each discovery.video as video}
                            &nbsp; <span class="emoji">🎬</span>
                            <External to={video}>video</External>&nbsp;
                        {/each}
                    {/if}
                    {#if discovery.demo}&nbsp;<span class="emoji">🖥️</span>
                        <External to={discovery.demo}>demo</External>{/if}
                    {#if discovery.code}&nbsp;<code>{'{}'}</code>&nbsp;<External
                            to={discovery.code}>code</External
                        >{/if}
                    {#if discovery.tags.length > 0}&nbsp;<span class="emoji"
                            >📄</span
                        ><Link
                            to={`/publications?${discovery.tags[0].replaceAll(
                                ' ',
                                '%20',
                            )}`}>papers</Link
                        >{/if}
                </small>
			</p>
		</Block>
	{/if}
{/each}
