import React, { useState } from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap, InfoWindow } from "react-google-maps";
import PopupInfo from "../PopupInfo/PopupInfo";

const MapWithMarkers = withScriptjs(withGoogleMap(props =>

    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: props.initPosition.lat, lng: props.initPosition.lng }}
    >
      {props.isMarkerShown && props.location.map((loc, index) => {
        const [evStation, setEvStation] = useState(null);
        return (
          <Marker key={index}
           position={{lat: loc.AddressInfo.Latitude,
            lng: loc.AddressInfo.Longitude}} 
            onClick={() => {
              setEvStation(loc);
            }}
          >{ evStation && ( <InfoWindow 
            onCloseClick={() => {
              setEvStation(null);
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