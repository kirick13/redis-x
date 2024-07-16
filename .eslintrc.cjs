
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
		requireConfigFile: false,
	},
	env: {
		es2022: true,
		node: true,
	},
	extends: [
		// 'eslint:recommended',
		// 'xo',
		// 'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:jsdoc/recommended',
		'plugin:promise/recommended',
		'plugin:unicorn/recommended',
		'plugin:node/recommended',
	],
	plugins: [
		// '@typescript-eslint',
		'import',
		'jsdoc',
		'promise',
		'unicorn',
		'node',
	],
	ignorePatterns: [
		'.eslintrc.cjs',
		'dist/**/*',
		'node_modules*/**/*',
		'types/**/*',
	],
	settings: {
		'import/resolver': {
			node: {
				extensions: [
					'.ts',
				],
			},
		},
	},
	rules: {
		'array-bracket-spacing': [
			'warn',
			'always',
			{
				arraysInArrays: false,
				objectsInArrays: false,
			},
		],
		'arrow-body-style': [
			'error',
			'as-needed',
			{
				requireReturnForObjectLiteral: true,
			},
		],
		'arrow-parens': [
			'warn',
			'always',
		],
		'brace-style': [
			'error',
			'stroustrup',
		],
		'camelcase': 'off',
		'capitalized-comments': 'off',
		'comma-dangle': [
			'warn',
			'always-multiline',
		],
		'func-names': 'off',
		'import/extensions': 'off',
		'import/no-unresolved': [
			'error',
			{
				ignore: [
					'bun:*',
				],
			},
		],
		'import/order': [
			'error',
			{
				groups: [
					[
						'builtin',
						'external',
					],
					'internal',
					'parent',
					'sibling',
				],
			},
		],
		'indent': [
			'error',
			'tab',
			{
				ImportDeclaration: 'off',
				SwitchCase: 1,
			},
		],
		'jsdoc/require-jsdoc': 'error',
		'jsdoc/require-param-type': 'off',
		'jsdoc/require-returns-type': 'off',
		'new-cap': [
			'error',
			{
				newIsCap: true,
				capIsNew: true,
				properties: false,
			},
		],
		'no-multi-spaces': [
			'error',
			{
				exceptions: {
					Property: true,
					ImportDeclaration: true,
				},
			},
		],
		'no-multiple-empty-lines': 'warn',
		'no-promise-executor-return': 'off',
		'no-trailing-spaces': 'warn',
		'no-unused-vars': 'off',
		'node/no-missing-import': 'off',
		'node/no-unpublished-import': 'off',
		'node/no-unsupported-features/es-syntax': 'off',
		'object-curly-spacing': [
			'warn',
			'always',
			{
				arraysInObjects: true,
				objectsInObjects: true,
			},
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'never',
				prev: 'case',
				next: 'break',
			},
		],
		'quote-props': [
			'error',
			'consistent-as-needed',
			{
				numbers: true,
			},
		],
		'quotes': [
			'error',
			'single',
		],
		'radix': [
			'warn',
			'as-needed',
		],
		'unicorn/no-null': 'off',
		'unicorn/numeric-separators-style': [
			'warn',
			{
				onlyIfContainsSeparator: true,
			},
		],
		'unicorn/prefer-ternary': 'off',
		'unicorn/prevent-abbreviations': [
			'error',
			{
				allowList: {
					args: true,
					env: true,
					fn: true,
				},
			},
		],
		'unicorn/switch-case-braces': [
			'warn',
			'avoid',
		],
	},
};
