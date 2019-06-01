// state 
// getters
// mutations
// actions
import api from '../../api';
import qs from 'qs';
import {router} from '../../main';

const state = {
  token: window.localStorage.getItem('imgur_token'),  // 초기 값

};

const getters = {
  isLoggedIn: (state) => !!state.token  // sate.token ? false : true
};

// actions을 통해  mutations을 실행 시켜 state를 변경한다
const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin: ({commit}, hash) => {
    const query = qs.parse(hash.replace('#', ''));
    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
    router.push('/')
  },
  logout: ({commit}) => {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token')
  }
};
// 리턴이 아니라 값을 할당 해서 업데이트
const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state, 
  getters,
  mutations,
  actions
}
