<template>
  <div class="website">
    <navbar-coders></navbar-coders>

    <div id="alerts" class="container m-t-md">
      <div class="notification is-success" v-for="(msg, index) in $store.state.alerts.notifications"
        :key="index" v-delay="() => { $store.commit('alerts/removeNotification', msg) }">
        <button class="delete"></button>
        {{msg}}
      </div>
    </div>

    <main class="app-content">
      <nuxt/>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            Copyright © Ada {{new Date().getFullYear()}}
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavbarCoders from '~/components/coders/Navbar.vue'

export default {
  components: {
    NavbarCoders
  }
}
</script>

<style lang="sass" scoped>
#alerts
  position: fixed
  bottom: 1rem
  left: 0
  right: 0
  z-index: 999
</style>
