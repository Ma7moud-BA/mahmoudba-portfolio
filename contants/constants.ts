import { StaticImageData } from "next/image";
import cssImg from "../assets/imgs/tech/css.png";
import figmaImg from "../assets/imgs/tech/figma.png";
import gitImg from "../assets/imgs/tech/git.png";
import htmlImg from "../assets/imgs/tech/html.png";
import jsImg from "../assets/imgs/tech/javascript.png";
import mongodbImg from "../assets/imgs/tech/mongodb.png";
import nodeImg from "../assets/imgs/tech/nodejs.png";
import reactImg from "../assets/imgs/tech/reactjs.png";
import tailwindImg from "../assets/imgs/tech/tailwind.png";
import tsImg from "../assets/imgs/tech/typescript.png";
import threeJSImg from "../assets/imgs/tech/threejs.svg";
import sanityImg from "../assets/imgs/tech/Sanity-logo-svg.svg";
import prismaImg from "../assets/imgs/tech/icons8-prisma-orm.svg";
import nextjsImg from "../assets/imgs/tech/nextjs-13.svg";

import project_1 from "../assets/imgs/projects/project-1.avif";
import project_2 from "../assets/imgs/projects/project-2.avif";
import project_3 from "../assets/imgs/projects/project-3.avif";
import project_4 from "../assets/imgs/projects/project-4.avif";

import { Cards, Card, Tech, Project, Projects, Techs } from "@/types";

import frontEndImage from "@/assets/imgs/front-end-v2.png";
import backEndImage from "@/assets/imgs/backend.png";
import threeDDesignerImg from "@/assets/imgs/3d designer.png";

// const services = [
// 	{
// 		title: "Web Developer",
// 		icon: web,
// 	},
// 	{
// 		title: "React Native Developer",
// 		icon: mobile,
// 	},
// 	{
// 		title: "Backend Developer",
// 		icon: backend,
// 	},
// 	{
// 		title: "Content Creator",
// 		icon: creator,
// 	},
// ];

const technologies: Techs = [
	{
		name: "HTML 5",
		icon: htmlImg,
	},
	{
		name: "CSS 3",
		icon: cssImg,
	},
	{
		name: "JavaScript",
		icon: jsImg,
	},
	{
		name: "TypeScript",
		icon: tsImg,
	},
	{
		name: "React JS",
		icon: reactImg,
	},
	{
		name: "Tailwind CSS",
		icon: tailwindImg,
	},
	{
		name: "Node JS",
		icon: nodeImg,
	},
	{
		name: "MongoDB",
		icon: mongodbImg,
	},
	{
		name: "Three JS",
		icon: threeJSImg,
	},
	{
		name: "git",
		icon: gitImg,
	},
	{
		name: "figma",
		icon: figmaImg,
	},
	{
		name: "Sanity",
		icon: sanityImg,
	},
	{
		name: "Prisma OEM",
		icon: prismaImg,
	},
	{
		name: "NextJs",
		icon: nextjsImg,
	},
];

// const experiences = [
// 	{
// 		title: "React.js Developer",
// 		company_name: "Starbucks",
// 		icon: starbucks,
// 		iconBg: "#383E56",
// 		date: "March 2020 - April 2021",
// 		points: [
// 			"Developing and maintaining web applications using React.js and other related technologies.",
// 			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
// 			"Implementing responsive design and ensuring cross-browser compatibility.",
// 			"Participating in code reviews and providing constructive feedback to other developers.",
// 		],
// 	},
// 	{
// 		title: "React Native Developer",
// 		company_name: "Tesla",
// 		icon: tesla,
// 		iconBg: "#E6DEDD",
// 		date: "Jan 2021 - Feb 2022",
// 		points: [
// 			"Developing and maintaining web applications using React.js and other related technologies.",
// 			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
// 			"Implementing responsive design and ensuring cross-browser compatibility.",
// 			"Participating in code reviews and providing constructive feedback to other developers.",
// 		],
// 	},
// 	{
// 		title: "Web Developer",
// 		company_name: "Shopify",
// 		icon: shopify,
// 		iconBg: "#383E56",
// 		date: "Jan 2022 - Jan 2023",
// 		points: [
// 			"Developing and maintaining web applications using React.js and other related technologies.",
// 			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
// 			"Implementing responsive design and ensuring cross-browser compatibility.",
// 			"Participating in code reviews and providing constructive feedback to other developers.",
// 		],
// 	},
// 	{
// 		title: "Full stack Developer",
// 		company_name: "Meta",
// 		icon: meta,
// 		iconBg: "#E6DEDD",
// 		date: "Jan 2023 - Present",
// 		points: [
// 			"Developing and maintaining web applications using React.js and other related technologies.",
// 			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
// 			"Implementing responsive design and ensuring cross-browser compatibility.",
// 			"Participating in code reviews and providing constructive feedback to other developers.",
// 		],
// 	},
// ];

// const testimonials = [
// 	{
// 		testimonial:
// 			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
// 		name: "Sara Lee",
// 		designation: "CFO",
// 		company: "Acme Co",
// 		image: "https://randomuser.me/api/portraits/women/4.jpg",
// 	},
// 	{
// 		testimonial:
// 			"I've never met a web developer who truly cares about their clients' success like Rick does.",
// 		name: "Chris Brown",
// 		designation: "COO",
// 		company: "DEF Corp",
// 		image: "https://randomuser.me/api/portraits/men/5.jpg",
// 	},
// 	{
// 		testimonial:
// 			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
// 		name: "Lisa Wang",
// 		designation: "CTO",
// 		company: "456 Enterprises",
// 		image: "https://randomuser.me/api/portraits/women/6.jpg",
// 	},
// ];

export const cards: Cards = [
	{ title: "Frontend Developer", imageSrc: frontEndImage },
	{ title: "Backend Developer", imageSrc: backEndImage },
	{ title: "3D Designer", imageSrc: threeDDesignerImg },
];
const projects: Projects = [
	{
		id: 1,
		name: "Car Rent",
		description:
			"Web-based platform that allows providing a convenior transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: project_1,
		github_link: "https://github.com/",
		liveDemoLink: "",
	},
	{
		id: 2,
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, ranges for positions,.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: project_2,

		github_link: "https://github.com/",
		liveDemoLink: "",
	},
	{
		id: 3,
		name: "Trip Guide",
		description:
			"A comprehensive travel bocars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: project_3,
		github_link: "https://github.com/",
		liveDemoLink: "",
	},
	{
		id: 4,
		name: "Trip Guide",
		description:
			"A comprehensive travel bookintal cars, anopular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: project_4,
		github_link: "https://github.com/",
		liveDemoLink: "",
	},
	{
		id: 5,
		name: "Trip Guide",
		description:
			"A comprehensive travel booki cations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: project_2,
		github_link: "https://github.com/",
		liveDemoLink: "",
	},
	{
		id: 6,
		name: "Trip Guide",
		description: "A comprehensive travend rentons for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: project_4,
		github_link: "https://github.com/",
		liveDemoLink: "",
	},
];

export { technologies, projects };
