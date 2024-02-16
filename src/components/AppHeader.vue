<script>
export default {
  data() {
    return {
      movieTitle: "",
    };
  },
  emits: ["search"],
};
</script>

<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md input-group mb-3">
          <span class="input-group-text" id="basic-addon1">@</span>
          <input
            v-model="movieTitle"
            @keyup.enter="$emit('search', movieTitle)"
            type="text"
            class="form-control"
            placeholder="Search for your movie"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss"></style>
