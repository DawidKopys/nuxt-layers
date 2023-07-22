# nuxt-layers

1. Run `npm i` in `nuxt-layer` directory
2. Run `npm i` in `app` directory
3. Run `npx vue-tsc --noEmit` (or `npm run dev`) inside `app` directory.

You should see below error:
```
../nuxt-layer/modules/testModule.ts:13:16 - error TS2664: Invalid module name in augmentation, module 'nuxt/schema' cannot be found.

13 declare module 'nuxt/schema' {
                  ~~~~~~~~~~~~~


Found 1 error in ../nuxt-layer/modules/testModule.ts:13
```
