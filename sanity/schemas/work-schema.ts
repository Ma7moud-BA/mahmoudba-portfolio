const work_section = {
	name: "work_section",
	title: "Work Section",
	type: "document",
	fields: [
		{ name: "small_text", title: "Small Text", type: "string" },
		{ name: "large_text", title: "Large Text", type: "string" },
		{
			name: "projects",
			title: "Projects",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "title",
							title: "Title",
							type: "string",
						},
						{
							name: "description",
							title: "Description",
							type: "string",
						},
						{
							name: "banner",
							title: "Banner Image",
							type: "image",
							options: { hotspot: true },
						},
						{
							name: "images",
							title: "Images",
							type: "array",
							options: { hotspot: true },
							of: [{ type: "image", options: [{ hotspot: true }] }],
						},
						{ name: "demo_url", title: "Live Demo Url", type: "url" },
						{ name: "github_repo", title: "Github Repo Url", type: "url" },
						{
							name: "content",
							title: "Content",
							type: "array",
							of: [{ type: "block" }],
						},
					],
				},
			],
		},
	],
};
export default work_section;
