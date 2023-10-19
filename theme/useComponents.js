import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue';
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
import UrApiTable from '../../components/api/UrApiTable.vue';
import { install } from '@/';

export const useComponents = (app)=> {
  app.component('Demo', Demo);
  app.component('DemoBlock', DemoBlock);
  app.component('UrApiTable', UrApiTable);

  // 注册封装的组件
  install(app)
}
