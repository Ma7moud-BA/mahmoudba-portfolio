const projects_schema = {
	name: "projects",
	title: "Projects",
	type: "document",
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
			name: "techs",
			title: "Tech Used",
			type: "array",
			of: [{ type: "reference", to: [{ type: "skills" }] }],
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
		{
			name: "projectType",
			title: "Project Type",
			type: "string",
			options: {
				list: [
					{ title: "3D", value: "3D" },
					{ title: "Web", value: "Web" },
					{ title: "Arduino", value: "Arduino" },
				],
			},
			validation: (Rule: any) => Rule.required(),
		},
		// add the sketchfab embed as string and only show this option if the project type is 3D
		{
			name: "sketchfabEmbed",
			title: "Sketchfab Embed Code",
			type: "string",
			description: "Paste the Sketchfab embed code here.",
			hidden: ({ document }: { document: { projectType: string } }) =>
				document.projectType !== "3D",
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
};
export default projects_schema;
