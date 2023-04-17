# Jeremie Litzler's journal blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/412ed131-8d39-49bb-836e-71570e87ad3d/deploy-status)](https://app.netlify.com/sites/journal-of-jeremiel/deploys)

## Prerequisites

- [Git bash](https://git-scm.com/downloads)
- [NodeJS 18.0.0](https://nodejs.org/en/blog/release/v16.13.1/)
- [Visual Studio Code](https://code.visualstudio.com/download)

## Getting started

Using yarn makes the installation **much quicker**.

```sh
npm install --global yarn #(or use the .msi => https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
yarn
```

Then, launch the project:

```sh
npm run docs:dev
```

Or to build it:

```sh
npm run docs:build
```

## VuePress changelogs to upgrade

See [this link](https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md).

1. run `yarn upgrade vuepress-vite@2.0.0-beta.XX`
2. run `rm -R node_modules && rm yarn.lock && yarn install`
3. run `npm run docs:build`
4. run `npm run docs:dev` to see if the site loads and renders well :)

## VuePress theme upgrade

Run:

```sh
yarn upgrade vuepress-theme-hope@2.0.0-beta.XX
```
