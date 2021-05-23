import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap, InfoWindow } from "react-google-maps";
import PopupInfo from "../PopupInfo/PopupInfo";

const MapWithMarkers = withScriptjs(withGoogleMap(props =>

    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: props.initPosition.lat, lng: props.initPosition.lng }}
    >
      {props.isMarkerShown && props.location.map(loc => {
        const [evStation, setEvStation] = useState(null);
        return (
          <Marker key={loc.UUID}
           position={{lat: loc.AddressInfo.Latitude,
            lng: loc.AddressInfo.Longitude}} 
            onClick={() => {
              setEvStation(loc);
            }}
          >{ evStation && ( <InfoWindow 
            onCloseClick={() => {
              setEvStation(null);
           }}

           position={{
            lat: evStation.latitude,
            lng: evStation.longitude
          }}
           >
              <PopupInfo location={loc} />
          </InfoWindow>)}
        </Marker>
        )
      })}
    </GoogleMap>
));

export default MapWithMarkers;