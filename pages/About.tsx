"use client";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import frontEndImage from "@/assets/imgs/front-end-v2.png";
import backEndImage from "@/assets/imgs/backend.png";
import threeDDesignerImg from "@/assets/imgs/3d designer.png";
import { fadeIn, slideIn, staggerContainer } from "@/lib/motions";
const About = () => {
	type Card = {
		title: string;
		imageSrc: StaticImageData;
	}[];
	const cards: Card = [
		{ title: "Frontend Developer", imageSrc: frontEndImage },
		{ title: "Backend Developer", imageSrc: backEndImage },
		{ title: "3D Designer", imageSrc: threeDDesignerImg },
	];
	return (
		<div className="px-10 sm:h-screen sm:px-56 " id="about">
			<motion.h1
				variants={slideIn("up", "tween", 0.2, 1)}
				initial="hidden"
				whileInView={"show"}
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
			<motion.p
				className="py-5"
				variants={fadeIn("right", "tween", 0.2, 1)}
				initial="hidden"
				whileInView={"show"}
			>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, eum
				dolore vero quam reprehenderit distinctio voluptates a odit aspernatur,
				modi libero nemo quibusdam unde eligendi ipsum rem accusantium tenetur
				magnam.
			</motion.p>
			<motion.div className="grid items-center justify-center gap-20 mt-10 sm:grid-cols-2 md:grid-cols-3">
				{cards.map((card, index) => (
					<motion.div
						variants={slideIn("left", "tween", 0.2 * index, 1.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.25 }}
						key={card.title}
						className="flex flex-col items-center justify-center px-20 py-12 border rounded-lg bg-card"
					>
						<Image
							src={card.imageSrc}
							width={100}
							height={100}
							alt={card.title}
							className="mb-5"
						/>
						<h3 className="text-2xl font-bold ">{card.title.split(" ")[0]}</h3>
						<h3 className="text-2xl font-bold ">{card.title.split(" ")[1]}</h3>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default About;
