<template>
  <div class="title">
    <p>Twithub</p>
  </div>
</template>

<script>
export default {
  name: 'siteTitle',
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa');
$fontBorderColor:  #55acee;

.title {
  margin: 0 0 3% 0;

  p {
    font-family: 'Comfortaa', cursive;
    font-size: 80px;
    color: white;
    text-shadow: 2px 2px 1px $fontBorderColor,
                -2px 2px 1px $fontBorderColor,
                 2px -2px 1px $fontBorderColor,
                -2px -2px 1px $fontBorderColor;
  }
}
</style>
