
export type DoctoralCommittee = {
	name: string;
	department: string;
	institution: string;
	gcr?: boolean;
	startdate: number;
	enddate: number | null;
};
