import {
	HeroSection,
	Project,
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
	skills[]{
		skill_title,"skill_icon_url":skill_icon.asset->url,'id':_key
	},
	
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
	projects[]{'id':_key,title,description,'bannerUrl':banner.asset->url,github_repo,content, 'images':images[].asset->url,demo_url}
}`
	);
};
