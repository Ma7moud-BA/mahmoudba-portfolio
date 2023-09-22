"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/motions";
import Image from "next/image";
import { Tech } from "@/app/types";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const Skill = ({
	tech,
	fadeInDirection = "left",
}: {
	tech: Tech;
	fadeInDirection: "left" | "right";
}) => {
	return (
		<motion.div
			key={tech.name}
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
							alt={tech.name}
							width={120}
							height={120}
							src={tech.icon}
						/>
					</TooltipTrigger>
					<TooltipContent>
						<p className="text-lg font-bold">{tech.name}</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</motion.div>
	);
};

export default Skill;
