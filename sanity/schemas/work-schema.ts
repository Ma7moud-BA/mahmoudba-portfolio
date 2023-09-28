const work_section = {
	name: "work_section",
	title: "Work Section",
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
							validation: (Rule: any) => [
								Rule.required()
									.min(10)
									.error("A title of min. 10 characters is required"),
								Rule.max(30).warning("Shorter titles are usually better"),
							],
						},
						{
							name: "slug",
							title: "Slug",
							type: "slug",
							options: {
								source: (doc: any, context: any) => context.parent.title,
							},
							validation: (Rule: any) => Rule.required(),
						},
						{
							name: "description",
							title: "Description",
							type: "string",
							validation: (Rule: any) => Rule.required(),
						},
						{
							name: "banner",
							title: "Banner Image",
							type: "image",
							options: { hotspot: true },
							validation: (Rule: any) => Rule.required(),
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
