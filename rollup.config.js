// allows import from data/*.ts (see package.json build and watch rules)
import '@rollup/plugin-typescript';

import del from 'rollup-plugin-delete';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import html from '@web/rollup-plugin-html';
import { copy } from '@web/rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-minify-html-literals';

import {PORTFOLIO} from './data/jory';

const IMAGE_DIR = 'images';
const BUNDLE_DIR = 'dist';

const imageImports = PORTFOLIO.map(
  project => `${IMAGE_DIR}/${project.imageSources[0]}`,
);

export default {
  input: 'index.html',
  output: [{
    dir: `./${BUNDLE_DIR}`,
    format: 'es',
    sourcemap: true, // uncomment for prod debugging
  }],
  plugins: [
    copy({
      patterns: [...imageImports, 'CNAME'],
    }),
    nodeResolve(),
    del({targets: `${BUNDLE_DIR}/*`}),
    minifyHTML(),
    esbuild({
      ts: true,
      minify: true,
      target: 'esnext',
    }),
    html(),
  ],
  preserveEntrySignatures: false,
};
