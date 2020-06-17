import axios from "axios";

export default {
  getMemes: function() {
    return axios.get("/api/memes");
  }
};