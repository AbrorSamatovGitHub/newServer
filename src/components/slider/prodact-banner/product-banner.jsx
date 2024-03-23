import React from "react";
import Slider from "react-slick";
import { ArrowRight } from "../../../assets/icons/arrow-right";
import { ArrowLeft } from "../../../assets/icons/arrow-left";
import "./style.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        position: "absolute",
        top: "-20px",
      }}
    >
      <span className="absolute -translate-x-1/2 -translate-y-1/2 - top-1/2 left-1/2 ">
        <ArrowRight />
      </span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        position: "absolute",

        top: "-20px",
        left: "95%",
        zIndex: 4,
      }}
      onClick={onClick}
    >
      <span className="absolute -translate-x-1/2 -translate-y-1/2 bg- - top-1/2 left-1/2">
        <ArrowLeft />
      </span>
    </div>
  );
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  autoplay: true,
  slidesToScroll: 2,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint:992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const ProdactBanner = ({ children }) => {
  return (
    <div className="relative ">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
