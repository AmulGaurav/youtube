import Image from "next/image";
import localFont from "next/font/local";
import VideoGrid from "@/components/VideoGrid";
import AppBar from "@/components/AppBar";
import LeftBar from "@/components/LeftBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="px-4 py-2">
      <AppBar />
      <div className="flex gap-6">
        <LeftBar />
        <VideoGrid />
      </div>
    </main>
  );
}
