import {
	HeroSection,
	Project,
	Skill,
	about_section,
	skills_section,
	work_section,
	work_section_single,
} from "@/types";
import { createClient, groq } from "next-sanity";
import config from "./client-config";

//! Hero Section:
export const getHeroSection = async (): Promise<HeroSection> => {
	const client = createClient(config);

	return client.fetch(
		groq`*[_type=="hero_section"][0]{
    _id,
	small_text,
	large_text,
	bio,
	
	"hero_image":hero_image.asset->url,
}`
	);
};
//! About Section:
export const getAboutSection = async (): Promise<about_section> => {
	const client = createClient(config);

	const result = await client.fetch(groq`
    *[_type == "about_section"][0]{
      _id,
      small_text,
      large_text,
      description,
      expertise[]{
        expert_title,
        'expert_icon_url': expert_icon.asset->url

      },
    }
  `);

	return result;
};
//! Skill Section:
export const getSkillsSection = async (): Promise<skills_section> => {
	const client = createClient(config);

	return client.fetch(
		groq`*[_type=="skill_section"][0]{
    _id,
	small_text,
	large_text,
	
	
}`
	);
};
export const getSkills = async (): Promise<Skill[]> => {
	const client = createClient(config);

	return client.fetch(
		groq`*[_type=="skills"]{
    _id,
	skill_title,
	"icon_url":icon.asset->url,
	description,
	docs_url
}`
	);
};

//! work Section:
export const getWorkSections = async (): Promise<work_section> => {
	const client = createClient(config);

	return client.fetch(
		groq`*[_type=="work_section"][0]{
    _id,
	small_text,
	large_text,
	projects[]{
	title,'slug':slug.current,
	'id':_key,title,description,
	'bannerUrl':banner.asset->url,
	github_repo,content,
	 'images':images[].asset->url,technologies,
	 demo_url}
}`
	);
};

export const getProjectBySlug = async (
	slug: string
): Promise<work_section_single> => {
	const client = createClient(config);

	return client.fetch(
		groq`*[_type=="work_section"][0]{
    _id,
	small_text,
	large_text,
	projects[slug.current == $slug][0]{
	title,'slug':slug.current,
	'id':_key,title,description,
	'bannerUrl':banner.asset->url,
	github_repo,content,
	 'images':images[].asset->url,technologies,
	 demo_url}
}`,
		{ slug }
	);
};
