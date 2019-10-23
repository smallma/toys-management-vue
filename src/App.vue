<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<script>
import router from './routers/index'
import store from './store';


export default {
  name: 'App',
  store,
  router
}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;

    -webkit-tap-highlight-color:transparent;
    background-attachment: scroll !important;

    ::selection {
      background: transparent;
    }
  }

  * {
    font-family: Arial, Helvetica,sans-serif;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    cursor: pointer;
    outline: none;
  }

  input.middle:focus {
    outline-width: 0;
  }
</style>
