<template lang="pug">
div
  section.home__articles
    .articles__content
      h2.articles__title LES DERNIERS ARTICLES
      .articles__cards
        article-card(v-for="article of lastArticles" :article="article" :key="article.id")
      .text-center
        button-link.articles__button(:to="{name: 'ArticlesList'}" variant="primary") VOIR D'AUTRES ARTICLES
  
  section.home__insta
    h2.insta__title VIENS DÉCOUVRIR MES DERNIERS POSTS INSTAGRAM

  section.home__about
    p Salut ! Moi c’est 
      strong Vanessa
      |, passionnée depuis toute petite par les plantes et les voyages, je vous partage ici mes découvertes végétales les plus loufoques !

</template>

<script>
import { getArticles } from '@/service/articles'
import { sortByLatest } from '@/utils/articleDate'

import ArticleCard from '@/components/ArticleCard'
import buttonLink from '@/components/ButtonLink'

export default {
  name: 'Home',
  components: {
    buttonLink,
    ArticleCard
  },
  data() {
    return {
      articles: null
    }
  },
  computed: {
    lastArticles() {
      return this.articles?.slice(0, 3)
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
.articles__title,
.insta__title {
  font-weight: 500;
  font-size: 2.1rem;
}
.articles__content {
  padding: calc(5% + 1rem);
}
.articles__cards {
  margin: 3rem auto 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.articles__button {
  margin-top: 0.5rem;
  margin-bottom: 4rem;
}
.text-center {
  text-align: center;
}
.home__articles {
  background: url('../assets/icons/leaf2.svg');
  background-repeat: no-repeat;
  background-position: top left;
  background-size: contain;
}
</style>
