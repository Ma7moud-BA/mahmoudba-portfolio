"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motions";

type SectionTextProps = {
	fadeInDirection?: "left" | "right" | "up" | "down";
	text: string;
};
const SectionText = ({ fadeInDirection = "right", text }: SectionTextProps) => {
	return (
		<motion.p
			className="py-5"
			variants={fadeIn(fadeInDirection, "tween", 0.2, 1)}
			initial="hidden"
			whileInView={"show"}
		>
			{text}
		</motion.p>
	);
};

export default SectionText;
