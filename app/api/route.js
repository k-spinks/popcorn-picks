const API_KEY = process.env.API_KEY;

export const getSingleMovie = async () => {
  const url = "https://api.themoviedb.org/3/movie/552524?language=en-US";
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

export async function getMultipleMovies() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
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

    const data = await res.json();
    const movies = data.results;
    return movies;
  } catch (e) {
    console.log(e);
  }
}

export async function getTrailer(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`TMDB error: ${res.status}`);
    }

    const data = await res.json();
    return data
  } catch (e) {
    console.log(e);
  }
}
