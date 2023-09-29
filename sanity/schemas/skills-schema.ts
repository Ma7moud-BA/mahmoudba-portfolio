const skills_schema = {
	name: "skills",
	title: "Skills",
	type: "document",
	fields: [
		{
			name: "skill_title",
			title: "Skill Title",
			type: "string",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "icon",
			title: "Skill Icon",
			type: "image",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "description",
			title: "Skill Description",
			type: "string",
			validation: (Rule: any) => [
				Rule.required().min(5).error("A text of min. 5 characters is required"),
			],
		},
		{
			name: "docs_url",
			title: "Skill Documentation Url",
			type: "url",
			validation: (Rule: any) => Rule.required(),
		},
	],
};

export default skills_schema;
