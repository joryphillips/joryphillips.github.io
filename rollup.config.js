import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/app.ts',
  output: [{
    dir: './js',
    format: 'es',
  },
  {
    dir: './js/min',
    format: 'es',
    sourcemap: true,
    plugins: [terser()],
  }],
  plugins: [
    nodeResolve(),
    del({targets: 'js/*'}),
    typescript(),
  ],
  preserveEntrySignatures: false,
};
