<template>
  <h2 class="text-xl py-4 border-b-2 border-blue-500">
    Tracked Cities({{ savedCities.length }})
  </h2>
  <div v-for="city in savedCities" :key="city.id">
    <CityCard :city="city" @click="goToCityView(city)" />
  </div>

  <p
    v-if="savedCities.length === 0"
    class="text-center text-3xl font-bold py-4"
  >
    No locations added. To start tracking a location, search in the field above.
  </p>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import CityCard from "./CityCard.vue";

const savedCities = ref([]);
const getCities = async () => {
  if (localStorage.getItem("savedCities")) {
    savedCities.value = JSON.parse(localStorage.getItem("savedCities"));
  }

  const requests = [];
  savedCities.value.forEach((city) => {
    requests.push(
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.coords.lat}&lon=${city.coords.lon}&appid=3afa0912acde462ae17537b1e3ff4d94`
      )
    );
  });

  const weatherData = await Promise.all(requests);

  await new Promise((res) => setTimeout(res, 1000));

  weatherData.forEach((value, index) => {
    savedCities.value[index].weather = value.data;
  });
};

await getCities();

const router = useRouter();
const goToCityView = (city) => {
  router.push({
    name: "previewState",
    params: {
      state: city.state,
      country: city.country,
      value: city?.value,
    },
    query: {
      id: city.id,
      lat: city.coords.lat,
      lon: city.coords.lon,
    },
  });
};
</script>
