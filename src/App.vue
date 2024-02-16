<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
      movieTitle: "",
    };
  },
  computed: {},
  components: { AppHeader, AppMain },
  methods: {
    searchedMovieTitle(value) {
      console.log(this.movieTitle);
      this.movieTitle = value;
      axios
        .get(`${store.api.uri}/search/movie?`, {
          params: {
            api_key: store.api.key,
            query: this.movieTitle,
          },
        })
        .then((res) => {
          console.log(res.data.results);
          store.movies = res.data.results.map((result) => {
            const { title, original_title, original_language, vote_average } =
              result;
            return { title, original_title, original_language, vote_average };
          });
          console.log(store.movies);
        });
    },
  },
};
</script>

<template>
  <app-header @search="searchedMovieTitle" />
  <app-main />
</template>

<style lang="scss">
@use "./assets/style/general.scss" as *;
</style>
