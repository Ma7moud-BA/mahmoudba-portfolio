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
	expertise: { expert_title: string; expert_icon_url: url }[];
};
export type skills_section = {
	_id: string;
	small_text: string;
	large_text: string;
};
export type Skill = {
	_id: string;
	skill_title: string;
	icon_url: string;
	description: string;
	docs_url: string;
};
export type work_section = {
	_id: string;
	small_text: string;
	large_text: string;
	projects: Project[];
};
export type work_section_single = {
	_id: string;
	small_text: string;
	large_text: string;
	projects: Project;
};

export type Project = {
	id: string;
	title: string;
	slug: string;
	description: string;
	bannerUrl: string;
	images: string[];
	demo_url: url;
	github_repo: url;
	technologies: string[];
	content: PortableTextBlock[];
};
