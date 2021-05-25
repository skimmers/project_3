import React, { useEffect, useState } from "react";
import API from "../utils/API";
import MapWithMarkers from "../components/Map/Map";
import {useHistory} from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import Geocode from "react-geocode";
require('dotenv').config();

function Map() {

  //initialize the history object for redirecting purposes
  const history = useHistory();

  const [location, setLocation] = useState([]);
  const [initPosition, setInitPosition] = useState({
    lat: 10,
    lng: 10
  });
  const [input, setInput] = useState("");
  

  const geoLocateUser = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      setInitPosition({ lat: lat, lng: lng });
    });
  }

  // function that is used to get new API location data based on a user's current location so we can set a start point for the map on inital page load
  const getData = async () => {
    geoLocateUser();
    // Loads all API locations based on initPosition state from geoLocate function
    const res = await API.getLocation(initPosition.lat, initPosition.lng);
    console.log(res.data);
    setLocation(res.data);
  };

  // function that is used to get new API location data based on a user's search. Called within useEffect().
  const reCenterMap = async () => {

    const res = await API.getLocation(initPosition.lat, initPosition.lng);
    console.log(res.data);
    setLocation(res.data);
  }

  useEffect(() => {
    //code that will check our login status and return an object that is either true or false for "logged_in"
    API.checkLoginStatus().then(res => {
      console.log(res)
      if (res.data && !res.data.logged_in) {
          //if we are not logged in, then redirect
          history.push("/login");
      } 

      // if the state of input is "", call getData(). 
      // Only valid on initial page load
      if (input === "") {
        getData();

      // else if the input has changed based on a user search, call reCenterMap().
      // valid for all instances of after the initial page load
      } else {
        reCenterMap();
      }
    });
   
  }, [initPosition.lat, initPosition.lng]);


  // ********** Right now, the search is working to generate markers for a given search result, but the useEffect() function is causing the page to rerender to the user's geolocation.. Need to find a way to fix this.. ************* //
  // function used to handle a user search
  const handleSearch = (search) => {

    console.log(search);
    console.log(initPosition);
    // Get latitude & longitude from address.
    Geocode.fromAddress(search)
    .then((res) => {
      // If response is ok, destructure the results, and set the new InitPosition state to the result lat and lng
      const { lat, lng } = res.results[0].geometry.location;
      console.log(lat, lng);
      API.getLocation(lat, lng);
      setInitPosition({ lat: lat, lng: lng });
    }, (error) => {
      console.error(error);
    });
  }

  // Google API Key from .env file
  const GoogleAPIKey = process.env.GOOGLE_API_KEY;

  return (
    <div>
      <SearchBar 
        handleSearch={handleSearch}
        setInput={setInput}
        input={input}
      />
      <MapWithMarkers
        isMarkerShown
        location={location}
        center={initPosition}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GoogleAPIKey}&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD_ojntZN4KtcGfvz62p81zYUfb8rTyyic`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />
    </div>
  );
}

export default Map;
