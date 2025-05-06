const API_KEY = process.env.API_KEY;

export const getSingleMovie = async () => {
  const url = "https://api.themoviedb.org/3/movie/324857?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`TMDB error: ${res.status}`);
    }

    return res.json();
  } catch (e) {
    console.error(e);
    return;
  }
};

export function getMovieImageUrl(posterPath, size = "original") {
  if (!posterPath) return null;
  return `https://image.tmdb.org/t/p/${size}${posterPath}`;
}