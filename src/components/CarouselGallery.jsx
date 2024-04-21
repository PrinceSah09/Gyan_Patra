"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const imageStyle = {
  border: "1px solid #fff",
  width: "100%",
  height: "500px",
};

function CarouselGallery() {
  return (
    <div>
      <Carousel
        className="max-w-screen-xl mx-auto   md:h-[400px] mb-4"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="">
          <CarouselItem>
            <Image
              src={"/1.jpg"}
              width={1400}
              height={1400}
              style={imageStyle}
              alt="Picture of the author"
              className="object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={"/2.jpg"}
              width={1400}
              height={1200}
              style={imageStyle}
              alt="Picture of the author"
              className="object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={"/3.jpg"}
              width={1400}
              height={1200}
              style={imageStyle}
              alt="Picture of the author"
              className="object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={"/4.jpg"}
              width={1400}
              height={1200}
              style={imageStyle}
              alt="Picture of the author"
              className="object-cover"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CarouselGallery;
