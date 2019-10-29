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
      title: 'Toys management',
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
  html {
    overflow: hidden;
  }
  .container {
    position: relative;
    font-size: 0;
    min-height: calc(100vh - 97px);
  }

  .contents {
    overflow: scroll;
    width: calc(100vw - 280px);
  }

  .sidenav,
  .contents {
    position: relative;
    display: block;
    float: left;
    height: calc(100vh - 97px);

    overflow: scroll;
  }

  .ant-menu-inline {
    width: 280px;
  }

  .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-color: #616161 !important;
  }

  .ant-menu-inline .ant-menu-item:first-child {
    margin-top: 0 !important;
  }

  .zone-loading {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }
</style>
