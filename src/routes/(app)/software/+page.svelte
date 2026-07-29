<script lang="ts">
    import { profile } from '$lib/models/stores';
    import Title from '$lib/components/Title.svelte';
    import Linkable from '$lib/components/Linkable.svelte';
    import SoftwareCard from '$lib/components/SoftwareCard.svelte';
    import Link from '$lib/components/Link.svelte';

    // No sort: cards appear in the order they're listed in data/Software.ts.
    let packages = $derived(
        $profile.getSoftware((s) => (s.kind ?? 'package') === 'package')
    );

    let materials = $derived(
        $profile.getSoftware((s) => s.kind === 'data' || s.kind === 'materials')
    );
</script>

<Title text="Software" />

<h1>We build open-source software for science and engineering.</h1>

<p>
    Much of our research produces software, and we release it openly so others
    can use, check, and build on it. Some of these packages we lead ourselves;
    others are community projects we help develop and maintain. Most are
    described in more detail in our <Link to="/publications">publications</Link
    >.
</p>

<Linkable id="packages">Packages</Linkable>

<div class="grid">
    {#each packages as software (software.id)}
        <SoftwareCard {software} />
    {/each}
</div>

{#if materials.length > 0}
    <Linkable id="materials">Data and teaching materials</Linkable>

    <p>
        Not software packages, but openly released and maintained the same way.
    </p>

    <div class="grid">
        {#each materials as software (software.id)}
            <SoftwareCard {software} />
        {/each}
    </div>
{/if}

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(20em, 100%), 1fr));
        gap: var(--margin);
        margin-bottom: calc(var(--margin) * 2);
    }
</style>
