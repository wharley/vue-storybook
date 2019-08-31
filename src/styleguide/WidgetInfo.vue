<template>
  <div class="widget-wrapper">
    <div class="widget-card">
      <span class="widget-stats-number">
        {{ number || 0 }}
      </span>
      <span class="widget-stats-title">
        {{ title }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WidgetInfo',

  props: ['number', 'title']
}
</script>

<style lang="scss" scoped>
@import "../assets/fonts/antonio";
@import url('../assets/components/widgetInfo.scss');
</style>
