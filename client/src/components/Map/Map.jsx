import React, { useState } from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap, InfoWindow } from "react-google-maps";
import PopupInfo from "../PopupInfo/PopupInfo";
import StationInfo from '../Favorites/Favorites';
import { Link, BrowserRouter } from 'react-router-dom';

const MapWithMarkers = withScriptjs(withGoogleMap(props =>

    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: props.initPosition.lat, lng: props.initPosition.lng }}
    >
      {props.isMarkerShown && props.location.map(loc => {
        const [evStation, setEvStation] = useState(null);
        return (
          <Marker key={loc.ID}
           position={{lat: loc.AddressInfo.Latitude,
            lng: loc.AddressInfo.Longitude}} 
            onClick={() => {
              setEvStation(loc);
            }}
          >{ evStation && (       <InfoWindow >
              <PopupInfo location={loc} />
        </InfoWindow>)}
  


          </Marker>
        )
      })}
    </GoogleMap>
));

export default MapWithMarkers;