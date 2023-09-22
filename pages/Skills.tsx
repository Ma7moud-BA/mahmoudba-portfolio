import React from "react";
import { technologies } from "@/contants/constants";
import Skill from "@/components/Skill";
import SectionTitle from "@/components/SectionTitle";
const Skills = () => {
	return (
		<div className="flex flex-col skills section ">
			<SectionTitle
				smallTextTitle="My skills "
				largeTextTitle="Technologies."
			/>

			<div className="grid  grid-cols-4 lg:grid-cols-6 lg:max-w-5xl gap-5 mt-5 items-center max-w-md justify-center mx-auto">
				{technologies.map((tech, i) => (
					<Skill
						fadeInDirection={i < 8 ? "left" : "right"}
						tech={tech}
						key={tech.name}
					></Skill>
				))}
			</div>
		</div>
	);
};

export default Skills;
