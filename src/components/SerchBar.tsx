export default function SearchBar() {
  return (
    <div className="w-72 sm:w-80 md:w-96 flex border border-gray-500 rounded-3xl text-sm p-1 pl-3 pr-2">
      <input
        id="default-search"
        className="w-full bg-slate-950 text-white border-none outline-none"
        placeholder="Search"
        required
      />
      <button className="bg-slate-950 text-gray-400 font-bold rounded text-sm px-4 py-2">
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </div>
  );
}
