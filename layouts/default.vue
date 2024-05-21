<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "dark:bg-gray-950",
  },
});
</script>

<template>
  <div class="min-h-screen max-w-screen-lg mx-auto">
    <NavBar />

    <slot />
  </div>
</template>

<style scoped></style>
