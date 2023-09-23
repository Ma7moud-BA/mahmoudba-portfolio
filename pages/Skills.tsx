import React from "react";
import { technologies } from "@/contants/constants";
import Skill from "@/components/Skill";
import SectionTitle from "@/components/SectionTitle";
import { getSkillsSection } from "@/sanity/sanity.utils";
const Skills = async () => {
	const skill_section = await getSkillsSection();
	const { small_text, large_text, _id, skills } = skill_section;

	return (
		<div className="flex flex-col skills section ">
			<SectionTitle smallTextTitle={small_text} largeTextTitle={large_text} />

			<div className="grid items-center justify-center max-w-md grid-cols-4 gap-5 mx-auto mt-5 lg:grid-cols-6 lg:max-w-5xl">
				{skills.map((tech, i) => (
					<Skill
						fadeInDirection={i < 8 ? "left" : "right"}
						title={tech.skill_title}
						iconUrl={tech.skill_icon_url}
						key={tech.id}
					></Skill>
				))}
			</div>
		</div>
	);
};

export default Skills;
