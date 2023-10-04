"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/motions";
import { Project } from "@/types";
import Image from "next/image";
import { VscLiveShare } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
type ProjectCardProps = {
	index: number;
	project: Project;
	active: string;
	handleClick: React.Dispatch<React.SetStateAction<string>>;
};
const ProjectCard = ({
	index,
	project,
	active,
	handleClick,
}: ProjectCardProps) => {
	const ProjectCardExists = project ? (
		<motion.div
			initial="hidden"
			whileInView={"show"}
			viewport={{ once: false }}
			variants={slideIn("left", "spring", index * 0.4, 1)}
			className={`relative shadow-md rounded-lg shadow-primary  flex max-h-[500px] items-center justify-center min-w-[150px] transition-[flex] duration-500 ease-out cursor-pointer ${
				active === project._id
					? "lg:flex-[3.5] flex-[10] "
					: "lg:flex-[0.5] flex-[2] "
			}`}
			onClick={() => {
				handleClick(project._id);
			}}
		>
			<Image
				src={project.bannerUrl}
				alt={project.title}
				width={2000}
				height={2000}
				className="absolute object-cover w-full h-full rounded-xl "
			/>
			{active === project._id ? (
				<motion.div
					variants={fadeIn("down", "spring", 0.1, 0.5)}
					initial="hidden"
					whileInView={"show"}
					className="absolute pt-2  bottom-0 w-full lg:py-8  px-4 justify-start flex   rounded-b-xl bg-[rgba(1,1,1,.5)]"
				>
					<div className="flex-1  ">
						<Link href={project.slug}>
							<h2 className="text-xl font-bold leading-5 text-white uppercase underline hover:text- transition hover:text-primary duration-500 ">
								{project.title}
							</h2>
						</Link>
						<p className="text-white cursor-auto">{project.description}</p>
						<div className="flex justify-between items-center gap-2 mt-2 font-extrabold text-white cursor-auto">
							<div className="flex items-center gap-2">
								<div className="w-16 h-16 mb-4 rounded-lg   bg-[rgba(255,255,255,.1)] hover:bg-[rgba(255,255,255,.3)] transition flex items-center justify-center">
									<Link href={project.demo_url} target="_blank">
										<VscLiveShare color="white" size={35} />
									</Link>
								</div>
								{project.demo_url && (
									<Link href={project.demo_url} target="_blank">
										Live Demo
									</Link>
								)}
							</div>
							<h3 className="capitalize">
								Project Type: {project.projectType}
							</h3>
						</div>
					</div>
					<div className="w-16 h-16 mb-4 rounded-lg flex-2   bg-[rgba(255,255,255,.1)] hover:bg-[rgba(255,255,255,.3)] transition flex items-center justify-center">
						{project.github_repo && (
							<Link href={project.github_repo}>
								<AiFillGithub color="white" size={35} />
							</Link>
						)}
					</div>
				</motion.div>
			) : (
				<h3 className="font-extrabold sm:text-2xl lg:text-3xl text-xl     bottom-7 text-shadow   absolute z-0 lg:bottom-20 lg:-right-6 lg:-rotate-90 lg:origin-[0,0]">
					{project.title}
				</h3>
			)}
		</motion.div>
	) : (
		<div>No Projects Added</div>
	);
	return ProjectCardExists;
};

export default ProjectCard;
