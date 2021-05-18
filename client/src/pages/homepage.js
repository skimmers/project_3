import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps";
import API from "../utils/API";

function Map() {

  // Setting our component's initial states
  const [location, setLocation] = useState([])
  const [startingPoint, setStartingPoint] = useState({
    lat: 0,
    lng: 0
  })
  // Will use selectedStation once we get pop up window working
  // const [selectedStation, setSelectedStation] = useState({})

  useEffect(() => {

    // function that calls client side API to retrieve user's current location so we can set a start point for the map
    function success(pos) {
      var crd = pos.coords;
  
      setStartingPoint({lat: crd.latitude, lng: crd.longitude})
    }
  
    navigator.geolocation.getCurrentPosition(success)

    // currentLocation();

    loadLocation();

  }, [])

    // Loads all books and sets them to books
  function loadLocation() {
  API.getLocation()
    .then(res => {
      console.log(res.data) 
      setLocation(res.data)
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
      {location.map((loc) => {
        // console.log(loc.AddressInfo.Latitude)
        // <Marker
        //   key={loc.ID}
        //   position={{ 
        //     lat: loc.AddressInfo.Latitude, 
        //     lng: loc.AddressInfo.Longitude }}
        // /> 
      })}
    </GoogleMap>
  ));

  return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD_ojntZN4KtcGfvz62p81zYUfb8rTyyic"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
  )
}
  
export default Map;