import React, { useContext, useRef } from "react";
import { ScrollContext } from "../utils/scroll-observer";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progres = sectionProgress - blockNo;
  if (progres > 0 && progres < 1) return 1;
  return 0.2;
};

const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages: number = 3;
  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col items-center justify-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div
            className="transition-opacity duration-[0.4s]"
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            We know our tools indisde out
          </div>
          <span
            className={`transition-opacity duration-[0.4s] inline-block after:contnet-['_']`}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            Out team has contributed 123 commits to React Native core, powering
            thousands of apps worldwide.
          </span>
          <span
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
            className={`transition-opacity duration-[0.4s] inline-block after:contnet-['_']`}
          >
            We&;re maintaining some of the most populer projects, with over
            <strong> 1,234</strong> downloads
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
