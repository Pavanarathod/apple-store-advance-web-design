import React from "react";
import Carousel from "../utils/carousel";
import CarouselItem from "./carousel-item";

const Testimonials: React.FC = () => {
  return (
    <Carousel className="bg-black text-white py-10 lg:py-20">
      <CarouselItem index={0}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus dolorum, vitae suscipit architecto odit exercitationem
          aliquid rerum adipisci similique sapiente.
        </div>
      </CarouselItem>
      <CarouselItem index={2}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus dolorum, vitae suscipit architecto odit exercitationem
          aliquid rerum adipisci similique sapiente.
        </div>
      </CarouselItem>
      <CarouselItem index={3}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus dolorum, vitae suscipit architecto odit exercitationem
          aliquid rerum adipisci similique sapiente.
        </div>
      </CarouselItem>
      <CarouselItem index={4}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus dolorum, vitae suscipit architecto odit exercitationem
          aliquid rerum adipisci similique sapiente.
        </div>
      </CarouselItem>
      <CarouselItem index={5}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus dolorum, vitae suscipit architecto odit exercitationem
          aliquid rerum adipisci similique sapiente.
        </div>
      </CarouselItem>
      <CarouselItem index={6}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus dolorum, vitae suscipit architecto odit exercitationem
          aliquid rerum adipisci similique sapiente.
        </div>
      </CarouselItem>
    </Carousel>
  );
};

export default Testimonials;
