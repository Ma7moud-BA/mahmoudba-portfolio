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
		<div className="sm:h-screen sm:px-56 px-10 bg-green-200 ">
			<motion.h1
				variants={slideIn("up", "tween", 0.2, 1)}
				initial="hidden"
				whileInView={"show"}
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
			<motion.div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-20">
				{cards.map((card, index) => (
					<motion.div
						variants={slideIn("left", "tween", 0.2 * index, 1.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.25 }}
						key={card.title}
						className=" py-12 bg-accent px-20  rounded-lg flex flex-col justify-center items-center   "
					>
						<Image
							src={card.imageSrc}
							width={100}
							height={100}
							alt={card.title}
							className="mb-5"
						/>
						<h3 className=" text-2xl font-bold">{card.title.split(" ")[0]}</h3>
						<h3 className=" text-2xl font-bold">{card.title.split(" ")[1]}</h3>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default About;
