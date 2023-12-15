<script lang="ts">

	import Person from "$lib/components/Person.svelte";
	import Link from "$lib/components//Link.svelte";
	import { profile } from "$lib/models/stores";
    import External from "$lib/components/External.svelte";
    import { onMount } from "svelte";
	import { scrollToHash } from "$lib/models/utilities";

	onMount(() => {
		scrollToHash();
	});

	function isPersonHighlighted(id: string) {
		return typeof window !== "undefined" && window.location.hash.substring(1) === id;
	}

</script>

<h1>
	I direct the <em>Niemeyer Research Group</em>.
</h1>

<p>
	My lab primarily includes students from the Mechanical Engineering program in the <External to="https://engineering.oregonstate.edu/MIME">School of Mechanical, Industrial, and Manufacturing Engineering</External>, and occasionally other units on campus.
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

<!--<h3>Current Postdocs</h3>

{#each $profile.getPeople(person => person.active && person.advised && person.id !== "ken" && person.level === "postdoc") as person }
	<Person person={person} highlight={isPersonHighlighted(person.id)} />
{/each}
-->

<h3>Current Advisees</h3>

{#each $profile.getPeople(
	person => person.active && person.advised && person.id !== "ken" && person.level !== "faculty" && person.level !== "researcher" && person.level !== "postdoc", 
	person => { return { "undergrad": 5, "masters": 4, "phd": 3, "postdoc": 2, "faculty": 1, "researcher": 1, "director": 0 }[person.level] * 10000 + person.startdate }
) as person }
	<Person person={person} highlight={isPersonHighlighted(person.id)} />
{/each}

<h3>Affiliated Ph.D. students</h3>

{#each $profile.getPeople(
	person => person.active && !person.advised && person.level !== "faculty" && person.level !== "researcher", 
	person => -person.startdate
) as person }
	<Person person={person} highlight={isPersonHighlighted(person.id)} />
{/each}

<h3 id="collaborators">Collaborators</h3>

<p><em>This isn't a complete list of collaborators, just those I've gotten around to adding.</em></p>

{#each $profile.getPeople(
		person => person.active && (person.level === "faculty" || person.level === "researcher"), 
		person => -person.startdate
) as person }
	<Person person={person} highlight={isPersonHighlighted(person.id)} />
{/each}

<h3>Former Ph.D. students</h3>

{#each $profile.getPeople(
	person => person.enddate !== null && !person.active && person.advised && person.level === "phd", 
	person => person.enddate === null ? -Infinity : -person.enddate
) as person }
	<Person person={person} highlight={isPersonHighlighted(person.id)} />
{/each}

<h3>Former affiliated Ph.D. students</h3>

{#each $profile.getPeople(
	person => !person.active && !person.advised && person.level === "phd",
	person => -person.startdate
) as person }
	<Person person={person} highlight={isPersonHighlighted(person.id)} />
{/each}

<!--<h3>Former postdocs</h3>

{#each $profile.getPeople(
	person => !person.active && person.level === "postdoc",
	person => -person.startdate
) as person }
	<Person person={person} highlight={isPersonHighlighted(person.id)} />
{/each}-->

<h3>Former M.S. students</h3>

{#each $profile.getPeople(
	person => !person.active && person.level === "masters",
	person => -person.startdate
) as person }
	<Person person={person} highlight={isPersonHighlighted(person.id)} />
{/each}


<h3>Former undergraduate students</h3>
{#each $profile.getPeople(
	person => !person.active && person.level === "undergrad",
	person => -person.startdate
) as person }
	<Person person={person} highlight={isPersonHighlighted(person.id)} />
{/each}
