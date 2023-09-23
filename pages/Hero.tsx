import { getHeroSection } from "@/sanity/sanity.utils";
import Image from "next/image";
import React from "react";

const Hero = async () => {
	const hero_section = await getHeroSection();
	return (
		<div className="flex flex-col section hero lg:flex-row">
			<div className="max-h-screen mx-auto overflow-y-auto md:flex-1 h-fit">
				<h1 className="text-4xl font-extrabold uppercase lg:text-8xl">
					{hero_section.small_text}
				</h1>
				<h2 className="text-5xl font-bold text-primary lg:text-7xl">
					{hero_section.large_text}
				</h2>
				<p className="mt-3">{hero_section.bio}</p>
			</div>

			<Image
				src={hero_section.hero_image}
				width={1000}
				height={1000}
				className="object-cover mx-auto rounded-full mt-10 sm:mt-0 sm:w-[500px] sm:h-[500px] border-primary border-2 shadow-md shadow-primary w-[300px] h-[300px] "
				alt="hero image"
			></Image>
		</div>
	);
};

export default Hero;
