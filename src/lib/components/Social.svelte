<script lang="ts">
    import Emoji from './Emoji.svelte';
    import External from './External.svelte';
</script>

<div class="emoji">
    <a
        href="mailto:kyle.niemeyer@oregonstate.edu"><Emoji symbol="📧" /></a
    ><span class="dot">&sdot;</span><External
        to="https://bsky.app/profile/kyleniemeyer.bsky.social"><Emoji symbol="🦋" /></External
    ><span class="dot">&sdot;</span><External to="https://mastodon.social/@kyleniemeyer"
        ><Emoji symbol="🐘" /></External
    ><span class="dot">&sdot;</span><External to="http://github.com/kyleniemeyer"
        ><Emoji symbol="💻" /></External
    >
</div>

<style>
    .emoji {
        font-family: 'Noto Emoji';
        margin-block-start: var(--padding);
    }

    .dot {
        display: inline-block;
        margin-inline-start: 0.25em;
        margin-inline-end: 0.25em;
    }
</style>
