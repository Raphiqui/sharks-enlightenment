export default defineNuxtConfig({
  // Global CSS: https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#css
  css: [
    // SCSS file in the project
    "~/assets/css/main.scss",
  ],

  // Plugins to run before rendering page: https://v3.nuxtjs.org/docs/directory-structure/plugins
  plugins: [],

  // Auto import components: https://v3.nuxtjs.org/docs/directory-structure/components
  components: true,

  // Modules for dev and build (recommended): https://v3.nuxtjs.org/docs/directory-structure/modules
  buildModules: [],

  // Modules: https://v3.nuxtjs.org/docs/directory-structure/modules
  modules: ["@nuxt/image", "@nuxtjs/cloudinary", "@nuxtjs/i18n", "@pinia/nuxt"],

  i18n: {
    locales: [
      { code: "fr", iso: "fr-FR", file: "fr-FR.json", name: "FR" },
      { code: "en", iso: "en-EN", file: "en-EN.json", name: "EN" },
      { code: "es", iso: "es-ES", file: "es-ES.json", name: "ES" },
    ],
    defaultLocale: "fr",
    langDir: "lang/",
    lazy: true,
    strategy: "no_prefix",
    seo: true,
  },

  cloudinary: {
    cloudName: process.env.CLOUDNAME,
  },

  // Build Configuration: https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#build
  build: {},

  // Server Configuration: https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#server
  server: {
    host: process.env.NUXT_HOST || "localhost",
    port: process.env.NUXT_PORT || 3000,
  },

  app: {
    pageTransition: { name: "home", mode: "out-in" },
  },
});
