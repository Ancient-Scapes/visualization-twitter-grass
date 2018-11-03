<template>
  <div class="heatmap">
    <calendar-heatmap :values="contribution" :endDate="today" :tooltip-unit="tooltipUnit"
                      class="calendar-heatmap"/>
  </div>
</template>

<script>
import { CalendarHeatmap } from 'vue-calendar-heatmap';
import 'vue-calendar-heatmap/dist/vue-calendar-heatmap.css';

export default {
  name: 'Heatmap',
  props: {
    contribution: Array,
    tooltipUnit: String,
  },
  components: {
    CalendarHeatmap,
  },
  data() {
    return {
      today: this.$moment(new Date()).format('YYYY-MM-DD'),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.heatmap {
  margin: 0 3% 3% 3%;
  border: 1px solid #e1e4e8;
  padding: 20px;
}

// すまほ
@media screen and (max-width: 414px) {
  .heatmap {
    overflow: scroll;
  }

  .calendar-heatmap {
    width: 200%;
  }
}
</style>
