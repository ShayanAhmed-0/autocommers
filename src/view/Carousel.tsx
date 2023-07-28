"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , borderRadius: "50%",marginRight:"40px" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className }
      style={{ ...style, display: "block", background: "black" , borderRadius: "50%" ,}}
      onClick={onClick}
    />
  );
}
const CarouselSlider = () => {
    const carouselImages = [
        "https://i.ibb.co/fDngH9G/carosel-1.png",
        "https://i.ibb.co/DWrGxX6/carosel-2.png",
        "https://i.ibb.co/tCfVky2/carosel-3.png",
        "https://i.ibb.co/rFsGfr5/carosel-4.png",
        "https://i.ibb.co/fDngH9G/carosel-1.png",
        "https://i.ibb.co/DWrGxX6/carosel-2.png",
        "https://i.ibb.co/tCfVky2/carosel-3.png",
        "https://i.ibb.co/rFsGfr5/carosel-4.png",
        "https://i.ibb.co/fDngH9G/carosel-1.png",
        "https://i.ibb.co/DWrGxX6/carosel-2.png",
        "https://i.ibb.co/tCfVky2/carosel-3.png",
        "https://i.ibb.co/rFsGfr5/carosel-4.png",
      ];
    
      const settings = {
        dots: true,
        autoplay:true,
        autoplaySpeed: 400,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      
      };
    
      return (
        <div className="relative justify-center">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Carousel Image ${index + 1}`}
                  className=""
                />
                {/* className="object-cover w-full h-64" */}
              </div>
            ))}
          </Slider>
        </div>
  );
};

export default CarouselSlider;