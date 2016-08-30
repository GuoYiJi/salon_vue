import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import filters from './utils/filters'
import routerMap from './routes'
import App from './components/App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/js/base.js'
import './assets/scss/quick.scss'

// 注入过渡器
Object.keys(filters).forEach( k => Vue.filter(k, filters[k]) )

Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})
routerMap(router)
sync(store, router)

router.start(Vue.extend(App), '#root')