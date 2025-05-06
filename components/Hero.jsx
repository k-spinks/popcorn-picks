import { getMovieImageUrl } from "@/app/api/route"
import Image from "next/image"

export default function Hero({ movies }) {
  const { title, backdrop_path } = movies;

  return (
    <section className="relative w-full h-screen">
      <Image
        src={getMovieImageUrl(backdrop_path)}
        alt={`${title} backdrop image`}
        fill
        className="object-cover"
        priority
      />

      {/* Optional content overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-4xl p-8">
        {title}
      </div>
    </section>
  );
}