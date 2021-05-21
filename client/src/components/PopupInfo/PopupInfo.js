import React from 'react';


export default function StationInfo(props) {

  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  console.log(props)

  return (

    <div className="popupBody">
      <p className="popupInfo">Title: {props.location.AddressInfo.Title}</p>
      <p className="popupInfo">Town: {props.location.AddressInfo.Town}</p>
      <p className="popupInfo">Power/KW: {props.location.Connections[0].PowerKW}</p>
      <p className="popupInfo">Address: {props.location.AddressInfo.AddressLine1}</p>
      <p className="popupInfo">Longitude: {props.location.AddressInfo.Longitude}</p>
      <p className="popupInfo">Latitude: {props.location.AddressInfo.Latitude}</p>
      {/* <button  type="submit" className="login-btn btn-primary btn-block">Fav</button> */}
    </div> 

    <div className="station-info">
      <h1>{props.location.Connections[0].PowerKW}</h1>
      {context =>
        <Link to="/station">
      <button>hi</button>
      </Link>
   }
     
 