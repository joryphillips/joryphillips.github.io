
# Jory's portfolio and resume (in easily-digestible, abbreviated form)

## Quickstart

Note: You will need [nodejs](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/) to build and use this app as configured.

#### Clone the repo
```bash
git clone https://github.com/joryphillips/joryphillips.github.io.git
```

#### To spin up a dev server with hot module reloading:
```bash
yarn dev
```

#### To make a new build and start a local server running bundled, minified code:
```bash
yarn prod
```

## The Stack

### Dependencies

👻 [Haunted](https://hauntedhooks.netlify.app) -> React-like hooks and syntax for modern web components

🔥 [lit-html](https://lit.dev/docs/libraries/standalone-templates/) -> template rendering

☎️ [pwa-helpers](https://github.com/Polymer/pwa-helpers) -> simple routing 


### Dev Dependencies

* TypeScript
* [yarn](https://yarnpkg.com/)
* [Rollup](https://rollupjs.org/guide/en/)
* [Open WC testing](https://modern-web.dev/guides/test-runner/getting-started/)
* [Open WC devsever](https://modern-web.dev/guides/dev-server/getting-started/)
* [esbuild](https://esbuild.github.io) via open wc for deverver & rollup plugin for build process

See [package.json](https://github.com/joryphillips/joryphillips.github.io/blob/main/package.json) and [rollup.config.js](https://github.com/joryphillips/joryphillips.github.io/blob/main/rollup.config.js) for more specific plugin dependencies and build process. 

### How the build works: highlights

**Rollup** is the main tool that puts everything together. It handles bundling and code splitting. A handful of Rollup plugins also help out:

**@web/rollup-plugin-html** allows `index.html` as an entrypoint (normally it is a TypeScript or JavaScript file). Aside from that, it does two main things: 
1) replaces the `<script src=".../app.ts>` import with a path to bundled & minified JS; 
2) parses `index.html` for static and meta links, and copies them to an `assets/` folder in the designated build location.

**@web/rollup-plugin-copy** simply copies designated static files. This repo contains many more images than is currently shown in the app. The config file [maps all portoflio projects](https://github.com/joryphillips/joryphillips.github.io/blob/main/rollup.config.js#L16) to get only the first image listed, consistent with how the app works, and the copy plugin copies those files to `dist`.

**rollup-plugin-minify-html-literals** is a fantastic tool that minifies template literals and CSS. This plugin dropped the bundle size by ~17% (10K smaller, uncompressed)

**rollup-plugin-esbuild** is the speedy replacement for TypeScript and terser plugins. It transpiles TS to minified JS.

Please feel free to fork this repo and repurpose it to your needs! 

[ISC License](https://github.com/joryphillips/joryphillips.github.io/blob/master/LICENSE.md)

