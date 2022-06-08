import React from "react";
// import "./Slider.scss";
import Slider from "react-slick";
import slika from "../../assets/slika-5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../pages/products/Products.scss";

function ImageSlider({ images }) {
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
          <div className="product">
            <section className="">
              <img
                className="product__info"
                style={{ width: "50%", height: "50%" }}
                src={image.fields.file.url}
                // alt={title}
                // onClick={handleImageOpen}
                // ref={refBtn}
                // title={title}
                alt=""
              />
            </section>
          </div>
        ))}
    </Slider>
  );
}

export default ImageSlider;
