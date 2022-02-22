import React from "react";
import "./Home.scss";
import home_img from "../../assets/home_page.jpg";

function Home() {
  return (
    <main className="home">
      <div className="home__main-content">
        <h1>Love by Goga</h1>
        <p>
          Uljepšajte i uveselite vaš dom sa šarenim, unikatnim, ručno oslikanim
          drvenim ukrasima
        </p>
      </div>
      <img src={home_img} alt="Love by Goga" />s
    </main>
  );
}

export default Home;
