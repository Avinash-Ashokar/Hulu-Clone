import Image from "next/image";
import { HomeIcon } from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

export function Header() {
  return (
    <div>
      <HeaderItem title="HOME" Icon={HomeIcon} />
      <Image
        className="object-container"
        src="/hulu-logo.png"
        width="200"
        height="100"
      />
    </div>
  );
}
