import Image from "next/image";
import { getMovieImageUrl } from "@/app/api/route";
import { Button, buttonVariants } from "./ui/button";

export default function Hero({ movie, toggleModal }) {
  const { title, backdrop_path, overview, vote_average } = movie;

  return (
    <section className="relative w-full min-h-screen px-2 md:px-12">

      {/* Background blur Mobile Image */}
      <Image
        src={getMovieImageUrl(backdrop_path)}
        alt={`${title} backdrop image`}
        fill
        className="md:hidden blur-md px-2"
        aria-hidden
      />

      {/* Main background image */}
      <Image
        src={getMovieImageUrl(backdrop_path)}
        alt={`${title} backdrop image`}
        fill
        className="mt-20 md:mt-auto object-contain md:object-cover object-top"
        priority
      />

      {/* Gradient Curtain */}
      <div className="absolute inset-0 bg-gradient-to-t md:from-black/95 via-transparent md:to-black/60 from-black/20 to-black/20 pointer-events-none" />

      {/* Movie Details */}
      <div className="absolute top-20 md:top-35 flex flex-col items-start justify-between text-white z-10 gap-4 w-[50%]">

        <h1 className="text-2xl lg:text-7xl font-bold">{title}</h1>
        <p className="text-md md:text-lg lg:w-[60%] line-clamp-3">{overview}</p>
        <div className="flex justify-between items-center gap-4">
          <p>⭐{vote_average}</p>
          <Button
            className={`${buttonVariants({ variant: "outline" })} cursor-pointer`}
            onClick={toggleModal}
          >
            Watch Trailer
          </Button>
          <Button
            className={`${buttonVariants({ variant: "secondary" })} cursor-pointer`}
          >
            Details
          </Button>
        </div>
      </div>
    </section>
  );
}
