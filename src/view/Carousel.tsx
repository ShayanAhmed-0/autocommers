"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} mr-0 sm:mr-8`}
      style={{ ...style, display: "block", background: "black" , borderRadius: "50%"}}
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
        "https://cdn.discordapp.com/attachments/1074432913690591285/1134561257031217182/wheel_cap.png",
        "https://cdn.discordapp.com/attachments/1074432913690591285/1134561257366769716/LED_Lights.png",
        "https://cdn.discordapp.com/attachments/1074432913690591285/1134561257614217307/mud.png",
        "https://cdn.discordapp.com/attachments/1074432913690591285/1134561257853300876/Perfumes.png",
        "https://cdn.discordapp.com/attachments/1074432913690591285/1134561258079801465/seat.png",
        "https://cdn.discordapp.com/attachments/1074432913690591285/1134561258314666106/steering.png",
        "https://cdn.discordapp.com/attachments/1074432913690591285/1134561310844133487/jump_Start.png",
        "https://cdn.discordapp.com/attachments/1074432913690591285/1134561311200661665/air_Freshner.png",
        "https://cdn.discordapp.com/attachments/1074432913690591285/1134561311628460083/bluetooth.png",
        "https://cdn.discordapp.com/attachments/1074432913690591285/1134561311938859038/car_keys.png",
        "https://cdn.discordapp.com/attachments/1074432913690591285/1134561312437960876/CLEANING.png",
        "https://cdn.discordapp.com/attachments/1074432913690591285/1134561312777707681/CLEANING_CLOTHE.png",
        "https://cdn.discordapp.com/attachments/1074432913690591285/1134561313075495064/cover.png"
      ];
    
      const settings = {
        dots: true,
        autoplay:true,
        autoplaySpeed: 4000,
        infinite: true,
        speed: 1000,
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
        <div className="relative justify-center border-none">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index} className="border-none">
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