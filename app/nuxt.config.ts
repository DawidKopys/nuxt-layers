// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [ '../nuxt-layer' ],
  typescript: {
    typeCheck: true
  },
  devtools: { enabled: true },
  testModule: {
    foo: 'abc',
    bar: 123
  }
})
