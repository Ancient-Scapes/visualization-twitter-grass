<template>
  <div class="home">
    <UploadCsv v-on:success-upload="drawingCalendar"/>
    <Heatmap :contribution="contribution" ref="heatmap"/>
    <Share/>
    <Footer/>
  </div>
</template>

<script>
import Heatmap from '@/components/Heatmap.vue';
import UploadCsv from '@/components/UploadCsv.vue';
import Share from '@/components/Share.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Heatmap, UploadCsv, Share, Footer,
  },
  data() {
    return {
      contribution: [],
    };
  },
  methods: {
    drawingCalendar: function (contribution) {
      this.contribution = contribution;
    },
  },
};
</script>