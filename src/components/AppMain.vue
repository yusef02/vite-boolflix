<script>
import { store } from "../store";
import SeriesCard from "./SeriesCard.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: { SeriesCard },
  methods: {},
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <series-card
          v-for="item in store.movies"
          :title="item.title"
          :originalTitle="item.original_title"
          :originalLanguage="item.original_language"
          :voteAverage="item.vote_average"
        />
        <series-card
          v-for="item in store.seriesTv"
          :title="item.title"
          :originalTitle="item.original_title"
          :originalLanguage="item.original_language"
          :voteAverage="item.vote_average"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>
