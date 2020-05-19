<template lang="pug">
  div.siteHero
    div.siteHero__textContent
      h1.siteHero__title 
        span.siteHero__title_offset Stranger 
        | Plants
  
      p.siteHero__description Le blog des bizzareries végétales
</template>

<script>

export default {
  name: 'Hero',
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';

.siteHero {
  color: $white;
  background-image: url('/img/banner.png');
  background-position: center;
  background-size: cover;
  padding: 128px 0;
  margin-bottom: 64px;
  text-align: center;
}

.siteHero__title {
  line-height: .95;
  font-family: 'Abril Fatface';
  font-size: 4rem
}

.siteHero__title_offset {
  display: block;
  transform: translateX(-2.95rem);
}

.siteHero__description {
  font-family: 'Oswald';
  font-size: 2rem;
  font-weight: 300;
  margin-top: 8px;
}

</style>
