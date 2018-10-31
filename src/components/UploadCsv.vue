<template>
  <div class="upload-csv">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4" vs-offset="4" class="caption">
      <p class="caption">Twilogから取得した、「UTF-8」のCSVをアップロードしてください。</p>
    </vs-col>

    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4" vs-offset="4">
      <input type="file" accept=".csv" class="input-csv" v-on:change.prevent="parseCsv">
    </vs-col>
  </div>
</template>

<script>
import parser from 'csv-parser';

export default {
  name: 'UploadCsv',
  data() {
    return {
      countTweet: [],
      contribution: [],
    }
  },
  methods: {
    parseCsv: function(e) {
      const files = e.target.files || e.dataTransfer.files;
      const reader = new FileReader;
      reader.onload = e => data.write(e.target.result);
      reader.onloadend = () => {
        this.createContribution();
        this.$emit('success-upload', this.contribution);
      };
      const data = parser();
      data.on('data', this.count);
      reader.readAsText(files[0], 'UTF-8');
    },
    count: function(data) {
      const ymdText = '20' + data[Object.keys(data)[1]].substring(0,6);
      this.countTweet[ymdText] = this.countTweet[ymdText] ? this.countTweet[ymdText] += 1 : 1;
    },
    createContribution: function() {
      Object.keys(this.countTweet).forEach(function(ymd){
        const y = ymd.substring(0,4);
        const m = ymd.substring(4,6);
        const d = ymd.substring(6,8);
        const contributionObj = {
          date: y + '-' + m + '-' + d,
          count: this._data.countTweet[ymd],
        };
        this._data.contribution.push(contributionObj);
      }, this);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.caption {
  margin-bottom: 1%;
}
.input-csv {
  margin-bottom: 5%;
}
</style>
