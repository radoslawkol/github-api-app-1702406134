export default {
	preset: "ts-jest",
	testEnvironment: "jest-environment-jsdom",
	transform: {
		"^.+\\.tsx?$": "ts-jest",
		"^.+\\.(ts|js|html|svg)$": "ts-jest",
	},
	rootDir: ".",
	moduleNameMapper: {
		"\\.(gif|ttf|eot|svg|png|jpg)$": "<rootDir>/test/__mocks__/fileMock.js",
		"\\.(css|scss|sass)$": "identity-obj-proxy",
	},
	testPathIgnorePatterns: ["/node_modules/"],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
