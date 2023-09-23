const about_section = {
	name: "about_section",
	title: "About Section",
	type: "document",
	fields: [
		{ name: "small_text", title: "Small Text", type: "string" },
		{ name: "large_text", title: "Large Text", type: "string" },
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
