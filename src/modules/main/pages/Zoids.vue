<template>
  <div>
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
    computed: {
      ...mapState('toy', {
          toys: state => state.toys,
        })
    },
    mounted() {
      this.$store.dispatch('toy/getToys');
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
