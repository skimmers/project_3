import React from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps";

const MapWithMarkers = withScriptjs(withGoogleMap(props =>

    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: props.initPosition.lat, lng: props.initPosition.lng }}
    >
      {props.isMarkerShown && props.location.map(loc => {
        return (
          <Marker position={{lat: loc.AddressInfo.Latitude, lng: loc.AddressInfo.Longitude}} />
        )
      })}
    </GoogleMap>
));

export default MapWithMarkers;