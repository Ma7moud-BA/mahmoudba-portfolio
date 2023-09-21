"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/motions";
import { technologies } from "@/contants/constants";
const Skills = () => {
	return (
		<div className="sm:h-screen sm:px-56 px-10  bg-red-200">
			<motion.h1
				variants={slideIn("up", "tween", 0.2, 1)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false }}
				className="font-extrabold text-xl  opacity-50 "
			>
				Introduction
			</motion.h1>
			<motion.h1
				variants={slideIn("up", "tween", 0.2, 1)}
				initial="hidden"
				whileInView={"show"}
				className=" text-5xl font-bold "
			>
				Overview
			</motion.h1>
			<div className="flex flex-row flex-wrap justify-center gap-10">
				{technologies.map((tech) => (
					<div className="w-28 h-28" key={tech.name}>
						{tech.name}
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
