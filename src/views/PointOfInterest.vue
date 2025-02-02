<template>
  <div class="flex flex-col gap-y-8">
    <div class="flex w-full items-center justify-between">
      <h1 class="text-2xl font-semibold">Points of Interest</h1>
      <BaseButton
        :type="ButtonType.PRIMARY"
        text="Add Point of Interest"
        @click="openCreatePOIModal"
      />
    </div>
    <BaseTable :headers="POIHeader" :data="poiStore.pois" @on-row-click="onPOITableRowClicked" />
  </div>

  <BaseModal
    :is-open="isCreatPOIModalOpen"
    primary-button-text="Create"
    title="Creat new point of interest"
    description="This is a create new point of interest modal"
    @on-close="closeCreatePOIModal"
    @on-action-click="addNewPointofInterest"
  >
    <div class="sm:flex sm:items-start">
      <div
        class="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:size-10"
      >
        <component :is="MapPinIcon" class="size-6 text-green-600" aria-hidden="true" />
      </div>
      <div class="flex flex-col gap-y-8 ml-4">
        <h1 class="text-3xl font-semibold text-gray-900">Adding Point of Interest</h1>

        <div class="flex flex-col gap-y-4 w-[300px]">
          <BaseInput
            v-model="newPOI.name"
            :type="InputType.TEXT"
            label="Name"
            placeholder="Add the point of interest name ..."
          />
          <BaseInput
            v-model="newPOI.description"
            :type="InputType.TEXT"
            label="New point of interest description"
            placeholder="Add the point of interest description ..."
          />
          <BaseInput
            v-model="newPOI.image"
            :type="InputType.TEXT"
            label="New point of interest image"
            placeholder="Add the point of interest image link ..."
          />
          <BaseInput
            v-model="newPOI.map"
            :type="InputType.TEXT"
            label="New point of interest destination"
            placeholder="Add the point of interest map link ..."
          />

          <BaseInput
            v-model="newPOI.cityid"
            :type="InputType.NUMBER"
            label="CityId"
            placeholder="Add the city id..."
          />
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseTable from '../components/base/BaseTable.vue'
import BaseButton from '../components/base/BaseButton.vue'
import BaseModal from '../components/base/BaseModal.vue'
import BaseInput from '../components/base/BaseInput.vue'
import { MapPinIcon } from '@heroicons/vue/24/outline'
import { ButtonType } from '../types/button'
import { InputType } from '../types/input'
import { usePOIStore } from '../stores/poi'
import { useRouter } from 'vue-router'
import { onBeforeMount, ref } from 'vue'

const router = useRouter()
const poiStore = usePOIStore()

interface POI {
  name: string
  id: number
  cityid: number
}

const POIHeader = ref([
  { label: 'Name', key: 'name' as keyof POI },
  { label: 'City ID', key: 'cityid' as keyof POI },
])

const newPOI = ref(initializeNewPoi())

const isCreatPOIModalOpen = ref(false)

function openCreatePOIModal() {
  isCreatPOIModalOpen.value = true
}

function closeCreatePOIModal() {
  isCreatPOIModalOpen.value = false
}

function initializeNewPoi(){
  return {
    name: '',
    description:'',
    image:'',
    map:'',
    cityid: 0,
  }
}

function onPOITableRowClicked(id: number) {
  router.push(`/poi/${id}`)
}

async function addNewPointofInterest() {
  if (!newPOI.value.name || !newPOI.value.cityid) {
    console.error('Name and City ID are required')
    return
  }

  poiStore.setIsLoading(true)

  try {
    await poiStore.addPOI(newPOI.value)
    closeCreatePOIModal()
  } catch (error) {
    console.error( error)
  } finally {
    poiStore.setIsLoading(false)
  }
}

onBeforeMount(async () => {
  await poiStore.getPOI()
  console.log( poiStore.pois)
})
</script>
