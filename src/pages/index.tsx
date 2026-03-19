import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/Components/ui/button";
import { Header } from "@/Components/Header/";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}grid grid-row-[20px_1rf_20px] items-center justify-items-center min h-screen p-8
    pb-20gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
      <Header/>
    </div>
  );
}
