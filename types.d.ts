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
	skill: Skill;

	fadeInDirection: "left" | "right";
};

///Sanity Types
import { PortableTextBlock } from "sanity";

export type HeroSection = {
	_id: string;
	small_text: string;
	large_text: string;
	bio: string;
	hero_image: string;
};
export type about_section = {
	_id: string;
	small_text: string;
	large_text: string;
	description: description;
	expertise: { expert_title: string; expert_icon_url: url; id: string }[];
};
export type skills_section = {
	_id: string;
	small_text: string;
	large_text: string;
};
export type Skill = {
	_id: string;
	skill_title: string;
	icon: string;
	description: string;
	docs_url: string;
};
export type work_section = {
	_id: string;
	small_text: string;
	large_text: string;
};

export type Project = {
	_id: string;
	title: string;
	slug: string;
	description: string;
	bannerUrl: string;
	images: string[];
	demo_url: URL;
	github_repo: URL;
	techs: Skill[];
	content: PortableTextBlock[];
};

export type Social = {
	_id: string;
	title: string;
	icon: string;
	link: URL;
	additionalInfo: string;
};
