import { defineUserConfig } from '@vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';

import theme from './theme';
import { enHeadConfig, frHeadConfig } from './configs/head';

export default defineUserConfig({
  lang: 'fr-FR',
  locales: {
    '/': frHeadConfig,
    '/en/': enHeadConfig,
  },

  theme,
  shouldPrefetch: false,
  bundler: viteBundler(),
  plugins: [],
});
