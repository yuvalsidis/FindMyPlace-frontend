

import React, { useState, useEffect } from 'react';
import styles from '../styles/cmps/MapContainer.module.scss'
import MapComponent from './Map';

const MapContainer = ({setLocation, location}) => {

    return (
        <div className={styles.mapContainer}>
            <MapComponent />
        </div>
    )

}

export default MapContainer