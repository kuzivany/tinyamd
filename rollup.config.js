import pkg from './package.json';
import { uglify } from 'rollup-plugin-uglify';

export default {
	input: pkg.main,
	output: {
		file: pkg.browser,
		format: 'es',
	},
	context: 'this',
	plugins: [
		uglify({
			output: { comments: false },
			mangle: {
				toplevel: true,
				properties: { regex: /^_/ },
			},
		}),
	],
}