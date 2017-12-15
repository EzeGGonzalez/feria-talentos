<template>
  <section id="home-hero" :class="`hero main-hero is-info is-primary ${shadowy !== false ? 'shadowy' : ''}`" :style="{'background-image': `url('${backgroundImage}')`}">
    <div class="hero-body" v-if="plain === false">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <slot>
              <h1 class="title is-2 is-spaced">
                <strike>The closest developer.</strike> <br> The <i>right</i> developer.
              </h1>

              <h2 class="subtitle is-5">
                Andela invests in Africa's most talented developers and <br> integrates them into the world's best tech companies.
              </h2>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hero',
  props: {
    backgroundImage: '',
    shadowy: {
      default: false
    },
    plain: {
      default: false
    }
  }
}
</script>

<style scoped>
.hero.is-primary {
    background-color: #bc3b69;
    color: #fff;
}
</style>
