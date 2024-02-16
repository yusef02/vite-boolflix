import { reactive } from "vue";

export const store = reactive({
  api: {
    uri: "https://api.themoviedb.org/3",
    key: "15f764eaf0c277bf9c43e65cad6ca932",
  },
});
