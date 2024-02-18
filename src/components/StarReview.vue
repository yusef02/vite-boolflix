<script>
export default {
  data() {
    return {
      stars: [],
    };
  },
  props: ["voteAverage"],
  methods: {
    calcStars(vote) {
      vote = parseInt(vote * 10);
      vote.toFixed();

      if (vote < 10) {
        this.stars.push(
          "fa-solid fa-star-half-stroke",
          "fa-regular fa-star",
          "fa-regular fa-star",
          "fa-regular fa-star",
          "fa-regular fa-star"
        );
        return this.stars;
      }

      if (vote < 20) {
        this.stars.push(
          "fa-solid fa-star",
          "fa-regular fa-star",
          "fa-regular fa-star",
          "fa-regular fa-star",
          "fa-regular fa-star"
        );
        return this.stars;
      }

      if (vote < 30) {
        this.stars.push(
          "fa-solid fa-star",
          "fa-solid fa-star-half-stroke",
          "fa-regular fa-star",
          "fa-regular fa-star",
          "fa-regular fa-star"
        );
        return this.stars;
      }

      if (vote < 40) {
        this.stars.push(
          "fa-solid fa-star",
          "fa-solid fa-star",
          "fa-regular fa-star",
          "fa-regular fa-star",
          "fa-regular fa-star"
        );
        return this.stars;
      }

      if (vote < 50) {
        this.stars.push(
          "fa-solid fa-star",
          "fa-solid fa-star",
          "fa-solid fa-star-half-stroke",
          "fa-regular fa-star",
          "fa-regular fa-star"
        );
        return this.stars;
      }

      if (vote < 60) {
        this.stars.push(
          "fa-solid fa-star",
          "fa-solid fa-star",
          "fa-solid fa-star",
          "fa-regular fa-star",
          "fa-regular fa-star"
        );
        return this.stars;
      }

      if (vote < 70) {
        this.stars.push(
          "fa-solid fa-star",
          "fa-solid fa-star",
          "fa-solid fa-star",
          "fa-solid fa-star-half-stroke",
          "fa-regular fa-star"
        );
        return this.stars;
      }

      if (vote < 80) {
        this.stars.push(
          "fa-solid fa-star",
          "fa-solid fa-star",
          "fa-solid fa-star",
          "fa-solid fa-star",
          "fa-regular fa-star"
        );
        return this.stars;
      }

      if (vote < 90) {
        this.stars.push(
          "fa-solid fa-star",
          "fa-solid fa-star",
          "fa-solid fa-star",
          "fa-solid fa-star",
          "fa-solid fa-star-half-stroke"
        );
        return this.stars;
      }

      if (vote <= 100) {
        this.stars.push(
          "fa-solid fa-star",
          "fa-solid fa-star",
          "fa-solid fa-star",
          "fa-solid fa-star",
          "fa-solid fa-star"
        );
        return this.stars;
      }
    },
    logitem(item) {
      console.log(item);
    },
  },
};
</script>

<template>
  <div>
    <i v-for="star in calcStars(voteAverage)" :class="star"></i>
  </div>
</template>

<style lang="scss">
i {
  color: goldenrod;
}
</style>
