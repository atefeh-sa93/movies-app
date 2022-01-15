<template>
  <div class="container mx-auto text-center mt-6 md:container md:mx-auto">
    <div class="flex items-center justify-center space-x-1">
      <a
        href="#"
        class="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md"
      >
        Previous
      </a>

      <a
        href="#"
        class="
          px-4
          py-2
          text-gray-700
          bg-gray-200
          rounded-md
          hover:bg-blue-400 hover:text-white
        "
      >
        1
      </a>
      <a
        href="#"
        class="
          px-4
          py-2
          text-gray-700
          bg-gray-200
          rounded-md
          hover:bg-blue-400 hover:text-white
        "
      >
        2
      </a>
      <a
        href="#"
        class="
          px-4
          py-2
          text-gray-700
          bg-gray-200
          rounded-md
          hover:bg-blue-400 hover:text-white
        "
      >
        3
      </a>
      <a
        href="#"
        class="
          px-4
          py-2
          font-bold
          text-gray-500
          bg-gray-300
          rounded-md
          hover:bg-blue-400 hover:text-white
        "
      >
        Next
      </a>
    </div>
    <div>
      <p class="text-sm leading-5 text-gray-700">
        Showing
        <span class="font-medium" x-text="firstItem()"></span>
        to
        <span class="font-medium" x-text="lastItem()"></span>
        of
        <span class="font-medium" x-text="total"></span>
        results
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      perPage: 15,
    };
  },
  computed: {
    totalPages() {
      return Math.round(this.total / this.perPage);
    },
  },
  methods: {
    firstItem() {
      return this.perPage * this.currentPage - 15 + 1;
    },
    lastItem() {
      let lastItem = this.perPage * this.currentPage;
      if (lastItem > this.total) {
        return this.total;
      }
      return this.perPage * this.currentPage;
    },
  },
};
</script>