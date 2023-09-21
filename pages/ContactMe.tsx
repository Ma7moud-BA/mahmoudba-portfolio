"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/motions";
import ProfileForm from "@/components/FormSchema";
const ContactMe = () => {
	return (
		<div className="flex flex-col h-screen px-10 sm:px-56 " id="contact">
			<motion.h1
				variants={slideIn("up", "tween", 0.2, 1)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: false }}
				className="text-xl font-extrabold opacity-50 "
			>
				GET IN TOUCH
			</motion.h1>
			<motion.h1
				variants={slideIn("up", "tween", 0.2, 1)}
				initial="hidden"
				whileInView={"show"}
				className="text-5xl font-bold "
			>
				Contact.
			</motion.h1>
			<ProfileForm></ProfileForm>
		</div>
	);
};

export default ContactMe;
