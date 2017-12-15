<template>
  <div class="box">
    <h2 class="is-size-3 is-uppercase is-600">Publicá una oferta</h2>
    <p class="is-size-6 m-b-lg">Si te interesa contratar a una de las coders de <span class="has-text-primary">Ada</span>, completá el siguiente formulario</p>

    <h2 class="is-size-5 is-uppercase is-600 m-b-md">Información de la oferta</h2>

    <form id="new-job-form" v-on:submit.prevent="onSubmit">
      <b-field label="Empresa">
        <b-input v-model="form.company" required></b-input>
      </b-field>

      <b-field label="Dirección">
        <b-input v-model="form.address"></b-input>
      </b-field>

      <b-field label="Descripción de tu empresa (y por qué trabajar con ustedes)">
        <b-input v-model="form.companyDescription" type="textarea" required></b-input>
      </b-field>

      <b-field label="CUIT">
        <b-input v-model="form.taxId"></b-input>
      </b-field>

      <b-field label="Habilidades técnicas más importantes para tu empresa:">
        <div class="block">
          <div class="checkbox-wrapper" v-for="(tech, i) in techSkills" :key="i">
            <b-checkbox v-model="form.techSkills"
              :native-value="tech">
              {{tech}}
            </b-checkbox>
          </div>
        </div>
      </b-field>

      <b-field label="Habilidades socioemocionales más importantes para tu empresa">
        <div class="block">
          <div class="checkbox-wrapper" v-for="(life, i) in lifeSkills" :key="i">
            <b-checkbox v-model="form.lifeSkills"
              :native-value="life">
              {{life}}
            </b-checkbox>
          </div>
        </div>
      </b-field>

      <b-field label="En caso ya tengas identificados los perfiles que quieras evaluar, escribe sus nombres aquí">
          <b-input v-model="form.coders"></b-input>
      </b-field>

      <b-field label="Contacto en la empresa (nombre y apellido)">
          <b-input v-model="form.contactName" required></b-input>
      </b-field>

      <b-field label="Email de contacto">
          <b-input v-model="form.contactEmail" type="email" required></b-input>
      </b-field>

      <b-field label="Teléfono de contacto">
          <b-input v-model="form.contactPhone"></b-input>
      </b-field>

      <br>

      <div class="field">
        <b-checkbox v-model="form.acceptTerms">Sí, he leído y acepto los términos y condiciones propuestas por <span class="has-text-primary">Ada</span> (mostrados al lado derecho)</b-checkbox>
      </div>

      <div class="field">
        <b-checkbox v-model="form.acceptFee">Acepto el pago del fee de contratación a <span class="has-text-primary">Ada</span> en caso de contratar a una coder (más detalles en los Términos y Condiciones de la derecha)</b-checkbox>
      </div>

      <div class="field mt-5" v-if="form.acceptTerms && form.acceptFee">
        <div class="control">
          <button type="submit" class="button is-primary is-fullwidth is-medium">
            Enviar oferta
          </button>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
import Vue from 'vue'

const _emptyForm = {
  company: '',
  address: '',
  companyDescription: '',
  taxId: '',
  techSkills: [],
  lifeSkills: [],
  coders: '',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  acceptFee: false,
  acceptTerms: false
}

export default {
  methods: {
    async onSubmit () {
      await this.$axios.post('/api/jobs', this.form)
      document.getElementById('new-job-form').reset()
      this.$store.commit('alerts/addNotification', 'Mensaje enviado exitosamente.')
      window.scrollTo(0, 0)
      this.form = Vue.util.extend({}, _emptyForm)
    }
  },
  data () {
    return {
      form: Vue.util.extend({}, _emptyForm),
      techSkills: [
        'Ajax',
        'CSS',
        'Git',
        'HTML5',
        'JavaScript',
        'ReactJS',
        'VueJS',
        'AngularJS',
        'NodeJS',
        'jQuery',
        'JSON',
        'User Testing',
        'UX Design'
      ],
      lifeSkills: [
        'Comunicación',
        'Trabajo en equipo',
        'Excelencia',
        'Manejo de estrés',
        'Asistencia y puntualidad'
      ]
    }
  }
}
</script>
