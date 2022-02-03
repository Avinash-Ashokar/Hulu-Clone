import requests from "../utils/requests";
import { useRouter } from "next/router";

export function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="scrollbar-hide flex px-10 whitespace-nowrap sm:px-20 space-x-10 sm:space-x-20 overflow-x-auto">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h3
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100ms transform hover:scale-125 active:text-red-600"
            key={key}
          >
            {title}
          </h3>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-white w-1/12 h-10" />
    </nav>
  );
}
