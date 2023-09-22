"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideIn } from "@/lib/motions";
import { Card } from "@/app/types";

type CardProps = {
	card: Card;
	index: number;
};
const Card = ({ card, index }: CardProps) => {
	return (
		<>
			<motion.div
				variants={slideIn("left", "tween", 0.4 * index, 0.4)}
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
		</>
	);
};

export default Card;
