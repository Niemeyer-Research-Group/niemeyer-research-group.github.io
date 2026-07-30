<script lang="ts">
    import Block from './Block.svelte';
    import Authors from './Authors.svelte';
    import type Paper from '$lib/models/Paper';
    import Link from './Link.svelte';
    import APACitation from './APACitation.svelte';
    import BibTeX from './BibTeX.svelte';
    import { profile } from '$lib/models/stores';
    import Image from './Thumbnail.svelte';
    import { asset } from '$app/paths';

    interface Props {
        paper: Paper;
        format?: 'apa' | 'cv' | 'full';
        highlight?: boolean;
        year?: boolean;
    }

    let {
        paper,
        format = 'full',
        highlight = false,
        year = true,
    }: Props = $props();

	let apa = $state(false);
    let bibtex = $state(false);

    function toggle() {
        apa = !apa;
    }

    function toggleBibtex() {
        bibtex = !bibtex;
    }

    // Select an element's text so it's ready to copy.
    function selectContents(id: string) {
        const node = document.getElementById(id);
        if (!node || !window.getSelection) return;
        const selection = window.getSelection();
        if (selection === null) return;
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    // Select the citation, and the BibTeX entry, whenever either is expanded.
    $effect(() => {
        if (apa) selectContents('citation-' + paper.id);
    });

    $effect(() => {
        if (bibtex) selectContents('bibtex-' + paper.id);
    });

    let paperLocalURL = $derived(`/papers/${paper.local}`);

	let url = $derived(
        // If there's a local, show it first
        paper.local
            ? paperLocalURL
            : // If we don't have one, but there's an ACM authorizer URL, return it, because visitors will be able to bypass the paywall.
              paper.authorizer
              ? paper.authorizer
              : // Lastly, include the doi, which will not be as easily accessible.
                paper.doi
                ? paper.doi
                : '',
    );
</script>

{#if format === 'apa'}
    <APACitation {paper} />
{:else if format === 'cv'}
    <div class="paper">
        <strong>{paper.title}</strong> &sdot;
        {#if year}<small>{paper.year} &sdot;</small>{/if}
        <small><Authors {paper} /></small> &sdot;
        <small><em>{$profile.getSourceName(paper.source)}</em></small>
        {#if paper.award && paper.award.length > 0}
            <mark class="award">{paper.award.join(' + ')}</mark>
        {/if}
    </div>
{:else}
    {#snippet image()}
        <Image
            url={'/images/papers/paper-' + paper.id + '.png'}
            alt="A clip from the paper's PDF."
            {highlight}
        />
    {/snippet}
    <Block link={url} {image}>
        <div id={paper.id} class="paper">
            {#if paper.award && paper.award.length > 0}
                <mark class="award">&#x2605; {paper.award.join(' + ')}</mark>
                <br />
            {/if}
            <small><Authors {paper} link /> ({paper.year})</small>
            <br />
            {#if url}
                <span
                    ><a href={url.startsWith('http') ? url : asset(url)}
                        >{paper.title}</a
                    ></span
                >
            {:else}
                <strong>{paper.title}</strong>
            {/if}
            <br /><small><em>{$profile.getSourceName(paper.source)}</em></small>
            {#if paper.contribution}<span
                    ><br /><small>{paper.contribution}</small></span
                >{/if}
            <div>
                <small>
                    <!--
                        A real <button> rather than a span with role="button":
                        it gets keyboard activation, focus styling, and
                        screen-reader semantics without reimplementing them.
                    -->
                    <button
                        type="button"
                        class="toggle"
                        aria-expanded={apa}
                        onclick={toggle}>{apa ? '▾ cite' : '▸ cite'}</button
                    >
                    &sdot; <button
                        type="button"
                        class="toggle"
                        aria-expanded={bibtex}
                        onclick={toggleBibtex}
                        >{bibtex ? '▾ bibtex' : '▸ bibtex'}</button
                    >
                    {#if paper.local}<span>
                            &sdot; <a href={asset(paperLocalURL)}>pdf</a></span
                        >{/if}
                    {#if paper.doi}<span>
                            &sdot; <Link to={paper.doi}>doi</Link></span
                        >{/if}
                    <!--
                        The eprint is an openly accessible copy, which matters
                        when the DOI above leads to a paywall.
                    -->
                    {#if paper.eprint}<span>
                            &sdot; <Link to={paper.eprint}>eprint</Link></span
                        >{/if}
                    {#if paper.slides}<span>
                            &sdot; <a href={asset(`/slides/${paper.slides}`)}>slides</a></span
                        >{/if}
                    {#if paper.blog}<span>
                            &sdot; <Link to={paper.blog}>blog</Link></span
                        >{/if}
                    &sdot; <Link to={'/(app)/publications'} id={paper.id}
                        ><span class="emoji">&#x1F517;</span></Link
                    >
                </small>
            </div>
            {#if apa}<div><small><APACitation {paper} /></small></div>{/if}
            {#if bibtex}<BibTeX {paper} />{/if}
        </div>
    </Block>
{/if}

<style>
    .paper {
        padding-bottom: 20px;
    }

    .award {
        padding: 3px;
        font-variant: small-caps;
        display: inline-block;
        margin-bottom: 3px;
        border-radius: 3px;
    }

    @media print {
        .paper {
            orphans: 2;
            widows: 2;
            break-inside: avoid;
        }
    }
</style>