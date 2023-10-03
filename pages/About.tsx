import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { cards } from "@/contants/constants";
import SectionText from "@/components/sectionText";
import Card from "@/components/Card";
import { getAboutSection } from "@/sanity/sanity.utils";
import exp from "constants";
import Image from "next/image";
import aboutbg from "@/assets/svgs/aboutbg-1.svg";
import aboutbgBottom from "@/assets/svgs/aboutBgBottom.svg";
const About = async () => {
	const about_section = await getAboutSection();
	const { small_text, large_text, _id, description, expertise } = about_section;
	return (
		<div className="pb-5 about section relative " id="about">
			<Image
				src={aboutbg}
				width={500}
				height={10000}
				alt="hero bg"
				className="absolute inset-0 -z-10  w-full h-full object-cover"
			/>
			{/* <Image
				src={aboutbgBottom}
				width={500}
				height={10000}
				alt="hero bg"
				className="absolute inset-0 -z-10  w-full h-full object-cover"
			/> */}
			<SectionTitle smallTextTitle={small_text} largeTextTitle={large_text} />
			<SectionText text={description}></SectionText>

			<div className="grid items-center justify-center gap-20 mt-10 sm:grid-cols-2 md:grid-cols-3">
				{expertise.map((expert, index) => (
					<Card
						title={expert.expert_title}
						iconUrl={expert.expert_icon_url}
						index={index}
						key={expert.id}
					></Card>
				))}
			</div>
		</div>
	);
};

export default About;
