<template>
  <BaseSidebar />
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="bg-green-800 mx-auto h-18 w-24 rounded-md"
        src="https://styxa.ro/wp-content/uploads/2021/11/styxa-Logo-WHT.png"
        alt="Your Company"
      />
      <h2
        class="bg-green-700 mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-100 rounded-md"
      >
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Username</label>
          <div class="mt-2">
            <input
              type="text"
              name="Username"
              id="usernam"
              autocomplete="username"
              required="true"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-3 -outline-offset-3 outline-green-400 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/7"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-green-600 hover:text-green-500"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              type="password"
              name="password"
              id="password"
              autocomplete="current-password"
              required="true"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-3 -outline-offset-3 outline-green-400 placeholder:text-gray-400 focus:outline focus:outline-3 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green-600"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts"></script>
