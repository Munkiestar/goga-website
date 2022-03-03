import React, { useState } from "react";
import "./About.scss";

import about_img from "../../assets/o-nama.jpg";

function About() {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => setShowMore(!showMore);

  return (
    <div className="about">
      <h1 className="about__title">O NAMA</h1>

      <img className="about__img" src={about_img} alt="Familija" />

      <p>
        Oduvijek volim crtati, rezati, lijepiti… kreativka od malena, a Goran
        spretan s alatom i sa puno strpljenja za moje ideje, pa je stvaranje
        kreativnog brenda Love by Goga bilo samo pitanje vremena.
      </p>
      <p>
        U početku smo radili daskice, kako ih od milja zovemo, za nas, naše
        prijatelje i njihove prijatelje. Kada smo vidjeli da se one sviđaju i
        ljudima koji nas ne poznaju i da pitaju kako doći do naših proizvoda
        odlučili smo otvoriti obrt Bulović. Najviše nas vesele osmijeh i
        zadovoljstvo na licima odraslih, a naročito djece kada u ruke prime
        drvenu pločicu sa svojim imenom ili porukom koja je ispisana samo za
        njih. Naše glave su prepuna ideja, inspiraciju pronalazimo svuda oko
        sebe, a često nas oduševe zanimljive narudžbe kupaca koje se zatim
        trudimo što bolje sprovesti u djelo.
      </p>

      <div className={showMore ? "show" : "hide"}>
        <p>
          Kada oslikavam svoje daskice pokušavam da se prvenstveno meni sviđa
          ono što sam napravila i da sam ja zadovoljna. Tek tada sam sigurna da
          će se svidjeti i osobi koja je naručila i osobi za koju je naručeno.
          Teško mi je izdvojiti uradak koji mi je najdraži, ali to bi mogla biti
          drvena roda namijenjena obiteljima u koje je nedavno stigla prinova.
          Ona u kljunu nosi maramu s bebom i njezinim imenom, a predviđena je za
          postavljanje na vidljivo mjesto ispred kuće ili stana kako bi susjedi
          znali da je ta obitelj bogatija za jednog člana.
        </p>
      </div>
      <button className="button" onClick={handleClick}>
        {showMore ? "Manje.." : "Više.. "}
      </button>
    </div>
  );
}

export default About;
