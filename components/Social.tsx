"use client";
import { Social } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";

type Props = { social: Social };
const Social = ({ social }: Props) => {
	const currentTheme = useTheme();
	return (
		social.title != "gmail" && (
			<Link href={social.link || ""} key={social._id} className="z-[999]">
				<div>
					<Image
						src={social.icon}
						height={50}
						width={50}
						alt={social.title}
						style={{
							filter:
								social.title === "Github" && currentTheme.theme === "dark"
									? "invert(100%)"
									: undefined,
						}}
					/>
				</div>
			</Link>
		)
	);
};

export default Social;
