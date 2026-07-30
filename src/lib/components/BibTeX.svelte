<script lang="ts">
    import type Paper from '$lib/models/Paper';
    import { profile } from '$lib/models/stores';

    interface Props {
        paper: Paper;
    }

    let { paper }: Props = $props();

    /*
        Only two kinds appear in the data today, but fall back to @misc rather
        than emitting a broken entry if a new kind shows up later.
    */
    const entryTypes: Record<string, string> = {
        'journal article': 'article',
        'refereed conference paper': 'inproceedings',
        'refereed short conference paper': 'inproceedings',
        'juried conference paper': 'inproceedings',
        'refereed workshop paper': 'inproceedings',
        'juried workshop paper': 'inproceedings',
        'book chapter': 'incollection',
        'technical report': 'techreport',
        book: 'book',
    };

    /** Characters that mean something to LaTeX and have to be escaped. */
    function escapeLatex(value: string): string {
        return value
            .replace(/\\/g, '\\textbackslash{}')
            .replace(/([&%$#_{}])/g, '\\$1')
            .replace(/~/g, '\\textasciitilde{}')
            .replace(/\^/g, '\\textasciicircum{}');
    }

    let bibtex = $derived.by(() => {
        const type = entryTypes[paper.kind] ?? 'misc';

        const authors = paper.authors
            .map((author) => escapeLatex($profile.getPersonName(author)))
            .join(' and ');

        const source = escapeLatex($profile.getSourceName(paper.source));

        // BibTeX wants the bare DOI, but the data stores a resolver URL.
        const doi = paper.doi?.replace(/^https?:\/\/(dx\.)?doi\.org\//, '');

        // Page ranges use an en dash in LaTeX, written as two hyphens.
        const pages = paper.pages?.trim()
            ? paper.pages.trim().replace(/^(\d+)\s*-\s*(\d+)$/, '$1--$2')
            : undefined;

        const fields: [string, string | number | undefined][] = [
            ['author', authors],
            // Double braces keep the title's capitalization through any style.
            ['title', `{${escapeLatex(paper.title)}}`],
            [type === 'inproceedings' ? 'booktitle' : 'journal', source],
            ['year', paper.year],
            ['volume', paper.volume],
            [
                'number',
                paper.issue !== undefined && paper.issue !== null
                    ? String(paper.issue)
                    : undefined,
            ],
            ['pages', pages],
            ['doi', doi ?? undefined],
        ];

        const body = fields
            .filter(([, value]) => value !== undefined && value !== '')
            .map(([name, value]) => `  ${name} = {${value}},`)
            .join('\n');

        return `@${type}{${paper.id},\n${body}\n}`;
    });
</script>

<!--
    Selected automatically when opened, the same as the APA citation; the
    selection is set by Paper.svelte, which owns the disclosure state.
-->
<pre id={'bibtex-' + paper.id}>{bibtex}</pre>

<style>
    pre {
        margin: var(--padding) 0 0 0;
        padding: calc(var(--padding) * 2);
        background-color: var(--border-color);
        border-radius: var(--roundedness);
        font-size: calc(var(--small-font-size) * 0.85);
        line-height: 1.4;
        /* Long DOIs and URLs shouldn't force the entry to scroll sideways. */
        white-space: pre-wrap;
        overflow-wrap: anywhere;
    }
</style>
