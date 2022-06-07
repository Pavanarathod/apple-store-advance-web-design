import React, { useCallback, useRef } from "react";
import { SizeContext } from "../utils/size-observer";
import useAnimationFram from "../utils/use-animation-frame";

interface Props {
  initialOffSetX: number;
  className: string;
  contentWidth: number;
  children: React.ReactNode;
}

const SliderContainer: React.FC<Props> = ({
  children,
  initialOffSetX,
  className,
  contentWidth,
}) => {
  const { innerWidth } = React.useContext(SizeContext);
  const refScrollX = useRef<number>(initialOffSetX);
  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const enabled = innerWidth < contentWidth;

  useAnimationFram(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;

      if (elContainer && elContent) {
        refScrollX.current += 0.5;
        elContainer.scrollLeft = refScrollX.current;
        if (elContainer.scrollLeft > elContent.clientWidth) {
          refScrollX.current = 0;
          elContainer.scrollLeft = 0;
        }
      }
    }, [])
  );

  return (
    <div
      ref={refContainer}
      className={`slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ${className}`}
    >
      <div ref={refContent} className="inline-block">
        {children}
      </div>
    </div>
  );
};

interface ItemProps {
  width: number;
  children: React.ReactNode;
}

export const SliderItem: React.FC<ItemProps> = ({ children, width }) => {
  return (
    <div
      className="inline-flex justify-center items-center mx-4"
      style={{ width }}
    >
      {children}
    </div>
  );
};

export default SliderContainer;
