import React, { useEffect, useState } from "react";
import API from "../utils/API";
import MapWithMarkers from "../components/Map/Map";
import StationInfo from '../components/MarkerPopup/MarkerPopup';

function Map() {

  const [location, setLocation] = useState([]);
  const [initPosition, setInitPosition] = useState({});
  const [markerInfo, setMarkerInfo] = useState(false);
  // Will use selectedStation once we get pop up window working
  // const [selectedStation, setSelectedStation] = useState({})

  useEffect(() => {
    // function that calls client side API to retrieve user's current location so we can set a start point for the map
      // Setting our component's initial states

    const getData = async (props) => {
      navigator.geolocation.getCurrentPosition(function(position) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        setInitPosition({ lat: lat, lng: lng })
      })
      // Loads all API locations to be called in useEffect
      const res = await API.getLocation(initPosition.lat, initPosition.lng);
      console.log(res.data);
      // console.log(res.data[1].AddressInfo);
     
      setLocation(res.data);
    }

    getData(); 
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
        markerInfo={markerInfo}
    />
  )
}
  
export default Map;