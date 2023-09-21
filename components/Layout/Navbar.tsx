"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import React, { useState, useEffect } from "react";
import { NavigationMenu } from "../ui/navigation-menu";
import { ModeToggle } from "../ModeToggle";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { navMenuVariantsSm, navMenuVariants } from "@/lib/motions";
import { Link } from "react-scroll";
const Navbar = () => {
	const [showMenu, setShowMenu] = useState<boolean>(true);
	// Function to handle screen size changes and update showMenu state
	const handleScreenSizeChange = () => {
		if (window.innerWidth >= 640) {
			setShowMenu(true);
		}
		if (window.innerWidth <= 640) {
			setShowMenu(false);
		}
	};
	useEffect(() => {
		//To fix the issue where the menu remains hidden even when the screen resolution changes back to not being "sm"
		window.addEventListener("resize", handleScreenSizeChange);
		window.innerWidth <= 640 && setShowMenu(false);
		return () => {
			window.removeEventListener("resize", handleScreenSizeChange);
		};
	}, []);
	const variantsSmOrLg =
		window.innerWidth < 640 ? navMenuVariants : navMenuVariantsSm;
	return (
		<nav className="sticky top-0 z-10 flex flex-col justify-between px-10 py-5 mb-20 transition border-b sm:flex-row sm:px-56 bg-background sm:items-center ">
			<h2 className="text-4xl font-extrabold ">MahmoudBA.</h2>
			<BiMenuAltRight
				cursor="pointer"
				size={40}
				className="absolute sm:hidden hover:text-primary top-5 right-5 "
				onClick={() => {
					setShowMenu((prev) => !prev);
				}}
			/>
			<motion.div
				variants={variantsSmOrLg}
				initial="hidden"
				whileInView={"show"}
				className={`flex sm:flex-row flex-col gap-5 self-end     ${
					showMenu ? "block" : "hidden"
				} `}
			>
				<Link
					to="about"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className="font-bold transition-all duration-500 cursor-pointer sm:text-3xl hover:text-primary hover:scale-110"
				>
					About
				</Link>
				<Link
					to="works"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className="font-bold transition-all duration-500 cursor-pointer sm:text-3xl hover:text-primary hover:scale-110"
				>
					Works
				</Link>
				<Link
					to="contact"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className="font-bold transition-all duration-500 cursor-pointer sm:text-3xl hover:text-primary hover:scale-110"
				>
					Contact
				</Link>
				<ModeToggle />
			</motion.div>
		</nav>
	);
};

export default Navbar;
