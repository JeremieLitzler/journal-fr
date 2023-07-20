const version = '1.0.672';
const publishDate = new Date(Date.now());
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
const publishDateFormatted = new Intl.DateTimeFormat('fr-FR', {
  dateStyle: 'full',
  timeStyle: 'long',
  timeZone: 'Europe/Paris',
}).format(publishDate);

//https://v2.vuepress.vuejs.org/reference/default-theme/extending.html

import { hopeTheme } from 'vuepress-theme-hope';

import { enNavBarConfig, frNavBarConfig } from './configs/navbar';

export default hopeTheme({
  //path.resolve(__dirname, './theme'),
  hostname: 'https://jeremielitzler.fr/',
  author: {
    name: 'Jérémie Litzler',
    url: 'https://jeremielitzler.fr/',
  },
  repo: 'JeremieLitzler/journal-fr',
  docsRepo: 'https://github.com/JeremieLitzler/journal-fr',
  docsBranch: 'main',
  docsDir: 'docs',
  editLinkPattern: ':repo/edit/:branch/:path',
  editLink: false,
  logo: '/icons/favicon-32x32.png',
  logoDark: '/icons/dark-favicon-32x32.png',
  locales: {
    '/': {
      navbar: frNavBarConfig,
      sidebar: false,
      headerDepth: 3,
    },
    '/en/': {
      navbar: enNavBarConfig,
      sidebar: false,
      headerDepth: 3,
    },
  },
  displayFooter: true,
  footer: `License GPLv3 | <a href="https://jeremielitzler.fr/page/mentions-legales/" title="Lire les mentions légales">Mentions légales</a> | v${version} publiée le ${publishDateFormatted}`,
  plugins: {
    blog: true,
    comment: {
      provider: 'Giscus',
      repo: 'JeremieLitzler/journal-fr',
      repoId: 'R_kgDOJX_a0w',
      category: 'General',
      categoryId: 'DIC_kwDOJX_a084CWUe3',
      mapping: 'title',
    },
    mdEnhance: {
      linksCheck: 'always',
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/align.html
      align: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/attrs.html
      attrs: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/chart.html
      //chart: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/container.html
      container: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/echarts.html
      echarts: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/footnote.html
      //See also https://echarts.apache.org/en/index.html
      footnote: true,
      //use the figure, figureCaption to wrap an image
      figure: true,
      //load image lazily with native method
      imgLazyload: true,
      //Syntax: ==this text is marked==
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/mark.html
      mark: true,
      //Supports RevealJS
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/presentation.html
      //presentation: true,
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/stylize.html
      //I'm not sure I need it for now
      //stylize: []
      //See https://vuepress-theme-hope.github.io/v2/guide/markdown/tabs.html
      tabs: true,
    },
    pwa: {
      cacheHTML: true,
      //caching pictures is quite heavy...
      //cachePic: true
    },
  },
});
