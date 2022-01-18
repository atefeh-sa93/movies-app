<template>
  <div class="container mx-auto text-center mt-20 md:container md:mx-auto">
    <div class="grid grid-cols-3 gap-4">
      <div
        class="
          border-solid border-2 border-gray-400
          rounded-md
          flex
          cursor-pointer
          bg-gray-200
          p-1
        "
        v-for="(item, index) of moviesDatail"
        :key="index"
        @click="goToDetail(item.id)"
      >
        <img
          :src="getImage(item.poster_path)"
          class="object-cover h-auto w-48 rounded-tl-lg rounded-bl-lg"
        />
        <div class="details ml-5 text-left mt-2 relative w-screen">
          <h3 class="text-xl font-extrabold text-gray-900">{{ item.title }}</h3>
          <div class="absolute bottom-0 font-light">
            <i class="fas fa-calendar"></i>
            <span class="ml-3 mb-10">{{ item.release_date }}</span>
            <ul class="list-disc ml-5 flex justify-between mt-5">
              <li>{{ item.vote_average }}</li>
              <li>{{ item.vote_count }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviesCard",

  props: {
    moviesDatail: {
      type: Array,
    },
  },

  created() {
    this.getGenersData();
  },
  methods: {
    getImage(path) {
      let defaultImage = "@/assets/farmer.png"; // just set default
      let address = `https://image.tmdb.org/t/p/original${path}`;
      try {
        return address;
      } catch (e) {
        return require(defaultImage);
      }
    },
    goToDetail(id) {
      this.$router.push({ name: "Movie", params: { movieId: id } }).catch();
    },
  },
};
</script>

