import Image from "next/image";
import { getMovieImageUrl } from "@/app/api/route";
import { Button, buttonVariants } from "./ui/button";

export default function Hero({ movie, onTrailerClick }) {
  const { title, backdrop_path, overview, vote_average } = movie;

  return (
    <section className="relative w-full min-h-screen">
      <Image
        src={getMovieImageUrl(backdrop_path)}
        alt={`${title} backdrop image`}
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient Curtain */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />

      {/* Movie Details */}
      <div className="absolute top-35 flex flex-col w-[50%] items-center justify-between text-white z-10 gap-7">
        <h1 className="lg:text-7xl font-bold ">{title}</h1>
        <p className="text-sm">{overview}</p>
        <p>{vote_average}</p>
        <Button
          className={buttonVariants({ variant: "outline" })}
          onClick={onTrailerClick}
        >
          Trailer
        </Button>
      </div>
    </section>
  );
}
