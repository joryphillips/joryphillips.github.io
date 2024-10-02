# Jory's portfolio and resume (in easily-digestible, abbreviated form)

## Quickstart

Note: You will need [nodejs](https://nodejs.org/en/) to build and use this app as configured.

#### Clone the repo

```bash
git clone https://github.com/joryphillips/joryphillips.github.io.git
```

#### To spin up a dev server with hot module reloading:

```bash
npm dev
```

#### To make a new build and start a local server running bundled, minified code:

```bash
npm prod
```

## The Stack

### Dependencies

👻 [Haunted](https://hauntedhooks.netlify.app) -> React-like hooks and syntax for modern web components

🔥 [lit-html](https://lit.dev/docs/libraries/standalone-templates/) -> template rendering

☎️ [pwa-helpers](https://github.com/Polymer/pwa-helpers) -> simple routing

### Dev Dependencies

- TypeScript
- [Rollup](https://rollupjs.org/guide/en/)
- [Open WC testing](https://modern-web.dev/guides/test-runner/getting-started/)
- [Open WC devsever](https://modern-web.dev/guides/dev-server/getting-started/)
- [esbuild](https://esbuild.github.io) via open wc for deverver & rollup plugin for build process

See [package.json](https://github.com/joryphillips/joryphillips.github.io/blob/main/package.json) and [rollup.config.js](https://github.com/joryphillips/joryphillips.github.io/blob/main/rollup.config.js) for more specific plugin dependencies and build process.

### How the build works: highlights

**Vite** is the main tool that puts everything together. It provides a dev server, and handles bundling and code splitting.

Please feel free to fork this repo and repurpose it to your needs!

[ISC License](https://github.com/joryphillips/joryphillips.github.io/blob/master/LICENSE.md)
