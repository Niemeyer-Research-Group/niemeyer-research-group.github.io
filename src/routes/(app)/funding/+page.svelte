<script lang="ts">
    import External from '$lib/components/External.svelte';
    import Block from '$lib/components/Block.svelte';
    import { profile } from '$lib/models/stores';
    import { parseDate } from '$lib/models/Profile';
    import Image from '$lib/components/Thumbnail.svelte';
    import Link from '$lib/components/Link.svelte';
    import Title from '$lib/components/Title.svelte';
</script>

<Title text="Funding" />

<h1>
	My students and I receive funding from many sources.
</h1>

<Block 
	link="https://engineering.oregonstate.edu/MIME"
	header="School of Mechanical, Industrial, and Manufacturing Engineering"
	>
	{#snippet image()}
		<Image 
			url={"/images/funding/osu-logo.png"}
			alt="The Oregon State University logo"
		/>
	{/snippet}
	&mdash; My group's primary source of funding is the School of Mechanical, Industrial, and 
	Manufacturing Engineering (MIME) at Oregon State University. 
	It pays nine months of my salary, it sometimes subsidizes my graduate students' time 
	through teaching assistantships, it provides space and staff support, and it provides 
	my core intellectual community. The School of MIME's resources come from tuition, fees, 
	and taxes from the Oregon state government, and 
	<External to="https://engineering.oregonstate.edu/give">philanthropic giving</External>.
</Block>

<Block 
	link="https://nsf.gov"
	header="National Science Foundation"
	>
	{#snippet image()}
		<Image
			url={"/images/funding/nsf.svg"}
			alt="The NSF logo." 
		/>
	{/snippet}
	&mdash; The majority of my sponsored research is funded by the U.S. National Science Foundation, which is tax-funded. 
	I write proposals, which are confidentially evaluated by my peers, and when my peers and NSF find my proposals to have compelling intellectual merit and potential for broader impact, I receive grants. 
	I use these grants to support my summer salary; my graduate students' stipends, benefits, and tuition; my lab's research expenses, hourly undergraduate research assistants, and our travel. 
	My NSF awards include:
	<ul>
		{#each $profile.getFunding(
				(funding) => funding.funder === "National Science Foundation" && !funding.private, 
				(funding) => funding.commitment.end === null ? -Infinity : -parseDate(funding.commitment.end).getFullYear()
			) as award}
			<li>
				{#if award.url }
					<External to={award.url}>{award.title}</External>
				{:else}
					{award.title}
				{/if}
			</li>
		{/each}
	</ul>
</Block>

<Block 
	link="https://www.energy.gov"
	header="US Department of Energy"
	>
	{#snippet image()}
		<Image 
			url={"/images/funding/doe.svg"}
			alt="The DOE logo."
		/>
	{/snippet}
	&mdash; Through national labs like <External to="https://www.lbl.gov">Lawrence Berkeley National Laboratory</External> and 
	<External to="https://www.sandia.gov">Sandia National Laboratories</External>,
	and the <External to="https://www.energy.gov/nnsa/national-nuclear-security-administration">National Nuclear Security Administration</External>, 
	I have received funding from the US Department of Energy (DOE) for basic and applied research.
	My DOE funding projects include:
	<ul>
	{#each $profile.getFunding(
			(funding) => funding.funder === "Department of Energy" && !funding.private, 
			(funding) => funding.commitment.end === null ? -Infinity : -parseDate(funding.commitment.end).getFullYear()
		) as award}
		<li>
			{#if award.url }
				<External to={award.url}>{award.title}</External>
			{:else}
				{award.title}
			{/if}
		</li>
	{/each}
	</ul>
</Block>

<Block 
	link="https://www.serdp-estcp.org"
	header="SERDP"
	>
	{#snippet image()}
		<Image
			url={"/images/funding/serdp.svg"}
			alt="The SERDP logo."
		/>
	{/snippet}
	&mdash; The Strategic Environmental Research and Development Program (SERDP) has funded collaborative research projects studying smoldering combustion and wildland fire.
	My SERDP funding projects include:
	<ul>
	{#each $profile.getFunding(
			(funding) => funding.funder === "SERDP" && !funding.private, 
			(funding) => funding.commitment.end === null ? -Infinity : -parseDate(funding.commitment.end).getFullYear()
		) as award}
		<li>
			{#if award.url }
				<External to={award.url}>{award.title}</External>
			{:else}
				{award.title}
			{/if}
		</li>
	{/each}
	</ul>
</Block>

<Block
	link="https://sloan.org"
	header="Sloan Foundation"
	>
	{#snippet image()}
		<Image
			url={"/images/funding/sloan.png"}
			alt="The Sloan Foundation logo."
		/>
	{/snippet}
	&mdash; The Sloan Foundation has supported some of my activites as part of <External to="https://urssi.us">URSSI</External>, 
	the US Research Software Sustainability Institute:
	<ul>
		{#each $profile.getFunding(
				(funding) => funding.funder === "Sloan Foundation" && !funding.private, 
				(funding) => funding.commitment.end === null ? -Infinity : -parseDate(funding.commitment.end).getFullYear()
			) as award}
			<li>
				{#if award.url }
					<External to={award.url}>{award.title}</External>
				{:else}
					{award.title}
				{/if}
			</li>
		{/each}
	</ul>
</Block>

<Block 
	link="https://www.nasa.gov"
	header="NASA"
	>
	{#snippet image()}
		<Image
			url={"/images/funding/nasa.svg"}
			alt="The NASA logo."
		/>
	{/snippet}
	&mdash; NASA has also supported my group's research into computational methods 
	relevant to aerospace applications:
	<ul>
		{#each $profile.getFunding(
				(funding) => funding.funder === "NASA" && !funding.private, 
				(funding) => funding.commitment.end === null ? -Infinity : -parseDate(funding.commitment.end).getFullYear()
			) as award}
			<li>
				{#if award.url }
					<External to={award.url}>{award.title}</External>
				{:else}
					{award.title}
				{/if}
			</li>
		{/each}
	</ul>
</Block>

<Block 
	link="https://www.chevron.com"
	header="Chevron"
	>
	{#snippet image()}
		<Image
			url={"/images/funding/chevron.svg"}
			alt="The Chevron logo."
		/>
	{/snippet}
	&mdash; Some of my early work at Oregon State was supported by Chevron, in 
	collaboration with Chris Hagen. Despite the industry connection, this work was 
	fairly fundamental, and mostly looked at suitability of fuels for advanced, 
	highly efficient, low-temperature compression-ignition engines:
	<ul>
		{#each $profile.getFunding(
				(funding) => funding.funder === "Chevron" && !funding.private, 
				(funding) => funding.commitment.end === null ? -Infinity : -parseDate(funding.commitment.end).getFullYear()
			) as award}
			<li>
				{#if award.url }
					<External to={award.url}>{award.title}</External>
				{:else}
					{award.title}
				{/if}
			</li>
		{/each}
	</ul>
</Block>
