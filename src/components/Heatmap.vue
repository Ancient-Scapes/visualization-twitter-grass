<template>
  <div class="heatmap">
    <calendar-heatmap :values="contribution" :endDate="today" :tooltip-unit="tooltipUnit"
                      class="calendar-heatmap"/>
    <vs-button color="primary" type="border" icon="save" class="button-download"
               @click="downloadHeatmap" >ダウンロード</vs-button>
  </div>
</template>

<script>
import { CalendarHeatmap } from 'vue-calendar-heatmap';
import 'vue-calendar-heatmap/dist/vue-calendar-heatmap.css';
import canvg from 'canvg';

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
  methods: {
    downloadHeatmap: function () {
      const heatmap = document.getElementsByClassName('calendar-heatmap')[0];
      // ヒートマップが描画されているsvgを画像に変換しダウンロード
      this.convertSvgToImg(heatmap, this.downloadImg.bind(this));
    },
    // svgを画像に変換
    convertSvgToImg: function (svg, callback) {
      // canvasを動的に作成
      const canvas = document.createElement('canvas');
      canvas.width = svg.width.baseVal.value;
      canvas.height = svg.height.baseVal.value;

      // svgをcanvasに描画
      const data = new XMLSerializer().serializeToString(svg);
      canvg(canvas, data);
      callback(canvas);
    },
    // 画像ダウンロードリンクを作成
    generateLink: function (fileName, img) {
      const link = document.createElement('a');
      link.download = fileName;
      link.href = img;
      return link;
    },
    downloadImg: function (canvas) {
      const img = canvas.toDataURL('image/png');
      this.generateLink('twithub-result.png', img).click();
    },
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

#canvas-heatmap {
  font-size: 9px;
  width: 917px;
  height: 157px;
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
