/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
require('dotenv').config();

export default {
  // API call to retrieve all EV Charge stations for a given location
  getLocation: function(lat, lng) { 
    const key = process.env.REACT_APP_OPEN_CHARGE_MAP_KEY;
    return axios.get(`https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=25&compact=true&verbose=false&key=${key}&latitude=${lat}&longitude=${lng}&distance=25`);
  },

  // Function that calls the authcheck route in order to verify a user is signed in
  checkLoginStatus: function () {
    return axios.get('/api/users/authcheck');
  },

  // Retrieves all favorited stations for a given user
  getFavorites: function () {
    return axios.get('/api/favorite');
  },

  // Deletes a favorited station for a given user
  deleteFavorite: function (id) {
    return axios.delete(`/api/favorite/${id}`)
  },

  // getGeoCode: function(searchInput) {
  //   // Get latitude & longitude from address.
  //   Geocode.fromAddress(searchInput).then(
  //     (response) => {
  //       const { lat, lng } = response.results[0].geometry.location;
  //       console.log(lat, lng);
  //     },
  //     (error) => {
  //       console.error(error);
  //     });
  // }
};