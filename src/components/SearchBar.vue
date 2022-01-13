<template>
  <div class="container mx-auto text-center p-5 bg-gray-300 rounded-lg md:container md:mx-auto">
    <div class="flex justify-between">
      <h1 class="text-pink-500 font-bold">Search by realse date:</h1>
      <form class="">
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
      </form>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>
