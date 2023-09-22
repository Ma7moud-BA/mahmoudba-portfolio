export type Card = {
	title: string;
	imageSrc: StaticImageData;
};
export type Cards = {
	title: string;
	imageSrc: StaticImageData;
}[];

export type Techs = {
	name: string;
	icon: StaticImageData;
}[];
export type Tech = {
	name: string;
	icon: StaticImageData;
};
export type Projects = {
	id: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: StaticImageData;
	github_link: string;
	liveDemoLink: string;
}[];
export type Project = {
	id: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: StaticImageData;
	github_link: string;
	liveDemoLink: string;
};
