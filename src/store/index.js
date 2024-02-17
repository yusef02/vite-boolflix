import { reactive } from "vue";

export const store = reactive({
  searchResults: [],
  movies: [],
  seriesTv: [],
  api: {
    uri: "https://api.themoviedb.org/3",
    key: "15f764eaf0c277bf9c43e65cad6ca932",
  },
  uriServer: "http://localhost:3000/0",
});
