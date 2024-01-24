import type { People } from '../../data/People';

type Paper = {
	id: string;
	kind: 
		| 'refereed conference paper'
		| 'refereed workshop paper'
		| 'journal article'
		| 'refereed short conference paper'
		| 'juried conference paper'
		| 'book chapter'
		| 'refereed invited article'
		| 'juried workshop paper'
		| 'technical report'
		| 'refereed magazine article'
		| 'whitepaper'
		| 'abstract'
		| 'book';
	authors: string[];
	equalfirst?: boolean;
	year: number;
	title: string;
	source: string;
	volume?: number;
	issue?: number | string | null;
	article?: number;
	pages: string | null;
	doi: string | null;
	authorizer?: string | null;
	publisher?: string;
	eprint?: string | null;
	contribution: string;
	slides?: string;
	blog?: string;
	acceptrate?: number;
	award?: string[];
};

export type { Paper as default };
