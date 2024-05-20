<template>
  <div>
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        
      <p class="text-2xl text-gray-900 dark:text-white font-bold">
        Welcome back
      </p>
      <input type="text" placeholder="Enter Your Email" class="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Enter Your Password" class="input input-bordered w-full max-w-xs" />
      <button class="p-2 btn btn-neutral">Submit</button>
      
      <div class="flex items-center align-center text-center w-full flex-row">
        <div
          class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"
        ></div>
        <div
          class="font-medium text-gray-700 dark:text-gray-200 flex mx-3 whitespace-nowrap"
        >
          <span class="text-sm">or</span>
        </div>
        <div
          class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"
        ></div>
      </div>
      <button class="p-2 btn btn-secondary  btn-outline">Continue With Google</button>
        <!-- <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<style scoped></style>
