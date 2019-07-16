import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enMess from './en.json'
import viMess from './vi.json'

Vue.use(VueI18n);

const messages = { 
    en: enMess, 
    vi: viMess
};

const i18n = new VueI18n({ 
    locale: 'en',
    fallbackLocale: 'vi',
    messages
});

export default i18n;
