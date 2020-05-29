import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Slide = () => {
  const params = {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  return (
    <div className="">
      <Swiper {...params}>
        <div className={`swipe `}>
          <img src="images/IMG_9427.JPG" alt="swipe" />
        </div>
        <div className={`swipe`}>
          <img src="images/IMG_9431.JPG" alt="swipe" />
        </div>
        <div className={`swipe`}>
          <img src="images/IMG_9440.JPG" alt="swipe" />
        </div>
      </Swiper>
    </div>
  );
};

export default Slide;
