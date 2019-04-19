import Vue from 'vue'
import Router from 'vue-router'
import index from "./../view/index.vue"
import infoBox from "./../view/infoBox.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{//可拖拽拉伸弹框
      path: '/infoBox',
      name: 'infoBox',
      component: infoBox
    }
  ]
})
