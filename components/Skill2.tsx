"use client";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tech } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { IoDocumentTextOutline } from "react-icons/io5";
import { slideIn } from "@/lib/motions";
import { motion } from "framer-motion";
const Skill2 = ({ skill, fadeInDirection = "left" }: Tech) => {
	return (
		<motion.div
			initial="hidden"
			whileInView={"show"}
			variants={slideIn(fadeInDirection, "tween", 0.2, 1)}
			className="flex flex-col items-center justify-center z-50 "
		>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Image
							src={skill.icon}
							width={100}
							height={100}
							alt={skill.skill_title}
						/>
					</TooltipTrigger>
					<TooltipContent className="bg-popover p-2 w-[50%] mx-auto">
						<div className="flex  justify-between space-x-4  text-popover-foreground">
							<Avatar>
								<AvatarImage src={skill.icon} />
								<AvatarFallback>{skill.skill_title}</AvatarFallback>
							</Avatar>
							<div className="space-y-1 ">
								<h4 className="text-sm font-semibold text-primary">
									{skill.skill_title}
								</h4>
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
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</motion.div>
	);
};

export default Skill2;
