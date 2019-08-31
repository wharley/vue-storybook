<template>
  <div class="summary-card">
    <WidgetInfo
      class="summary-info"
      title="Invoices being processed"
      :number="89"
    />
    <WidgetInfo
      class="summary-info"
      title="Invoices processed"
      :number="100"
    />
  </div>
</template>

<script>
import WidgetInfo from '@/styleguide/WidgetInfo.vue'

export default {
  name: 'Maintenance',
  components: { WidgetInfo }
}
</script>

<style lang="scss" scoped>
@import "../assets/fonts/antonio";
.summary-card {
  display: flex;
  line-height: 2rem;
}
</style>

<style lang="scss">
.summary-info {
  .widget-stats-title {
    font-size: 12px;
    font-weight: 500;
    font-family: "Antonio Bold", Helvetica, Arial, Verdana, Tahoma, sans-serif;
    letter-spacing: 0.75px;
    color: #A6A8AB;
  }

  .widget-stats-number {
    font-family: "Antonio Light", Helvetica, Arial, Verdana, Tahoma, sans-serif;
  }
}
</style>


