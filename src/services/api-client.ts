import axios from "axios";

export default axios.create({
  baseURL: "http://api.rawg.io/api",
  params: {
    key: "8168c7649c4445caab52e5f8a3a6a042",
  },
});
