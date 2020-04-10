import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';

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
  plugins: [typescript()],
};
