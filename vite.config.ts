import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import EnvironmentPlugin from "vite-plugin-environment";

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
});
