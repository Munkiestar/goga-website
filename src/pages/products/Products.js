import React, { useEffect, useState } from "react";
import "./Products.scss";
import { categories } from "../../seeds/products";
import ProductCard from "./productCard/ProductCard";
import Loader from "../../components/loader/loader";
import { v4 as uuid } from "uuid";

const contentful = require("contentful");

function Products() {
  const [category, setCategory] = useState("sve");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
    // fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const client = contentful.createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_TOKEN_KEY,
        host: "cdn.contentful.com",
      });

      const entries = await client.getEntries("products");
      const sanitizedEntries = entries.items.map((entry) => {
        console.log("ENTRY:", entry);
        return {
          ...entry?.fields,
          id: uuid(),
        };
      });
      console.log("sanitizedEntries:", sanitizedEntries);
      setProducts(sanitizedEntries);
      // setCategory(sanitizedEntries.category?.name);
      setIsLoading(false);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  console.log("categories", category);
  /* TODO: fetch categories from Contentful for dynamic input */
  // const fetchCategories = async () => {
  //   try {
  //     const client = contentful.createClient({
  //       space: process.env.REACT_APP_SPACE_ID,
  //       accessToken: process.env.REACT_APP_TOKEN_KEY,
  //       host: "cdn.contentful.com",
  //     });
  //
  //     const entries = await client.getEntries("categories");
  //     const sanitizedEntries = entries.items.map((entry, ind) => {
  //       return {
  //         ...entry.fields.category,
  //       };
  //     });
  //     console.log("sanitizedEntries: ", sanitizedEntries);
  //     setCategory(sanitizedEntries);
  //     setIsLoading(false);
  //   } catch (err) {
  //     console.log("Error: ", err);
  //   }
  // };
  //
  // console.log("categories", category);

  return (
    <main className="products">
      <h1>Galerija proizvoda</h1>

      <section className="products__btn-wrapper">
        {categories.map((cat) => (
          <button
            className="btn"
            key={cat.value}
            onClick={() => setCategory(cat.name)}
          >
            {cat.value}
          </button>
        ))}
      </section>
      <section className="products__cards">
        {isLoading && <Loader />}
        {products &&
          products
            // eslint-disable-next-line array-callback-return
            .filter((prod) => {
              if (prod.category === category) {
                return prod;
              } else if (category === "sve") {
                return prod;
              }
            })
            .map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
      </section>
    </main>
  );
}

export default Products;
