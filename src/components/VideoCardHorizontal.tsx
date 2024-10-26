import { useRouter } from "next/router";
import type { Video } from "@/videos";
import ProgressBar from "./ProgressBar";

export const VideoCardHorizontal = ({ video }: { video: Video }) => {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer grid grid-cols-12 mb-1.5"
      onClick={() => {
        router.push("/video/1");
      }}
    >
      <div className="rounded-xl overflow-hidden col-span-5">
        <img src={video.thumbnail} />
        <ProgressBar progress={10} />
      </div>

      <div className="col-span-7 pl-2">
        <div className={"text-white-800 text-sm font-medium pb-2"}>
          {video.title}
        </div>
        <div className="flex">
          <div className={"text-gray-400 text-xs font-normal pr-2"}>
            {video.views}
          </div>
          <div className={"text-gray-400 text-xs font-normal		"}>
            • {video.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
};