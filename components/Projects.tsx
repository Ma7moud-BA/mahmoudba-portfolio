"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Projects } from "@/app/types";
type ProjectsProps = {
	projects: Projects;
};

const Projects = ({ projects }: ProjectsProps) => {
	const [active, setActive] = useState<number>(2);

	return (
		<>
			{projects.map((project, index) => (
				<ProjectCard
					key={project.id}
					project={project}
					index={index}
					active={active}
					handleClick={setActive}
				></ProjectCard>
			))}
		</>
	);
};

export default Projects;
