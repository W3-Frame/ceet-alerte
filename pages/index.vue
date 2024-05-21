<template>
  <div class="flex flex-row h-96">
    <div class="min-h-full">
      <ul class="menu bg-base-200 w-56 rounded-box">
        <li><a>Zone 1</a></li>
        <li><a>Zone 2</a></li>
        <li><a>Zone 3</a></li>
      </ul>
    </div>

    <div class="divider divider-horizontal"></div>
    <div class="w-full h-20 card bg-base-300 rounded-box place-items-center">
      content
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>

<style scoped>
</style>
