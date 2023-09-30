"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/motions";
import Image from "next/image";
import { Tech } from "@/types";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Skill = ({ skill, fadeInDirection = "left" }: Tech) => {
	return (
		<motion.div
			initial="hidden"
			whileInView={"show"}
			variants={slideIn(fadeInDirection, "tween", 0.2, 1)}
			className="flex flex-col items-center justify-center z-50 "
		>
			<HoverCard>
				<HoverCardTrigger asChild>
					<div className="-z-10 relative">
						<Image
							src={skill.icon}
							width={100}
							height={100}
							alt={skill.skill_title}
							layout="fixed"
						/>
					</div>
				</HoverCardTrigger>

				<HoverCardContent className="w-80 !z-[9999] ">
					<div className="flex  justify-between space-x-4 !z-50">
						<Avatar>
							<AvatarImage src={skill.icon} />
							<AvatarFallback>{skill.skill_title}</AvatarFallback>
						</Avatar>
						<div className="space-y-1 !z-50">
							<h4 className="text-sm font-semibold">@{skill.skill_title}</h4>
							<p className="text-sm">{skill?.description} </p>
							<div className="flex items-center pt-2">
								<IoDocumentTextOutline size={20} />

								<Link
									href={skill?.docs_url}
									target="_blank"
									className="text-xs text-muted-foreground px-2 hover:underline transition duration-500 hover:brightness-125"
								>
									Official Docs
								</Link>
							</div>
						</div>
					</div>
				</HoverCardContent>
			</HoverCard>
		</motion.div>
	);
};

export default Skill;
