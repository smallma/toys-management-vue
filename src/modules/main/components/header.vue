<template>
  <div>
    <div class="header">
      <figure id="kv_banner"></figure>
      <div class="banner_text"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'headers',
    created () {

      // setTimeout(() => {
        // this.$i18n.locale = 'en';
      // }, 3000);
    }
  }
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  overflow: hidden;
  top: 0;
  width: 100%;
  height: 120px;
  background-color: #000;
}

#kv_banner {
  position: relative;
  top: 0;
  margin: 0;
  padding-bottom: 52.5%;
  width: 100%;
  height: 0;
}

.banner_text {
  position: absolute;
  text-align: center;
  top: 50%;
  margin-top: 37px;

  width: 100%;
  font-size: 72px;
  font-size: 0;

  font-weight: bold;
  color: #fff6da;
  letter-spacing: 7px;
  transform: translateY(-50%);
}

@media all and (min-width: 1920px) {
  .header {
    height: 620px;
  }

  #kv_banner {
    margin: 0 auto;
    padding-bottom: 0;
    width: 2400px;
    height: 1260px;
  }
}
</style>
