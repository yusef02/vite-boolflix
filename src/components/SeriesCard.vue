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
    "backDrop",
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
        <div>
          <p><span>Title: </span> {{ title }}</p>
          <p><span>Original title: </span> {{ originalTitle }}</p>
        </div>
        <div>
          <p><span>Original language: </span></p>
          <img :src="originalLanguage" />
        </div>
        <div>
          <p><span>Vote: </span> {{ voteAverage }}</p>
          <star-review :voteAverage="voteAverage" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.col-md-8 {
  background-color: transparent;
  .series {
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    font-size: 20;
    font-weight: 600;
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
      background-color: transparent;
      padding: 30px;
      line-height: 100%;
      display: flex;
      flex-direction: column;
      gap: 30px;
      p {
        span {
          color: rebeccapurple;
        }
      }
      img {
        width: 30px;
        height: 20px;
        border-radius: 8px;
      }
    }
  }
}
</style>
