<script lang="ts">
    // The type lives in the models; data/People.ts only imports it, so
    // importing it from there resolves to nothing.
    import type Person from '$lib/models/Person';
    import Block from './Block.svelte';
    import Image from './Thumbnail.svelte';
    import Emoji from './Emoji.svelte';
    import External from './External.svelte';

    interface Props {
        highlight: boolean;
        person: Person;
    }

    let { highlight, person }: Props = $props();

    /*
        People.ts stores bare account handles, so the profile URLs are built
        here. Keeping the shape in one place means a change to any of these
        services only has to be made once.
    */
    const profile = {
        linkedin: (handle: string) =>
            `https://www.linkedin.com/in/${handle}/`,
        scholar: (handle: string) =>
            `https://scholar.google.com/citations?user=${handle}`,
        github: (handle: string) => `https://github.com/${handle}`,
    };

    let linkedinUrl = $derived(
        person.linkedin ? profile.linkedin(person.linkedin) : undefined,
    );

    // Explicit, labeled links, rather than hiding them behind the name.
    let links = $derived(
        [
            { url: person.url ?? undefined, symbol: '🏠', label: 'Homepage' },
            { url: linkedinUrl, symbol: '💼', label: 'LinkedIn' },
            {
                url: person.scholar
                    ? profile.scholar(person.scholar)
                    : undefined,
                symbol: '🎓',
                label: 'Scholar',
            },
            {
                url: person.github ? profile.github(person.github) : undefined,
                symbol: '💻',
                label: 'GitHub',
            },
        ].filter((link): link is { url: string; symbol: string; label: string } =>
            typeof link.url === 'string' && link.url.length > 0
        )
    );

    // The photo still links somewhere useful; LinkedIn stands in for people
    // who don't have a homepage of their own.
    let primary = $derived(person.url ?? linkedinUrl ?? null);
</script>

<div id={person.id}>
   <Block link={primary}>
        {#snippet image()}
            <Image
            url={"/images/headshots/mug-" + person.id + ".jpg"}
            alt={"Photograph of " + person.name}
            {highlight}
        />
        {/snippet}
        <span>
            <strong>{person.name}</strong>
            &nbsp;
            <mark>{person.level}</mark>
            &nbsp;
            <mark>{person.pronouns}</mark>
            &nbsp;
            <small
                >{person.startdate}{person.enddate
                    ? (person.startdate !== person.enddate
                        ? " - " + person.enddate
                        : null)
                    : " - present"}</small
            >
            {#if links.length > 0}
                <br />
                <small class="links">
                    {#each links as link (link.url)}
                        <span class="link"
                            ><Emoji symbol={link.symbol} />&nbsp;<External
                                to={link.url}>{link.label}</External
                            ></span
                        >
                    {/each}
                </small>
            {/if}
            <br />
            {person.bio}
            {#if person.dissertation }
                <div>
                    <small>
                        <Emoji symbol="📕" />&nbsp;<a href={person.dissertation}>Dissertation</a>
                    </small>
                </div>
            {/if}
            {#if person.msthesis }
                <div>
                    <small>
                        <Emoji symbol="📕" />&nbsp;<a href={person.msthesis}>MS thesis</a>
                    </small>
                </div>
            {/if}
            {#if person.honorsthesis }
                <div>
                    <small>
                        <Emoji symbol="📕" />&nbsp;<a href={person.honorsthesis}>Honors thesis</a>
                    </small>
                </div>
            {/if}
        </span>
    </Block>
</div>

<style>
    /*
        Deliberately inline rather than flex: a flex box is block-level, so it
        would open a line of its own on top of the surrounding <br />s and leave
        a visible gap above the bio.
    */
    .link {
        /* Keep each icon glued to its own label when the row wraps. */
        white-space: nowrap;
        margin-right: 1em;
    }

    .link:last-child {
        margin-right: 0;
    }
</style>
