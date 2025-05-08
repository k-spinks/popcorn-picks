import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Popcorn Picks",
  description: "Discover movie reviews, trailers, ratings, and recommendations for your next film night. Popcorn Picks helps you find the best movies worth watching.",
  keywords: [
    "movie reviews",
    "film ratings",
    "movie trailers",
    "Popcorn Picks",
    "film recommendations",
    "cinema guide",
    "latest movies",
    "top rated films"
  ],
  authors: [{ name: "Kevin Spinks", url: "https://popcornpicks.com" }],
  openGraph: {
    title: "Popcorn Picks - Movie Reviews, Ratings & Trailers",
    description: "Find out what to watch next with Popcorn Picks. Read reviews, view trailers, and discover top-rated and trending movies.",
    url: "https://popcornpicks.com",
    siteName: "Popcorn Picks",
    images: [
      {
        url: "https://popcornpicks.com/og-image.jpg", // replace with actual image URL
        width: 1200,
        height: 630,
        alt: "Popcorn Picks movie reviews and trailers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Popcorn Picks - Discover the Best Movies",
    description: "Your go-to source for movie reviews, trailers, and film ratings.",
    site: "@popcornpicks", // replace with your Twitter handle if applicable
    images: ["https://popcornpicks.com/twitter-card.jpg"], // replace with actual image URL
  },
  metadataBase: new URL("https://popcornpicks.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased max-w-8xl mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
