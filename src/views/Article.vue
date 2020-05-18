<template lang="pug">
  div Article
</template>

<script>
import axios from 'axios'

// Not actually an API url, but the path to our local json file
const API_URL = 'data/articles.json'

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
  async created() {
    axios(API_URL)
      .then(res => {
        this.articles = res.data
      })
      .catch(err => console.error(err))
  }
}
</script>
