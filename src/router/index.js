import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import test from '@/components/test';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/HelloWorld',   //跳转的页面路径
      name: 'HelloWorld',
      component: HelloWorld,
    },

    {
      path: '/',    //默认首页路径
      name: 'test',
      component: test,
    },
  ],
});
