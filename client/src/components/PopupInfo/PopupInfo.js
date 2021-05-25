import React from "react";
import "./PopupInfo.css";
import axios from "axios";

export default function StationInfo(props) {

  // const changeColorHandler = (e) => {
  //   const id = e.target.id;
  //   this.props.addFavorisAction(id)
  //   const newLikeState = !this.state.backgroundColor[id]
  //   const newBackgroundColorList = {...this.state.backgroundColor, [id]: newLikeState }

  //   this.setState({
  //           backgroundColor: newBackgroundColorList 
  //   })
  //     }
  


  // Axios call to our database to set the favorite's information
  const saveFavorite = (
    location_id,
    title,
    power,
    voltage,
    connectionType,
    address,
    city,
    access,
    stationSite,
    isFavorite,
    latitude,
    longitude
  ) => {
    axios
      .post("/api/favorite", {
        location_id,
        title,
        power,
        voltage,
        connectionType,
        address,
        city,
        access,
        stationSite,
        isFavorite,
        latitude,
        longitude
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // click handler that will save information to DB when a user clicks the favorites icon
  const favoritesHandler = () => {
    saveFavorite(
      props.location.UUID,
      props.location.AddressInfo.Title,
      props.location.Connections[0].PowerKW,
      props.location.Connections[0].Voltage,
      props.location.Connections[0].ConnectionTypeID,
      props.location.AddressInfo.AddressLine1,
      props.location.AddressInfo.Town,
      props.location.AddressInfo.AccessComments,
      props.location.AddressInfo.RelatedURL,
      props.location.AddressInfo.Latitude,
      props.location.AddressInfo.Longitude,
      true
    );
  };

  
 
  return (
    <div className="popupBody">
      <p className="popupInfo">
        <span>Title:</span> {props.location.AddressInfo.Title}
      </p>
      <p className="popupInfo">
        <span>Power/KW:</span> {props.location.Connections[0].PowerKW}
      </p>
      <p className="popupInfo">
        <span>Voltage:</span> {props.location.Connections[0].Voltage}
      </p>
      <p className="popupInfo">
        <span>Connection Type:</span>{" "}
        {props.location.Connections[0].ConnectionTypeID}
      </p>
      <p className="popupInfo">
        <span>Address:</span> {props.location.AddressInfo.AddressLine1}
      </p>
      <p className="popupInfo">
        <span>City:</span> {props.location.AddressInfo.Town}
      </p>
      <p className="popupInfo">
        <span>Access:</span> {props.location.AddressInfo.AccessComments}
      </p>
      <div>
        {/* star to save it */}
        <button onClick={
          favoritesHandler
          // changeColorHandler();
          }>
          <i className="far fa-star"></i>
        </button>
      </div>
      <div>
        <a href={props.location.AddressInfo.RelatedURL} target="_blank" rel="noreferrer" alt="Electric vehicle charging station." >
          Station Provider Site
        </a>
      </div>
    </div>
  );

}


