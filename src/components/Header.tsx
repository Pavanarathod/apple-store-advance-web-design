import { useContext, useRef } from "react";
import clsx from "clsx";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { ScrollContext } from "../utils/scroll-observer";

type Props = {};

const Header = (props: Props) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  let progress: number = 0;

  const { current: elContainer } = refContainer;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  console.log("progress", progress);
  console.log("Header is rendering.");
  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/assets/bghero.mp4" />
      </video>
      <div
        className={clsx("flex-grow-0 pt-10 transition-opacity duration-1000")}
      >
        <Image
          src="/assets/AppleLogo.png"
          width={128 / 3}
          height={114 / 3}
          alt="logo"
        />
      </div>
      <div className="p-12 font-bold z-10  drop-shadow-[0_5px_3px_rgba(0,0,0,0,4)] text-center flex-1 flex items-center text-white justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">Margeloo</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>App Development</span> <span>donr right.</span>
        </h2>
      </div>
      <div>
        <ChevronDownIcon className="h-28 w-10 z-50 text-white bg-red-500" />
      </div>
    </div>
  );
};

export default Header;
