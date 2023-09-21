"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/motions";
import { technologies } from "@/contants/constants";
import Skill from "@/components/Skill";
const Skills = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			viewport={{ once: false }}
			className="relative flex flex-col items-center min-h-screen px-10 mx-auto sm:h-screen sm:px-56"
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
			<div className="grid grid-cols-4 gap-5">
				{technologies.map((tech, i) => (
					<Skill
						fadeInDirection={i < 8 ? "left" : "right"}
						tech={tech}
						key={tech.name}
					></Skill>
				))}
			</div>
		</motion.div>
	);
};

export default Skills;
