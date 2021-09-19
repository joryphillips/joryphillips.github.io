import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';

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
    del({targets: 'js/*'}),
    typescript(),
  ],
};
