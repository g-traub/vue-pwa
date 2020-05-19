<template lang="pug">
  .article(v-if="article")
    aside.article__metadata
      .article__back
        img.arrow(src="@/assets/icons/arrow-right-line.svg")
        router-link(:to="{name: 'ArticlesList'}") RETOUR AUX ARTICLES
      .article__metadata__author {{ article.author }}
      .article__metadata__date {{ article.publish_date | formatDate }}
      .article__metadata__share
        .share__title Share this article
        ul.share__buttons
          img.share__button__facebook(src="@/assets/icons/facebook-circle.svg") 
          img.share__button__twitter(src="@/assets/icons/twitter-circle.svg") 
          img.share__button__default(src="@/assets/icons/share-circle.svg") 
    
    article.article__content
      h1.content__title {{article.title}}
      ul.content__hashtags
        li(v-for="tag of article.tags" :key="tag") {{ `#${tag}` }}
    
      template(v-if="article.contentParts")
        template(v-for="block of article.contentParts")
          p.content__paragraph(v-if="block.type === 'txt'" v-html="block.textContent")
          figure.content__figure(v-if="block.type === 'img'")
            img.content__image(:src="block.imgSrc" :alt="block.imgDescription")
            figcaption.content__figcaption {{ block.imgDescription }}
      
      //- Generating article text here (if it's a dummy article) because we have a "complex" array of objects as the article's content
      //- ... (to handle the real article's text and images).
      p.content__paragraph(v-else v-html="loremIpsum({count: 6, format: 'html', units: 'paragraphs'})")
</template>

<script>
import { getArticle } from '@/service/articles'
import { formatDate } from '@/utils/articleDate'
import { loremIpsum } from 'lorem-ipsum'

export default {
  name: 'Article',
  filters: {
    formatDate
  },
  data() {
    return {
      article: null
    }
  },
  created() {
    getArticle(this.$route.params.id).then(article => {
      this.article = article
    })
  },
  methods: {
    loremIpsum
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';

.article {
  margin: 0 auto 5rem auto;
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

.share__buttons > img {
  margin: 0.5rem 0.5rem 0.5rem 0;
  cursor: pointer;
}

.article__back {
  &:hover .arrow {
    transform: translateX(-4px) rotate(180deg);
  }
  .arrow {
    transform: rotate(180deg);
    margin-right: 0.25rem;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
  }
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
