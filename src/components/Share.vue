<template>
  <div class="share">
    <a href="https://twitter.com/share" class="twitter-share-button" data-text="つぶやき頻度を調べてみたよ！" data-hashtags="TwithubJP"></a>
  </div>
</template>

<script>
export default {
  name: 'Share',
  data() {
    return {
      today: this.moment(new Date()).format('YYYY-MM-DD'),
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
