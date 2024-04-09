import { VideoCard } from "../components/VideoCard";

const VIDEOS = [
  {
    title: "How to Code ? 30 Day Coding Course",
    image: "photo.jpg",
    author: "Harkirat Singh",
    views: "100k",
    time: "2 daya ago",
  },
  {
    title: "How to Code ? 30 Day Coding Course",
    image: "photo.jpg",
    author: "Harkirat Singh",
    views: "100k",
    time: "2 daya ago",
  },
  {
    title: "How to Code ? 30 Day Coding Course",
    image: "photo.jpg",
    author: "Harkirat Singh",
    views: "100k",
    time: "2 daya ago",
  },
  {
    title: "How to Code ? 30 Day Coding Course",
    image: "photo.jpg",
    author: "Harkirat Singh",
    views: "100k",
    time: "2 daya ago",
  },
];

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            author={video.author}
            views={video.views}
            time={video.time}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
}
