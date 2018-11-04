<template>
  <div class="conditions">
    <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <!-- モード選択 -->
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
        <vs-select class="select-mode" label="モード" v-model="mode" v-on:change="changeMode">
          <vs-select-item :key="item.value"  :value="item.value"
                          :text="item.text" v-for="item in modeItems"/>
        </vs-select>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'Conditions',
  data() {
    return {
      modeItems: [
        { text: '通常モード', value: 'normal' },
        { text: '草モード', value: 'grass' },
      ],
      mode: 'normal',
    };
  },
  methods: {
    changeMode: function () {
      this.$emit('change-mode', this.mode);
    },
  },
};
</script>

<style scoped lang="scss">
.conditions{
  margin-bottom: 5%;
}
</style>
