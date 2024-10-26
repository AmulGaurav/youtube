import { useRouter } from "next/router";
import ProgressBar from "./ProgressBar";
import type { Video } from "@/videos";

export default function VideoCard({ video }: { video: Video }) {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer hover:bg-gray-900 rounded-lg"
      onClick={() => {
        router.push("/video/1");
      }}
    >
      <div>
        <img src={video.thumbnail} alt="" />
        <ProgressBar progress={10} />
      </div>

      <div className="px-1.5 pb-2">
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-2 pt-2">
            <img className="w-20 h-14 rounded-full" src={video.logo} alt="" />
          </div>
          <div className="col-span-10">
            <div>{video.title}</div>
            <div className="text-gray-400 text-base">{video.author}</div>
            <div className="text-gray-400 text-base">
              {video.views} • {video.timestamp}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
