<template>
  <div class="website">
    <navbar></navbar>

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
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
