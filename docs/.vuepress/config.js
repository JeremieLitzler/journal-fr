import { defineUserConfig } from '@vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';

import theme from './theme';
import { frHeadConfig } from './configs/head';

export default defineUserConfig({
  lang: 'fr-FR',
  locales: {
    '/': frHeadConfig,
  },

  theme,
  shouldPrefetch: false,
  bundler: viteBundler(),
  plugins: [],
  onPrepared: async (app) => {
    // const searchIndex = SearchIndexBuilder.BuildIndex(pagesData);
    //await app.writeTemp(
    //  'searchIndex.js',
    //  `export default ${JSON.stringify(searchIndex)}`,
    //);
  },
});
