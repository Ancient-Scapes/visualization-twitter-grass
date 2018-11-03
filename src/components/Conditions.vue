<template>
  <div class="conditions">
    <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <!-- Twitter IDの入力 -->
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
        <vs-input label="Twitter ID" placeholder="_Ancient_Scapes" v-model="twitterId"/>
      </vs-col>

      <!-- モード選択 -->
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
        <vs-select class="select-mode" label="モード" v-model="mode">
          <vs-select-item :key="item.value"  :value="item.value"
                          :text="item.text" v-for="item in modeItems"/>
        </vs-select>
      </vs-col>

      <!-- 過去ツイートの取得ボタン -->
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
        <vs-button color="primary" type="filled" icon="search" @click="emitSearch">見てみる！</vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'Conditions',
  data() {
    return {
      twitterId: '_Ancient_Scapes',
      mode: 'normal',
      modeItems: [
        { text: '通常モード', value: 'normal' },
        { text: '草モード', value: 'grass' },
      ],
    };
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
.conditions{
  margin-bottom: 5%;
}

.select-mode {

}
</style>
