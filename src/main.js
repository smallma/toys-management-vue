// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMeta from 'vue-meta'
import i18n from './locale/i18n.js'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueMeta)

/* eslint-disable no-new */



// import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)

console.log('process.env', process.env);

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()


new Vue({
  el: '#app',
  i18n,
  components: { App },
  template: '<App/>'
})
