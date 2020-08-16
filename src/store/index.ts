import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex)

const state = {
  dark: false as boolean
}
export type State = typeof state;

const getters = {
  dark: (state: State) => (): boolean => {
      return state.dark;
  }
}

export default new Vuex.Store({
  strict: true,
  state,
  getters,
  actions,
  mutations,
})
