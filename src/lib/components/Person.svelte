<script lang="ts">
    import type Person from '$lib/models/Person';
    import Block from './Block.svelte';
    import Emoji from './Emoji.svelte';
    import External from './External.svelte';
    import Link from './Link.svelte';
    import Image from './Thumbnail.svelte';

    interface Props {
        highlight: boolean;
        person: Person;
    }

    let { highlight, person }: Props = $props();
</script>

<div id={person.id}>
   <Block link={person.url}>
        {#snippet image()}
            <Image
            url={"/images/headshots/mug-" + person.id + ".jpg"} 
            alt={"Photograph of " + person.name}
            {highlight}
        />
        {/snippet}
        <span>
            <External to={person.url}>{person.name}</External>
            &nbsp;
            <mark>{person.level}</mark>
            &nbsp;
            <small
                >{person.startdate}{person.enddate 
                    ? (person.startdate !== person.enddate 
                        ? " - " + person.enddate 
                        : null) 
                    : " - present"}</small
            >
            <br />
            <mark>{person.pronouns}</mark>
            <br />
            {person.bio}
            {#if person.dissertation }
                <div>
                    <small>
                        <Emoji symbol="📕" />&nbsp;<External 
                            to={person.dissertation}>Dissertation</External
                        >
                    </small>
                </div>
            {/if}
            {#if person.msthesis }
                <div>
                    <small>
                        <Emoji symbol="📕" />&nbsp;<External 
                            to={person.msthesis}>MS thesis</External
                        >
                    </small>
                </div>
            {/if}
            {#if person.honorsthesis }
                <div>
                    <small>
                        <Emoji symbol="📕" />&nbsp;<External 
                            to={person.honorsthesis}>Honors thesis</External
                        >
                    </small>
                </div>
            {/if}
        </span>
    </Block>
</div>
