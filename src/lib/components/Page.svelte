<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();

    /*
        This used to track the nearest <h2> on every scroll and hand a list of
        headings to Header for a table of contents. Header no longer takes any
        props, so the whole computation was dead — and it re-scanned the DOM on
        every scroll event to produce values nothing read.
    */
</script>

<div class="page">
    <div class="header"><Header /></div>
    <div class="content">
        {@render children?.()}
        <Footer />
    </div>
</div>

<style>
    /* Small */
    @media only screen and (max-width: 800px) {
        :global(body) {
            margin: 1em;
        }

        .page {
            display: block;
        }
    }

    /* Large */
    @media only screen and (min-width: 800px) {
        :global(body) {
            margin: auto;
            max-width: 80em;
        }

        .page {
            margin: 3em;
            display: flex;
            flex-direction: row;
        }

        .header {
            margin-right: var(--margin);
            flex: 0 0 15em;
        }

        .content {
            margin-top: 10em;
            max-width: 40em;
        }
    }
</style>
