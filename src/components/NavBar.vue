<template lang="pug">
  nav.nav
    .nav__title StrangerPlants
    
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
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 5%;
}
.nav__title {
  font-weight: 500;
  font-size: 1.3rem;
  padding: 0 1rem;
}
.nav__items {
  display: flex;
  align-items: center;
}
.nav__item {
  padding: 0 1rem;
  cursor: pointer;
  font-size: 0.85rem;
  &.nav__item--active {
    color: $primaryGreen;
  }
}
</style>
