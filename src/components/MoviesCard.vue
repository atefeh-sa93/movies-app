<template>
  <div class="container mx-auto text-center mt-6 md:container md:mx-auto">
    <div class="grid grid-cols-4 gap-4">
      <div class="border-solid border-2 border-gray-400 rounded-md flex">
        <div class="bg-gray-200 ">
          <img src="@/assets/farmer.png" class="">
          <div class="details">
            <h3>Inception</h3>
            <i class="fas fa-calendar"></i>
            <span>2-1-2021</span>
            <ul>
              <li>Drama</li>
              <li>Action</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- ... -->
      <div>9</div>
      <!-- ... -->
      <div>9</div>
      <!-- ... -->
      <div>9</div>
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
    console.log(this.fethchData());
  },

  methods: {
    fethchData() {
      axios.get("https://api.themoviedb.org/3/discover/movie").then((result) => {
        this.movies = result.data;
      });
    },
  },
};
</script>
