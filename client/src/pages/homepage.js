import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps";
import API from "../utils/API";

function Map() {

  // Setting our component's initial states
  const [location, setLocation] = useState([])
  const [startingPoint, setStartingPoint] = useState({
    lat: 33.748997,
    lng: -84.387985
  })
  // Will use selectedStation once we get pop up window working
  // const [selectedStation, setSelectedStation] = useState({})

  useEffect(() => {

    // function that calls client side API to retrieve user's current location so we can set a start point for the map 
    navigator.geolocation.getCurrentPosition(function(position) {
      setStartingPoint({lat: position.coords.latitude, lng: position.coords.longitude})
      console.log(startingPoint.lat, startingPoint.lng)

    })

    loadLocation();

  }, []);

  // Loads all books and sets them to books
  function loadLocation() {
  
    API.getLocation(startingPoint.lat, startingPoint.lng)
      .then(res => {
      setLocation(res.data)
      console.log(location) 
    })
    .catch(err => console.log(err));
  };



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


  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: startingPoint.lat, lng: startingPoint.lng }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 33.748997, lng: -84.387985 }} />}

      {/* {location.map((loc) => {
        // console.log(loc.AddressInfo.Latitude)
        // <Marker
        //   key={loc.ID}
        //   position={{ 
        //     lat: loc.AddressInfo.Latitude, 
        //     lng: loc.AddressInfo.Longitude }}
        // /> 
      })} */}
    </GoogleMap>
  ));

  return (
    <MapWithAMarker
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD_ojntZN4KtcGfvz62p81zYUfb8rTyyic"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />
  )
}
  
export default Map;