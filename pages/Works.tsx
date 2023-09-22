"use client";
import React, { useState } from "react";

import { projects } from "@/contants/constants";
import ProjectCard from "@/components/ProjectCard";

import SectionTitle from "@/components/SectionTitle";

const Works = () => {
	const [active, setActive] = useState<number>(2);

	return (
		<div className="h-screen px-10 sm:px-56" id="works">
			<SectionTitle smallTextTitle="Case Studies" largeTextTitle="Projects." />
			<div className="mt-12 flex lg:flex-row flex-col min-h-[70vh] gap-5">
				{projects.map((project, index) => (
					<ProjectCard
						key={project.id}
						project={project}
						index={index}
						active={active}
						handleClick={setActive}
					></ProjectCard>
				))}
			</div>
		</div>
	);
};

export default Works;
