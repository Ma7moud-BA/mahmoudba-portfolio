const socials_schema = {
	name: "socials",
	title: "Socials",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Social Title",
			type: "string",
		},
		{
			name: "icon",
			title: "Social Icon",
			type: "image",
		},
		{
			name: "link",
			title: "Social Link",
			type: "url",
		},
		{
			name: "additionalInfo",
			title: "Additional Information",
			type: "string",
		},
	],
};
export default socials_schema;
