import Vue from 'vue'
import VueI18n from 'vue-i18n'

import TW from 'js-yaml-loader!./tw.yml';
import EN from 'js-yaml-loader!./en.yml';

Vue.use(VueI18n);

const messages = {
  tw: {
    message: TW
  },
  en: {
    message: EN
  }
};

const i18n = new VueI18n({
  locale: 'tw',
  fallbackLocale: 'tw',
  messages,
})

export default i18n;
