import React from "react";
import { APIProvider, Map} from '@vis.gl/react-google-maps';
import styles from '../styles/cmps/Map.module.scss';

const MapComponent = () => {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!API_KEY) {
        return <h1>Loading</h1>;
    }

    return (
      <APIProvider apiKey={API_KEY}>
      <Map className={styles.map}
        defaultCenter={{lat: 22.54992, lng: 0}}
        defaultZoom={3}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      />
    </APIProvider>
    );
};

export default MapComponent;
