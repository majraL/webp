import React, { Component } from "react";
import cat from "images/cat.jpg";
import cats from "images/cats.jpg";
import dog from "images/dog.jpg";

const App = () => {
  return (
    <div className="container">
      <div className="image-wrapper">
        <img className="img-wrapper__image" src={cat} alt="#cat"/>
      </div>

      <div className="image-wrapper">
        <img className="img-wrapper__image" src={cats} alt="#cats" />
      </div>

      <div className="image-wrapper">
        <img className="img-wrapper__image" src={dog} alt="#dog" />
      </div>
    </div>
  )
}

export default App;
