import React, { useEffect, useState, Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import MapContainer from "../components/MapContainer/MapContainer";
import API from "../utils/API";

function HomePage() {

  // Setting our component's initial state
  const [location, setLocation] = useState([])

  useEffect(() => {
    loadLocation()
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
    
    // Load all books and store them with setBooks


  

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
    <div>
      <MapContainer />
    </div>
  );
}
  
export default HomePage;