<template>
  <div>
    <div class="zone-loading">
      <a-spin v-if="isLoading" size="large" />
    </div>

    <div class="container_list">
      <div v-for="i in toys">
        {{i}}
        <Card :cardData=i></Card>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from '../components/card';
  import { mapState } from 'vuex';
  import 'ant-design-vue/dist/antd.css';

  export default {
    name: 'zoids',
    components: {
      Card,
    },
    data() {
      return {
        isLoading: true
      }
    },
    computed: {
      ...mapState('toy', {
          toys: state => state.toys,
        })
    },
    mounted() {
      const tagName = this.$route.params.id;
      console.log('tagName: ', tagName);
      this.$store.dispatch('toy/getToys', tagName);
    },
    beforeRouteUpdate (to, from, next) {
      this.$store.dispatch('toy/getToys', to.params.id);
    },
    watch: {
      qrcode() {
        this.getCardInfo()
      },
      toys() {
        console.log('this.toys: ', this.toys);
        if (this.toys.length) {
          this.isLoading = false;
        } else {
          this.isLoading = true;
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .container_list {
    position: relative;
    text-align: center;
    margin: 40px 10px;

    > div {
      position: relative;
      display: inline-block;
      vertical-align: top;
      margin: 0 10px 20px;
    }
  }


</style>
