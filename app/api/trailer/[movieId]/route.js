import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const { movieId } = await params;

  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      return NextResponse.json({ error: "TMDB error" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    console.error("Server error:", e);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
