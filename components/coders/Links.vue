<template>
  <div class="coder-profile-links">
    <a target="_blank" v-if="coder.github" :href="coder.github" class="is-primary is-outlined">
      <span class="icon"><i class="fa fa-github"></i></span>

      <span>Github</span>
    </a>

    <a target="_blank" v-if="coder.linkedin" :href="coder.linkedin" class="is-primary is-outlined">
      <span class="icon"><i class="fa fa-linkedin-square"></i></span>

      <span>LinkedIn</span>
    </a>

    <a target="_blank" v-if="coder.portfolio" :href="coder.portfolio" class="is-primary is-outlined">
      <span class="icon"><i class="fa fa-link"></i></span>

      <span>Portfolio</span>
    </a>

    <a target="_blank" :href="coder.resume.doc" class="is-primary is-outlined">
      <span class="icon"><i class="fa fa-download"></i></span>

      <span>Descargar CV</span>
    </a>

    <hr class="plain">

    <nuxt-link :to="`/coders/${coder._id}/feedback`" class="is-primary is-outlined">
      <span class="icon"><i class="fa fa-plus"></i></span>

      <span>Dar Feedback</span>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['coder']
  }
</script>

<style lang="sass" scoped>
@import "~assets/colors";

.coder-profile-links
  a
    color: inherit
    display: flex
    align-content: center

    span:nth-child(2)
      border-bottom: 1px solid $primary;
      padding-bottom: 0.25rem

    .icon
      margin-right: 0.5rem
      font-size: 24px

      .fa-linkedin-square
        color: #0077b5

    &:not(:last-child)
      margin-bottom: 1.25rem
</style>
