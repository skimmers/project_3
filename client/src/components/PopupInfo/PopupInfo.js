import React, { useState } from 'react';
import './PopupInfo.css';
import { Link } from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import favoriteIcon from '@iconify-icons/mi/favorite';
import axios from 'axios';



export default function StationInfo(props) {

  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  // Axios call to our database to set the favorite's information
  const saveFavorite = (title, power, voltage, connectionType, address, city, access, stationSite, isFavorite) => {
    axios.post("/api/favorite", { title, power, voltage, connectionType, address, city, access, stationSite, isFavorite })
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    })
  }

  // click handler that will save information to DB when a user clicks the favorites icon
  const favoritesHandler = () => {
    saveFavorite(props.location.AddressInfo.Title, props.location.Connections[0].PowerKW, props.location.Connections[0].Voltage, props.location.Connections[0].ConnectionTypeID, props.location.AddressInfo.AddressLine1, props.location.AddressInfo.Town, props.location.AddressInfo.AccessComments, props.location.AddressInfo.RelatedURL, true);
  }

  return (
    <div className="popupBody">
      <p className="popupInfo"><span>Title:</span> {props.location.AddressInfo.Title}</p>
      <p className="popupInfo"><span>Power/KW:</span> {props.location.Connections[0].PowerKW}</p>
      <p className="popupInfo"><span>Voltage:</span> {props.location.Connections[0].Voltage}</p>
      <p className="popupInfo"><span>Connection Type:</span> {props.location.Connections[0].ConnectionTypeID}</p>
      <p className="popupInfo"><span>Address:</span> {props.location.AddressInfo.AddressLine1}</p>
      <p className="popupInfo"><span>City:</span> {props.location.AddressInfo.Town}</p>
      <p className="popupInfo"><span>Access:</span> {props.location.AddressInfo.AccessComments}</p>
      <button onClick={favoritesHandler}><i className="far fa-star"></i></button>
      <a href={props.location.AddressInfo.RelatedURL} target="_blank">Station Provider Site</a>
    </div> 
  )
}