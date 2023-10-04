const resume_schema = {
	name: "resume",
	title: "Resume",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
			description: 'The title of the resume (e.g., "MahmoudBA - Resume").',
		},
		{
			name: "file",
			title: "Resume File",
			type: "file",
			description: "Upload your resume file here (PDF or Word document).",
			options: {
				accept: ".pdf,.docx",
			},
		},
		{
			name: "description",
			title: "Description",
			type: "text",
			description: "A brief description of your resume (optional).",
		},
	],
};
export default resume_schema;
