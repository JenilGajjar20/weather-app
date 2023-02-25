<template>
  <div
    class="flex justify-between bg-white text-blue-700 py-4 px-3 rounded cursor-pointer"
  >
    <div class="flex flex-col gap-2">
      <h2 class="text-xl">{{ city.state }}</h2>
      <h3>{{ city.country }}</h3>
    </div>

    <div class="flex flex-col gap-2">
      <p class="text-xl self-end">
        {{ Math.round(city.weather.main.temp) }}&deg;
      </p>
      <div class="flex gap-2">
        <span> H: {{ Math.round(city.weather.main.temp_max) }}&deg; </span>
        <span> L: {{ Math.round(city.weather.main.temp_min) }}&deg; </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  city: {
    type: Object,
    default: () => {},
  },
});
</script>
