import React, { useEffect, useState } from "react";
import API from "../utils/API";
import MapWithMarkers from "../components/Map/Map";
import {useHistory} from "react-router-dom";

function Map() {
  const [location, setLocation] = useState([]);
  const [initPosition, setInitPosition] = useState({});
  // Will use selectedStation once we get pop up window working
  // const [selectedStation, setSelectedStation] = useState({})

  //initialize the history object for redirecting purposes
  const history = useHistory();

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

  //   function handleInputChange(event) {
  //     // add code to control the components here
  //     const { name, value } = event.target;
  //     const newState = {
  //       ...formObject,
  //       [name]: value
  //     }

  //     setFormObject(newState);
  //   }

  //   function handleFormSubmit() {
  //     // add code here to post a new book to the api
  //     if (formObject.title, formObject.author) {
  //       API.saveBook(formObject)
  //       .then((res) => {
  //         console.log(res.data)
  //         setFormObject(res.data);
  //       })
  //       .catch(err => console.log(err));
  //     }
  //   }

  return (
    <MapWithMarkers
      isMarkerShown
      location={location}
      initPosition={initPosition}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD_ojntZN4KtcGfvz62p81zYUfb8rTyyic"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default Map;
