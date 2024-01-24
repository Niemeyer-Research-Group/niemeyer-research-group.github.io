<script lang="ts">
    import Emoji from './Emoji.svelte';
    import External from './External.svelte';
</script>

<span class="emoji">
    <br /><a href="mailto:kyle.niemeyer@oregonstate.edu"><Emoji symbol="📧" /></a><span
        class="dot">&sdot;</span
    ><External to="https://medium.com/nrg-excitations"><Emoji symbol="📝" /></External
    ><span class="dot">&sdot;</span><External to="https://mastodon.social/@kyleniemeyer"
        ><Emoji symbol="🐘" /></External
    >
</span>

<style>
    .emoji {
        font-family: 'Noto Emoji';
    }

    .dot {
        display: inline-block;
        margin-inline-start: 0.25em;
        margin-inline-end: 0.25em;
    }
</style>
