// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [ '../nuxt-layer' ],
  typescript: {
    strict: true,
    typeCheck: true
  },
  devtools: { enabled: true }
})
