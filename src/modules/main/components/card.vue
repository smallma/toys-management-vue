<template>
  <div>
    <a-card hoverable style="width: 300px">
      {{cardData}}
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        slot="cover"
      />
      <template class="ant-card-actions" slot="actions">
        <a-icon type="edit" />
      </template>
        <div class="toy-name">{{cardData.name}}</div>
        <div class="buy-price">{{$t('message.toys.buyPrice')}} {{cardData.buyPrice}}</div>
        <div class="current-price">{{$t('message.toys.currentPrice')}} {{cardData.currentPrice}}</div>
        <div class="buy-Date">{{$t('message.toys.buyDate')}} {{cardData.buyDate}}</div>
        <div class="update-Date">{{$t('message.toys.updateDate')}} {{cardData.buyDate}}</div>
    </a-card>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Card } from 'ant-design-vue';
  import 'ant-design-vue/lib/card/style/css';

  Vue.use(Card);

  export default {
    name: 'card',
    props: ['cardData']
  }
</script>

<style lang="scss" scoped>

</style>
