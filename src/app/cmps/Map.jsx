import React from "react";
import { useState, useRef, useEffect } from "react";
import styles from '../styles/cmps/Map.module.scss'
import { apiKey } from "../../../enviroment";
import { APIProvider } from '@vis.gl/react-google-maps';

const Map = () => {

      return (
            <div className={styles.map}>
                  <h1>map</h1>
            </div>
      )
}

export default Map