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
    <APIProvider apiKey={API_KEY}>
      <Map className={styles.map}
        defaultCenter={location}
        defaultZoom={5}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      />
      {location && <MarkerComponent location={location} />}
    </APIProvider>
  );
};

export default MapComponent;
