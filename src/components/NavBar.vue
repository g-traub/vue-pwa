<template lang="pug">
  nav.nav
    h1.nav__title
      router-link(:to="{name: Home}") StrangerPlants
    
    .nav__items
      router-link(
        v-for="item of navItems"
        :to="{name: item.to}"
        exact-active-class="nav__item--active"
      ).nav__item {{ item.label }}
      
      .nav__item À PROPOS
      .nav__item CONTACT
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      navItems: [
        {
          label: 'ACCUEIL',
          to: 'Home'
        },
        {
          label: 'ARTICLES',
          to: 'ArticlesList'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/colors';

.nav {
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.5rem 5%;
}
.nav__title {
  font-weight: 500;
  font-size: 1.3rem;
  padding: 1rem;
}
.nav__items {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.nav__item {
  padding: 0.25rem 1rem;
  cursor: pointer;
  font-size: 0.85rem;
  &.nav__item--active {
    color: $primaryGreen;
  }
}
</style>
