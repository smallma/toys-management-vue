<template>
  <div>
    <a-card hoverable style="width: 300px">
      <div slot="cover" class="card_img">
        <a-carousel effect="fade" autoplay>
          <div v-for="imgSrc in  cardData.upload" :key="imgSrc">
            <img
              alt="example"
              :src=imgSrc
            />
          </div>
        </a-carousel>

      </div>

      <a-row :gutter="24" align="top">
        <a-col :span="24" class="card_row">
          <div class="toy-name">{{cardData.name}}</div>
        </a-col>

        <a-col :span="12" class="card_row row-price">
          <a-statistic :title="$t('message.toys.buyPrice')" :value=cardData.buyPrice style="margin-right: 50px">
          </a-statistic>
        </a-col>

        <a-col :span="12" class="card_row row-price">
          <a-statistic :title="$t('message.toys.currentPrice')":value=cardData.currentPrice style="margin-right: 50px">
          </a-statistic>
        </a-col>

        <a-col :span="24" class="card_row">
          <div class="buy-Date">{{$t('message.toys.buyDate')}}: {{cardData.buyDate}}</div>
        </a-col>

        <a-col :span="24" class="card_row">
          <div class="update-Date">{{$t('message.toys.updateDate')}}: {{cardData.buyDate}}</div>
        </a-col>

        <a-col :span="24" class="card_row row-rate">
          <a-rate :defaultValue=cardData.rate allowHalf />
        </a-col>

         <a-col :span="24" class="card_row row-tag">
          <a-tag v-for="tag in cardData.tags" color="gray" :key="tag">{{ tag }}</a-tag>
        </a-col>
      </a-row>


      <template class="ant-card-actions" slot="actions">
        <a-icon type="edit" />
      </template>
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
    props: ['cardData'],
    data() {
      return {
        currentPrice: 0,
        buyPrice: 0
      }
    },
    mounted() {
      const intPrice = parseInt(this.cardData.currentPrice);
      this.currentPrice = intPrice.format();

      const buyPrice = parseInt(this.cardData.buyPrice);
      this.buyPrice = buyPrice.format();

      console.log('QRCode: ', this.cardData.qrcode);
    },
  }
</script>

<style lang="scss" scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.card_img {
  height: 300px;
  border-bottom: 1px solid #333;
  background-color: #333;

  img {
    width: 100%;
    height: 300px;
  }
}

.card_row {
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }

  &.row-price {
    margin-bottom: 20px;
  }

  &.row-rate {
    margin-bottom: 20px;
  }
}

.ant-card-body {
  padding: 17px;
}

.ant-statistic {
  width: 100%;

  /deep/ .ant-statistic-title {
    margin-bottom: 0px;
  }
}

.toy-name {
  font-size: 23px;
  color: #333;
}

</style>
