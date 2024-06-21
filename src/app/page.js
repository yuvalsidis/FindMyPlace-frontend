'use client'
import Image from "next/image";
import MainContentWrapper from "./cmps/MainContentWrapper";
import { useState, useEffect } from "react";
import LocationAccessModal from "./cmps/LocationAccessModal";

export default function Home() {
  const [location, setLocation] = useState(null)
  console.log('The location is:', location)

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
