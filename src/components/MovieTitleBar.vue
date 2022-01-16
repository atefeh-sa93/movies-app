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
    <div class="flex items-center">
      <button
        class="
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-2
          px-4
          rounded-full
        "
        @click="goBack"
      >
        <i class="fa fa-arrow-left"></i>
        Back
      </button>
      <h1 class="text-gray-900 font-bold mx-auto text-2xl">{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieTitleBar',

  props: {
    title: {
      type: String
    }
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>