<script lang="ts">
    import { asset } from '$app/paths';
    import type { Person } from '../../data/People';
    import Block from './Block.svelte';
    import Image from './Thumbnail.svelte';
    import Emoji from './Emoji.svelte';

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
            <a href={person.url}>{person.name}</a>
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
                        <Emoji symbol="📕" />&nbsp;<a href={person.dissertation}>Dissertation</a>
                    </small>
                </div>
            {/if}
            {#if person.msthesis }
                <div>
                    <small>
                        <Emoji symbol="📕" />&nbsp;<a href={person.msthesis}>MS thesis</a>
                    </small>
                </div>
            {/if}
            {#if person.honorsthesis }
                <div>
                    <small>
                        <Emoji symbol="📕" />&nbsp;<a href={person.honorsthesis}>Honors thesis</a>
                    </small>
                </div>
            {/if}
        </span>
    </Block>
</div>
