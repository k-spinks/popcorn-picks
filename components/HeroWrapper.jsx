'use client'
import { useState } from "react";
import Hero from "./Hero";


// Wrapper Component to move state management/interactivity into a client component
export default function HeroWrapper({movies}) {
  const [focusedIndex, setFocusedIndex] = useState(9)
  const [trailerVisibility, setTrailerVisibility] = useState(false)
  
  function handleTrailerVisbility() {
    setTrailerVisibility(prev => !prev)
    console.log(trailerVisibility)
  }
  return (
    <>
      {/* Server component which still allows for data fetching */}
      <Hero movie={movies[focusedIndex]} onTrailerClick={handleTrailerVisbility} />

      {/* Carousel controls will also live here */}
      <div>

      </div>
    </>
  );
}
