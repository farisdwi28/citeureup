import React from "react";
import { Carousel } from "@material-tailwind/react";
import images from "../constans/images";

const Carou = () => {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl h-96">
      <img
        src={images.banner1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={images.banner2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img src={images.banner3} className="h-full w-full object-cover" />
    </Carousel>
  );
};

export default Carou;
