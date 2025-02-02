<template>
  <div>
    <div class="mb-4">
      <RouterLink
        to="/cities"
        class="bg-emerald-500 hover:bg-emerald-300 text-white font-bold py-2 px-4 border border-emerald-700 rounded"
      >
        Back
      </RouterLink>
    </div>

    <div
      class="bg-emerald-600 size-20 opacity-78 text-xl font-extrabold flex items-center justify-evenly w-full flex-1 gap-y-5 my-8 bg-gray rounded-md outline outline-offset-2 outline-emerald-500"
    >
      {{ localCity.cityname }}
    </div>

    <div class="flex justify-center my-8 gap-8 mt-20">
      <img class="h-100 w-120 rounded-lg" :src="localCity.image" alt="Bo-Kaap" />
    </div>
    <div
      class="flex justify-center items-center text-center indent-8 bg-emerald-300 size-20 outline outline-offset-2 outline-emerald-500 font-serif w-full flex-1 gap-y-5 my-8 bg-emerald mt-20 rounded-lg font-extrabold"
    >
      {{ localCity.description }}
    </div>
    <div class="h-50 w-50 flex justify-center items-center">
      <div
        class="justify-center items-center h-70 w- text-center bg-emerald-300 outline outline-offset-2 outline-emerald-500 font-serif gap-y-5 bg-emerald rounded-lg font-extrabold"
      >
        Lakosság: {{ localCity.population }}
      </div>
    </div>
    <div class="flex justify-center my-8 mt-20">
      <iframe
        :src="localCity.map"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { useCityStore } from '../stores/city'
import { useRoute } from 'vue-router'

const route = useRoute()
const cityStore = useCityStore()

const localCity = computed(() => cityStore.city)

onBeforeMount(async () => {
  const idParam = route.params.id
  if (!idParam || isNaN(Number(idParam))) {
    console.error( idParam)
    return
  }
  const id = Number(idParam)
  await cityStore.getCityid(id)
  if (!cityStore.city) {
    console.error(400)
  }
})
</script>
