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
      today: this._moment(new Date()).format('YYYY-MM-DD'),
    };
  },
  methods: {
    drawingCalendar: function(){
      const cal = [];
      const startDate = '2017-05-01';
      const endDate = new Date();

      let start = moment(startDate);
      const end = moment(endDate);

      while(start.unix() <= end.unix()) {
        const obj = {
          date: String(y) + '-' + String(m) + '-' + String(d),
          count: Math.floor(Math.random(10) * Math.floor(10)),
        };
        cal.push(obj);
        start.add(1, 'days');
      }
      this.calendar = cal;
    },
    getEndDay: function(year, month) {
      const date = String(year) + '-' + String(month);
      return this._moment(date).endOf('month').get('date');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
