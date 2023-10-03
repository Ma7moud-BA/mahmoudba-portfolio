import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
export default defineConfig({
	projectId: "1793lx2l",
	dataset: "production",
	title: "MahmoudBA-Studio",
	basePath: "/admin",
	apiVersion: "2021-10-21",
	plugins: [deskTool()],
	schema: { types: schemas },
});
