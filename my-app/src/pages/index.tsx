import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "../components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard
        title={"How to Code ? 30 Day Coding Course"}
        image={"photo.jpg"}
        author={"Harkirat Singh"}
        views={"100k"}
        time={"2 daya ago"}
      ></VideoCard>
    </div>
  );
}
