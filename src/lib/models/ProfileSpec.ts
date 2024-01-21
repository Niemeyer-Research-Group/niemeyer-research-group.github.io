import type { Source } from "./Source";
import type Paper from "./Paper";
import type Person from "./Person";
import type Post from "./Post";
import type { Impact } from "./Impact";
import type { Population } from "./Population";
import type { Degree } from "./Degree";
import type { Patent } from "./Patent";
import type { Job } from "./Job";
import type { Recognition } from "./Recognition";
import type { Editing } from "./Editing";
import type { Reviewing } from "./Reviewing";
import type { DoctoralCommittee } from "./DoctoralCommittee";
import type { Funding } from "./Funding";
import type { Travel } from "./Travel";
import type { Service } from "./Service";
import type { Talk } from "./Talk";
import type { Class } from "./Class";
import type { CommitmentDetails } from "./CommitmentDetails";
import type { Panel } from "./Panel";
import type { Discovery } from "./Discovery";

type ProfileSpec = {
	sources: Record<string, Source>;
	pubs: Paper[];
	people: Person[];
	discoveries: Discovery[];
	impacts: Impact[];
	populations: Population[];
	degrees: Degree[];
	patents: Patent[];
	jobs: Job[];
	recognitions: Recognition[];
	editing: Editing[];
	reviewing: Reviewing[];
	doctoralCommittees: DoctoralCommittee[];
	funding: Funding[];
	posts: Post[];
	travel: Travel[];
	service: Service[];
	talks: Talk[];
	classes: Class[];
	panels: Panel[];
	commitments: CommitmentDetails[];
	years: Record<string, string | null>;
};

export type { ProfileSpec as default };
