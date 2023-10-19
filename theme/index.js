import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import DefaultTheme from "vitepress/theme";
import Antd from "ant-design-vue";
import { useComponents } from "./useComponents";
import { useCreateRouter, useDirective } from "./useSSR.js";
import { createPinia } from "pinia";
import { setVueAntDComponentsConfig } from "./auth.js";

import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import "./styles/index.less";
import 'ant-design-vue/dist/antd.less';
import "ant-design-vue/dist/default-theme";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
setVueAntDComponentsConfig()

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.use(Antd).use(pinia)
    useDirective(ctx.app)
    useCreateRouter(ctx.app)
    useComponents(ctx.app);

    DefaultTheme.enhanceApp(ctx);
  }
};
