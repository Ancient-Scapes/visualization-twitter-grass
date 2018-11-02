<template>
  <div class="heatmap">
    <calendar-heatmap :values="contribution" :endDate="today" tooltip-unit="tweets"/>
  </div>
</template>

<script>
import { CalendarHeatmap } from 'vue-calendar-heatmap';
import 'vue-calendar-heatmap/dist/vue-calendar-heatmap.css';
export default {
  name: 'Heatmap',
  props: {
    contribution: Array,
  },
  components: {
    CalendarHeatmap,
  },
  data() {
    return {
      today: this.moment(new Date()).format('YYYY-MM-DD'),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
