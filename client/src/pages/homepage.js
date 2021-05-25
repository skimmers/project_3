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
  const [initPosition, setInitPosition] = useState({});
  const [input, setInput] = useState();
  

  // function that calls client side API to retrieve user's current location so we can set a start point for the map
  // Setting our component's initial states
  const getData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      setInitPosition({ lat: lat, lng: lng });
    });
    // Loads all API locations to be called in useEffect
    const res = await API.getLocation(initPosition.lat, initPosition.lng);
    console.log(res.data);
    setLocation(res.data);
  };

  useEffect(() => {
    //code that will check our login status and return an object that is either true or false for "logged_in"
    API.checkLoginStatus().then(res => {
      console.log(res)
      if (res.data && !res.data.logged_in) {
          //if we are not logged in, then redirect
          history.push("/login");
      } else {
        //otherwise, load the map
        getData();
      }
    });
   
  }, [initPosition.lat, initPosition.lng]);


  // ********** Right now, the search is working to generate markers for a given search result, but the useEffect() function is causing the page to rerender to the user's geolocation.. Need to find a way to fix this.. ************* //
  // function used to handle a user search
  const handleSearch = (search) => {

    console.log(search);
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
        initPosition={initPosition}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GoogleAPIKey}&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD_ojntZN4KtcGfvz62p81zYUfb8rTyyic`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />
    </div>
  );
}

export default Map;
