import Vue from 'vue'

Vue.directive('delay', {
  isFn: true,
  bind: function (el, binding) {
    setTimeout(binding.value, 5000)
  }
})

Vue.directive('background-centered', function (el, binding) {
  el.style.backgroundImage = `url('${binding.value}')`
  el.style.backgroundPosition = 'center'
  el.style.backgroundSize = 'cover'
})
