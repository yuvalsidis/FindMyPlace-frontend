'use client'
import Image from "next/image";
import MainContentWrapper from "./cmps/MainContentWrapper";
import { useState } from "react";
import LocationAccessModal from "./cmps/LocationAccessModal";

export default function Home() {
  const [location, setLocation] = useState(null)
  console.log('The location is:', Location)

  return (
    <>
      <MainContentWrapper location={location}/> 
      <LocationAccessModal setLocation={setLocation}/>
    </>
  );
}
