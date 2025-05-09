import { Vibrant } from 'node-vibrant/node';

export async function getHeroMovies() {
  try {
    const API_KEY = process.env.API_KEY;
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };
    const movieListResponse = await fetch(url, options);
    const movieList = await movieListResponse.json();

    // Limit to the first 10 movies
    const firstTenMovies = movieList.results.slice(0, 10);

    // Map through the movies and fetch their dominant colors
    const moviesWithColors = await Promise.all(
      firstTenMovies.map(async (movie) => {
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        try {
          const vibrant = new Vibrant(imageUrl);
          const palette = await vibrant.getPalette();
          const dominantColor = palette.Vibrant.hex;

          return {
            ...movie,
            dominantColor,
          };
        } catch (error) {
          console.error(`Error processing image for movie ${movie.id}:`, error);
          return movie;
        }
      })
    );

    // Return the movie list with dominant colors as JSON
    return moviesWithColors; // Simply return the data, no need for `Response`
  } catch (error) {
    console.error(
      "Error fetching movies or extracting dominant colors:",
      error
    );
    throw new Error("Failed to fetch movie data");
  }
}
