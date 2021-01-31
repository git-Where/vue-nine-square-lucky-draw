import cj from './cj.vue'
export default {
  install(_Vue) {
    // console.log(_Vue)
    _Vue.component('cj', cj)
  }
}