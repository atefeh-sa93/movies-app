<template>
  <div>
    <SearchBar />
    <MoviesCard :moviesDatail="movies" />
    <Pagination
      :pagination="{
        per_page: 20,
        total: totalItems,
        total_pages: 500,
      }"
      :current-page="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "@/components/SearchBar.vue";
import MoviesCard from "@/components/MoviesCard.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "Home",
  components: {
    SearchBar,
    MoviesCard,
    Pagination,
  },
  data() {
    return {
      movies: [],
      totalPages: 0,
      totalItems: 0,
      currentPage: 1,
    };
  },
  created() {
    this.fethchData();
  },
  watch: {
    currentPage: {
      handler() {
        this.fethchData();
      },
      immediate: true,
    },
  },
  methods: {
    fethchData() {
      axios
        .get(`discover/movie/?api_key=910b40e40fa0147961ad9e269ef40abc&page=${this.currentPage}`)
        .then((res) => {
          this.movies = res.data.results;
          this.totalPages = res.data.total_pages;
          this.totalItems = res.data.total_results;
          this.page = res.data.page;
        });
    },
    onPageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>
