'use client'

import React, { useState, useEffect } from 'react';
import styles from '../styles/cmps/MapContainer.module.scss'
import MapComponent from './Map';

const MapContainer = () => {
    const [location, setLocation] = useState(null)

    return (
        <div className={styles.mapContainer}>
            <MapComponent />
        </div>
    )

}

export default MapContainer