import React, { useContext, useRef } from "react";
import { ScrollContext } from "../utils/scroll-observer";

interface WrapperProps {
  numofPages: number;
  children?: React.ReactNode;
}

interface TileContextValue {
  numofPages: number;
  currentPage: number;
}

interface ChildrenProps {
  children?: React.ReactNode;
}

interface Props {
  page: number;
  rederContent: (props: { progress: number }) => any;
}

export const TileContext = React.createContext<TileContextValue>({
  numofPages: 0,
  currentPage: 0,
});

export const TileWrapper: React.FC<WrapperProps> = ({
  children,
  numofPages,
}) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const { current: elContainer } = refContainer;

  let currentPage = 0;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    currentPage = percentY * numofPages;
  }
  return (
    <TileContext.Provider value={{ numofPages, currentPage }}>
      <div ref={refContainer} className="relative bg-black text-white">
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground: React.FC<ChildrenProps> = ({ children }) => {
  return <div className="absolute h-full w-full">{children}</div>;
};

export const TileContent: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
  );
};

export const Tile: React.FC<Props> = ({ page, rederContent }) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { currentPage, numofPages } = useContext(TileContext);

  const { current: elContainer } = refContainer;
  const progress = Math.max(0, currentPage - page);
  let opacity = Math.min(1, Math.max(0, progress * 4));

  if (progress > 0.85 && page < numofPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }

  return (
    <div
      ref={refContainer}
      className="absolute top-0 w-full"
      style={{
        pointerEvents: progress >= 0 || progress >= 1 ? "none" : undefined,
        opacity,
      }}
    >
      {rederContent({ progress })}
    </div>
  );
};
