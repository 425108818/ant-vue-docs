import { defineConfig } from "vitepress";
import { demoBlockPlugin } from "vitepress-theme-demoblock";
import nav from "./configs/nav";
import sidebar from "./configs/sidebar";

export default defineConfig({
  // lang: 'en-US',
  title: "vue-antd-components",
  description: "使用ant-design-vue搭建组件库文档站点。",
  lastUpdated: true,
  cleanUrls: "without-subfolders",
  // base: process.env.BASE || "/",
  base: '/ant-vue-docs',
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]],
  markdown: {
    headers: {
      level: [0, 0]
    },
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    theme: { light: "github-light", dark: "github-dark" },
    config: md => {
      md.use(demoBlockPlugin, {
        cssPreprocessor: "less"
      });
    }
  },
  themeConfig: {
    outlineTitle: "本页目录",
    lastUpdatedText: "上次更新",
    logo: "/logo.svg",
    search: {
      provider: 'local'
    },
    algolia: {
      appId: "V3GKYB38B4",
      apiKey: "447f208e4f014244adc642110b72cbc2",
      indexName: "ant-vue-docs",
      placeholder: '请输入关键词',
      translations: {
        button: {
          buttonText: '搜索文档',
        },
      },
    },
    nav,
    sidebar,
    enhanceAppFiles: [],
    // editLink: {
    //   pattern: "https://github.com/vuejs/vitepress",
    //   text: "在 GitHub 上编辑此页"
    // },
    socialLinks: [
      // { icon: "github", link: "https://github.com/vuejs/vitepress" }
    ],
    footer: {
      message: "",
      copyright: "© 悠然居前端组件库系统 2023"
    }
  }
});
