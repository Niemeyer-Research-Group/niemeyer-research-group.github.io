/**
 * A badge from a project's README: the image to show, and where it links.
 * These point at the projects' own badge services rather than being recreated
 * here, so they stay current on their own.
 */
type Badge = {
	/** Describes the badge for people who can't see it, e.g. "License". */
	alt: string;
	/** The badge image URL. */
	image: string;
	/** Where clicking it goes. */
	url: string;
};

type Software = {
	id: string;
	name: string;
	/** A sentence or two on what it does. */
	description: string;
	/**
	 * What this is, so packages can be listed apart from datasets and
	 * teaching materials. Defaults to a software package.
	 */
	kind?: 'package' | 'data' | 'materials';
	/** GitHub repository, as "owner/name". */
	repo: string;
	/** Documentation or project homepage, when it has one. */
	url?: string;
	/**
	 * Project logo, shown at the left of the card. Either a full URL or a path
	 * under static/ beginning with "/".
	 */
	logo?: string;
	/** People ids, "@"-prefixed, matching the convention used for paper authors. */
	people: string[];
	/** Ids of related papers in Pubs.ts. */
	pubs?: string[];
	/** Badges taken from the project's README. */
	badges?: Badge[];
	/**
	 * SPDX license identifier, e.g. "MIT" or "BSD-3-Clause". SoftwareCard
	 * renders it as the matching shields.io badge, so it's written once here
	 * rather than repeated as a badge URL.
	 */
	license?: string;
};

export type { Software as default, Badge };
