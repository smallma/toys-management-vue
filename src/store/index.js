import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import toy from './toy';

export default new Vuex.Store({
  modules: {
    toy,
  }
});
