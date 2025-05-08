"use client";
import { useState } from "react";
import Hero from "./Hero";
import Modal from "./Modal";

// Wrapper Component to move state management/interactivity into a client component
export default function HeroWrapper({ movies }) {
  const [focusedIndex, setFocusedIndex] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <>
      {/* Server component which still allows for data fetching */}
      <Hero movie={movies[focusedIndex]} toggleModal={toggleModal} />
      {isModalOpen && (
        <Modal
          visible={isModalOpen}
          toggleModal={toggleModal}
          movieId={movies[focusedIndex]?.id}
        />
      )}
      {/* Carousel controls will also live here */}
      <div></div>
    </>
  );
}
