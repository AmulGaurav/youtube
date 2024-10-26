import AppBar from "@/components/AppBar";
import { VideoCardHorizontal } from "@/components/VideoCardHorizontal";
import { VIDEOS } from "@/videos";

export default function VideoPage() {
  return (
    <div className="px-4 py-2">
      <AppBar />

      <div className="grid gap-4 grid-cols-12 pt-5">
        <div className="col-span-12 lg:col-span-9 md:col-span-8 sm:col-span-7">
          <video
            width={"100%"}
            height={"720px"}
            controls
            poster="/thumbnail.jpg"
            src="/demo-video.mp4"
            className="cursor-pointer"
          />
          <div className="text-2xl">How to get better at coding</div>
        </div>

        <div className="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-5">
          {VIDEOS.map((video) => (
            <VideoCardHorizontal video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}
