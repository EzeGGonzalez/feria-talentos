<template>
  <section id="coder-profile">
    <hero-coder></hero-coder>

    <section class="section is-alternative coder-section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-3">

            <div class="box has-text-left profile-left depth-2">
              <figure class="image">
                <img :src="coder.pic.secure_url" :alt="coder | fullname">
              </figure>
              
              <p class="title is-size-5 is-uppercase is-bolder m-t-lg">{{coder | fullname}}</p>

              <hr class="plain">

              <links :coder="coder"></links>
            </div>
          </div>
          
          <div class="column is-9">
            <div class="box resume">
              <img v-if="coder.resume && coder.resume.pic && coder.resume.pic.secure_url" :src="coder.resume.pic.secure_url" :alt="coder | fullname">
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import HeroCoder from '~/components/coders/HeroCoder.vue'
import Links from '~/components/coders/Links'

export default {
  layout: 'coders',

  async asyncData ({ params, app }) {
    return { coder: await app.$axios.$get(`/api/coders/${params.id}`) }
  },

  components: {
    HeroCoder,
    Links
  },

  computed: {
    englishLevel () {
      return ['elemental', 'basic', 'intermediate', 'advanced'].indexOf(this.coder.english)
    }
  }
}
</script>

<style lang="scss" scoped>
#coder-profile {
  .coder-section {
    margin-top: -14rem;
  }
}

.box {
  figure {
    margin: -1.25rem;
    margin-bottom: 0;
  }
  &.resume {
    padding: 0;

    img {
      margin-bottom: -6px;
    }
  }
}
</style>

