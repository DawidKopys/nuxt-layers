// `nuxt/kit` is a helper subpath import you can use when defining local modules
// that means you do not need to add `@nuxt/kit` to your project's dependencies
import { defineNuxtModule } from 'nuxt/kit'
import defu from 'defu'

interface ModuleOptions {
  foo: string
  bar?: number
}

// it doesn't work when used in layers, it produces error:
// ERROR(vue-tsc)  Invalid module name in augmentation, module 'nuxt/schema' cannot be found.
declare module 'nuxt/schema' {
  interface RuntimeConfig {
    testModule: ModuleOptions
  }
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'testModule'
  },
  setup (moduleOptions, nuxt) {
    // it adds the type in project using our layer but not in the layer itself
    // seems to not work for some reason
    // addTypeTemplate({
    //   filename: 'types/testModule.d.ts',
    //   getContents: () => `// Generated by testModule
    //     interface ModuleOptions {
    //       foo: string
    //       bar?: number
    //     }
      
    //     declare module 'nuxt/schema' {
    //       interface RuntimeConfig {
    //         testModule: {
    //           foo: string
    //           bar?: number
    //         }
    //       }
    //     }
    //     export {}`
    // })

    nuxt.options.runtimeConfig.testModule = defu(
      nuxt.options.runtimeConfig.testModule,
      moduleOptions
    )
  }
})