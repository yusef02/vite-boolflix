<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {};
  },
  props: [
    "title",
    "originalTitle",
    "originalLanguage",
    "voteAverage",
    "posterImage",
  ],
  methods: {
    // TODO: implement dinamic lang flag getted from db by axios request
    // getFlag(langCode) {
    //   if (langCode === "en")
    //     return new URL(`/lang-flags/en.jpg`, import.meta.url).href;
    //   //   axios.get(`${store.uriServer}`).then((res) => {
    //   //     for (let lang of res.data.languages) {
    //   //       if (langCode === lang.code)
    //   //         return new URL(`/lang-flags/${lang.flagSrc}`, import.meta.url).href;
    //   //     }
    //   //   });
    // },
  },
};
</script>

<template>
  <div class="col-md-8 mx-auto">
    <div class="series card flex flex-row">
      <div class="col-4 series__poster">
        <img :src="posterImage" alt="image series" />
      </div>
      <div class="series__desc col-8">
        <p>{{ title }}</p>
        <p>{{ originalTitle }}</p>
        <img :src="originalLanguage" />
        <p>{{ voteAverage }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.series {
  overflow: hidden;
  &__poster {
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__desc {
    img {
      width: 100px;
      height: 60px;
    }
  }
}
</style>
