<template>
  <div>
    <hero plain></hero>

    <section class="section">
      <div class="container">
        <form v-on:submit.prevent="onSubmit">
          <b-field label="Comunicación verbal">
            <b-input v-model="form.communication" type="textarea" placeholder="Comunicación verbal"></b-input>
          </b-field>

          <b-field label="Trabajo en equipo">
            <b-input v-model="form.teamWork" type="textarea" placeholder="Trabajo en equipo"></b-input>
          </b-field>

          <b-field label="Rol de interés">
            <b-input v-model="form.role" type="textarea" placeholder="Rol de interés"></b-input>
          </b-field>

          <b-field label="Conocimientos técnicos">
            <b-input v-model="form.techKnowledge" type="textarea" placeholder="Conocimientos técnicos"></b-input>
          </b-field>

          <b-field label="Idiomas">
            <b-input v-model="form.languages" type="textarea" placeholder="Idiomas"></b-input>
          </b-field>

          <b-field label="Empresa">
            <b-input icon-pack="fa" required v-model="form.company" type="text" placeholder="Nombre de tu Empresa"></b-input>
          </b-field>

          <br>

          <div class="field">
            <b-checkbox v-model="form.wouldContinue">
              Me gustaría continuar el proceso de selección con {{coder | fullname}}
            </b-checkbox>
          </div>

          <div class="field">
            <div class="control">
              <button type="submit" class="button is-primary is-medium">
                Subir Feedback
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from '~/components/common/Hero.vue'

export default {
  async asyncData ({ params, app }) {
    let coder = await app.$axios.$get(`/api/coders/${params.id}`)
    return { coder }
  },

  data () {
    return {
      form: {
        coder: '',
        communication: '',
        teamWork: '',
        role: '',
        techKnowledge: '',
        languages: '',
        company: '',
        wouldContinue: false
      }
    }
  },

  methods: {
    async onSubmit () {
      await this.$axios.$post('/api/feedback', {
        ...this.form,
        coder: this.coder._id
      })
      this.$router.replace({ path: '/' })
      this.$store.commit('alerts/addNotification', 'Mensaje enviado exitosamente.')
    }
  },

  components: {
    Hero
  }
}
</script>

<style lang="sass" scoped>
.button
  margin-top: 1.25rem
</style>
