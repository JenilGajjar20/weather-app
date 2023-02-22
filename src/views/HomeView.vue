<template>
  <main class="container text-white">
    <div class="pt-4 pb-8 relative">
      <input
        type="search"
        v-model="searchInput"
        @input="searchResults"
        placeholder="Search City or State"
        class="py-2 px-1 w-full bg-transparent border-b focus:border-blue-500 focus:outline-none focus:shadow-[0_1px_0_0_#004E71]"
      />
      <ul
        v-if="inputResults"
        class="absolute bg-white text-blue-900 font-bold w-full py-2 px-4 top-16 rounded space-y-2"
      >
        <p v-if="searchError">Something went wrong. Try Again!</p>
        <p v-if="!serverError && inputResults.length === 0">
          No results found for your query "{{ searchInput }}". Try a different
          term.
        </p>
        <template v-else>
          <li
            v-for="(searchItem, index) in inputResults"
            :key="index"
            class="text-sm md:text-base flex items-center justify-between border-b border-gray-500 last:border-0 py-2"
          >
            <div>
              <p>{{ searchItem.name }}</p>
              <span class="text-xs text-blue-400"
                >{{ searchItem.country }} - {{ searchItem.state }}</span
              >
            </div>
            <div class="text-xs text-right">
              <p>Lat: {{ searchItem.lat }}</p>
              <p>Lon: {{ searchItem.lon }}</p>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const searchInput = ref("");
const searchLimit = ref(5);
const queryTimeout = ref(null);
const inputResults = ref(null);
const searchError = ref(null);

const searchResults = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (searchInput.value !== "") {
      try {
        const results = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${searchInput.value}&limit=${searchLimit.value}&appid=3afa0912acde462ae17537b1e3ff4d94`
        );
        inputResults.value = results.data;
      } catch {
        searchError.value = true;
      }
      return;
    }
    inputResults.value = null;
  }, 300);
};
</script>

<style></style>
