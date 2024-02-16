<script>
export default {
  data() {
    return {};
  },
  props: ["title", "originalTitle", "originalLanguage", "voteAverage"],
};
</script>

<template>
  <div class="col-12">
    <div class="card flex flex-row">
      <div class="col-4">
        <img src="" alt="image movie" />
      </div>
      <div class="col-8">
        <p>{{ title }}</p>
        <p>{{ originalTitle }}</p>
        <p>{{ originalLanguage }}</p>
        <p>{{ voteAverage }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
