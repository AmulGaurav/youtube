import VideoCard from "./VideoCard";
import { VIDEOS } from "@/videos";

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {VIDEOS.map((video, index) => (
        <div key={index}>
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
}
