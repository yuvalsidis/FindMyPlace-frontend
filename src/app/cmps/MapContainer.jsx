
import React, { useState, useEffect } from 'react';
import styles from '../styles/cmps/MapContainer.module.scss'
import Map from './Map';

const MapContainer = () => {
    const [location, setLocation] = useState(null)
    
    return (
        <div className={styles.map-container}>
            <h1>map containerr</h1>
             <Map/>
        </div>
    )

}

export default MapContainer