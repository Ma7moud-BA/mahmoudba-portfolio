const skills_section = {
	name: "skill_section",
	title: "Skill Section",
	type: "document",
	fields: [
		{ name: "small_text", title: "Small Text", type: "string" },
		{ name: "large_text", title: "Large Text", type: "string" },
		{
			name: "skills",
			title: "Skills",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "skill_title",
							title: "Skill Title",
							type: "string",
						},
						{
							name: "skill_icon",
							title: "Skill Icon",
							type: "image",
						},
					],
				},
			],
		},
	],
};
export default skills_section;
