type Person = {
	id: string;
	name: string;
	pronouns: string;
	active: boolean;
	advised: boolean;
	level: "undergrad" | "masters" | "phd" | "postdoc" | "faculty" | "researcher" | "director";
	dept: string;
	coadvisor ?: string | null;
	bio: string;
	/** Personal or institutional homepage. Null when they don't have one;
	 *  LinkedIn is then used as the fallback link for their photo. */
	url: string | null;
	/** Account handles, not URLs — Person.svelte builds the links.
	 *  linkedin: the part after /in/, e.g. "kyleniemeyer"
	 *  scholar:  the `user` id from a Google Scholar profile, e.g. "dt0KRYoAAAAJ"
	 *  github:   the username, e.g. "kyleniemeyer" */
	linkedin?: string;
	scholar?: string;
	github?: string;
	dissertation?: string;
	msthesis?: string;
	honorsthesis?: string;
	startdate: number;
	enddate: number | null;
	achievements?: readonly string[];
	orcid?: string;
};
export type { Person as default };
