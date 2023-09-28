const hero_section = {
	name: "hero_section",
	title: "Hero Section",
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
		{ name: "bio", title: "Bio", type: "string" },
		{
			name: "hero_image",
			title: "Hero Image",
			type: "image",
			options: { hotspot: true },
		},
	],
};

export default hero_section;
