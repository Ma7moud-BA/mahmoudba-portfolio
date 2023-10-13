import BackgroundCircles from "@/components/BackgroundCircles";
import CircleImage from "@/components/CircleImage";
import { getHeroSection, getResume, getSocials } from "@/sanity/sanity.utils";
import Image from "next/image";
import React from "react";
import heroBg from "@/assets/svgs/herobg-5.svg";
import heroBgDark from "@/assets/svgs/herobg-dark-5.svg";
import Link from "next/link";
import Social from "@/components/Social";
import { Badge } from "@/components/ui/badge";
import { cache } from "react";
const Hero = async () => {
	const hero_section = await getHeroSection();
	const socials = await getSocials();
	const resume = await getCachedResume();

	//todo:add a new section for the 3d projects
	//todo:add add arduino projects
	//upload from production
	return (
		<div className="flex flex-col section hero xl:flex-row pt-20 relative ">
			<Image
				src={heroBg}
				width={10000}
				height={10000}
				alt="hero bg"
				className="absolute inset-0 -z-10 w-full h-full object-cover"
			/>
			<div className="max-h-screen mx-auto overflow-y- md:flex-1">
				<h1 className="text-4xl font-extrabold uppercase lg:text-8xl">
					{hero_section.small_text}
				</h1>
				<h2 className="text-5xl font-bold text-primary lg:text-7xl">
					{hero_section.large_text}
				</h2>
				<p className="mt-3">{hero_section.bio}</p>
				<div className="flex mt-5 gap-2">
					{socials.map((social) => (
						<Social key={social._id} social={social} />
					))}
				</div>
				<Link href={resume.resume} target="_blank">
					<Badge className="px-20 py-3 font-bold text-xl mt-5"> Resume</Badge>
				</Link>
			</div>
			<div className="relative">
				<CircleImage imgSrc={hero_section.hero_image}></CircleImage>
			</div>
		</div>
	);
};
const getCachedResume = cache(async () => {
	const resume = await getResume();
	return resume;
});

export default Hero;
