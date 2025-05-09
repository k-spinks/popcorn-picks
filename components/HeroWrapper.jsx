"use client";
import { useState } from "react";
import Hero from "./Hero";
import Modal from "./Modal";
import CarouselCard from "./ui/CarouselCard";

// Wrapper Component to move state management/interactivity into a client component
export default function HeroWrapper({ movies }) {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen((prev) => !prev);
  }

  function updateFocusedIndex(id) {
    const index = movies.findIndex((movie) => movie.id === id);
    setFocusedIndex(index);
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
      <div className="absolute top-130 flex gap-4 justify-between items-center overflow-clip mb-6">
        {movies.map((movie, idx) => (
          <CarouselCard
            key={movie.id}
            movie={movie}
            isFocused={idx === focusedIndex}
            setFocusedIndex={updateFocusedIndex}
          />

        ))}
      </div>
    </>
  );
}
