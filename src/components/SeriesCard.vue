<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {};
  },
  props: ["title", "originalTitle", "originalLanguage", "voteAverage"],
  methods: {
    // TODO: implement dinamic lang flag getted from db by axios request
    getFlag(langCode) {
      if (langCode === "en")
        return new URL(`/lang-flags/en.jpg`, import.meta.url).href;

      //   axios.get(`${store.uriServer}`).then((res) => {
      //     for (let lang of res.data.languages) {
      //       if (langCode === lang.code)
      //         return new URL(`/lang-flags/${lang.flagSrc}`, import.meta.url).href;
      //     }
      //   });
    },
  },
};
</script>

<template>
  <div class="col-12">
    <div class="series card flex flex-row">
      <div class="col-4">
        <img src="" alt="image series" />
      </div>
      <div class="series__desc col-8">
        <p>{{ title }}</p>
        <p>{{ originalTitle }}</p>
        <img :src="getFlag(originalLanguage)" :alt="originalLanguage" />
        <p>{{ voteAverage }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.series {
  &__desc {
    img {
      width: 100px;
      height: 60px;
    }
  }
}
</style>
