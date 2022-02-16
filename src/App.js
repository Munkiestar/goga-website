import React, { Suspense } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Loader from "./components/loader/loader";

// lazy loading
const Home = React.lazy(() => import("../src/pages/home/Home"));
const About = React.lazy(() => import("../src/pages/about/About"));
const Products = React.lazy(() => import("../src/pages/products/Products"));
const Contact = React.lazy(() => import("../src/pages/contact/Contact"));
const Error = React.lazy(() => import("../src/pages/error/Error"));

function App() {
  return (
    <div className="app light-mode">
      <section className="container">
        <Suspense fallback={<Loader />}>
          <Navbar />
        </Suspense>
      </section>

      <section className="wrapper">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nama" element={<About />} />
            <Route path="/galerija" element={<Products />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </section>
    </div>
  );
}

export default App;
