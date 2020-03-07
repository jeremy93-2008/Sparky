import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from "rollup-plugin-typescript2";
import pkg from './package.json';

export default [
	{
		input: 'src/sparky.ts',
		external: ['ms'],
		output: [
			{ file: pkg.main, format: 'cjs', sourcemap: true }
		],
        plugins: [
            typescript(),
            commonjs()
        ]
	}
];