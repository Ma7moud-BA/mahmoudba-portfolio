"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/motions";
import Image from "next/image";
import { Tech } from "@/types";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const Skill = ({ title, iconUrl, fadeInDirection = "left" }: Tech) => {
	return (
		<motion.div
			key={title}
			initial="hidden"
			whileInView={"show"}
			variants={slideIn(fadeInDirection, "tween", 0.2, 1)}
			className="flex flex-col items-center justify-center "
		>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>
						<Image
							className="flex items-center justify-center min-h-full dark:invert "
							alt={title}
							width={120}
							height={120}
							src={iconUrl}
						/>
					</TooltipTrigger>
					<TooltipContent>
						<p className="text-lg font-bold">{title}</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</motion.div>
	);
};

export default Skill;
