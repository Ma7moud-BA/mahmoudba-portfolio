import React, { useState } from "react";

import SectionTitle from "@/components/SectionTitle";
import Projects from "@/components/Projects";
import { getProjects, getWorkSections } from "@/sanity/sanity.utils";

const Works = async () => {
	const work_section = await getWorkSections();
	const projects = await getProjects();
	const { small_text, large_text, _id } = work_section;

	return (
		<div className="section relative" id="works">
			{/* <Image
				src={skillsBg}
				width={10000}
				height={10000}
				alt="hero bg"
				className="absolute top-0 left-0 right-0 -z-10 w-full h-full object-cover"
			/> */}
			<SectionTitle smallTextTitle={small_text} largeTextTitle={large_text} />
			<div className="mt-12 flex lg:flex-row flex-col min-h-[70vh] gap-2">
				<Projects projects={projects} />
			</div>
		</div>
	);
};

export default Works;
