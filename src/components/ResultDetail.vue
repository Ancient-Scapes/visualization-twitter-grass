<template>
  <div class="result-detail">
    <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      {{ viewUserName }}
    </vs-row>

    <vs-row vs-type="flex" vs-justify="left" vs-align="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="left" vs-align="center" vs-w="6" vs-offset="0.4">
        {{ viewTotalTweetCount }}
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'ResultDetail',
  computed: {
    viewTotalTweetCount: function () {
      if (this.totalTweetCount === 0) return;
      return `${this.totalTweetCount} Tweets in the last year`;
    },
    viewUserName: function () {
      if (this.userName === '') return;
      return `${this.userName} さんのcontribution`;
    },
  },
  props: {
    userName: String,
    totalTweetCount: Number,
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.heatmap {
  margin: 0 3% 0 3%;
}
</style>
