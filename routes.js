import fs from "fs";

/** Searches the components directory and returns each component with its href
 *
 * @returns {{slug: string, name: string}[]}
 */
export const getRoutes = () => {
	const routesDirectory = "src/routes/components";

	const files = fs.readdirSync(routesDirectory);

	const components = files.filter((a) => !a.endsWith(".svelte"));

	return components.map((a) => {
		return {
			slug: `/components/${a}`,
			name: a,
		};
	});
};
