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
      axios
        .get(`${store.api.uri}/search/movie?`, {
          params: {
            api_key: store.api.key,
            query: this.title,
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
      axios
        .get(`${store.api.uri}/search/tv?`, {
          params: {
            api_key: store.api.key,
            query: this.title,
          },
        })
        .then((res) => {
          console.log(res.data.results);
          store.seriesTv = res.data.results.map((result) => {
            const { name, original_name, original_language, vote_average } =
              result;
            return {
              title: name,
              original_title: original_name,
              original_language,
              vote_average,
            };
          });
          console.log(store.seriesTv);
        });

      // TODO: implement one request for axios to centeralize the code
      // for (let searchType of ["movie", "tv"]) {
      //   axios
      //     .get(`${store.api.uri}/search/${searchType}?`, {
      //       params: {
      //         api_key: store.api.key,
      //         query: this.title,
      //       },
      //     })
      //     .then((res) => {
      //       console.log(res.data.results);
      //       if (searchType === "movie") {
      //         store.searchResults.push(
      //           res.data.results.flat((result) => {
      //             const {
      //               title,
      //               original_title,
      //               original_language,
      //               vote_average,
      //             } = result;
      //             return {
      //               title,
      //               original_title,
      //               original_language,
      //               vote_average,
      //             };
      //           })
      //         );
      //         console.log(store.searchResults);
      //       }
      //       if (searchType === "tv") {
      //         store.searchResults.push(
      //           res.data.results.flat((result) => {
      //             const {
      //               name,
      //               original_name,
      //               original_language,
      //               vote_average,
      //             } = result;
      //             return {
      //               title: name,
      //               original_title: original_name,
      //               original_language,
      //               vote_average,
      //             };
      //           })
      //         );
      //         console.log(store.searchResults);
      //       }
      //     });
      // }
      // store.searchResults = store.searchResults.flat();
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
