import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundCircles from "./BackgroundCircles";
const CircleImage = ({ imgSrc }: { imgSrc: string }) => {
	return (
		<div className="relative ">
			<BackgroundCircles></BackgroundCircles>
			<Image
				src={imgSrc}
				width={1000}
				height={1000}
				className="object-cover  mx-auto rounded-full mt-10 sm:mt-0 sm:w-[500px] sm:h-[500px] border-primary border-2 shadow-md shadow-primary w-[300px] h-[300px] "
				alt="hero image"
			></Image>
		</div>
	);
};

export default CircleImage;
