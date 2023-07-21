<template>
  <div>
    <h1>Hello World!</h1>
    <pre>{{ myLayer }}</pre>
  </div>
</template>

<script setup lang="ts">
const { myLayer } = useAppConfig()

const testModuleRuntimeConfig = useRuntimeConfig().testModule
void testModuleRuntimeConfig // avoid "declared but not used" error
</script>
