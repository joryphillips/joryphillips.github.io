import { esbuildPlugin } from '@web/dev-server-esbuild';
import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';

export default {
  plugins: [
    // Order matters here. Make sure esbuildPlugin is before hmrPlugin.
    esbuildPlugin({ ts: true }),
    hmrPlugin({
      include: ['src/**/*'],
      presets: [presets.haunted],
    }),
  ],
};
