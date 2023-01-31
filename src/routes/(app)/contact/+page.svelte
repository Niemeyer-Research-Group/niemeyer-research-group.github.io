<script lang="ts">
	import Block from "$lib/components/Block.svelte";
	import External from "$lib/components/External.svelte";
	import Image from "$lib/components/Thumbnail.svelte";

</script>

<h1>
	There are many ways to reach me:
</h1>

<Block 
	link="https://goo.gl/maps/tL7oRQEb3PZsU8Br6"
	header="Office hours"
>
	<Image slot="image" url={"/images/contact/office.jpg"} alt="A photograph of my office."/>
	<span>
		&mdash; I'm on sabbatical until September 2023 and not holding office hours.
		<!-- If you're a current OSU student 
		Contact me via one of the channels below to see if a meeting makes sense. 
		If you're in one my classes, see the syllabus for my course office hours.
		If you're not a OSU student, write me an email; we'll meet if appropriate. -->
	</span>
</Block>

<Block 
	link="mailto:kyle.niemeyer@oregonstate.edu"
	header="Email"
>
	<Image slot="image"url={"/images/contact/osu.png"} alt="The Oregon State block logo."/>
	&mdash; I primarily use email to communicate with people I don't know and occasionally with collaborators. 
	If you're a student, a potential collaborator, or anyone else, write me an email to connect. 
	I typically check my email throughout the day during the work week, but may not respond until I have the bandwidth.
</Block>

<Block 
	link="https://slack.com/"
	header="Slack"
>
	<Image slot="image" url={"/images/contact/slack.jpg"} alt="The Slack logo."/>
	&mdash; Slack is my preferred medium for collaboration with my students and other collaborators. 
	During the work day I treat Slack like instant messaging, and after hours I treat it like email.
	Unfortunately, Oregon State stopped supporting Slack for everyone, but I maintain a workspace for my research group.
</Block>

<Block 
	link="https://twitter.com/kyleniemeyer"
	header="Twitter"
>
	<Image slot="image" url={"/images/contact/twitter.jpg"} alt="The Twitter logo."/>
	&mdash; I'm periodically active on Twitter, depending on what I have to say or share.
	I do respond to DMs and/or replies.
	I've also started using Mastadon more recently: <External to="https://mastodon.social/@kyleniemeyer">@kyleniemeyer@mastodon.social</External>
</Block>

<Block 
	link="http://github.com/kyleniemeyer"
	header="GitHub"
>
	<Image slot="image" url={"/images/contact/github.svg"} alt="The Github logo." />
	&mdash; I host a lot of my content and software projects on GitHub. 
	Feel free to submit issues and pull requests to my various repositories.
</Block>

<Block 
	link="https://www.linkedin.com/in/kyleniemeyer"
	header="LinkedIn"
>
	<Image slot="image" url={"/images/contact/linkedin.jpg"} alt="The LinkedIn logo."/>
	&mdash; I use LinkedIn to manage professional contacts, but not for much else.
	I usually only accept connections from people I've met in real life and have some professional relationship with (students, collaborators, professional colleagues).
</Block>

<Block
	header="Phone"
>
	<Image slot="image" url={"/images/contact/phone.jpg"} alt="A telephone."/>
	&mdash; Please don't call me on the phone. 
	It's never the right time, and I'm rarely in my office when you want to reach me. 
	Write me on one of the platforms above first and we can schedule a call if necessary.
</Block>
