import React from "react";
import "./Slider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../pages/products/Products.scss";

function ImageSlider({ images, handleImageOpen }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images &&
        images.map((image) => (
          <img
            key={image.sys.id}
            // className=""
            style={{ width: "50%", height: "50%" }}
            src={image.fields.file.url}
            // alt={title}
            onClick={handleImageOpen}
            // ref={refBtn}
            // title={title}
            alt=""
          />
        ))}
    </Slider>
  );
}

export default ImageSlider;
