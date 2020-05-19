<template lang="pug">
  .articleCard
    img.articleCard__image(:src="article.image")
    
    section.articleCard__description
      header
        time.articleCard__publishedAt(datetime="2020-05-19") {{ article.publish_date | formatDate }}
        h3.articleCard__title {{ article.title }}
        .articleCard__tags
          span.articleCard__tag(v-for="tag of article.tags") {{'#' + tag }}
      
      .articleCard__summary {{ article.abstract }}
      
      router-link.articleCard__link(:to="{name:'Article', params: {id: article.id}}")
        span LIRE L'ARTICLE
        img.link__icon(src="@/assets/icons/arrow-right-line.svg")
    
</template>

<script>
import { formatDate } from '@/utils/articleDate'

export default {
  name: 'ArticleCard',
  filters: {
    formatDate
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';

.articleCard {
  min-width: 250px;
  max-width: 350px;
  width: 30vw;
  margin: 2rem auto;
  padding: 0.75rem;
}
.articleCard__image {
  border-radius: 3px;
  min-height: 210px;
  max-height: 310px;
  height: 25vw;
  object-fit: cover;
  width: 100%;
}
.articleCard__description {
  position: relative;
  width: 90%;
  margin: -3.5rem auto 0 auto;
  background-color: $white;
  border-radius: 3px;
  box-shadow: 4px 8px 16px rgba(0, 0, 0, 0.1);
  padding: 1rem 1.2rem;
}
.articleCard__publishedAt {
  display: inline-block;
  color: $grey;
  font-size: 0.8rem;
}
.articleCard__title {
  font-size: 1.3rem;
  margin: 0.75rem 0 0.5rem 0;
}
.articleCard__tags {
  display: flex;
  flex-wrap: wrap;
}
.articleCard__tag {
  color: $primaryGreen;
  padding-right: 0.5rem;
  font-size: 0.8rem;
}
.articleCard__summary {
  margin: 1rem 0;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 0.8rem;
}
.articleCard__link {
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  &:hover .link__icon {
    transform: translateX(4px);
  }
  .link__icon {
    margin-left: 0.25rem;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
  }
}
</style>
