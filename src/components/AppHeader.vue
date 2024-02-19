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
  <header class="header py-3">
    <div class="container">
      <div class="row">
        <div class="col-md h1 px-4 flex-grow-0"><h1>BOOLFLIX</h1></div>
        <div class="col-md input-group mb-3">
          <span class="input-group-text" id="basic-addon1"
            ><i class="fa-solid fa-magnifying-glass"></i
          ></span>
          <input
            v-model="movieTitle"
            @keyup.enter="$emit('search', movieTitle)"
            type="text"
            class="form-control"
            placeholder="Search for your movie"
          />
          <button class="btn" @click="$emit('search', movieTitle)">
            Search
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  background-color: rgb(20, 20, 20);
  position: sticky;
  top: 0;
  z-index: 1;
  h1 {
    color: brown;
  }
  .btn {
    background-color: rebeccapurple;
    color: white;
  }
}
</style>
