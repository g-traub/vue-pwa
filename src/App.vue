<template lang="pug">
  div#app
    header
      nav-bar
      hero
    main
      router-view
    //- @TODO: add footer
</template>

<script>
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'

export default {
  name: 'App',
  components: {
    NavBar,
    Hero
  }
}
</script>

<style lang="scss">
// Reset css
@import './styles/reset.css';
// Fonts
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Josefin+Sans:wght@300;400&family=Oswald:wght@300;400;500&display=swap');

html,
body {
  font-family: 'Oswald', sans-serif;
}
</style>
