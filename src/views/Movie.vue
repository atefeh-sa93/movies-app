<template>
  <div>
    <MovieTitleBar :title="detail.title"/>
    <MovieDetails :content="detail"/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import MovieTitleBar from "@/components/MovieTitleBar.vue";
import MovieDetails from "@/components/MovieDetails.vue";

export default {
  name: "Home",

  components: {
    MovieTitleBar,
    MovieDetails,
  },

  data() {
    return {
      detail: [],
    };
  },

  mounted() {
    this.fetchDetails();
  },

  methods: {
    fetchDetails() {
      axios
        .get(
          `/movie/${this.$route.params.movieId}?api_key=910b40e40fa0147961ad9e269ef40abc`
        )
        .then((result) => {
          this.detail = result.data;
          console.log(this.detail);
        });
    },
  },
};
</script>
