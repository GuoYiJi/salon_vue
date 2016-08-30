import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

import user from './modules/user'
import topic from './modules/topic'
import pk from './modules/pk'
import article from './modules/article'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
  modules: {
    user,
    topic,
    pk,
    article
  },
  strict: debug, 
  middlewares: debug ? [createLogger()] : []
})

