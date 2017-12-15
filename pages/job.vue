<template>
  <div id="new-job">
    <hero plain></hero>

    <section class="section">
      <div class="container">

        <div class="columns">
          <div class="column is-5">
            <job-form></job-form>
          </div>

          <div class="column is-7">
            <terms></terms>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import Hero from '~/components/common/Hero.vue'
import Terms from '~/components/jobs/Terms.vue'
import JobForm from '~/components/jobs/Form.vue'

export default {
  layout: 'coders',
  head () {
    return {
      title: 'Subí una oferta'
    }
  },
  components: {
    Hero,
    Terms,
    JobForm
  }
}
</script>

<style lang="sass">
  .field:not(:last-child)
    margin-bottom: 1.5rem

    .checkbox-wrapper:not(:last-child)
      margin-bottom: 0.5rem

  .terms
    h3
      margin-bottom: 1.25rem
    h5
      margin-bottom: 1.25rem
    p
      margin-bottom: 1rem
</style>
