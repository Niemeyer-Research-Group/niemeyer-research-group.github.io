
export type Class = {
	id: string;
	alt: string;
	link?: string;
	number: string;
	level: "undergraduate" | "graduate" | "slash";
	title: string;
	description: string;
	hours: number;
	links: { description: string; link: string; }[];
	offerings: { 
		term: 1 | 2 | 3; 
		size: number | null; 
		year: number; 
		responses: number | null; 
		score1: number | null; 
		score2: number | null 
	}[];
};
