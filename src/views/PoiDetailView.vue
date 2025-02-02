<template>
<div>
<button
    class="bg-emerald-500 hover:bg-emerald-300 text-white font-bold py-2 px-4 border border-emerald-700 rounded"
  >

    <div>
      <RouterLink to="/poi" class="text-white-500 hover:text-white-600">Back</RouterLink>
    </div>
  </button>

</div>

  <div
      class="bg-emerald-600 size-20 opacity-78 text-xl font-extrabold flex items-center justify-evenly w-full flex-1 gap-y-5 my-8 bg-gray rounded-md outline outline-offset-2 outline-emerald-500"
    >
    {{ localPoi.name }}
  </div>

  <div class="flex justify-center my-8 gap-8 mt-20">
    <img class="h-100 w-120 rounded-lg" :src="localPoi.image" alt="Bo-Kaap" />
  </div>
  <div
    class="flex justify-center items-center text-center indent-8 bg-emerald-300 size-20 outline outline-offset-2 outline-emerald-500 font-serif w-full flex-1 gap-y-5 my-8 bg-emerald mt-20 rounded-lg font-extrabold"
  >
    {{ localPoi.description }}
  </div>

  <div class="flex justify-center my-8 mt-20">
    <iframe
      :src="localPoi.map"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen
      loading="lazy"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { usePOIStore } from '../stores/poi'
import { computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const poiStore = usePOIStore()
const localPoi = computed(() => poiStore.poi)

onBeforeMount(async () => {
  const idParam = route.params.id

  if (!idParam || idParam === '' || isNaN(Number(idParam))) {
    console.error( idParam)
    return
  }
  const id = Number(idParam)
  await poiStore.getPOIid(id)
  console.log(poiStore.poi)
})
</script>
