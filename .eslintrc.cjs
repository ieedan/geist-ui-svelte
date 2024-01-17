/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:svelte/recommended",
		"plugin:@cspell/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "@cspell"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		extraFileExtensions: [".svelte"],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	overrides: [
		{
			files: ["*.svelte"],
			parser: "svelte-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
			},
			rules: {
				camelcase: "error",
				"no-self-assign": "off", // This will allow you to self assign when working with arrays in .svelte files
				"no-console": "error",
				"no-shadow": "off",
				"@typescript-eslint/no-shadow": "error",
				"@typescript-eslint/no-explicit-any": "error",
				"no-nested-ternary": "error",
				"svelte/no-at-html-tags": "warn",
				"@cspell/spellchecker": [
					"error",
					{
						cspell: {
							words: [
								"hoverable",
								"buttondropdown",
								"buttondropdownitem",
								"tabitem",
								"dropdownitem",
								"radiotabs",
								"Aidan",
								"Bleser",
								"buttongroup",
								"lightswitch",
							],
						},
					},
				],
			},
		},
	],
	rules: {
		camelcase: "error",
		"no-console": "error",
		"no-shadow": "off",
		"@typescript-eslint/no-shadow": "error",
		"@typescript-eslint/no-explicit-any": "error",
		"no-nested-ternary": "error",
		"@cspell/spellchecker": [
			"error",
			{
				cspell: {
					words: [
						"hoverable",
						"buttondropdown",
						"buttondropdownitem",
						"tabitem",
						"dropdownitem",
						"radiotabs",
						"Aidan",
						"Bleser",
						"buttongroup",
						"lightswitch",
					],
				},
			},
		],
	},
};
