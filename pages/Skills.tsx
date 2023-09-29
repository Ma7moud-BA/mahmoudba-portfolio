import React from "react";
import { technologies } from "@/contants/constants";
import Skill from "@/components/Skill";
import SectionTitle from "@/components/SectionTitle";
import { getSkills, getSkillsSection } from "@/sanity/sanity.utils";
import Image from "next/image";
import skillsBg from "@/assets/svgs/skillsBg.svg";
const Skills = async () => {
	const skill_section = await getSkillsSection();
	const skills = await getSkills();
	const { small_text, large_text } = skill_section;

	return (
		<div className="flex flex-col skills section relative ">
			<Image
				src={skillsBg}
				width={10000}
				height={10000}
				alt="hero bg"
				className="absolute top-0 left-0 right-0 -z-10 w-full h-full object-cover"
			/>
			<SectionTitle smallTextTitle={small_text} largeTextTitle={large_text} />

			<div className="grid items-center  justify-center max-w-md grid-cols-4 gap-5 mx-auto mt-5 lg:grid-cols-6 lg:max-w-5xl">
				{skills?.map((skill, i) => (
					<Skill
						fadeInDirection={i < 8 ? "left" : "right"}
						skill={skill}
						key={skill._id}
					/>
				))}
			</div>
		</div>
	);
};

export default Skills;
