const skills_section = {
	name: "skill_section",
	title: "Skill Section",
	type: "document",
	fields: [
		{
			name: "small_text",
			title: "Small Text",
			type: "string",
			validation: (Rule: any) => [
				Rule.required().min(5).error("A text of min. 5 characters is required"),
				Rule.max(30).warning("Shorter text are usually better"),
			],
		},
		{
			name: "large_text",
			title: "Large Text",
			type: "string",
			validation: (Rule: any) => [
				Rule.required().min(5).error("A text of min. 5 characters is required"),
				Rule.max(30).warning("Shorter text are usually better"),
			],
		},
	],
};
export default skills_section;
