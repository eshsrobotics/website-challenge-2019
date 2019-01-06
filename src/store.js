import Vue from 'vue'
import Vuex from 'vuex'
import photoData from '@/views/media/photoData'

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
    }
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
    },
    setAlbumDataAccordingToURI: function(state, URI) {
      // let newPhotoData = photoData
      let replaceWithThis
      let keepLooking = true
      for(let i = 0; i < photoData.length; i++) {
        let yearsEvents = photoData[i]
        for(let j = 0; j < yearsEvents.events.length; j++) {
          let event = yearsEvents.events[j]
          if (URI === event.uri && keepLooking === true) {
            keepLooking = false
            replaceWithThis = event
          }
        }
      }

      let newAlbumData = replaceWithThis
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
