import { navbar } from 'vuepress-theme-hope';

export const frNavBarConfig = navbar([
  '/fr/',
  '/fr/page/a-propos/',
  {
    text: 'Lire',
    children: [
      {
        text: 'Tous les articles',
        link: '/fr/article/',
      },
      {
        text: 'Par catégorie',
        link: '/fr/category/jardin',
      },
      {
        text: 'Par tag',
        link: '/fr/tag/photovoltaique/',
      },
    ],
  },
  { text: 'Soutenez-moi', link: '/fr/page/soutenez-moi/' },
  { text: 'Contact', link: '/fr/page/contactez-moi/' },
]);
