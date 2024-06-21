

import React, { useState, useEffect } from 'react';
import styles from '../styles/cmps/MapContainer.module.scss'
import MapComponent from './Map';

const MapContainer = ({location}) => {

    return (
        <div className={styles.mapContainer}>
            <MapComponent location={location}/>
        </div>
    )

}

export default MapContainer