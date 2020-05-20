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
  name: 'Hero'
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';

.siteHero {
  position: relative;
  top: 80px;
  color: $white;
  background-image: url('/img/banner.png');
  background-position: center;
  background-size: cover;
  padding: 128px 0;
  margin-bottom: 64px;
  text-align: center;
}

.siteHero__title {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 0.95;
  font-family: 'Abril Fatface';
  font-size: 4rem;
  margin: 0 auto;
}

.siteHero__title_offset {
  display: block;
  margin-right: 1ch;
}

.siteHero__description {
  font-family: 'Oswald';
  font-size: 2rem;
  font-weight: 300;
  margin-top: 8px;
}
</style>
