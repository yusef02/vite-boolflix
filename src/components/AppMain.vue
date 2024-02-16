<script>
import { store } from "../store";
import MovieCard from "./MovieCard.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: { MovieCard },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <movie-card
          v-for="movie in store.movies"
          :title="movie.title"
          :originalTitle="movie.original_title"
          :originalLanguage="movie.original_language"
          :voteAverage="movie.vote_average"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>
