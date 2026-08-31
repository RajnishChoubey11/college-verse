import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "College Verse | Top Colleges & Universities Ranking",
  description: "Explore and discover the top colleges and universities across Engineering, Medical, Management, Pharmacy, and University disciplines.",
  icons: {
    icon: "/img.png",
    apple: "/img.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col bg-orbit min-h-screen text-white px-4 sm:px-6`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
