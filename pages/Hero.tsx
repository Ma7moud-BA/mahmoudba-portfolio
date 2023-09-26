import BackgroundCircles from "@/components/BackgroundCircles";
import CircleImage from "@/components/CircleImage";
import { getHeroSection } from "@/sanity/sanity.utils";
import Image from "next/image";
import React from "react";

const Hero = async () => {
	const hero_section = await getHeroSection();
	return (
		<div className="flex flex-col section hero lg:flex-row pt-20 overflow-hidden">
			<div className="max-h-screen mx-auto overflow-y-auto md:flex-1">
				<h1 className="text-4xl font-extrabold uppercase lg:text-8xl">
					{hero_section.small_text}
				</h1>
				<h2 className="text-5xl font-bold text-primary lg:text-7xl">
					{hero_section.large_text}
				</h2>
				<p className="mt-3">{hero_section.bio}</p>
			</div>
			<div className="relative">
				<CircleImage imgSrc={hero_section.hero_image}></CircleImage>
			</div>
		</div>
	);
};

export default Hero;
