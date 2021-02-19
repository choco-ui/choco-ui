module.exports = {
	"parser":  '@typescript-eslint/parser',
	"env": {
		"browser": true,
		"es2021": true,
		"jest": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"babel",
		"react"
	],
	"ignorePatterns": [ "webpack.config.js", "postcss.config.js", ".eslintrc.js", "jest.config.js", "setupTests.ts" ],
	"rules": {
		"semi": [ "error", "always" ],
		"quotes": [ "error", "single" ],
		"quote-props": [ "error", "always" ],
		"jsx-quotes": [ "error", "prefer-double" ],
		"no-console": "error"
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	}
};
