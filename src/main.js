import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import "@/assets/code-highlight.css"

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
  head.script.push({src: 'https://www.googletagmanager.com/gtag/js?id=G-TTQ8YJCDG4', body: true})
  head.script.push({src: 'analytics.js', body: true})
}
