import {
	HeroSection,
	Project,
	Resume,
	Skill,
	Social,
	about_section,
	skills_section,
	work_section,
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
        'expert_icon_url': expert_icon.asset->url,
		'id':_key

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
	"icon":icon.asset->url,
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

}`
	);
};

export const getProjects = async (): Promise<Project[]> => {
	const client = createClient(config);

	return client.fetch(
		groq`*[_type=="projects"]{

	
	title,
	'slug':slug.current,
	_id,
	description,
	'bannerUrl':banner.asset->url,
	github_repo,content,
	 'images':images[].asset->url,
	 demo_url,
	 projectType,sketchfabEmbed,google_drive,
	techs[]->{skill_title,_id,description,docs_url,'icon':icon.asset->url}

        
}`
	);
};

export const getProjectBySlug = async (slug: string): Promise<Project> => {
	const client = createClient(config);

	return client.fetch(
		groq`*[_type=="projects" && slug.current == $slug][0]{
	title,
	'slug':slug.current,
	_id,
	description,
	'bannerUrl':banner.asset->url,
	github_repo,content,
	 'images':images[].asset->url,
	 demo_url,projectType,sketchfabEmbed,google_drive,

		techs[]->{skill_title,_id,description,docs_url,'icon':icon.asset->url}
}`,
		{ slug }
	);
};
// Socials
export const getSocials = async (): Promise<Social[]> => {
	const client = createClient(config);

	return client.fetch(
		groq`*[_type=="socials"]{
	_id,
	title,
	'icon':icon.asset->url,
	link,
	
	additionalInfo
}`
	);
};
// Resume
export const getResume = async (): Promise<Resume> => {
	const client = createClient(config);

	return client.fetch(groq`*[_type=="resume"][0]{
		_id,"resume":file.asset->url,description,title
	}`);
};
