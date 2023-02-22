<template>
  <div></div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";

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

    return weatherData;
  } catch (error) {
    console.log("Error: ", error);
  }
};

const weatherData = await getWeatherData();
console.log("Weather Data==> ", weatherData.data);
</script>
