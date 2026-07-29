<script lang="ts">
    import type Paper from '$lib/models/Paper';
    import Authors from './Authors.svelte';
    import { profile } from '$lib/models/stores';

    interface Props {
        paper: Paper;
    }

    let { paper }: Props = $props();

    // A title ending in its own punctuation doesn't take another period.
    let titleEnd = $derived(
        /[?!.]$/.test(paper.title.trim()) ? '' : '.'
    );

    // Issue is absent on many entries, and explicitly null on others.
    let issue = $derived(
        paper.issue !== undefined &&
            paper.issue !== null &&
            String(paper.issue).trim() !== ''
            ? `(${paper.issue})`
            : ''
    );

    /*
        Pages carry either a range ("1074-1093") or a single article number
        ("108409"), depending on the journal. Both sit in the same slot in APA;
        a range gets an en dash, which is what APA asks for.
    */
    let pages = $derived.by(() => {
        const value = paper.pages?.trim();
        if (!value) return '';
        return `, ${value.replace(/^(\d+)\s*-\s*(\d+)$/, '$1–$2')}`;
    });

    /*
        Built as a string with its own leading space rather than relying on
        whitespace in the markup, which Svelte trims inside a block.
    */
    let doi = $derived(paper.doi ? ` ${paper.doi}` : '');
</script>

<div>
    <div id={'citation-' + paper.id}>
        <Authors {paper} /> ({paper.year}). <strong>{paper.title}</strong
        >{titleEnd} <em>{$profile.getSourceName(paper.source)}</em
        >{#if paper.volume}, <em>{paper.volume}</em>{/if}{issue}{pages}.{doi}
        {#if paper.award && paper.award.length > 0}
            <span>
                <br />
                <mark class="award">{paper.award.join(' + ')}</mark>
            </span>
        {/if}
    </div>
</div>

<style>
    .award {
        padding: 0;
        background: none;
        color: var(--text-color);
        font-weight: var(--bold-weight);
        display: block;
    }
</style>
