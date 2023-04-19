import { navbar } from 'vuepress-theme-hope';

export const enNavBarConfig = navbar([
  { text: 'Home', link: 'https://iamjeremie.me/' },
  { text: 'About', link: 'https://iamjeremie.me/page/about/' },
  {
    text: 'Read',
    children: [
      {
        text: 'All articles',
        link: 'https://iamjeremie.me/article/',
      },
      {
        text: 'By category',
        link: 'https://iamjeremie.me//category/gardening',
      },
      {
        text: 'By tag',
        link: 'https://iamjeremie.me//tag/compost',
      },
    ],
  },
  { text: 'Sponsor', link: 'https://iamjeremie.me/page/sponsor-me/' },
  { text: 'Contact', link: 'https://iamjeremie.me/page/contact-me/' },
]);
