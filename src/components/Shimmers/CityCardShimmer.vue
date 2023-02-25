<template>
  <div class="flex justify-between bg-white text-blue-700 py-4 px-3 rounded">
    <div class="flex flex-col gap-2">
      <Shimmers class="w-24" />
      <Shimmers class="w-10" />
    </div>
    <div class="flex flex-col items-end gap-2">
      <Shimmers class="w-14" />
      <Shimmers class="w-24" />
    </div>
  </div>
</template>

<script setup>
import Shimmers from "./Index.vue";
</script>
