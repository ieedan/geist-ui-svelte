import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import pkg from "./package.json";
import { getRoutes } from "./routes.js";

// Get components
const components = getRoutes();

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		"process.env.PACKAGE_VERSION": JSON.stringify(pkg.version),
		"process.env.COMPONENTS": JSON.stringify(components),
	},
});
