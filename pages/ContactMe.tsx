import React from "react";

import ProfileForm from "@/components/FormSchema";
import SectionTitle from "@/components/SectionTitle";
const ContactMe = () => {
	return (
		<div className="flex flex-col section" id="contact">
			<SectionTitle smallTextTitle="GET IN TOUCH" largeTextTitle="Contact." />
			<ProfileForm></ProfileForm>
		</div>
	);
};

export default ContactMe;
