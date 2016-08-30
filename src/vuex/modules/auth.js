import {
  LOGIN_SUCCESS,
  USERINFO_SUCCESS
} from '../types'

const state = {
  user: '',
  token: ''
}

const mutations = {
  [LOGIN_SUCCESS](state, token){
    state.token = token
  },
  [USERINFO_SUCCESS](state, data){
    state.user = data.user
  }
}

export default {
  state,
  mutations
}