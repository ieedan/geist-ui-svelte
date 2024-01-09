import { dev } from "$app/environment";
import { inject } from "@vercel/analytics";
import { useDarkMode } from "$lib/TS/dark-mode.js";
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

useDarkMode();
injectSpeedInsights();
inject({ mode: dev ? "development" : "production" });

// eslint-disable-next-line no-console
console.log(
	"Welcome to geist-ui-svelte.com! See the source here https://github.com/ieedan/geist-ui-svelte! 🚀",
);
