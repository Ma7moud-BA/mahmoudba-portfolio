"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};
const BackgroundCircles = ({}: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				scale: [1, 2, 2, 3, 1],
				opacity: [0.1, 0.2, 0.4, 0.6, 0.8, 0.1, 1],
				borderRadius: ["20%", "20%", "50%", "80%", "20%"],
			}}
			transition={{ duration: 2.5 }}
			// whileInView={{
			// 	opacity: [0.1, 0.2, 0.4, 0.6, 0.8, 0.1, 1],
			// 	repeatCount: 10,
			// }}
			className="absolute top-0 bottom-0 right-0 left-0  flex justify-center items-center"
		>
			{/* <div className="border border-primary rounded-full h-[200px] w-[200px] animate-ping absolute " /> */}
			{/* <div className="border border-primary rounded-full h-[300px] w-[300px]  absolute " /> */}
			<div className="border border-primary rounded-full h-[500px] w-[500px]  absolute animate-pulse " />
			<div className="rounded-full border border-destructive opacity-20 h-[650px] w-[650px] absolute animate-pulse " />
			<div className="rounded-full border border-primary opacity-20 h-[800px] w-[800px] absolute  animate-pulse" />
		</motion.div>
	);
};

export default BackgroundCircles;
