# Le blog personel de Jérémie Litzler

J'ai migré sur Hugo le 28/08/2023. Voir [ce dépôt](https://github.com/JeremieLitzler/jeremielitzler.fr-with-hugo-theme-stack) pour la suite de l'aventure.

[![Netlify Status](https://api.netlify.com/api/v1/badges/e2a9c00d-2bfe-402d-bb51-51ae4b0d2402/deploy-status)](https://app.netlify.com/sites/jeremiel-blog-fr/deploys)

## Pré-requis

- [Git bash](https://git-scm.com/downloads)
- [NodeJS 18.5.0](https://nodejs.org/en/blog/release/v18.5.0/)
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
