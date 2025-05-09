import { getMovieImageUrl } from "@/app/api/route"
import Image from "next/image"

export default function CarouselCard({ movie, isFocused, setFocusedIndex }) {
  const { title, poster_path, dominantColor, id } = movie;
  const imageUrl = getMovieImageUrl(poster_path);

  return (
    <div className="text-white flex flex-col items-center py-8 hover:cursor-pointer hover:scale-110 hover:z-20 transition-transform duration-300 ease-in-out" >
      <div
        className={`
          relative h-[175px] w-[150px] rounded-2xl border-2
          transition-transform duration-300 ease-in-out
          ${isFocused ? 'z-20 scale-120 shadow-[0_0_20px_5px] border-transparent' : 'scale-100'}
        `}
        style={{
          borderColor: isFocused ? 'transparent' : dominantColor,
          boxShadow: isFocused
            ? `0 0 20px 5px ${dominantColor}`
            : 'none',
        }}
      >
        <Image
          src={imageUrl}
          alt={`${title} poster art`}
          fill
          className="object-cover object-center rounded-2xl"
          onClick={() => setFocusedIndex(id)}
        />
      </div>
    </div>
  );
}