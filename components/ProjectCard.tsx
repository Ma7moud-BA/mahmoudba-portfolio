import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/motions";
import { Project } from "@/contants/constants";
import Image from "next/image";
import { VscLiveShare } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";
type ProjectCardProps = {
	index: number;
	project: Project;
	active: number;
	handleClick: React.Dispatch<React.SetStateAction<number>>;
};
const ProjectCard = ({
	index,
	project,
	active,
	handleClick,
}: ProjectCardProps) => {
	return (
		<motion.div
			initial="hidden"
			whileInView={"show"}
			viewport={{ once: false }}
			variants={slideIn("left", "spring", index * 0.4, 1)}
			className={`relative flex max-h-[500px] items-center justify-center min-w-[150px] transition-[flex] duration-500 ease-out cursor-pointer ${
				active === project.id
					? "lg:flex-[3.5] flex-[10] "
					: "lg:flex-[0.5] flex-[2] "
			}`}
		>
			<Image
				src={project.image}
				alt={project.name}
				width={300}
				height={300}
				className={`absolute object-cover w-full h-full rounded-xl`}
				onClick={() => {
					handleClick(project.id);
				}}
			/>
			{active === project.id ? (
				<motion.div
					variants={fadeIn("down", "spring", 0.1, 0.5)}
					initial="hidden"
					whileInView={"show"}
					className="absolute bottom-0 w-full py-8 px-4 justify-start flex   rounded-b-xl bg-[rgba(1,1,1,.5)]"
				>
					<div className="flex-1">
						<h2 className="text-xl font-bold leading-5 text-white uppercase">
							{project.name}
						</h2>
						<p className="text-white">{project.description}</p>
						<div className="flex items-center gap-2 mt-2 font-extrabold text-white">
							<div className="w-16 h-16 mb-4 rounded-lg   bg-[rgba(255,255,255,.1)] hover:bg-[rgba(255,255,255,.3)] transition flex items-center justify-center">
								<VscLiveShare color="white" size={35} className="" />
							</div>
							<p> Live Demo</p>
						</div>
					</div>
					<div className="w-16 h-16 mb-4 rounded-lg flex-2   bg-[rgba(255,255,255,.1)] hover:bg-[rgba(255,255,255,.3)] transition flex items-center justify-center">
						<AiFillGithub color="white" size={35} className="" />
					</div>
				</motion.div>
			) : (
				<h3 className="font-extrabold sm:text-2xl text-3xl text-white    absolute z-0 lg:bottom-20 lg:-right-6 lg:-rotate-90 lg:origin-[0,0]">
					{project.name}
				</h3>
			)}
		</motion.div>
	);
};

export default ProjectCard;
