<template>
  <div>
    <div
      class="max-w-lg mx-auto bg-white dark:bg-green-800 rounded-lg shadow-md px-12 py-14 flex flex-col items-center"
    >
      <h1 class="text-xl font-bold text-center text-geen-700 dark:text-gray-200 mb-8">
        Welcome to My Company
      </h1>
      <td action="#" class="w-full flex flex-col gap-4">
        <div class="flex items-start flex-col justify-start">
          <label for="firstName" class="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >First Name:</label
          >
          <input
            type="text"
            id="firstName"
            name="firstName"
            class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>

        <div class="flex items-start flex-col justify-start">
          <label for="lastName" class="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >Last Name:</label
          >
          <input
            type="text"
            id="lastName"
            name="lastName"
            class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>

        <div class="flex items-start flex-col justify-start">
          <label for="username" class="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >Username:</label
          >
          <input
            type="text"
            id="username"
            name="username"
            class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>

        <div class="flex items-start flex-col justify-start">
          <label for="password" class="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >Password:</label
          >
          <input
            type="password"
            id="password"
            name="password"
            class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>

        <div class="flex items-start flex-col justify-start">
          <label for="confirmPassword" class="text-sm text-gray-700 dark:text-gray-200 mr-2"
            >Confirm Password:</label
          >
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <div class="mt-6">
        <div class="grid place-items-center">
  <button
    type="submit"
    class="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md shadow-sm mt-15"
  >
    Register
  </button>
</div>
        </div>
      </td>

      <div class="mt-4 text-center">
        <span class="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
        <RouterLink to="/user" class="text-green-500 hover:text-green-600">Login</RouterLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts"></script>
