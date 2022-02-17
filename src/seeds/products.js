import oslikana_daskica from "../assets/slika-4.jpg";
import rocking_rainbow from "../assets/slika-1.jpg";
import sklopiva_penjalica from "../assets/slika-2.jpg";
import drveni_visomjer from "../assets/slika-5.jpg";

import { v4 as uuid } from "uuid";

export const categories = [
  {
    name: "sve",
    value: "Sve",
  },
  {
    name: "oslikana_daskica",
    value: "Oslikane Daskice",
  },
  {
    name: "rocking_rainbow",
    value: "Rocking Rainbow",
  },
  {
    name: "sklopiva_penjalica",
    value: "Sklopive Penjalice",
  },
  {
    name: "drveni_visomjer",
    value: "Drveni Visomjeri",
  },
];

export const products = [
  {
    title: "Oslikane daskice",
    category: "oslikana_daskica",
    description:
      "Naše, kako ih od milja zovemo Daskice, su rješenje za ŠTO POKLONITI? Ispisujemo poruke, stihove, želje.... Svaka daskica je unikatna, ručno oslikana.  Vaše želje, naša realizacija.",
    size: "30 X 30 cm",
    colors: "dolazi u natur verziji",
    image: oslikana_daskica,
    id: uuid(),
  },
  {
    title: "Rocking Raingow",
    category: "rocking_rainbow",
    description: `<p>Ravnoteža je važan dio djetetovog razvoja.  Mnogo je mogućnosti za što možete koristiti ROCKING RAINBOW klackalicu penjalicu. Vaše dijete može sjediti na njoj, stajati na njoj ili se čak njihati dok sjedi ili stoji. Uz Rocking rainbow u ponudi su i rampe/tobogani, klasićna rampa (sa poprečnim daskicama) i rampa sa hvatištima (hvatišta prilagođena za male prstiće u raznim oblicima).</p>`,
    size: `<b>Materijal:</b> šperploče breze 12 mm ili 15 mm<br>
      <b>Cijena natur 12mm:</b> 550,00 kn  + 55,00 kn poštarina<br>
      <b>Cijena u boji 12mm:</b> 650,00 kn  + 55,00 kn poštarina<br>
      <b>Rampa/tobogan:</b> 250,00 kn + 40,00 kn poštarina<br>
      <p>*Od 12 mj do 5 godina, nosivost do 40 kg</p>`,
    colors: "30 X 30 cm",
    image: rocking_rainbow,
    id: uuid(),
  },
  {
    title: "Drveni visomjer",
    category: "drveni_visomjer",
    description:
      "...vašem djetetu nudi niz radnji koje pospješuju razvoj fine motorike određene vježbe i poticaj da brze raste.",
    size: "30 X 30 cm",
    colors: "dolazi u natur verziji",
    image: drveni_visomjer,
    id: uuid(),
  },
  {
    title: "Sklopiva Penjalica",
    category: "sklopiva_penjalica",
    description: `<p>Sklopiva drvena penjalica za razvoj motorike s rampom koja se moze koristiti kao tobogan.</p>`,
    size: `<b>Cijena natur sa rampom sa poprečnim daskicama: </b> 600,00 kn + 55,00 kn poštarina <br>
    <b>Cijena natur sa rampom sa hvatištima: </b> 700,00 kn + 55,00 kn poštarina<br>
    <b>Bojanje u boje po želji: </b> 70,00 kn<br>
    <b>Bojanje rampe chalk podlogom za pisanje kredom: </b> 130,00 kn<br>
    <p>*Od 14 mj do 5 godina, nosivost do 40 kg. </p>
`,
    colors: "dolazi u natur verziji",
    image: sklopiva_penjalica,
    id: uuid(),
  },
  {
    title: "Toranj za ucenje",
    category: "oslikane_daskica",
    description: `<p>Djeca su znatiželja, vole istraživati, a istražujući dijete uči te dolazi do otkrića koja obogaćuju njegovo znanje o sebi, drugima i svijetu koji ga okružuje.  Toranj je idealan da svoje mališane ukljućite u mnoge stvari koje radite. Toranj je stabilan i siguran , izrađen od kvalitetnih materijala, glatko obrađen.  Moguče je podešavanje platforme na 2 razine. </p>`,
    size: `
    <b>Materijal: </b> šperploča od breze 12mm ili 15mm<br>
    <b>Dimenzije: </b>  90 cm × 40 cm × 40 cm <br>
    <b>Cijena: </b> 670,00 kn + 55,00 kn poštarina<br>
    <b>dodatak</b> - magnetna ploča ili ploča za crtanje 100,00 kn<br>
    <b>boja po želji: </b> 150,00 kn`,
    colors: "dolazi u natur verziji",
    image: oslikana_daskica,
    id: uuid(),
  },
  {
    title: "Rocking Raingow",
    category: "rocking_rainbow",
    description:
      "Dječji ukrasi koji nadopunjuju dječju sobu oduševiti će vaše mališane, jer će njihovom kraljevstvu dodati čarobni osjećaj. Dodajte malo čarolije u njihov prostor, za onu točku na i koja će dječju sobu učiniti još ljepšom i ugodnijom.",
    size: "30 X 30 cm",
    colors: "dolazi u natur verziji",
    image: rocking_rainbow,
    id: uuid(),
  },
  {
    title: "Drveni visomjer",
    category: "drveni_visomjer",
    description:
      "...vašem djetetu nudi niz radnji koje pospješuju razvoj fine motorike određene vježbe i poticaj da brze raste.",
    size: "30 X 30 cm",
    colors: "dolazi u natur verziji",
    image: drveni_visomjer,
    id: uuid(),
  },
  {
    title: "Sklopiva Penjalica",
    category: "sklopiva_penjalica",
    description:
      "Prekrasna noćna lampica u obliku ljame emitira ugodnu svjetlost koja umiruje i blagotvorno djeluje na okolinu. Boja svjetla se mijenja. Osim što prevladava strah od mraka kod mališana, to je i prekrasan ukrasni predmet.",
    size: "30 X 30 cm",
    colors: "dolazi u natur verziji",
    image: sklopiva_penjalica,
    id: uuid(),
  },
];

/*
        1. Oslikane daskice
        2. Likovi
        3. Igrala i igracke
        4. Mjerilice visine
        5. 3D okviri
        6. Razno
        Gordana
        Gordana Bulović
        Mislim da bi ti bile kategorije

*/
