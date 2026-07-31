<script lang="ts">
    interface Props {
        text: string;
    }

    let { text }: Props = $props();
</script>

<svelte:head>
    <title>Niemeyer Research Group - {text}</title>
    <meta property="og:description" content="Niemeyer Research Group - {text}" />
</svelte:head>
