import Link from "next/link";

export default function Logo() {
  return (
    <Link href={'/'}>
      <h1 className="font-bold text-center text-white text-xl md:text-3xl lg:text-4xl text-stroke">
        Popcorn
        <span className="text-red-500 text-stroke">Picks</span>
      </h1>
    </Link>
  )
}
