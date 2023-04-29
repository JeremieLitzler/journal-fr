const version = '1.0.624';

import { defineUserConfig } from '@vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';

import docsearchPlugin from '@vuepress/plugin-docsearch';

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
  plugins: [
    // docsearchPlugin({
    //   appId: 'OEWJGZ6584',
    //   apiKey: '9da6989deaa25628c61dce09c61710b5',
    //   indexName: 'iamjeremie',
    //   locales: {
    //     '/': {
    //       placeholder: 'Rechercher',
    //       translations: {
    //         button: {
    //           buttonText: 'Rechercher',
    //           buttonAriaLabel: 'Rechercher',
    //         },
    //         modal: {
    //           searchBox: {
    //             resetButtonTitle: 'Effacer',
    //             resetButtonAriaLabel: 'Effacer',
    //             cancelButtonText: 'Annuler',
    //             cancelButtonAriaLabel: 'Annuler',
    //           },
    //           startScreen: {
    //             recentSearchesTitle: "Rechercher l'historique",
    //             noRecentSearchesText: 'Aucun recherche récente',
    //             saveRecentSearchButtonTitle:
    //               'Sauvegarder les recherches récentes',
    //             removeRecentSearchButtonTitle:
    //               'Supprimer les recherches récentes',
    //             favoriteSearchesTitle: 'Mettre en favori',
    //             removeFavoriteSearchButtonTitle: 'Supprimer des favoris',
    //           },
    //           errorScreen: {
    //             titleText: 'Aucun résultat',
    //             helpText: 'Vérifiez peut-être votre connexion Internet.',
    //           },
    //           footer: {
    //             selectText: 'Sélectionner',
    //             navigateText: 'Changer',
    //             closeText: 'Fermer',
    //             searchByText: 'Rechercher par',
    //           },
    //           noResultsScreen: {
    //             noResultsText: 'Aucun résultat trouvé par votre recherche.',
    //             suggestedQueryText: 'Essayez peut-être...',
    //             reportMissingResultsText:
    //               'Pensez-vous que cette recherche devrait retourner des résultats ?',
    //             reportMissingResultsLinkText: 'Rapporter un résultat manquant',
    //           },
    //         },
    //       },
    //     },
    //   },
    // }),
  ],
});
