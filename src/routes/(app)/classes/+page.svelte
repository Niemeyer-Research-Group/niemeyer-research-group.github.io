<script lang="ts">
	import Block from "$lib/components/Block.svelte";
	import External from "$lib/components/External.svelte";
	import { profile } from "$lib/models/stores";
	import Image from "$lib/components/Thumbnail.svelte";

	const offerings = $profile.getClasses().map((course) => {
		return {
			course: course,
			//next: course.offerings.filter(offer => offer.score1 === null).sort((a, b) => (a.year === b.year ? a.term - b.term : a.year - b.year)),
			latest: course.offerings.filter(offer => offer.score1 !== null).sort((a, b) => (a.year === b.year ? b.term - a.term : b.year - a.year))
		}
	});

</script>

<h1>
	These are classes I teach regularly.
</h1>

{#each offerings as offering }
	<Block
		link={offering.course.link}
		header={offering.course.number + " " + offering.course.title}
	>
		<Image slot="image" url={"/images/classes/" + offering.course.id + ".png"} alt={offering.course.alt} />
		<span>
			<em>
			{#if offering.latest.length > 0}{" (last taught " + ["Fall", "Winter", "Spring"][offering.latest[0].term - 1] + " " + offering.latest[0].year + ")" }{/if}
			<!--{#if offering.next.length > 0}{(offering.next.length > 0 ? ", " : "") + "next offering likely " + ["Fall", "Winter", "Spring"][offering.next[0].term - 1] + " " + offering.next[0].year }{/if}-->
			</em>. {offering.course.description}
			<ul>
				{#each offering.course.links as link}
					<li>
						<External to={link.link}>{link.description}</External>
					</li>
				{/each}
			</ul>
		</span>
</Block>
{/each}
