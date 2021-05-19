import axios from "axios";

export default {
  // Gets all EV Charge stations
  getLocation: function(lat, lng) { 
    const key = "50d64c87-9aac-4af5-bc5b-695af831ea8e"
    return axios.get(`https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=25&compact=true&verbose=false&key=${key}&latitude=${lat}&longitude=${lng}&distance=25`);
  },
};