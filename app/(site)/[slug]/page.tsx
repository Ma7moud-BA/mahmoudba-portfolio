import Skill from "@/components/Skill";
import { getProjectBySlug } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { VscLiveShare } from "react-icons/vsc";
type Props = { params: { slug: string } };
type PortableTextComponents = {
	block: {
		h1: React.FC;
		h2: React.FC;
		blockquote: React.FC;
		customHeading: React.FC;
	};
	list: {
		bullet: React.FC;
		number: React.FC;
	};
	listItem: {
		bullet: React.FC;
		number: React.FC;
	};
};
const page = async ({ params }: Props) => {
	const { slug } = params;
	const project = await getProjectBySlug(slug);

	const CustomH1: React.FC = ({ children }: any) => (
		<h1 className="text-3xl font-bold my-2">{children}</h1>
	);

	const CustomH2: React.FC = ({ children }: any) => (
		<h2 className="text-xl font-bold my-2">{children}</h2>
	);

	const CustomBlockquote: React.FC = ({ children }: any) => (
		<blockquote className="border-l-purple-500">{children}</blockquote>
	);

	const CustomCustomHeading: React.FC = ({ children }: any) => (
		<h2 className="text-lg text-primary text-purple-700">{children}</h2>
	);

	const CustomBulletList: React.FC = ({ children }: any) => (
		<ul className="mb-10">{children}</ul>
	);

	const CustomNumberList: React.FC = ({ children }: any) => (
		<ol className="mb-10">{children}</ol>
	);

	const CustomBulletListItem: React.FC = ({ children }: any) => (
		<li style={{ listStyleType: "circle" }}>{children}</li>
	);

	const CustomNumberListItem: React.FC = ({ children }: any) => (
		<li style={{ listStyleType: "lower-roman" }}>{children}</li>
	);

	const components: PortableTextComponents = {
		block: {
			h1: CustomH1,
			h2: CustomH2,
			blockquote: CustomBlockquote,
			customHeading: CustomCustomHeading,
		},
		list: {
			bullet: CustomBulletList,
			number: CustomNumberList,
		},
		listItem: {
			bullet: CustomBulletListItem,
			number: CustomNumberListItem,
		},
	};
	return (
		<div className="section ">
			<div className="flex relative flex-wrap justify-between">
				<h1 className="text-4xl font-bold my-10 ">
					{project.title}({project.projectType} Project)
				</h1>
				<div className="flex items-center gap-2 mt-2 font-extrabold text-white cursor-auto">
					<Link href={project.demo_url}>
						<div className="w-16 h-16 mb-4 rounded-lg     shadow-md text-primary cursor-pointer   bg-muted  hover:brightness-110  transition flex items-center justify-center">
							<VscLiveShare size={35} />
						</div>
					</Link>

					{project.github_repo && (
						<Link href={project.github_repo}>
							<div className="w-16 h-16 mb-4 rounded-lg flex-2   shadow-md text-primary cursor-pointer  bg-muted  hover:brightness-110  border-border   transition flex items-center justify-center">
								<AiFillGithub size={35} />
							</div>
						</Link>
					)}
				</div>
			</div>
			<Image
				src={project.bannerUrl}
				alt={project.title}
				width={1000}
				height={1000}
				className="object-cover min-w-[300px] min-h-[300px] mx-auto mb-8 rounded-md border-border shadow-md shadow-primary"
			/>
			{/* render the sketchfab embeded string */}
			{project.sketchfabEmbed && (
				<>
					<h1 className="text-4xl font-bold my-10 ">3D Preview:</h1>

					<div className=" w-full flex justify-center ">
						<div
							dangerouslySetInnerHTML={{
								__html: project.sketchfabEmbed,
							}}
						/>
					</div>
				</>
			)}
			<h2 className="font-bold text-3xl my-2"> Description:</h2>
			<p className="mb-8 mt-2">{project.description}</p>
			<div className="flex flex-wrap gap-5 justify-center mb-5 ">
				{project.images?.map((img) => {
					return (
						<Image
							key={`${img}`}
							src={img}
							alt={project.title}
							width={1000}
							height={1000}
							className="object-cover min-w-[300px] min-h-[300px]  max-w-md rounded-md border-border shadow-md shadow-primary"
						/>
					);
				})}
			</div>
			<h2 className="font-bold text-3xl my-2 capitalize">Technologies Used:</h2>
			<div className="flex flex-wrap gap-5 mb-8 bg-accent p-10 rounded-md">
				{project.techs?.map((skill, i) => (
					<Skill
						fadeInDirection={i < 8 ? "left" : "right"}
						skill={skill}
						key={skill._id}
					/>
				))}
			</div>

			{project.content && (
				<>
					<h2 className="font-bold text-3xl my-2">Project Details:</h2>
					<PortableText value={project.content} components={components} />
				</>
			)}
		</div>
	);
};

export default page;
