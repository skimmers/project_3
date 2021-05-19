import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps";
import API from "../utils/API";

function Map() {

  
  // Setting our component's initial states
  const [location, setLocation] = useState([]);
  const [initPosition, setInitPosition] = useState({});
  // Will use selectedStation once we get pop up window working
  // const [selectedStation, setSelectedStation] = useState({})

  useEffect(() => {
    // function that calls client side API to retrieve user's current location so we can set a start point for the map
    
    const getData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        setInitPosition({ lat: lat, lng: lng })
      })
      // Loads all API locations to be called in useEffect
      const res = await API.getLocation(initPosition.lat, initPosition.lng);
      console.log(res.data);
      setLocation(res.data);
    }

    getData();
  }, []);


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
      defaultZoom={13}
      defaultCenter={{ lat: initPosition.lat, lng: initPosition.lng }}
    >
      {props.isMarkerShown && location.map(loc => {
        return (
          <Marker position={{lat: loc.AddressInfo.Latitude, lng: loc.AddressInfo.Longitude}} />
        )
      })}
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