<script lang="ts">
    interface Props {
        text: string;
    }

    let { text }: Props = $props();
</script>

<svelte:head>
    <title>Kyle E. Niemeyer - {text}</title>
    <meta property="og:description" content="Kyle E. Niemeyer - {text}" />
</svelte:head>
