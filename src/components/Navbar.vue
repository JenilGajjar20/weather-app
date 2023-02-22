<template>
  <header class="sticky top-0 bg-blue-900 shadow-lg">
    <nav
      class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6"
    >
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-3">
          <span class="text-2xl">🌞</span>
          <p class="text-2xl">Weather App</p>
        </div>
      </RouterLink>
      <div class="flex gap-3 flex-1 justify-end">
        <span class="text-xl cursor-pointer" @click="toggleModal">ℹ</span>
        <span class="text-xl cursor-pointer">➕</span>
      </div>

      <Modal :modal-active="modalActive" @close-modal="toggleModal">
        <div class="text-black">
          <h1 class="text-2xl mb-1">About:</h1>
          <p class="mb-4">
            The Local Weather allows you to track the current and future weather
            of cities of your choosing.
          </p>
          <h2 class="text-2xl">How it works:</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>
              Search for your city by entering the name into the search bar.
            </li>
            <li>
              Select a city within the results, this will take you to the
              current weather for your selection.
            </li>
            <li>
              Track the city by clicking on the "➕" icon in the top right. This
              will save the city to view at a later time on the home page.
            </li>
          </ol>

          <h2 class="text-2xl">Removing a city</h2>
          <p>
            If you no longer wish to track a city, simply select the city within
            the home page. At the bottom of the page, there will be am option to
            delete the city.
          </p>
        </div>
      </Modal>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { RouterLink } from "vue-router";
import Modal from "./Modal.vue";

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<style lang="scss" scoped></style>
