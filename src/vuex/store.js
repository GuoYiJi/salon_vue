import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

import user from './modules/user'
import showmsg from './modules/showmsg'
import auth from './modules/auth'
import session from './modules/session'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
  modules: {
    user,
    showmsg,
    auth,
    session
  },
  strict: debug, 
  middlewares: debug ? [createLogger()] : []
})

