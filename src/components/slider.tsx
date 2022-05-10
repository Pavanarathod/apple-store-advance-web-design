import React, { useRef } from "react";
import { SizeContext } from "../utils/size-observer";

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
  const refScrollX = useRef<HTMLDivElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const enabled = innerWidth === contentWidth;

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

export default SliderContainer;
