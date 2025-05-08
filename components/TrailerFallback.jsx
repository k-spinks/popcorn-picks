export default function TrailerFallback() {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center">
      <p className="text-lg font-semibold text-red-500">Trailer not available</p>
      <p className="text-sm text-gray-400">We couldn't find a trailer for this movie.</p>
    </div>
  );
}
