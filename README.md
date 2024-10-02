# Jory's portfolio and resume (in easily-digestible, abbreviated form)

## Quickstart

Note: You will need [nodejs](https://nodejs.org/en/) to build and use this app as configured.

#### Clone the repo

```bash
git clone https://github.com/joryphillips/joryphillips.github.io.git
```

#### To spin up a dev server with hot module reloading:

```bash
npm run dev
```

#### To make a new build and start a local server running bundled, minified code:

```bash
npm run build
```

and then

```bash
npm run preview
```

#### To deploy to Github Pages:

```bash
npm run build
```

Then make a commit and push to `main` on remote.

## The Stack

### Dependencies

👻 [Haunted](https://hauntedhooks.netlify.app) -> React-like hooks and syntax for modern web components

🔥 [lit-html](https://lit.dev/docs/libraries/standalone-templates/) -> template rendering

☎️ [pwa-helpers](https://github.com/Polymer/pwa-helpers) -> simple routing

### How the build works: highlights

**Vite** is the main tool that puts everything together. It provides a dev server, and handles bundling and code splitting.

Please feel free to fork this repo and repurpose it to your needs!

[ISC License](https://github.com/joryphillips/joryphillips.github.io/blob/master/LICENSE.md)
