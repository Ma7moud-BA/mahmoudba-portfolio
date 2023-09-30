import React, { useState } from "react";

import { projects } from "@/contants/constants";

import SectionTitle from "@/components/SectionTitle";
import Projects from "@/components/Projects";
import { getProjects, getWorkSections } from "@/sanity/sanity.utils";

const Works = async () => {
	const work_section = await getWorkSections();
	const projects = await getProjects();
	const { small_text, large_text, _id } = work_section;

	return (
		<div className="section bg-accent" id="works">
			<SectionTitle smallTextTitle={small_text} largeTextTitle={large_text} />
			<div className="mt-12 flex lg:flex-row flex-col min-h-[70vh] gap-5">
				<Projects projects={projects} />
			</div>
		</div>
	);
};

export default Works;
