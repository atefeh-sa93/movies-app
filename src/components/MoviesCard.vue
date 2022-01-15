<template>
  <div class="container mx-auto text-center mt-6 md:container md:mx-auto">
    <div class="grid grid-cols-4 gap-4">
      <div
        class="border-solid border-2 border-gray-400 rounded-md flex cursor-pointer"
        v-for="(item, index) of movies"
        :key="index"
        @click="test(item.id)"
      >
        <div class="bg-gray-200">
          <img :src="getImage(item.poster_path)" class="" />
          <div class="details">
            <h3>{{ item.title }}</h3>
            <i class="fas fa-calendar"></i>
            <span>{{ item.release_date }}</span>
            <ul>
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
import axios from "axios";

export default {
  name: "MoviesCard",

  data() {
    return {
      movies: [],
    };
  },

  mounted() {
    this.fethchData();
  },
  methods: {
    fethchData() {
      axios
        .get("discover/movie/?api_key=910b40e40fa0147961ad9e269ef40abc")
        .then((res) => {
          this.movies = res.data.results;
        });
    },
    getImage(path) {
      let defaultImage = "@/assets/farmer.png"; // just set default
      let address = `https://image.tmdb.org/t/p/original${path}`;
      try {
        return address;
      } catch (e) {
        return require(defaultImage);
      }
    },
    test(id) {
      this.$router.push({ name: 'Movie', params: { movieId: id } }).catch();
    }
  },
};
</script>
