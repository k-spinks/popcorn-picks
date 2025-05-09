
import { getHeroMovies } from "./api/movies/route";
import { getMultipleMovies } from "./api/route";
import HeroWrapper from "@/components/HeroWrapper";

export default async function Home() {
  // Fetch the movies with dominant color data
  const movies = await getHeroMovies()

  return (
    <div className="text-white">
      {/* Pass the first 10 movies to HeroWrapper */}
      <HeroWrapper movies={movies} />
    </div>
  );
}
