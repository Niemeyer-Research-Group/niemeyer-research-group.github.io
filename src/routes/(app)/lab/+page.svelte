<script lang="ts">
    import Person from '$lib/components/Person.svelte';
    import Link from '$lib/components//Link.svelte';
    import { profile } from '$lib/models/stores';
    import External from '$lib/components/External.svelte';
    import { onMount } from 'svelte';
    import { scrollToHash } from '$lib/models/utilities';
    import Title from '$lib/components/Title.svelte';
    import Linkable from '$lib/components/Linkable.svelte';
    import Emoji from '$lib/components/Emoji.svelte';
    import Alert from '$lib/components/Alert.svelte';

    onMount(() => {
        scrollToHash();
    });

    function isPersonHighlighted(id: string) {
        return (
            typeof window !== 'undefined' &&
            window.location.hash.substring(1) === id
        );
    }

    let affiliated = $derived(
        $profile.getPeople(
            (person) =>
                person.active && 
				!person.advised && 
				person.level !== 'faculty' && 
				person.level !== 'researcher',
            (person) => -person.startdate,
        ),
    );
</script>

<Title text="Lab" />

<h1>
	I direct the <em>Niemeyer Research Group</em>.
</h1>

<Alert>
	<h2>Open Positions!</h2>
	<p>
		I am actively recruiting a PhD student researcher and postdoctoral scholar to work
		on funded projects:
	</p>
	<ul>
		<li
			><strong>PhD student:</strong> I'm recruiting a PhD student to work on a new <External 
				to="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2531938&HistoricalAwards=false"
				>NSF grant</External
			> for three years, around developing databases and software for working with combustion
			data. You preferably already have an MS in ME or ChemE (or similar),
			and experience with writing code in Python. 
		</li>
		<li
			><strong>Postdoctoral scholar:</strong> I'm recruiting a postdoctoral scholar with the Center for 
			Advancing the Radiation Resilience of Electronics (CARRE) to provide computational 
			science research, code development, and student mentoring support. Responsibilities
			would include adaptively coupling Monte Carlo particle transport software to other 
			physics simulation tools (e.g., molecular dynamics) to predict the response of materials 
			to irradiation. <External 
			to="https://hr.oregonstate.edu/open-postdoctoral-scholar-positions/center-advancing-raditation-resilience-electronics-postdoc"
			>See full details and position description.</External>
		</li>
	</ul>
</Alert>

<p>
	My lab primarily includes students from the Mechanical Engineering program in the 
	<External 
		to="https://engineering.oregonstate.edu/MIME">
		School of Mechanical, Industrial, and Manufacturing Engineering</External
	>, and occasionally other units on campus.
</p>

<div>
	<div>
		<p>
			<strong>Current Oregon State Ph.D. student?</strong> 
			Email me about your interests. 
			I'm always open to chatting, collaborating, serving on committees, and when I have capacity, advising. 
			You're also welcome to visit any of our lab meetings. 
		</p>
	</div>
	<div>
		<p>
			<strong>Future Oregon State Ph.D. student?</strong> 
			Read our <Link to="/publications">recent publications</Link> to ensure we share interests. 
			Don't write me to ask if I'm admitting students in the coming year; I'm always considering new students unless this page says otherwise. 
			Don't ask me to evaluate your CV; I don't have time to evaluate your application twice; <em>do</em> write if you have specific questions about my lab's recent research. 
			See the <External to="https://engineering.oregonstate.edu/MIME/academics/graduate-admissions">School of MIME graduate admissions page</External> for more information.
		</p>
	</div>

	<!--<div>
		<p>
			<strong>Current Oregon State undergraduate or masters student?</strong>
			Read about <External to="https://ischool.uw.edu/programs/informatics/research">engaging in undergrad research</External>.
			If that sounds interesting, read about my lab's undergraduate/masters research model, <Link to={"/lablets"}>lablets</Link>, and follow the instructions there to join.
			I also recruit for full-time summer research assistants in Winter through the <External to="https://dub.washington.edu/gettinginvolved.html#tab_prospective">DUB REU program</External>.
		</p>
	</div>-->
</div>

<Linkable id="current-postdoc">Current Postdocs</Linkable>

{#each $profile.getPeople(
	(person) => person.active && 
				person.advised && 
				person.id !== 'ken' && 
				person.level === 'postdoc'
				) as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<Linkable id="current-advisees">Current Advisees</Linkable>

<!-- {#each $profile.getPeople(
	person => person.active && person.advised && person.id !== "ken" && person.level !== "faculty" && person.level !== "researcher" && person.level !== "postdoc", 
	person => { return { "undergrad": 5, "masters": 4, "phd": 3, "postdoc": 2, "faculty": 1, "researcher": 1, "director": 0 }[person.level] * 10000 + person.startdate }
) as person }
	<Person person={person} highlight={isPersonHighlighted(person.id)} />
{/each} -->

{#each $profile.getPeople((person) => 
	person.active && 
	person.advised && 
	person.id !== 'ken' && 
	person.level !== 'faculty' &&
	person.level !== 'researcher' && 
	person.level !== 'postdoc', 
	(person) => {
		return {
			undergrad: 5, masters: 4, phd: 3, postdoc: 2, 
			faculty: 1, researcher: 1, director: 0 
		}[person.level] * 10000 + person.startdate;
    }, ) as person
	}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

{#if affiliated.length > 0}
    <Linkable id="affiliate-phd">Affiliated Ph.D. students</Linkable>

    {#each affiliated as person}
        <Person {person} highlight={isPersonHighlighted(person.id)} />
    {/each}
{/if}

<Linkable id="collaborators">Active Faculty Collaborators</Linkable>

<p
	><em
		>This isn't a complete list of collaborators, just those I've gotten 
		around to adding.</em
	></p
>

{#each $profile.getPeople((person) => 
	person.active && 
	(person.level === 'faculty' || person.level === "researcher"), 
	(person) => -person.startdate, ) as person
	}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}


<Linkable id="former-phd">Former Ph.D. students</Linkable>

{#each $profile.getPeople((person) => 
	!person.active && 
	person.advised && 
	person.level === 'phd', 
	(person) => (person.enddate === null ? -Infinity : -person.enddate), ) as person
	}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<!-- 

{#each $profile.getPeople(
	person => person.enddate !== null && !person.active && person.advised && person.level === "phd", 
	person => person.enddate === null ? -Infinity : -person.enddate
) as person }
	<Person person={person} highlight={isPersonHighlighted(person.id)} />
{/each} -->

<Linkable id="former-affiliated-phd">Former Affiliated Ph.D. students</Linkable>

{#each $profile.getPeople( (person) => 
	!person.active && 
	!person.advised && 
	person.level === 'phd', 
	(person) => -person.startdate, ) as person
	}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}


<Linkable id="former-postdoc">Former Postdocs</Linkable>

{#each $profile.getPeople( (person) => 
	!person.active && 
	person.level === 'postdoc', 
	(person) => -person.startdate, ) as person
	}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<Linkable id="former-masters">Former M.S. students</Linkable>

{#each $profile.getPeople( (person) => 
	!person.active && 
	person.level === 'masters', 
	(person) => -person.startdate, ) as person
	}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<Linkable id="former-undergrad">Former Undergrads</Linkable>

{#each $profile.getPeople( (person) => 
	!person.active && 
	person.level === 'undergrad', 
	(person) => -person.startdate, ) as person
	}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}
