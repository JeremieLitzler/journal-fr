# Development and debugging of the Search module

## Why this sub folder

According to [this discussion on GitHub](https://github.com/vuepress-theme-hope/vuepress-theme-hope/discussions/2944), we can't debug.

So the trick is to build the `pages.js` file with the entire site's content and take it in this folder to do the development.

Here, you can simply launch a `JavaScript Debug Terminal` and set breakpoints where you want.

## How to use it

### Prerequisites

- Same as the documentation site, in particular NodeJS
- Good morden vanilla JavaScript skills...

### How this works

- Run `npm run docs:build` in the root folder to generate `docs\.vuepress\.temp\pages.js`
- Copy the file to the subfolder, if you need a current file
- Open a `JavaScript Debug Terminal` in the Terminal
  - Open the terminal `CTRL + ù`
  - Click the `+` and select `JavaScript Debug Terminal`
- Run `node index.js` and set the breakpoints where you need

### Once you are done...

- Compare `.module-search-dev/SearchIndexBuilder.js` to `docs/.vuepress/helpers/SearchIndexBuilder.js`. **_Warning : _** This module in the VuePress app is slightly different (ES Module) whereas it is a CommonJS Module in the developpement area.

You will need to convert it before just copying the new version into the production file.
