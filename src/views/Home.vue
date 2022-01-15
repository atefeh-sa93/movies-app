<template>
  <div>
    <SearchBar />
    <MoviesCard />
    <Pagination />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue';
import MoviesCard from '@/components/MoviesCard.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'Home',
  components: {
    SearchBar,
    MoviesCard,
    Pagination
  }
}
</script>
