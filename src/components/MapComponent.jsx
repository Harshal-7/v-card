import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({ lat, lng }) => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDxAmtDilV-oiBhBD4iLTm-Fc3ryScxq0g"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={{ lat, lng }}
        zoom={8}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;


// class Googlemaps extends Component {
//     render(){
//         return(
//             <Map
//                 google = {this.props.google}
//                 style = {{width:'100%', height:'100%'}}
//                 zoom = {10}
//                 initialCenter = {
//                     {
//                         lat: 17.950100,
//                         lng: 73.885300
//                     }
//                 }
//             />
//         )
//     }
// }

// export default useJsApiLoader({
//     apikey:'AIzaSyDxAmtDilV-oiBhBD4iLTm-Fc3ryScxq0g'
// })(Googlemaps)

/*
AIzaSyDxAmtDilV-oiBhBD4iLTm-Fc3ryScxq0g
*/