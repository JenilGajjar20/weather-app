<template>
  <div>
    <Suspense>
      <AsyncStateView />
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncStateView from "../components/AsyncStateView.vue";
</script>
