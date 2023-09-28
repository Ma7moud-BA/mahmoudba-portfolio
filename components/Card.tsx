"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideIn } from "@/lib/motions";

type CardProps = {
	title: string;
	iconUrl: string;
	index: number;
};
const Card = ({ title, iconUrl, index }: CardProps) => {
	return (
		<motion.div
			variants={slideIn("left", "tween", 0.4 * index, 0.4)}
			initial="hidden"
			whileInView={"show"}
			viewport={{ once: false }}
			className="flex flex-col items-center justify-center px-20 py-12 border rounded-lg bg-card"
		>
			<Image
				src={iconUrl}
				width={100}
				height={100}
				alt={title}
				className="mb-5"
			/>
			<h3 className="w-40 text-2xl font-bold text-center capitalize overflow-ellipsis">
				{title}
			</h3>
			{/* <h3 className="text-2xl font-bold ">{title.split(" ")[1]}</h3> */}
		</motion.div>
	);
};

export default Card;
