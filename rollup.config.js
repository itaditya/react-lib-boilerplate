import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';

export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/main.js',
    name: 'ReactCmpLib',
    format: 'umd',
    sourceMap: true,
    globals: ['React']
  },
  external: [
    'react'
  ],
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extract: 'dist/styles.css'
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
