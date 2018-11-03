<template>
  <div class="home">
    <SiteTitle/>
    <UploadCsv v-on:success-upload="drawingCalendar"/>
    <!-- <Conditions ref="condtions"/> -->
    <ResultDetail :userName="userName" :totalTweetCount="totalTweetCount"/>
    <Heatmap :contribution="contribution"/>
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
    };
  },
  methods: {
    drawingCalendar: function (emitObj) {
      this.contribution = emitObj.contribution;
      this.totalTweetCount = emitObj.totalTweetCount;
      this.userName = emitObj.userName;

      window.scrollTo(59, document.body.scrollLeft);

      // 処理終了時に畫面に通知を出す
      this.$vs.notify({
        title: 'Complete!',
        text: '描画が完了しました！',
        color: 'primary',
        position: 'top-right',
        icon: 'check',
      });
    },
  },
};
</script>
