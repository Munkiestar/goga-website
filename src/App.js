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

      <section className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nama" element={<About />} />
          <Route path="/galerija" element={<Products />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
