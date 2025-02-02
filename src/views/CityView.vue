<template>
  <div class="flex w-full justify-between items-center mb-8">
    <h1 class="text-2xl font-semibold text-gray-900">Cities</h1>
    <BaseButton :type="ButtonType.PRIMARY" text="Add New City" @click="openCreateCityModal" />
  </div>

  <BaseTable
  :headers="citiesHeader"
  :data="cityStore.cities"
  @on-row-click="onCityTableRowClicked"
/>


  <BaseModal
    :is-open="isCreateModalOpen"
    :is-primary-button-disabled="cityStore.isLoading"
    primary-button-text="Create"
    title="Create new city"
    description="This is a create new city modal"
    @on-close="closeCreateModal"
    @on-action-click="addNewCity"
  >
    <!-- Modal tartalom itt -->
    <div class="space-y-4">
      <BaseInput
        v-model="newCity.cityname"
        label="City Name"
        :type="InputType.TEXT"
        class="w-full"
      />
      <BaseInput
        v-model="newCity.description"
        label="Description"
        :type="InputType.TEXT"
        class="w-full"
      />
      <BaseInput
        v-model.number="newCity.population"
        label="Population"
        :type="InputType.NUMBER"
        class="w-full"
      />
      <BaseInput
        v-model="newCity.image"
        :type="InputType.TEXT"
        label="New point of interest image"
        placeholder="Add the point of interest image link ..."
      />
      <BaseInput
        v-model="newCity.map"
        :type="InputType.TEXT"
        label="New point of interest destination"
        placeholder="Add the point of interest map link ..."
      />
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import BaseTable from '../components/base/BaseTable.vue'
import BaseModal from '../components/base/BaseModal.vue'
import BaseInput from '../components/base/BaseInput.vue'
import BaseButton from '../components/base/BaseButton.vue'
import { useCityStore } from '../stores/city'
import { InputType } from '../types/input'
import { ButtonType } from '../types/button'
import { useRouter } from 'vue-router'

const router = useRouter()
const cityStore = useCityStore()

interface LocalCity {
  cityname: string
  population: number
  id: number
}

const citiesHeader = ref([
  { label: 'Name', key: 'cityname' as keyof LocalCity },
  { label: 'Population', key: 'population' as keyof LocalCity },
  { label: 'City Id', key: 'id' as keyof LocalCity },
])

const newCity = ref(initializeNewCity())
const isCreateModalOpen = ref(false)

function openCreateCityModal() {
  isCreateModalOpen.value = true
}

function initializeNewCity() {
  return {
    cityname: '',
    description: '',
    population: '',
    image: '',
    map: '',
  }
}

function closeCreateModal() {
  isCreateModalOpen.value = false
  newCity.value = initializeNewCity()
}

async function addNewCity() {

  if (
    !newCity.value.cityname ||
    !newCity.value.description ||
    isNaN(Number(newCity.value.population)) ||
    Number(newCity.value.population) <= 0
  ) {
    console.error( newCity.value)
    return
  }

  cityStore.setIsLoading(true)
  try {
    await cityStore.addCity(newCity.value)
    closeCreateModal()
  } catch (error) {
    console.error(error)
  } finally {
    cityStore.setIsLoading(false)
  }
}

function onCityTableRowClicked(id: number) {
  router.push(`/cities/${id}`)
  console.log()
}

onBeforeMount(async () => {
  await cityStore.getCities()
  console.log( cityStore.cities)
})
</script>
