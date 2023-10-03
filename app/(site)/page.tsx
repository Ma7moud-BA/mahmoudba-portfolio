import About from "@/app/sections/About";
import Hero from "@/app/sections/Hero";
import Skills from "@/app/sections/Skills";
import Works from "@/app/sections/Works";
import ContactMe from "@/app/sections/ContactMe";
import React from "react";

export default function Home() {
	return (
		<div className="section-container">
			<Hero />
			<About />
			<Skills />
			<Works />
			<ContactMe />
		</div>
	);
}
