import About from "@/pages/About";
import Hero from "@/pages/Hero";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import Skills from "@/pages/Skills";
import Works from "@/pages/Works";
import ContactMe from "@/pages/ContactMe";

export default function Home() {
	return (
		<main className="h-full ">
			<Hero />
			<About />
			<Skills />
			<Works />
			<ContactMe />
		</main>
	);
}
