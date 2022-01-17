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
        <date-picker v-model="dateRange" range format="YYYY-MM-DD" valueType="format"></date-picker>
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
        @click="searchForMovies(dateRange)"
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
      dateRange: "",
    };
  },

  methods: {
    searchForMovies(searchItems) {
      this.$emit('searching', searchItems)
    }
  }
};
</script>
