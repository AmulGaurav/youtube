import { useRouter } from "next/router";
import SearchBar from "./SerchBar";

export default function AppBar() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center">
      <button
        className="px-3 py-1.5 bg-red-600 hover:bg-red-700 rounded-lg"
        onClick={() => {
          router.push("/");
        }}
      >
        YouTube
      </button>
      <div>
        <SearchBar />
      </div>
      <button className="px-3 py-1.5 bg-blue-800 hover:bg-blue-700 rounded-lg">
        Sign In
      </button>
    </div>
  );
}
