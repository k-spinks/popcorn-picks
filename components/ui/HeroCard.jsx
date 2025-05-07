import { getMovieImageUrl, getSingleMovie } from "@/app/api/route"
import Image from "next/image"

export default async function HeroCard() {
  const data = await getSingleMovie()
  const {title, vote_average, release_date, poster_path} = data
  return (
    <div className="text-white border-2 border-amber-100 w-fit">
      <div className="">
        <Image src={getMovieImageUrl(poster_path)} alt={`${title} poster`} width={150} height={150} />
      </div>
    </div>
  )
}