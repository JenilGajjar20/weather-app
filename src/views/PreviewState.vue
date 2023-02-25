<template>
  <div>
    <Suspense>
      <AsyncStateView />
      <template #fallback>
        <StateViewShimmer />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncStateView from "../components/AsyncStateView.vue";
import StateViewShimmer from "../components/Shimmers/StateViewShimmer.vue";
</script>
