<template>
  <div class="flex flex-col flex-1 items-center">
    <!-- Banner -->
    <div
      v-if="route.query.preview"
      class="bg-blue-700 text-white text-center w-full p-4"
    >
      <p>
        You are currently previewing this city, click the '➕' icon to start
        tracking the city.
      </p>
    </div>

    <!-- Weather Overview -->
    <div class="flex flex-col items-center text-white py-12">
      <h1 class="text-3xl md:text-4xl mb-2 capitalize">
        <span v-if="searchValue !== route.params.state">
          {{ route.params.value + ", " }}
        </span>
        {{ route.params.state + ", " + route.params.country }}
      </h1>
      <p class="text-sm mb-12">
        {{
          new Date(weatherData.currentTime).toLocaleDateString("en-us", {
            weekday: "short",
            day: "2-digit",
            month: "long",
          })
        }}
        {{
          new Date(weatherData.currentTime).toLocaleTimeString("en-us", {
            timeStyle: "short",
          })
        }}
      </p>
      <p class="text-5xl md:text-8xl mb-8">
        {{ Math.round(weatherData.current.temp) }}&deg;
      </p>
      <p>
        Feels like
        <strong>{{ Math.round(weatherData.current.feels_like) }}&deg;</strong>
      </p>
      <p class="capitalize">
        {{ weatherData.current.weather[0].description }}
      </p>
      <img
        class="w-[150px] h-auto"
        :src="`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`"
        :alt="weatherData.current.weather[0].main"
      />
    </div>

    <hr class="border border-white border-opacity w-full" />

    <!-- Hourly Weather -->
    <div class="max-w-screen-md py-12 w-full">
      <div class="mx-8 text-white">
        <h2 class="mb-4">Hourly Weather</h2>
        <div class="flex gap-10 overflow-x-scroll">
          <div
            v-for="hourData in weatherData.hourly"
            :key="hourData.dt"
            class="flex flex-col gap-4 items-center"
          >
            <p class="whitespace-nowrap text-sm">
              {{
                new Date(hourData.currentTime).toLocaleTimeString("en-us", {
                  hour: "numeric",
                })
              }}
            </p>
            <img
              class="w-auto h-[50px] object-cover"
              :src="`http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`"
              :alt="hourData.weather[0].main"
            />
            <p class="text-xl">{{ Math.round(hourData.temp) }}&deg;</p>
          </div>
        </div>
      </div>
    </div>

    <hr class="border border-white border-opacity w-full" />

    <!-- Weekly Weather -->
    <div class="max-w-screen-md py-12 w-full">
      <div class="mx-4 text-white">
        <h2 class="mb-4">7 day forecast</h2>
        <div
          v-for="day in weatherData.daily"
          :key="day.dt"
          class="flex items-center"
        >
          <p class="flex-1">
            {{
              new Date(day.dt * 1000).toLocaleDateString("en-us", {
                weekday: "long",
              })
            }}
          </p>
          <img
            class="w-[50px] h-[50px] object-cover"
            :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`"
            :alt="day.weather[0].clouds"
          />
          <div class="flex flex-1 justify-end gap-2">
            <p>H: {{ Math.round(day.temp.max) }}&deg;</p>
            <p>L: {{ Math.round(day.temp.min) }}&deg;</p>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="!route.query.preview"
      class="flex items-center gap-2 py-12 text-white cursor-pointer duration-150 hover:text-red-500"
      @click="removeCity"
    >
      <p>Remove City</p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const getWeatherData = async () => {
  try {
    const weatherData = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${route.query.lat}&lon=${route.query.lon}&appid=3afa0912acde462ae17537b1e3ff4d94`
    );

    const localOffSet = new Date().getTimezoneOffset() * 60000;
    // console.log(localOffSet);
    const utc = weatherData.data.current.dt * 1000 + localOffSet;
    // console.log(utc);
    weatherData.data.currentTime =
      utc + 1000 * weatherData.data.timezone_offset;
    // console.log("==>", weatherData.data.currentTime);

    weatherData.data.hourly.forEach((hour) => {
      const utc = hour.dt * 1000 + localOffSet;
      //   console.log("UTC: ", utc);
      hour.currentTime = utc + 1000 * weatherData.data.timezone_offset;
    });

    await new Promise((res) => setTimeout(res, 1000));

    return weatherData.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

const weatherData = await getWeatherData();

const searchValue = computed(() => {
  return (
    route.params.value.charAt(0).toUpperCase() + route.params.value.slice(1)
  );
});

const router = useRouter();
const removeCity = () => {
  const cities = JSON.parse(localStorage.getItem("savedCities"));

  const updatedCities = cities.filter((city) => {
    city.id !== route.query.id;
  });

  localStorage.setItem("savedCities", JSON.stringify(updatedCities));

  router.push({ name: "home" });
};
</script>
