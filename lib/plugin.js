import Vue from 'vue'
import { guess } from 'guess-webpack/api'

export default ({ app: { router } }) =>  {
  router.afterEach(to => {
    // Wait for page to be displayed
    Vue.nextTick(() => {
      const predictions = Object.keys(guess()).sort((a, b) => a.probability - b.probability)
      predictions.forEach(path => {
        router.getMatchedComponents(path).forEach(Component => {
          if (typeof Component === 'function') {
            try { Component() } catch (e) {}
          }
        })
      })
    })
  })
}
