import React from "react";
import "./Map.scss";

function Map() {
  return (
    <section className="map">
      <h1 className="map__title">GDJE SE NALAZIMO?</h1>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52372.61385559864!2d16.417546606367626!3d46.37937771300303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4768ae7fc00fee09%3A0x52af233921a182b!2sUl.%20Josipa%20Broza%2C%2040000%2C%20Ivanovec%2C%20Croatia!5e0!3m2!1sen!2sat!4v1644953286751!5m2!1sen!2sat"
        id="Frame Example"
        // width="600"
        // height="450"
        style={{ border: "none" }}
        loading="lazy"
      />

      <section className="info">
        <p>
          <strong>Gordana Bulovic</strong>
        </p>
        <p>
          <strong>Ul. Josipa Broza, 40000, Ivanovec</strong>
        </p>
        <p>
          <strong>Narudžbe:</strong> &nbsp;+385 91 528 61 42
        </p>
        <p>
          <strong>Email:</strong> &nbsp;lovebygoga@gmail.com
        </p>
      </section>
    </section>
  );
}

export default Map;
