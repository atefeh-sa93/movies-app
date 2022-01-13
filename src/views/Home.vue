<template>
  <div>
    <SearchBar />
    <MoviesCard />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue';
import MoviesCard from '@/components/MoviesCard.vue';

export default {
  name: 'Home',
  components: {
    SearchBar,
    MoviesCard
  }
}
</script>
