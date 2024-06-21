'use client'
import Image from "next/image";
import MainContentWrapper from "./cmps/MainContentWrapper";
import { useState, useEffect } from "react";
import LocationAccessModal from "./cmps/LocationAccessModal";

export default function Home() {
  const [location, setLocation] = useState({ lat: 22.14992, lng: 0 })
  console.log('The location is:', location)
 
  useEffect(()=>{
    console.log('The Location is: ',location)
    setTimeout(()=>{

    }, 2000)
  },[location])

  const [isLocationModalOpen, setIsLocationModalOpen] = useState(true)

  const handleOpenModal = () => {
    setIsLocationModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsLocationModalOpen(false);
  }

  return (
    <>
      <MainContentWrapper location={location} />
      <LocationAccessModal
        isLocationModalOpen={isLocationModalOpen}
        setLocation={setLocation}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  )
}
