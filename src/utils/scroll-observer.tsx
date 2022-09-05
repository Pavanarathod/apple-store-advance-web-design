import { createContext, useCallback, useEffect, useState } from "react";

interface ScrollValue {
  scrollY: number;
}

export const ScrollContext = createContext<ScrollValue>({
  scrollY: 0,
});

interface ScrollObserverProps {
  children: React.ReactNode;
}

const ScrollObserver = ({ children }: ScrollObserverProps) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const value = {
    scrollY,
  };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};

export default ScrollObserver;
