import React, { Component } from 'react';
import  GoogleMapReact, { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Container from "../Container/Container";

export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
      if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

    render() {
  
      // Height and width of map
      const mapStyles = {
        width: '100%',
        height: '100%'
      };
  
      return (
        <Container>
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                    {
                        lat: -1.2884,
                        lng: 36.8233
                    }
                }
            />

            <Marker
            onClick={this.onMarkerClick}
            name={'Kenyatta International Convention Centre'}
            />
            <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
            >
            <div>
                <h4>{this.state.selectedPlace.name}</h4>
            </div>
            </InfoWindow>

        </Container>        
        );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyD_ojntZN4KtcGfvz62p81zYUfb8rTyyic'
  })(MapContainer);