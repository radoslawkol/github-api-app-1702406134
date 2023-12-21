import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import EnvironmentPlugin from "vite-plugin-environment";
import { resolve } from "path";

export default defineConfig({
	plugins: [
		react(),
		svgr({
			include: "**/*.svg",
		}),
		EnvironmentPlugin("all"),
	],
	server: {
		port: 3000,
	},
	resolve: {
		alias: [
			{ find: "@app", replacement: resolve(__dirname, "./src") },
			{ find: "@pages", replacement: resolve(__dirname, "./src/pages") },
			{
				find: "@components",
				replacement: resolve(__dirname, "./src/components"),
			},
			{ find: "@hooks", replacement: resolve(__dirname, "./src/hooks") },
			{ find: "@helpers", replacement: resolve(__dirname, "./src/helpers") },
			{ find: "@utils", replacement: resolve(__dirname, "./src/utils") },
		],
	},
});
