import Hero from "@/components/Hero";
import { getSingleMovie } from "./api/route";

export default async function Home() {
  const movie = await getSingleMovie()
  return (
    <div className="text-white">
      <Hero movies={movie}/>
    </div>
  );
}
