import axios from "axios";

export default {
  getMemes: function() {
    return axios.get("/api/memes");
  },

  postImgur: function() {
    return axios.post("api/imgur");
  }
};