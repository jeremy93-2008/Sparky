import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import typescript from "rollup-plugin-typescript2";
import pkg from './package.json';

export default [
	{
		input: 'src/sparky.ts',
		external: ['ms'],
		output: [
			{ file: pkg.main, name: "sparky", format: 'umd', sourcemap: true }
		],
        plugins: [
			typescript(),
			resolve(),
			commonjs(),
			terser({
				output: {
				  comments: "all"
				}
			  })
        ]
	}
];