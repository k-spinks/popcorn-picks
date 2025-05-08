export default function TrailerPlayer({ trailerKey, title }) {
  const embedUrl = `https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0`;
  console.log("Trailer Key:", trailerKey);
  return (
    <div className="aspect-video w-full">
      <iframe
        className="w-full h-full rounded-lg"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-presentation"
      />
    </div>
  );
}
