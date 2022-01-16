<template>
  <div
    class="
      container
      mx-auto
      text-center
      p-5
      bg-gray-300
      rounded-lg
      md:container md:mx-auto
    "
  >
    <div class="flex justify-between">
      <div class="flex items-center">
        <h1 class="mx-7">Search by realse date:</h1>
        <date-picker v-model="time3" range format="DD-MM-YYYY"></date-picker>
      </div>
      <button
        class="
          bg-blue-400
          hover:bg-blue-700
          text-white
          font-bold
          py-2
          px-4
          rounded-full
        "
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      time3: "",
    };
  },
};
</script>
