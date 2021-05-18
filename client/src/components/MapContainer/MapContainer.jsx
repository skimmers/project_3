import React, { Component } from 'react';
import  GoogleMapReact, { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Container from "../Container/Container";

// export class MapContainer extends React.Component {

//   state = {
//     showingInfoWindow: false,  // Hides or shows the InfoWindow
//     activeMarker: {},          // Shows the active marker upon click
//     selectedPlace: {},         // Shows the InfoWindow to the selected place upon a marker
//     location: {},
//     startingPoint: {}
//   };
  

//   componentDidMount() {

//     var options = {
//       enableHighAccuracy: true,
//       timeout: 5000,
//       maximumAge: 0
//     };
    
//     var success = (pos) => {
//       var crd = pos.coords;
    
//       console.log('Your current position is:');
//       console.log(`Latitude : ${crd.latitude}`);
//       console.log(`Longitude: ${crd.longitude}`);
//     }
    
//     var error = (err) => {
//       console.warn(`ERROR(${err.code}): ${err.message}`);
//     }
//     // sets the starting point to the user's current location
//    console.log(navigator.geolocation.getCurrentPosition(success, error, options));

//     // calls loadLocation API fetch
//     // loadLocation();

//     API.getLocation()
//       .then(res => {
//         console.log(res.data) 
//         this.setState({location: res.data})
//         console.log(location);
//       })
//       .catch(err => console.log(err));
//   }

//   // // Loads the API data and sets state
//   // loadLocation() {
//   //   API.getLocation()
//   //     .then(res => {
//   //       console.log(res.data) 
//   //       this.setState({location: res.data})
//   //       console.log(location);
//   //     })
//   //     .catch(err => console.log(err));
//   // };

//   onMarkerClick = (props, marker, e) =>
//   this.setState({
//     selectedPlace: props,
//     activeMarker: marker,
//     showingInfoWindow: true
//   });

//   onClose = props => {
//     if (this.state.showingInfoWindow) {
//     this.setState({
//       showingInfoWindow: false,
//       activeMarker: null
//     });
//   }
// };

//   render() {
//     // Height and width of map
//     const mapStyles = {
//       width: '100vw',
//       height: '100vh'
//     };

//     const containerStyle = {
//       position: 'relative',  
//       width: '100%',
//       height: '100%'
//     }      

//     return (
//       <Container>
//           <Map
//               google={this.props.google}
//               zoom={14}
//               containerStyle={containerStyle}
//               style={mapStyles}
//               initialCenter={
//                   {
//                       lat: this.props.startingPoint,
//                       lng: this.props.startingPoint
//                   }
//               }
//           />
//           {/* {this.state.location.map(loc => {
//             return (
//               <div>
//                 <Marker
//                 key={loc.ID}
//                 onClick={this.onMarkerClick}
//                 name={loc.AddressInfo.Title}
//                 />
//                 <InfoWindow
//                 marker={this.state.activeMarker}
//                 visible={this.state.showingInfoWindow}
//                 onClose={this.onClose}
//                 >
//                 <div>
//                     <h4>{this.state.selectedPlace.name}</h4>
//                 </div>
//                 </InfoWindow>
//               </div>
//             )
//           })} */}

//       </Container>        
//       );
//   }
// }

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
        width: '100vw',
        height: '100vh'
      };

      const containerStyle = {
        position: 'relative',  
        width: '100%',
        height: '100%'
      }      
  
      return (
        <Container>
            <Map
                google={this.props.google}
                zoom={14}
                containerStyle={containerStyle}
                style={mapStyles}
                initialCenter={
                    {
                        lat: this.props.startingPoint,
                        lng: this.props.startingPoint
                    }
                }
            />
            {/* {this.state.location.map(loc => {
              return (
                <div>
                  <Marker
                  key={loc.ID}
                  onClick={this.onMarkerClick}
                  name={loc.AddressInfo.Title}
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
                </div>
              )
            })} */}

        </Container>        
        );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyD_ojntZN4KtcGfvz62p81zYUfb8rTyyic'
  })(MapContainer);