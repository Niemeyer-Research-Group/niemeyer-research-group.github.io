<script lang="ts">
    import { asset } from '$app/paths';
    import type Software from '$lib/models/Software';
    import type { Badge } from '$lib/models/Software';
    import { profile } from '$lib/models/stores';
    import External from './External.svelte';
    import Link from './Link.svelte';
    import Emoji from './Emoji.svelte';
    import getPersonImagePath from './getPersonImage';

    interface Props {
        software: Software;
    }

    let { software }: Props = $props();

    let papersOpen = $state(false);

    function togglePapers() {
        papersOpen = !papersOpen;
    }

    /*
        An id that doesn't resolve would otherwise just drop the person from the
        page with no sign anything was wrong — a missing "@" is enough to do it,
        since getPerson strips the first character. Say so instead; this prints
        during the prerender, so typos surface at build time.
    */
    let people = $derived.by(() => {
        const found = [];
        for (const id of software.people) {
            const person = $profile.getPerson(id);
            if (person) found.push(person);
            else
                console.warn(
                    `Software "${software.id}": no person matches "${id}". Ids must be @-prefixed, as in "@ken".`
                );
        }
        return found;
    });

    let papers = $derived(
        (software.pubs ?? [])
            .map((id) => $profile.getPublication(id))
            .filter((paper) => paper !== undefined)
    );

    /*
        shields.io takes the label in the URL path, where a literal dash has to
        be doubled and a space becomes an underscore. So "BSD-3-Clause" is
        written "BSD--3--Clause".
    */
    let licenseBadge = $derived.by((): Badge | undefined => {
        if (!software.license) return undefined;
        const label = software.license.replace(/-/g, '--').replace(/ /g, '_');
        return {
            alt: `License: ${software.license}`,
            image: `https://img.shields.io/badge/license-${label}-blue.svg`,
            url: `https://spdx.org/licenses/${software.license}.html`,
        };
    });

    // License first, then whatever the project's README advertises.
    let badges = $derived(
        [...(licenseBadge ? [licenseBadge] : []), ...(software.badges ?? [])]
    );

    /*
        Only software packages have documentation; a dataset or a set of course
        materials just has a website. Icon and label are derived together so
        they can't drift apart.
    */
    let isPackage = $derived((software.kind ?? 'package') === 'package');
    let urlLabel = $derived(isPackage ? 'Documentation' : 'Website');
    let urlSymbol = $derived(isPackage ? '📖' : '🌐');

    // A logo may be a full URL or a path under static/.
    let logo = $derived(
        software.logo
            ? software.logo.startsWith('/')
                ? asset(software.logo)
                : software.logo
            : undefined
    );
</script>

<div class="card">
    <div class="main">
        {#if logo}
            <div class="logo">
                <External to={`https://github.com/${software.repo}`}>
                    <img src={logo} alt={`${software.name} logo`} loading="lazy" />
                </External>
            </div>
        {/if}

        <div class="body">
            <h3>
                <External to={`https://github.com/${software.repo}`}
                    >{software.name}</External
                >
            </h3>

            <p class="what">{software.description}</p>

            {#if badges.length > 0}
                <p class="badges">
                    {#each badges as badge (badge.image)}
                        <External to={badge.url}
                            ><img
                                src={badge.image}
                                alt={badge.alt}
                                loading="lazy"
                            /></External
                        >
                    {/each}
                </p>
            {/if}

            <p class="links">
                <small>
                    <span class="item"
                        ><Emoji symbol="💻" />&nbsp;<External
                            to={`https://github.com/${software.repo}`}
                            >{software.repo}</External
                        ></span
                    >
                    {#if software.url}
                        <span class="item"
                            ><Emoji symbol={urlSymbol} />&nbsp;<External
                                to={software.url}>{urlLabel}</External
                            ></span
                        >
                    {/if}
                </small>
            </p>

            {#if people.length > 0}
                <p class="people">
                    {#each people as person (person.id)}
                        <Link to={'/lab/#' + person.id}>
                            <img
                                src={getPersonImagePath(person.id)}
                                alt={`${person.name} headshot`}
                                class="mini-headshot"
                                title={person.name}
                            />
                        </Link>
                    {/each}
                </p>
            {/if}
        </div>
    </div>

    {#if papers.length > 0}
        <div class="papers">
            <small>
                <!--
                    A real <button> rather than a span with role="button": it
                    gets keyboard activation, focus styling, and screen-reader
                    semantics without reimplementing any of them.
                -->
                <button
                    type="button"
                    class="toggle"
                    aria-expanded={papersOpen}
                    onclick={togglePapers}
                    >{papersOpen ? '▾' : '▸'}
                    {papers.length}
                    {papers.length === 1 ? 'paper' : 'papers'}</button
                >
                {#if papersOpen}
                    {#each papers as paper (paper.id)}
                        <div class="paper">
                            <Emoji symbol="📄" />&nbsp;<Link
                                to={'/(app)/publications'}
                                id={paper.id}>{paper.title}</Link
                            >
                        </div>
                    {/each}
                {/if}
            </small>
        </div>
    {/if}
</div>

<style>
    .card {
        border: 1px solid var(--border-color);
        border-radius: var(--roundedness);
        padding: var(--margin);
        display: flex;
        flex-direction: column;
        /* Keep the papers control pinned to the bottom so cards in a row align. */
        height: 100%;
        box-sizing: border-box;
    }

    .main {
        display: flex;
        gap: var(--margin);
        align-items: flex-start;
    }

    .logo {
        flex: 0 0 4.5em;
    }

    .logo img {
        width: 100%;
        height: auto;
        /* Logos come in wildly different aspect ratios; cap the tall ones. */
        max-height: 4.5em;
        object-fit: contain;
    }

    .body {
        flex: 1;
        min-width: 0;
    }

    .card h3 {
        margin-top: 0;
        margin-bottom: calc(var(--padding) * 2);
    }

    .what,
    .badges,
    .links,
    .people {
        margin-top: 0;
        margin-bottom: calc(var(--padding) * 2);
    }

    .badges {
        display: flex;
        flex-wrap: wrap;
        gap: calc(var(--padding) * 1.5);
        align-items: center;
    }

    /* Badge SVGs are drawn at 20px tall; keep them from setting the line box. */
    .badges img {
        height: 20px;
        width: auto;
        display: block;
    }

    .links .item {
        white-space: nowrap;
        margin-right: 1em;
    }

    .papers {
        margin-top: auto;
        padding-top: calc(var(--padding) * 2);
        border-top: 1px solid var(--border-color);
    }

    .papers .paper {
        margin-top: calc(var(--padding) / 2);
    }

    /* .toggle is styled globally, since the cite button uses it too. */

    @media only screen and (max-width: 500px) {
        .main {
            flex-direction: column;
        }

        .logo {
            flex-basis: auto;
        }
    }
</style>
