import React from "react";
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import styles from '../styles/cmps/Map.module.scss';
import MarkerComponent from "./MarkerComponent";

const MapComponent = ({ location }) => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!API_KEY) {
    return <h1>Loading</h1>;
  }
  
  return (
    <APIProvider apiKey={API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
      <Map className={styles.map}
        defaultCenter= {location}
        defaultZoom={10}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        id="main-map"
      />
      {location && <MarkerComponent location={location} />}
    </APIProvider>
  );
};

export default MapComponent;
