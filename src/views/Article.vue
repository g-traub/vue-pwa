<template lang="pug">
  div Article
</template>

<script>
import { getArticles } from '@/service/articles'

export default {
  name: 'Article',
  data() {
    return {
      articles: null
    }
  },
  computed: {
    article() {
      return this.articles.find(article => article.name === this.$route.params.articleName)
    }
  },
  created() {
    getArticles().then(articles => {
      this.articles = articles
    })
  }
}
</script>
