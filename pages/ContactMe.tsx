import React from "react";

import ProfileForm from "@/components/FormSchema";
import SectionTitle from "@/components/SectionTitle";
const ContactMe = () => {
	return (
		<div className="flex flex-col h-screen px-10 sm:px-56 " id="contact">
			<SectionTitle smallTextTitle="GET IN TOUCH" largeTextTitle="Contact." />
			<ProfileForm></ProfileForm>
		</div>
	);
};

export default ContactMe;
