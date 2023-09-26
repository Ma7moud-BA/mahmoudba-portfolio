"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project, work_section } from "@/types";
type ProjectsProps = {
	projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
	const [active, setActive] = useState<string>(projects[0].id);

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
