<template>
  <section id="coders">
    <hero-coders class="p-b-xxl"></hero-coders>

    <section class="section is-alternative coders-list">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-3" v-for="(coder, i) in coders" :key="i">
            <coder :coder="coder"></coder>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import HeroCoders from '~/components/coders/HeroCoders.vue'
import Coder from '~/components/coders/Coder.vue'

export default {
  layout: 'coders',
  async asyncData ({ params, app }) {
    return { coders: await app.$axios.$get(`/api/coders`) }
  },

  components: {
    HeroCoders,
    Coder
  }
}
</script>

<style lang="scss" scoped>
  .coders-list {
    margin-top: -7rem;
  }
</style>
