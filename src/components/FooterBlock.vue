<template lang="pug">
  footer.footer
    NavBar
    div.footer__bottom
      h2.footer__subtitle Vanessa, blogueuse voyage et botanique
      fieldset.newsletter
        label.newsletter__label Abonne toi à la newsletter !
        input.newsletter__input(placeholder="daenaerys.t@gmail.com")
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'Footer',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';

.footer {
  color: $white;
  background-color: $black;
  padding: 44px 0;

  &__subtitle {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    max-width: 230px;
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    padding: 0 calc(5% + 1rem);
    margin-top: 44px;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
}

.nav {
  width: 100%;

  footer & {
    background: transparent;
  }
}

.newsletter {
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  margin-top: 44px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  &__label {
    text-transform: uppercase;
    font-size: 18px;
    margin-bottom: 8px;

    @media (min-width: 768px) {
      margin-top: 0;
      text-align: right;
    }
  }

  &__input {
    padding: 12px 24px;
    width: 230px;
    border-radius: 3px;
    border: none;
    outline: none;
  }
}
</style>
