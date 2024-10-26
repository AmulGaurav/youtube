export default function LeftBar() {
  return (
    <div className="bg-gray-950 w-80 lg:w-96 hidden md:block">
      <BarWithIcon />
      <BarWithIcon />
      <BarWithIcon />
      <Line />
      <BarWithIcon />
      <BarWithIcon />
      <BarWithIcon />
      <BarWithIcon />
      <BarWithIcon />
      <Line />
      <BarWithIcon />
      <BarWithIcon />
      <BarWithIcon />
      <Line />
    </div>
  );
}

const Line = () => {
  return (
    <div className="w-full h-px bg-gray-700 px-3 opacity-20">
      <div className="h-0.5 bg-gray-500"></div>
    </div>
  );
};

function BarWithIcon() {
  return (
    <div className="overflow-x-visible">
      <BarElement
        title={"Home"}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
      />
    </div>
  );
}

function BarElement({ icon, title }: { icon: any; title: string }) {
  return (
    <div className="w-full rounded-xl bg-slate-950 hover:bg-gray-700 flex px-3 py-2 m-2 cursor-pointer">
      <div className="pr-2">{icon}</div>
      <div>{title}</div>
    </div>
  );
}
