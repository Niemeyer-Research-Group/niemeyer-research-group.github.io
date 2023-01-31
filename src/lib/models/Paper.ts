type Paper = {
	id: string;
	kind: 
		"refereed conference paper" |
		"refereed workshop paper" |
		"journal article" |
		"refereed short conference paper" |
		"juried conference paper" |
		"book chapter" |
		"refereed invited article" |
		"juried workshop paper" |
		"technical report" |
		"refereed magazine article" |
		"whitepaper" |
		"abstract" |
		"book";
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
	eprint?: string | null;
	contribution: string;
	slides?: string;
	blog?: string;
	acceptrate?: number;
	award?: string[];
};
export default Paper;
