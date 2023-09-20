import About from "@/components/About";
import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";

export default function Home() {
	return (
		<main className=" h-full">
			<Hero></Hero>
			<About></About>
		</main>
	);
}
