import axios from "axios";

export default {
  // Gets all books
  getLocations: function(lat, lon) {
    return axios.get(`https://api.plugshare.com/locations/nearby?latitude=${lat}&longitude=${lon}&count=10`);
  }
};