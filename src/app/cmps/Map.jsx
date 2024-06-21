import React from "react";
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import styles from '../styles/cmps/Map.module.scss';

const MapComponent = ({location}) => {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!API_KEY) {
        return <h1>Loading</h1>;
    }
    
    return (
      <APIProvider apiKey={API_KEY}>
      <Map className={styles.map}
        defaultCenter={!location?{lat: 22.14992, lng: 0} : {lat: location.latitude, lng: location.longitude}}
        defaultZoom={5}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      />
    </APIProvider>
    );
};

export default MapComponent;
