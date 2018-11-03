<template>
  <div class="home">
    <SiteTitle/>
    <UploadCsv v-on:success-upload="drawingCalendar" :mode="mode"/>
    <Conditions v-on:change-mode="changeMode"/>
    <ResultDetail :userName="userName" :totalTweetCount="totalTweetCount" :tooltipUnit="tooltipUnit"/>
    <Heatmap :contribution="contribution" :tooltipUnit="tooltipUnit"/>
    <Share/>
    <Footer/>
  </div>
</template>

<script>
import Heatmap from '@/components/Heatmap.vue';
import UploadCsv from '@/components/UploadCsv.vue';
import Share from '@/components/Share.vue';
import Footer from '@/components/Footer.vue';
import Conditions from '@/components/Conditions.vue';
import SiteTitle from '@/components/SiteTitle.vue';
import ResultDetail from '@/components/ResultDetail.vue';

export default {
  name: 'home',
  components: {
    Heatmap, UploadCsv, Share, Footer, Conditions, SiteTitle, ResultDetail,
  },
  data() {
    return {
      contribution: [],
      userName: '',
      totalTweetCount: 0,
      mode: 'normal',
      tooltipUnit: 'tweets',
    };
  },
  methods: {
    drawingCalendar: function (emitObj) {
      this.contribution = emitObj.contribution;
      this.totalTweetCount = emitObj.totalTweetCount;
      this.userName = emitObj.userName;

      // 処理終了時に畫面に通知を出す
      this.$vs.notify({
        title: 'Complete!',
        text: '描画が完了しました！',
        color: 'primary',
        position: 'top-right',
        icon: 'check',
      });
    },
    changeMode: function (mode) {
      this.mode = mode;

      switch (mode) {
        case 'normal':
          this.tooltipUnit = 'tweet';
          break;
        case 'grass':
          this.tooltipUnit = '草';
          break;
        default:
          this.tooltipUnit = 'contribution';
      }
    },
  },
};
</script>
