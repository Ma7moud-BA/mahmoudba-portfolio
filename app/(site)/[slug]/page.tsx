import Skill from "@/components/Skill";
import { getProjectBySlug } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { VscLiveShare } from "react-icons/vsc";
type Props = { params: { slug: string } };
const page = async ({ params }: Props) => {
	const { slug } = params;
	const project = await getProjectBySlug(slug);
	//todo:fetch the techs with the project
	console.log(project.techs);
	return (
		<div className="section ">
			<div className="flex relative flex-wrap justify-between">
				<h1 className="text-4xl font-bold my-10 ">{project.title}</h1>
				<div className="flex items-center gap-2 mt-2 font-extrabold text-white cursor-auto">
					<Link href={project.demo_url}>
						<div className="w-16 h-16 mb-4 rounded-lg     shadow-md text-primary cursor-pointer   bg-muted  hover:brightness-110  transition flex items-center justify-center">
							<VscLiveShare size={35} />
						</div>
					</Link>

					<Link href={project.github_repo}>
						<div className="w-16 h-16 mb-4 rounded-lg flex-2   shadow-md text-primary cursor-pointer  bg-muted  hover:brightness-110  border-border   transition flex items-center justify-center">
							<AiFillGithub size={35} />
						</div>
					</Link>
				</div>
			</div>
			<Image
				src={project.bannerUrl}
				alt={project.title}
				width={1000}
				height={1000}
				className="object-cover min-w-[300px] min-h-[300px] mx-auto mb-8 rounded-md border-border shadow-md shadow-primary"
			></Image>
			<h2 className="font-bold text-3xl my-2"> Description:</h2>
			<p className="mb-8 mt-2">{project.description}</p>
			<div className="flex flex-wrap gap-5 justify-center mb-5 ">
				{project.images?.map((img) => {
					return (
						<Image
							key={`${img}`}
							src={img}
							alt={project.title}
							width={500}
							height={500}
							className="object-cover min-w-[500px] min-h-[500px] rounded-md border-border shadow-md shadow-primary"
						/>
					);
				})}
			</div>
			<h2 className="font-bold text-3xl my-2 capitalize">Technologies Used:</h2>
			<div className="flex flex-wrap gap-5 mb-8">
				{project.techs?.map((skill, i) => (
					<Skill
						fadeInDirection={i < 8 ? "left" : "right"}
						skill={skill}
						key={skill._id}
					/>
				))}
			</div>

			<h2 className="font-bold text-3xl my-2">Project Details:</h2>

			<PortableText value={project.content} />
		</div>
	);
};

export default page;
