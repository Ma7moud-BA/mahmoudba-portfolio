const about_section = {
	name: "about_section",
	title: "About Section",
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
		{ name: "description", title: "Description", type: "string" },
		{
			name: "expertise",
			title: "Expertise",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "expert_title",
							title: "Expert Title",
							type: "string",
							validation: (Rule: any) => Rule.required(),
						},
						{
							name: "expert_icon",
							title: "Expert Icon",
							type: "image",
							fields: [
								{
									name: "alt",
									title: "Alt",
									type: "string",
								},
							],
						},
					],
				},
			],
		},
	],
};
export default about_section;
