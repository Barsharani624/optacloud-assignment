// components/MapComponent.js
import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your Google Maps API key
  });

  const [location, setLocation] = useState(center);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={10}
      onClick={(e) => setLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() })}
    >
      <Marker position={location} draggable={true} />
    </GoogleMap>
  );
};

export default MapComponent;
