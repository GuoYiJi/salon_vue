import {
  GET_TOPIC
} from '../types'

const state = {
  data: {}
}

const mutations = {
  [GET_TOPIC](state, data){
    state.data = data
  }
}

export default {
  state,
  mutations
}