<script>
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import axios from "axios";

export default {
  data() {
    return {
      store,
      movieTitle: "",
    };
  },
  computed: {},
  components: { AppHeader },
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
        });
    },
  },
};
</script>

<template>
  <app-header @search="searchedMovieTitle" />
</template>

<style lang="scss">
@use "./assets/style/general.scss" as *;
</style>
