import { createI18n } from "vue-i18n";

import En from "./en";

import Zh from "./zh";

function getLangAll() {
  return {
    en: En,
    "zh-CN": Zh
  };
}

//注册i8n实例并引入语言文件
const i18n = createI18n({
  legacy: false, // 使用Composition API，这里必须设置为false
  globalInjection: true,
  global: true,
  locale: localStorage.getItem("locale") || "en",
  messages: getLangAll()
});

export default i18n;
