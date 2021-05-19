import React from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap, InfoWindow } from "react-google-maps";
// import StationInfo from '../MarkerPopup/MarkerPopup';



const MapWithMarkers = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: props.initPosition.lat, lng: props.initPosition.lng }}
    >
      {props.isMarkerShown && props.location.map(loc => {
        return (
          <Marker key={loc.ID} position={{lat: loc.AddressInfo.Latitude, lng: loc.AddressInfo.Longitude}}>
            <InfoWindow >
              <span>hi</span>
            </InfoWindow>
          </Marker>
        )
      })}
    </GoogleMap>
));
export default MapWithMarkers;