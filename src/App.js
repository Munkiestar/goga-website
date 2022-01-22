import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="app light-mode">
      <section className="container">
        <Navbar />
      </section>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

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
