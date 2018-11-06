<template>
  <div class="home">
    <SiteTitle/>
    <UploadCsv v-on:success-upload="drawingCalendar" :mode="mode"/>
    <Conditions v-on:change-mode="changeMode"/>
    <ResultDetail :userName="userName" :totalTweetCount="totalTweetCount[mode]"
                  :tooltipUnit="tooltipUnit[mode]"/>
    <Heatmap :contribution="contribution[mode]" :tooltipUnit="tooltipUnit[mode]"
             :rangeColor="rangeColor[mode]"/>
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
      contribution: {
        normal: [],
        grass: [],
      },
      userName: '',
      totalTweetCount: {
        normal: 0,
        grass: 0,
      },
      mode: 'normal',
      tooltipUnit: {
        normal: 'tweets',
        grass: '草',
      },
      rangeColor: {
        normal: ['#ebedf0', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e'],
        grass: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
      }
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
        time: 5000,
      });
    },
    changeMode: function (mode) {
      this.mode = mode;
    },
  },
};
</script>
