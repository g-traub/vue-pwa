<template lang="pug">
  div.articlesList
    .articlesList__content
      h2.articles__title ARTICLES
      .articles__cards
        article-card(v-for="article of articles" :article="article" :key="article.id")
</template>

<script>
import { getArticles } from '@/service/articles'
import { sortByLatest } from '@/utils/articleDate'

import ArticleCard from '@/components/ArticleCard'

export default {
  name: 'ArticlesList',
  components: {
    ArticleCard
  },
  data() {
    return {
      articles: null
    }
  },
  created() {
    getArticles().then(articles => {
      this.articles = articles
      sortByLatest(this.articles)
    })
  }
}
</script>

<style lang="scss" scoped>
.articlesList {
  background: url('../assets/icons/leaf2.svg');
  background-repeat: no-repeat;
  background-position: top left;
  background-size: contain;
}
.articlesList__content {
  padding: calc(5% + 1rem);
}
.articles__title {
  font-weight: 500;
  font-size: 2.1rem;
}
.articles__cards {
  margin: 3rem auto 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
