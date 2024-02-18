<script>
import axios from "axios";
import { store } from "../store";
import SeriesCard from "./SeriesCard.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: { SeriesCard },
  methods: {
    getFlag(langCode) {
      // TODO: implement dinamic lang flag getted from db by axios request
      // axios.get(`${store.uriServer}`).then((res) => {
      //   console.log(res.data.languages);
      //   for (let lang of res.data.languages) {
      //     if (langCode == lang.code)
      //       return new URL(`/lang-flags/${lang.flagSrc}`, import.meta.url).href;
      //   }
      // });
      if (langCode === "en")
        return new URL(`/lang-flags/en.jpg`, import.meta.url).href;
    },

    getPosterImage(imgSrc) {
      if (imgSrc) {
        return new URL(
          `${store.apiTmdb.uriImages}w500/${imgSrc}`,
          import.meta.url
        ).href;
      } else return new URL(`/reelFilmIcon.jpg`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row gy-4">
        <series-card
          v-for="item in store.searchResults"
          :title="item.title"
          :originalTitle="item.original_title"
          :originalLanguage="getFlag(item.original_language)"
          :voteAverage="item.vote_average"
          :posterImage="getPosterImage(item.poster_path)"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>
