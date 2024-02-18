import { reactive } from "vue";

export const store = reactive({
  searchResults: [],
  apiTmdb: {
    uriTmdb: "https://api.themoviedb.org/3",
    key: "15f764eaf0c277bf9c43e65cad6ca932",
    uriImages: "https://image.tmdb.org/t/p/",
  },
  uriServer: "http://localhost:3000/0",
});
