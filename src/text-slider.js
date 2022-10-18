import React from "react";
import "./text-slider.css";

const TextSlider = () => {
  return (
    <div className="text-container">
      <div className="text loader">
        <p>...</p>
      </div>
      <div className="text">
        <p>What a view, you are so brave!</p>
      </div>
      <div className="text loader">
        <p>...</p>
      </div>
      <div className="text">
        <p>What a lovely dog!😍 Is that a retriever?</p>
      </div>
      <div className="text loader">
        <p>...</p>
      </div>
      <div className="text">
        <p>The smiles on your faces are the best!💞</p>
      </div>
      <div className="text loader">
        <p>...</p>
      </div>
      <div className="text">
        <p>You are so brave!</p>
      </div>
      <div className="text loader">
        <p>...</p>
      </div>
    </div>
  );
};

export default TextSlider;
