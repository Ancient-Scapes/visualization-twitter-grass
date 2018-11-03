<template>
  <div class="upload-csv">
    <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="8"
              class="caption">
        <p class="caption"><a class="a-twilog" href="https://twilog.org/settings.rb">Twilog</a>から取得した「UTF-8」のCSVをアップロードしてください。</p>
      </vs-col>
    </vs-row>

    <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="8"
              class="col-input-csv">
        <label for="input-csv">
          <p>.csvファイルを選択</p>
          <input type="file" accept=".csv" id="input-csv" v-on:change.prevent="parseCsv">
        </label>
      </vs-col>
    </vs-row>

  </div>
</template>

<script>
import csvParser from 'csv-parser';

export default {
  name: 'UploadCsv',
  props: {
    mode: String,
  },
  data() {
    return {
      ymdTweetCount: [],
      totalTweetCount: 0,
      userName: '',
    };
  },
  methods: {
    parseCsv: function (e) {
      const csvFile = e.target.files[0];
      const reader = new FileReader();
      this.userName = csvFile.name.substring(0, csvFile.name.length - 10);

      reader.onload = this.writeCsvParser;
      reader.onloadend = this.emitContribution;
      reader.readAsText(csvFile, 'UTF-8');
    },
    emitContribution: function () {
      const emitObj = {
        contribution: this.createContribution(this.ymdTweetCount),
        totalTweetCount: this.totalTweetCount,
        userName: this.userName,
      };
      this.$emit('success-upload', emitObj);
    },
    writeCsvParser: function (e) {
      const parser = csvParser();
      parser.on('data', this.countCsvTweet);
      parser.write(e.target.result);
    },
    countCsvTweet: function (data) {
      const ymdText = `20${data[Object.keys(data)[1]].substring(0, 6)}`;
      const tweet = data[Object.keys(data)[2]];

      if (this.mode === 'grass' && tweet.indexOf('草') === -1) {
        return;
      }

      this.totalTweetCount += 1;

      if (this.ymdTweetCount[ymdText]) {
        this.ymdTweetCount[ymdText] += 1;
      } else {
        this.ymdTweetCount[ymdText] = 1;
      }
    },
    createContribution: function (ymdTweetCount) {
      const contribution = [];

      Object.keys(ymdTweetCount).forEach(function (ymd) {
        const date = this.$moment(ymd);
        const contributionObj = {
          date: date.format('YYYY-MM-DD'),
          count: ymdTweetCount[ymd],
        };
        contribution.push(contributionObj);
      }, this);

      return contribution;
    },
  },
};
</script>

<style scoped lang="scss">
.caption {
  margin-bottom: 1%;
}

label {
  color: white;
  background-color: rgba(var(--primary),1);
  padding: 15px;
  border-radius: 12px;

  p {
    display: flex;
    align-items: center;

    &::before {
      font-family: 'Material Icons';
      content: '\e873';
      margin: 0 5px 0 0;
    }
  }
}

.a-twilog {
  &::after {
    font-family: 'Material Icons';
    content: "link";
    position: relative;
    top: 5px;
  }
}

.col-input-csv {
  margin: 0 0 3% 0;
}

#input-csv {
  margin-bottom: 5%;
  display: none;
}
</style>
