import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/Components/ui/button";

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
    <div className= "min-h-screen mix-w-full bg-slate-500 ">
      <h2 className= "text=4xl text-red-400">Hello World</h2>
    <Button className= "text-red-950 bg-lime-600 rounded-4xl w-max h-max rounded-2xl" >Bofaofna</Button>
    </div>
  );
}
