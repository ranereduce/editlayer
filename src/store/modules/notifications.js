import Vue from 'vue'
import _ from 'lodash'
import Chance from 'chance'

const chance = new Chance()

export default {

  state: {
    items: {},
  },

  mutations: {

    setNotification (state, payload) {
      let notification = {}
      payload.id = payload.id ? payload.id : chance.guid()

      if (_.has(state.items, payload.id)) {
        notification = _.get(state.items, payload.id)
      }

      notification.mode = payload.mode || notification.mode
      notification.message = payload.message || notification.message
      notification.link = payload.link || notification.link
      notification.progress = payload.progress || notification.progress

      Vue.set(state.items, payload.id, notification)
    },

    deleteNotification (state, payload) {
      Vue.delete(state.items, payload.id)
    },

  },

}
