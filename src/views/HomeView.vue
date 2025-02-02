<template>
  <div
    class="bg-local ..."
    style="
      background-image: url('https://plus.unsplash.com/premium_photo-1681488098851-e3913f3b1908?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ybGQlMjBtYXB8ZW58MHx8MHx8fDA%3D');
    "
  >
    <h1
      class="bg-green-600 size-16 opacity-95 text-xl font-extrabold flex items-center justify-center w-full flex-1 gap-y-5 my-8 bg-green rounded-md"
    >
      These are my website elements:
    </h1>
    <BaseTable :headers="AllHeader" :data="world" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseTable from '@/components/base/BaseTable.vue'
// import type { City } from '../types/city.ts'
// import BaseModal from '@/components/base/BaseModal.vue'
// import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

interface All {
  City: string
  POI: string
}

const AllHeader = ref([
  { label: 'Cities', key: 'City' as keyof All },
  { label: 'Points of Interest', key: 'POI' as keyof All },
])
const world = ref<All[]>([
  {
    City: 'Como',
    POI: 'Comói-tó',
  },
  {
    City: 'Fokváros',
    POI: 'Bo-Kaap negyed',
  },
  {
    City: 'Edinburgh',
    POI: 'Edinburgh-kastély',
  },
  {
    City: 'Kyotó',
    POI: 'Hagashiyama',
  },
  {
    City: 'Queenstown',
    POI: 'Wakatipu-tó',
  },
])
</script>
