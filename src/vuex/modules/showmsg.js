import {
  SHOW_MSG
} from '../types'

const state = {
  message: {
    type: '',
    content: '',
    title: ''
  }
}

const mutations = {
  [SHOW_MSG](state, action){
    state.message = {...action}
  }
}

export default {
  state,
  mutations
}