"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "@/lib/motions";
import { projects } from "@/contants/constants";
import ProjectCard from "@/components/ProjectCard";

const Works = () => {
	const [active, setActive] = useState<number>(2);

	return (
		<div className="h-screen px-10 sm:px-56" id="works">
			<motion.div
				// variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className="flex flex-col mx-auto "
			>
				<motion.h1
					variants={slideIn("up", "tween", 0.2, 1)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: false }}
					className="text-xl font-extrabold opacity-50 "
				>
					Introduction
				</motion.h1>
				<motion.h1
					variants={slideIn("up", "tween", 0.2, 1)}
					initial="hidden"
					whileInView={"show"}
					className="text-5xl font-bold "
				>
					Overview
				</motion.h1>
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
			</motion.div>
		</div>
	);
};

export default Works;
