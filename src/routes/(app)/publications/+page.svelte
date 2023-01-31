<script lang="ts">
    import { onMount } from "svelte";

	import External from "$lib/components/External.svelte";
	import Facets from "$lib/components/Facets.svelte";
	import Paper from "$lib/components/Paper.svelte";

	import { profile } from "$lib/models/stores";
    import { scrollToHash } from "$lib/models/utilities";

	let selection: Record<string, string> = {};

	onMount(() => {
		scrollToHash();

		if(typeof window !== "undefined" && window.location.search.length > 0) {
			filter({ tag: window.location.search.substring(1).replaceAll("%20", " ") });
		}
	})

	function filter(newSelection: Record<string, string>) {
		selection =	newSelection;		
	}

	// Sort the publications by decreasing year, then by decreasing pages
	$: pubs = $profile.getPublications(paper => $profile.tagsMatch(selection, $profile.getPaperTags(paper))).sort((a, b) => 
		// First sort by year
		b.year !== a.year ? b.year - a.year :
		// Put unpublished first
		b.pages === "to appear" ? 1 :
		a.pages === "to appear" ? -1 :
		// If there's no DOI, put last
		a.doi === null ? 1 :
		b.doi === null ? -1 :
		// Sort by DOI, since those are usually chronological
		-a.doi.localeCompare(b.doi)
	);

</script>

<h1>
	These are my {$profile.getPublications().length} academic publications. 
	You can see who's citing them on 
	<External to="https://scholar.google.com/citations?user=dt0KRYoAAAAJ=en">Google Scholar</External> or 
	<External to="https://www.semanticscholar.org/author/K.-Niemeyer/2373019">Semantic Scholar</External>.
</h1>

<hr/>

<p>
	Filter by publication topic.
</p>

<Facets 
	facets={$profile.getPublicationFacets()} 
	update={filter}
	selection={selection}
/>

<!-- // Create a list of publications, inserting year headers when the year changes. -->
{#each pubs as pub, index }
	{#if index === 0 || pubs[index - 1].year !== pub.year}
		<h3>{pub.year}{#if $profile.getYearContexts()[pub.year]}<small> &mdash; <em>{$profile.getYearContexts()[pub.year]}</em></small>{/if}</h3>
	{/if}

	<div id={pub.id}>
		<Paper paper={pub} highlight={ typeof window !== "undefined" && window.location.hash.substring(1) === pub.id } />
	</div>
{:else}
	<p class="alert">No matching publications.</p>
{/each}
