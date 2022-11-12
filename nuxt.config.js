export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sharks enlightenment',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: ['my-style']
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    [
      'nuxt-i18n',
      {
        locales: [
          { code: 'fr', iso: 'fr-FR', file: 'fr-FR.json', name: 'FR' },
          { code: 'en', iso: 'en-EN', file: 'en-EN.json', name: 'EN' },
          { code: 'es', iso: 'es-ES', file: 'es-ES.json', name: 'ES' },
        ],
        defaultLocale: 'fr',
        langDir: 'lang/',
        lazy: true,
        strategy: 'no_prefix',
        seo: true,
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
    '@nuxt/image',
    '@nuxtjs/cloudinary',
  ],

  cloudinary: {
    cloudName: process.env.CLOUDNAME,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
