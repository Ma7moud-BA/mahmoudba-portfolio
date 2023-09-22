"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/motions";
type SectionTitleProps = {
	smallTextTitle: string;
	largeTextTitle: string;
};
const SectionTitle = ({
	smallTextTitle,
	largeTextTitle,
}: SectionTitleProps) => {
	return (
		<>
			<motion.h1
				variants={slideIn("up", "tween", 0.2, 1)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false }}
				className="text-xl  font-extrabold opacity-50  uppercase  text-secondary"
			>
				{smallTextTitle}
			</motion.h1>
			<motion.h2
				variants={slideIn("up", "tween", 0.2, 1)}
				initial="hidden"
				whileInView={"show"}
				className="text-5xl font-bold  capitalize"
			>
				{largeTextTitle}
			</motion.h2>
		</>
	);
};

export default SectionTitle;
