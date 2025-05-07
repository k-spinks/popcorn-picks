import { getMultipleMovies } from "./api/route";
import HeroWrapper from "@/components/HeroWrapper";

export default async function Home() {
  const movies = await getMultipleMovies()
  return (
    <div className="text-white">
      <HeroWrapper movies={movies.slice(0,10)} />
    </div>
  );
}
