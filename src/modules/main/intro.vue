<template>
  <div>
    <Header/>
    <div class="container">
      <Sidenav class="sidenav" />
      <div class="contents">
        <router-view></router-view>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from './components/header';
  import Sidenav from './components/sidenav';
  import Footer from './components/footer';

  export default {
    name: 'Main',
    metaInfo: {
      title: 'My Example App',
      titleTemplate: '%s - Yay!',
      meta: [
        {
          'content': 'width=device-width, initial-scale=1, viewport-fit=cover'
        },
      ],
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    },
    components: {
      Header,
      Footer,
      Sidenav
    }
  }
</script>

<style lang="scss">
  .container {
    position: relative;
    font-size: 0;
  }

  .contents {
    min-height: calc(100vh - 620px);
  }

  .sidenav,
  .contents {
    position: relative;
    display: block;
    float: left;
  }

  .ant-menu-inline {
    width: 280px;
  }
</style>
