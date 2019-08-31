<template>
  <button :class="['button', `btn-${btnType}` ]" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    btnType: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/fonts/antonio";
@import url('../assets/components/button.scss');
</style>
