import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albumData: {
      title: '',
      desc: '',
      uri: '',
      year: '',
      photosPrefix: '',
      photosSuffix: '',
      photos: []
    },
    num: 0
  },
  getters: {
    getAlbumData: function(state) {
      return state.albumData;
    }
  },
  mutations: {
    setAlbumData: function(state, newAlbumData) {
      for(let property in newAlbumData) {
        if(state.albumData.hasOwnProperty(property)) {
      // Thiccc reactivity caveats 😏
          Vue.set(state.albumData, property, newAlbumData[property])
        }
      }
    }
  },
  actions: {

  }
})
