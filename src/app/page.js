'use client'
import Image from "next/image";
import MainContentWrapper from "./cmps/MainContentWrapper";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState(null)
  console.log('The location is:', Location)
  
  return (
    <>
      <MainContentWrapper setLocation={setLocation} location={location}/> 
    </>
  );
}
