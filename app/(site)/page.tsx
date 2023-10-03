import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import Works from "@/sections/Works";
import ContactMe from "@/sections/ContactMe";
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
