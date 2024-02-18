<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
      title: "",
    };
  },
  computed: {},
  components: { AppHeader, AppMain },
  methods: {
    searchedTitle(value) {
      this.title = value;
      store.searchResults = [];
      for (let searchType of ["movie", "tv"]) {
        axios
          .get(`${store.apiTmdb.uriTmdb}/search/${searchType}?`, {
            params: {
              api_key: store.apiTmdb.key,
              query: this.title,
            },
          })
          .then((res) => {
            // console.log(res.data.results);
            if (searchType === "movie") {
              store.searchResults.push(
                ...res.data.results.map((result) => {
                  const {
                    title,
                    original_title,
                    original_language,
                    vote_average,
                    poster_path,
                  } = result;
                  return {
                    title,
                    original_title,
                    original_language,
                    vote_average,
                    poster_path,
                  };
                })
              );
              // console.log(store.searchResults);
            }
            if (searchType === "tv") {
              store.searchResults.push(
                ...res.data.results.map((result) => {
                  const {
                    name,
                    original_name,
                    original_language,
                    vote_average,
                    poster_path,
                  } = result;
                  return {
                    title: name,
                    original_title: original_name,
                    original_language,
                    vote_average,
                    poster_path,
                  };
                })
              );
              // console.log(store.searchResults);
            }
          });
      }
      // console.log(store.searchResults);
    },
  },
};
</script>

<template>
  <app-header @search="searchedTitle" />
  <app-main />
</template>

<style lang="scss">
@use "./assets/style/general.scss" as *;
</style>
