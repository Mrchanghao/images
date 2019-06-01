import api from '../../api/index'
import {router} from '../../main';

const state = {
  images: []  // 초기 값

};

const getters = {
  allImages: state => state.images
};

// actions을 통해  mutations을 실행 시켜 state를 변경한다
const actions = {
  async fetchImages({rootState , commit}) {
    const {token} = rootState.auth;
    const res = await api.fetchImages(token);
    // console.log(res.data)
    commit('setImages', res.data.data)
  },

  async uploadImages({rootState}, images) {
    // console.log(images)
    // get token
    const {token} = rootState.auth;
    // call api
    await api.uploadImages(images, token)
    // redirect
    router.push('/');
  }


};
// 리턴이 아니라 값을 할당 해서 업데이트
const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

export default {
  state, 
  getters,
  mutations,
  actions
}
