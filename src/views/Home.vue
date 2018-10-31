<template>
  <div class="home">
    <UploadCsv v-on:success-upload="drawing"/>
    <Heatmap :contribution="contribution" ref="heatmap"/>
  </div>
</template>

<script>
import Heatmap from '@/components/Heatmap.vue';
import UploadCsv from '@/components/UploadCsv.vue';


export default {
  name: 'home',
  components: {
    Heatmap, UploadCsv,
  },
  data() {
    return {
      contribution: [],
    }
  },
  methods: {
    drawing: function(contribution){
      this.contribution = contribution;
    },
  }
};
</script>
