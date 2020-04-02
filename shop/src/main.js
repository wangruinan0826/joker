import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/js/rem'
import './mock/mock.js'

//Vant组件的完全引入
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

//Vant组件的按需引入
import {NavBar,Icon,Tabbar,TabbarItem,Swipe,SwipeItem,Lazyload,Button } from 'vant'
Vue.use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Button)     //链式操作

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
