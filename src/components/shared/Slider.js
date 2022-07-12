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
    <Slider
      {...settings}
      style={{ width: "100%", height: " 90%", objectFit: "contain" }}
    >
      {images &&
        images.length &&
        images.map((image) => (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            key={image?.sys.id}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={image?.fields.file.url}
            onDoubleClick={handleImageOpen}
            alt={image?.fields.title}
          />
        ))}
    </Slider>
  );
}

export default ImageSlider;
