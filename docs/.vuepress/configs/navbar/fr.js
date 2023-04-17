import { navbar } from 'vuepress-theme-hope';

export const frNavBarConfig = navbar([
  '/',
  '/page/a-propos/',
  {
    text: 'Lire',
    children: [
      {
        text: 'Tous les articles',
        link: '/article/',
      },
      {
        text: 'Par catégorie',
        link: '/category/jardin',
      },
      {
        text: 'Par tag',
        link: '/tag/photovoltaique/',
      },
    ],
  },
  { text: 'Soutenez-moi', link: '/page/soutenez-moi/' },
  { text: 'Contact', link: '/page/contactez-moi/' },
]);
