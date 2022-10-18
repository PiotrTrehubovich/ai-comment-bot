import React from "react";
import "./photo-slider.css";

const PhotoSlider = () => {
  return (
    <div className="carousel">
        <img src="Pictures/image1.jpg" alt="image1" />
        <img src="Pictures/image2.jpg" alt="image2" />
        <img src="Pictures/image3.jpg" alt="image3" />
        <img src="Pictures/image1.jpg" alt="image1" />
    </div>
  );
};

export default PhotoSlider;