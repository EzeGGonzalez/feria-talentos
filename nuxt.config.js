require('dotenv').config()

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ada | Coding Bootcamp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ada Coding Bootcamp' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Convertite en desarrolladora de software' },
      { hid: 'og:description', property: 'og:description', content: 'Le permitimos iniciar a mujeres jóvenes una carrera como programadoras que transforme su futuro.' },
      { hid: 'og:image', property: 'og:image', content: 'https://anotate.ada.com.ar/share.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png?v=2' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' }
    ]
  },

  env: process.env,

  css: [
    // node.js module but we specify the pre-processor
    { src: '~assets/main.scss', lang: 'scss' },
    // { src: 'bulma/bulma.sass', lang: 'sass' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' }
  ],

  plugins: [
    '~plugins/buefy',
    '~plugins/filters.js',
    '~plugins/directives.js',
    { src: '~plugins/carousel.js', ssr: false }
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    credentials: false
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    }
  }
}
