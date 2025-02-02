<template>
  <div class="flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden shadow ring-1 ring-black/5 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-300">
  <thead class="bg-gray-50">
    <tr>
      <th
        v-for="header in headers"
        :key="header.key"
        scope="col"
        class="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
      >
        {{ header.label }}
      </th>
      <th
        scope="col"
        class="py-3.5 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
      >
        Actions
      </th>
    </tr>
  </thead>

  <tbody v-if="data.length" class="divide-y divide-gray-200 bg-white">
    <tr
      v-for="(tableData, index) in data"
      :key="index"
      @click="onRowClick(tableData?.id)"
    >
      <td
        v-for="header in headers"
        :key="header.key"
        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-center"
      >
        <img
          v-if="header.key === 'img'"
          :src="tableData[header.key] as string"
          alt="Image"
        />
        <p v-else>{{ tableData?.[header.key] || '' }}</p>
      </td>
      <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 text-center">
        <div class="flex gap-x-2 justify-center">
          <TrashIcon
            class="w-6 h-6 text-red-400 hover:text-red-800"
            @click.stop="onDeleteClicked(tableData?.id)"
          />
        </div>
      </td>
    </tr>
  </tbody>

  <tbody v-else class="bg-white">
    <tr>
      <td
        class="py-4 pl-4 pr-3 text-sm align-middle font-medium text-gray-900 sm:pl-6"
        colspan="3"
      >
        <div class="flex items-center justify-center w-full flex-1">
          <BaseSpinner />
        </div>
      </td>
    </tr>
  </tbody>
</table>

        </div>
      </div>
    </div>

    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-30"
      tabindex="-1"
    >
      <div
        class="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow-lg dark:bg-gray-700"
      >
        <button
          @click="closeModal"
          type="button"
          class="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="p-4 md:p-5 text-center">
          <svg
            class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
          <button
            @click="confirmDelete"
            type="button"
            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
          >
            Yes, I'm sure
          </button>
          <button
            @click="closeModal"
            type="button"
            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            No, cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" generic="T extends { id: number }">
interface Props<T extends { id: number }> {
  headers: {
    label: string
    key: keyof T
  }[]
  data: T[]
}
</script>

<script setup lang="ts" generic="T extends { id: number }">
import BaseSpinner from '../base/BaseSpinner.vue'
import {  TrashIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

defineProps<Props<T>>()

const emit = defineEmits(['onRow-click', 'onDeleteClick'])

const isModalOpen = ref(false)
let itemIdToDelete: number | null = null

function onRowClick(id?: number): void {
  if (typeof id !== 'number' || isNaN(id)) {
    console.error( id)
    return
  }
  emit('onRow-click', id)
}

function onDeleteClicked(id: number): void {
  if (id === undefined || isNaN(id)) {
    console.error( id)
    return
  }
  itemIdToDelete = id
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}

function confirmDelete() {
  if (itemIdToDelete !== null) {
    emit('onDeleteClick', itemIdToDelete)
    itemIdToDelete = null
    closeModal()
  }
}
</script>
