<template lang="pug">
  div.article(v-if="articles")
    aside.article__metadata
      div.article__metadata__author {{ article.author }}
      div.article__metadata__date {{ article.publish_date | formatDate }}
      div.article__metadata__share
        div.share__title Share this article
        ul.share__buttons
          li.share__button__facebook 
          li.share__button__twitter 
          li.share__button__default 
    article.article__content
      h1.content__title {{article.title}}
      ul.content__hashtags
        li(v-for="tag of article.tags" :key="tag") {{ `#${tag}` }}

      template(v-for="block of article.contentParts")
        p.content__paragraph(v-if="block.type === 'txt'" v-html="block.textContent")
        figure.content__figure(v-if="block.type === 'img'")
          img.content__image(:src="block.imgSrc" :alt="block.imgDescription")
          figcaption.content__figcaption {{ block.imgDescription }}
</template>

<script>
import { getArticles } from '@/service/articles'
import { formatDate } from '@/utils/articleDate'

export default {
  name: 'Article',
  filters: {
    formatDate
  },
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

<style lang="scss" scoped>
@import '../styles/colors';

.article {
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1000px;
  display: flex;
  font-family: 'Josefin Sans';
  font-weight: 400;
  font-size: 1.125rem;
}

.article__metadata {
  font-size: 1.25rem;
  font-family: 'Oswald';
  min-width: 30%;
  flex-basis: 30%;
}

.article__metadata__author {
  margin-top: 2.5rem;
}

.article__metadata__date {
  line-height: 200%;
  font-size: 0.875rem;
  margin-bottom: 3.5rem;
  color: $grey;
}

.content__title {
  flex-basis: 70%;
  font-family: 'Oswald';
  font-weight: 500;
  font-size: 3rem;
}

.content__hashtags {
  max-width: 100%;
  font-family: 'Oswald';
  font-weight: normal;
  flex-flow: row wrap;
  font-size: 1.375rem;
  display: flex;
  color: $primaryGreen;
  margin: 0 0 3rem 0;
  text-transform: uppercase;

  li {
    margin-right: 2rem;
    margin-top: 1.5rem;
  }
}

strong {
  font-weight: 900 !important;
}

.content__paragraph {
  max-width: 100%;
  line-height: 150%;
  margin-bottom: 1.5rem;
}

.content__figure {
  max-width: 100%;
  margin-bottom: 2rem;
}

.content__image {
  display: block;
  max-width: 100%;
  margin: 0 auto 1rem auto;
}

.content__figcaption {
  text-align: center;
  font-style: italic;
  font-size: 1rem;
}

@media (max-width: 1000px) {
  .article {
    flex-direction: column;
  }

  .article__metadata {
    margin-bottom: 2rem;
  }

  .article__metadata__date {
    margin-bottom: 1rem;
  }

  .article__metadata__author {
    margin-top: 0;
  }
}
</style>
