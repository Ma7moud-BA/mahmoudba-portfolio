const hero_section = {
	name: "hero_section",
	title: "Hero Section",
	type: "document",
	fields: [
		{ name: "small_text", title: "Small Text", type: "string" },
		{ name: "large_text", title: "Large Text", type: "string" },
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
