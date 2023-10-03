"use client";
import React, { useState, useEffect } from "react";
import { ModeToggle } from "../ModeToggle";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { navMenuVariantsSm, navMenuVariants } from "@/lib/motions";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
const Navbar = () => {
	const [showMenu, setShowMenu] = useState<boolean>(true);
	const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

	// Function to handle screen size changes and update showMenu state

	// const handleScreenSizeChange = () => {
	// 	if (window?.innerWidth >= 640) {
	// 		setShowMenu(true);
	// 	}
	// 	if (window?.innerWidth <= 640) {
	// 		setShowMenu(false);
	// 	}
	// };
	useEffect(() => {
		// Function to handle screen size changes and update showMenu state
		const handleScreenSizeChange = () => {
			if (window?.innerWidth >= 640) {
				setShowMenu(true);
			}
			if (window?.innerWidth <= 640) {
				setShowMenu(false);
			}
		};

		if (typeof window !== "undefined") {
			// To fix the issue where the menu remains hidden even when the screen resolution changes back to not being "sm"
			window.addEventListener("resize", handleScreenSizeChange);
			setWindowWidth(window.innerWidth);

			if (window.innerWidth <= 640) {
				setShowMenu(false);
			}

			return () => {
				window.removeEventListener("resize", handleScreenSizeChange);
			};
		}
	}, []);
	const variantsSmOrLg =
		windowWidth !== undefined && windowWidth < 640
			? navMenuVariants
			: navMenuVariantsSm;

	return (
		<nav className="sticky top-0  flex flex-col justify-between padding_x py-5  transition border-b sm:flex-row  bg-background sm:items-center z-[999] ">
			<Link href={"/"}>
				<h2 className="text-4xl font-extrabold ">MahmoudBA.</h2>
			</Link>
			<BiMenuAltRight
				cursor="pointer"
				size={40}
				className="absolute sm:hidden hover:text-primary top-5 right-5 "
				onClick={() => {
					setShowMenu((prev) => !prev);
				}}
			/>
			<motion.div
				variants={variantsSmOrLg || {}}
				initial="hidden"
				whileInView={"show"}
				className={`flex sm:flex-row flex-col gap-5 self-end  sm:relative sm:top-0 sm:w-fit  sm:bg-inherit   ${
					showMenu ? "block" : "hidden"
				} `}
			>
				<ScrollLink
					to="about"
					spy={true}
					smooth={true}
					offset={-100}
					duration={400}
					className="font-bold transition-all duration-500 cursor-pointer sm:text-xl lg:text-3xl hover:text-primary hover:scale-110"
				>
					About
				</ScrollLink>
				<ScrollLink
					to="works"
					spy={true}
					smooth={true}
					offset={-100}
					duration={400}
					className="font-bold transition-all duration-500 cursor-pointer sm:text-xl lg:text-3xl hover:text-primary hover:scale-110"
				>
					Works
				</ScrollLink>
				<ScrollLink
					to="contact"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className="font-bold transition-all duration-500 cursor-pointer sm:text-xl  lg:text-3xl hover:text-primary hover:scale-110"
				>
					Contact
				</ScrollLink>

				<ModeToggle />
			</motion.div>
		</nav>
	);
};

export default Navbar;
