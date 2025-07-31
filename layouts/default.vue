<script setup lang="ts">

import { useFirebase } from "~/composables/firebase";
import { useAuth } from "@vueuse/firebase/useAuth"

const { auth } = useFirebase();

const { isAuthenticated, user } = useAuth(auth);

watchEffect(() => {
  if (!isAuthenticated.value) {
    // navigateTo("/login");
  }
});
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
