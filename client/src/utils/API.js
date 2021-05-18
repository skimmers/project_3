import axios from "axios";

export default {
  // Gets all EV Charge stations
  getLocation: function() { 
    const key = "50d64c87-9aac-4af5-bc5b-695af831ea8e"
    return axios.get(`https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=10&compact=true&verbose=false&key=${key}`);
  },
};