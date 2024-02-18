<script>
import axios from "axios";
import { store } from "../store";
import StarReview from "./StarReview.vue";

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
  components: { StarReview },
  methods: {},
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
        <star-review :voteAverage="voteAverage" />
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
