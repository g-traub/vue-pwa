<template lang="pug">
div
  section.home__articles
    .articles__content
      h2.articles__title LES DERNIERS ARTICLES
      .articles__cards
        article-card(v-for="article of articles" :article="article" :key="article.id")
      .text-center
        button-link.articles__button(:to="{name: 'ArticlesList'}" variant="primary") VOIR D'AUTRES ARTICLES
  
  section.home__insta
    h2.insta__title VIENS DÉCOUVRIR MES DERNIERS POSTS INSTAGRAM !
    .insta__images
      img.insta__image(src="@/assets/img/insta0.png")
      img.insta__image(src="@/assets/img/insta1.png")
      img.insta__image(src="@/assets/img/insta2.png")
      img.insta__image(src="@/assets/img/insta3.png")
      img.insta__image(src="@/assets/img/insta4.png")

  section.home__about
    .about__content
      img.about__image(src="@/assets/img/Portrait.png")
      .about__card
        img.about__quotes(src="@/assets/icons/quotation-marks.svg")
        p.about__message Salut ! Moi c’est 
          strong Vanessa
          |, passionnée depuis toute petite par les plantes et les voyages, je vous partage ici mes découvertes végétales les plus loufoques !

</template>

<script>
import { getArticles } from '@/service/articles'

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
  created() {
    getArticles(3).then(articles => {
      this.articles = articles
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';

.articles__title,
.insta__title {
  font-weight: 500;
  font-size: 2.1rem;
}
.articles__content {
  padding: 4rem calc(5% + 1rem);
}
.articles__cards {
  margin: 3rem auto 0 auto;
  display: flex;
  justify-content: space-evenly;
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
.home__insta {
  background-color: $primaryGreen;
  padding-bottom: 3rem;
}
.insta__title {
  padding: 3rem calc(5% + 1rem);
  color: $white;
}
.insta__images {
  display: flex;
  justify-content: space-between;
}
.insta__image {
  margin-top: 1.5rem;
  transition: all cubic-bezier(0.23, 1, 0.32, 1) 0.3s;
  box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    transform: scale(1.015);
    box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.1);
  }
}
.home__about {
  background: url('../assets/icons/leaf.svg');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: contain;
}
.about__content {
  padding: 5rem calc(5% + 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.about__image {
  max-width: 400px;
  flex: 1 1 250px;
  display: inline-block;
}
.about__card {
  flex: 1;
  max-width: 750px;
  min-width: 340px;
  padding: 5rem 3rem 3rem 5rem;
  background-color: $white;
  box-shadow: 4px 8px 32px rgba(0, 0, 0, 0.08);
  border-radius: 3px;
  margin: -3rem 1rem 1rem -3rem;
  position: relative;
}
.about__message {
  font-family: Josefin Sans;
  font-style: italic;
  font-weight: 300;
  font-size: 32px;
  line-height: 1.3;
  strong {
    font-weight: 600;
  }
}
.about__quotes {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}
</style>
