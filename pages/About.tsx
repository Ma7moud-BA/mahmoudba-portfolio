import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { cards } from "@/contants/constants";
import SectionText from "@/components/sectionText";
import Card from "@/components/Card";
const About = () => {
	return (
		<div className="  section " id="about">
			<SectionTitle smallTextTitle="introduction" largeTextTitle="overview" />
			<SectionText
				text="	Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
				eligendi, blanditiis neque at voluptate itaque fugiat maiores? Natus
				provident aperiam officiis, qui eligendi et facilis pariatur sit
				inventore, tempore dolorum?"
			></SectionText>

			<div className="grid items-center justify-center gap-20 mt-10 sm:grid-cols-2 md:grid-cols-3">
				{cards.map((card, index) => (
					<Card card={card} index={index} key={card.title}></Card>
				))}
			</div>
		</div>
	);
};

export default About;
