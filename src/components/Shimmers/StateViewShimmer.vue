<template>
  <div class="flex flex-col flex-1">
    <!-- Overview -->
    <div class="flex flex-col py-12 items-center">
      <Shimmers class="max-w-[300px] w-full mb-2" />
      <Shimmers class="max-w-[300px] w-full mb-12" />
      <Shimmers class="max-w-[300px] h-[100px] w-full mb-12" />
      <Shimmers class="max-w-[300px] w-full mb-12" />
      <Shimmers class="max-w-[300px] h-[75px] w-full" />
    </div>

    <!-- Hourly -->
    <div class="flex flex-col py-12 items-center">
      <Shimmers class="max-w-screen-md h-[100px] w-full mb-12]" />
    </div>

    <!-- Weekly -->
    <div class="flex flex-col py-12 items-center">
      <Shimmers class="max-w-screen-md h-[100px] w-full mb-12" />
    </div>
  </div>
</template>

<script setup>
import Shimmers from "./Index.vue";
</script>
