import {
  GET_GROUPS,
  GET_GROUP
} from '../types'

const state = {
  groups: {},
  group: {}
}

const mutations = {
  [GET_GROUPS](state, data){
    state.groups = data
  },
  [GET_GROUP](state, index){
    state.group = state.groups[index]
  }
}

export default {
  state,
  mutations
}