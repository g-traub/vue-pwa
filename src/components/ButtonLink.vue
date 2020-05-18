<script>
const variants = {
  default: {
    backgroundColor: '#333333'
  },
  primary: {
    backgroundColor: '#36F0A2'
  }
}

export default {
  name: 'ButtonLink',
  functional: true,
  props: {
    variant: {
      type: String,
      default: 'default',
      validator(variant) {
        return ['default', 'primary'].includes(variant)
      }
    }
  },
  render(createElement, { children, data, props }) {
    data.class = data.class ? data.class + 'button-link' : 'button-link'
    data.style = variants[props.variant]

    return createElement('router-link', data, children)
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';

.button-link {
  display: inline-block;
  padding: 1rem 2rem;
  color: $white;
  text-transform: uppercase;
  border-radius: 3px;
}
</style>
