import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));

export default {
  input: 'src/package.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
      extensions: ['.js', '.jsx'],
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    commonjs(),
    postcss({
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
      },
      extract: false,
      minimize: true,
      auto: true,
    }),
    copy({
      targets: [
        { src: 'public/quiz_game_data.json', dest: 'dist' },
      ],
    }),
  ],
  external: ['react', 'react-dom'],
};

