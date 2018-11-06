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
      ymdTweetCount: {
        normal: [],
        grass: [],
      },
      totalTweetCount: {
        normal: 0,
        grass: 0,
      },
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
      const ymdAndHmd = Object.keys(data)[1];
      const tweet = Object.keys(data)[2];
      const ymdText = `20${data[ymdAndHmd].substring(0, 6)}`;
      const tweetText = data[tweet];

      // 総ツイートのカウント
      this.totalTweetCount.normal += 1;
      // 年月日ごとのツイートのカウント
      this.ymdTweetCount.normal[ymdText] = this.ymdTweetCount.normal[ymdText]
                                         ? this.ymdTweetCount.normal[ymdText] += 1
                                         : 1;
      
      // ツイートに草が生えていない場合カウントしない
      if(tweetText.indexOf === -1) return;
      // 総ツイートのカウント
      if(tweetText.indexOf('草') !== -1) {
        this.totalTweetCount.grass += 1;
        // 年月日ごとのツイートのカウント
        this.ymdTweetCount.grass[ymdText] = this.ymdTweetCount.grass[ymdText]
                                          ? this.ymdTweetCount.grass[ymdText] += 1
                                          : 1;
      }
    },
    createContribution: function (ymdTweetCount) {
      const contribution = {
        normal: [],
        grass: [],
      };
      Object.keys(ymdTweetCount).forEach(function (mode) {
        Object.keys(ymdTweetCount[mode]).forEach(function (ymd) {
          const date = this.$moment(ymd);
          const contributionObj = {
            date: date.format('YYYY-MM-DD'),
            count: ymdTweetCount[mode][ymd],
          };
          contribution[mode].push(contributionObj);
        }, this);
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
