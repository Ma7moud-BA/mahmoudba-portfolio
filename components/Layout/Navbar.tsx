"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { NavigationMenu } from "../ui/navigation-menu";
import { ModeToggle } from "../ModeToggle";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { navMenuVariantsSm, navMenuVariants } from "@/lib/motions";
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
	return (
		<nav className="z-10 py-5 flex sm:flex-row justify-between sm:px-56 px-10 bg-secondary sm:items-center mb-20  sticky top-0 flex-col ">
			<h2 className="text-4xl font-extrabold ">MahmoudBA.</h2>
			<BiMenuAltRight
				cursor="pointer"
				size={40}
				className="sm:hidden hover:text-primary absolute top-5 right-5 "
				onClick={() => {
					setShowMenu((prev) => !prev);
				}}
			/>
			<motion.div
				variants={window.innerWidth < 640 ? navMenuVariants : navMenuVariantsSm}
				initial="hidden"
				whileInView={"show"}
				className={`flex sm:flex-row flex-col gap-5 self-end     ${
					showMenu ? "block" : "hidden"
				} `}
			>
				<Link
					href={"/"}
					className="font-bold sm:text-3xl hover:text-primary transition-all hover:scale-110 duration-500  "
				>
					About
				</Link>
				<Link
					href={"/"}
					className="font-bold sm:text-3xl hover:text-primary transition-all hover:scale-110 duration-500  "
				>
					Works
				</Link>
				<Link
					href={"/"}
					className="font-bold sm:text-3xl hover:text-primary transition-all hover:scale-110 duration-500  "
				>
					Contact
				</Link>
				<ModeToggle />
			</motion.div>
		</nav>
	);
};

export default Navbar;
