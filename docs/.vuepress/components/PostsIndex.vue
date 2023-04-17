<template>
  <!--<section class="posts">
    <article class="post" v-for="article in articles">
      <a v-bind:href="article.path"
        ><h2>{{ article.title }}</h2>
        <div v-if="article.frontmatter.heroImage" class="image-cropped-wrapper">
          <img
            :src="article.frontmatter.heroImage"
            :alt="article.frontmatter.heroAlt"
            :title="article.frontmatter.heroAlt"
          />
        </div>
        <p>{{ article.frontmatter.description }}</p>
      </a>
      <div v-if="article.frontmatter.meta !== undefined" class="keywords">
        <span
          class="keyword"
          v-for="key in article.frontmatter.meta.keywords"
          >{{ key }}</span
        >
      </div>-->
  <!-- <hr /> -->
  <!-- </article> -->
  <!-- </section>-->
</template>
<script>
// import pages from '@temp/pages.js';
// import { getIndexStartWith } from '../helpers/MarkdownFilesIndexBuilder.js';

// export default {
//   props: {
//     startPath: {
//       type: String,
//       required: true,
//     },
//     showDrafts: {
//       type: Boolean,
//     },
//   },
//   computed: {
//     articles() {
//       // console.log("all pages", pages);
//       const filteredPages = getIndexStartWith(this.startPath, pages)
//         .filter((x) => {
//           //console.log(`${x.slug} => isIndexPage=${x.frontmatter.isIndexPage}`);
//           console.log(`${x.slug} => isDraft=${x.frontmatter.isDraft}`);
//           if (
//             (this.showDrafts && !x.frontmatter.isIndexPage) || //show drafts only
//             (!x.frontmatter.isIndexPage &&
//               (!x.frontmatter.isDraft || x.frontmatter.isDraft === undefined)) //or not...
//           )
//             return x;
//         })
//         .sort(
//           (a, b) =>
//             new Date(a.frontmatter.date) - new Date(b.frontmatter.date)
//               ? -1
//               : 1, //order from newest to oldest
//           //new Date(a.frontmatter.date) - new Date(b.frontmatter.date) ? -1 : 1, //order from oldest to newest
//         );
//       // console.log("Filtered:", filteredPages);
//       return filteredPages;
//     },
//   },
// };
</script>
<style>
.keywords {
  margin-top: 10px;
}
.keyword {
  padding: 5px;
  border-radius: 7px;
  font-size: small;
  background: var(--c-brand);
  margin-right: 5px;
  color: white;
  font-weight: 500;
}
</style>
