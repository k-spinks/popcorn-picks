"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TrailerPlayer from "./TrailerPlayer";
import { X } from "@deemlol/next-icons";

export default function Modal({ visible, toggleModal, movieId }) {
  const [trailerData, setTrailerData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("Visibility:", visible)

  useEffect(() => {
    const fetchTrailer = async () => {
      if (!visible) return;

      setIsLoading(true);
      setError(null); // Reset error state

      try {
        // Fetch the trailer from the new API route
        const res = await fetch(`/api/trailer/${movieId}`);
        const data = await res.json();

        // If no trailer data is returned or error, handle accordingly
        if (!data.results || data.results.length === 0) {
          setError("No trailer available");
          setTrailerData(null);
          return;
        }

        // Filter out YouTube trailer
        const trailer = data.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );

        console.log("Filter youtube:", trailer)

        if (trailer) {
          setTrailerData(trailer); // Set the trailer data in state

        } else {
          setError("Trailer not found on YouTube");
          setTrailerData(null);
        }
      } catch (e) {
        console.error("Error fetching trailer:", e);
        setError("Failed to fetch trailer");
        setTrailerData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrailer();
  }, [movieId, visible]); // Re-fetch trailer if movieId or visibility changes

  // Select first YouTube trailer
  const youTubeTrailer = trailerData;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={toggleModal} // closes modal when background is clicked
        >
          <motion.div
            className="text-black p-4 rounded-xl relative max-w-3xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()} // prevent closing on inner click
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isLoading && <div>Loading...</div>}
            {!isLoading && !youTubeTrailer && <div>No trailer available</div>}
            {!isLoading && youTubeTrailer && (
              <TrailerPlayer trailerKey={youTubeTrailer.key} title={youTubeTrailer.name}/>
            )}
            <button className="hover:cursor-pointer">
              <X
                size={36}
                color="white"
                className="absolute top-0 left-190"
                onClick={toggleModal}
              />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
