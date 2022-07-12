import React, { useEffect, useState } from "react";
import "./Products.scss";
import ProductCard from "./productCard/ProductCard";
import Loader from "../../components/loader/loader";
import { v4 as uuid } from "uuid";

const contentful = require("contentful");

function Products() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("sve");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const client = contentful.createClient({
        space: process.env.REACT_APP_SPACE_ID,
        accessToken: process.env.REACT_APP_TOKEN_KEY,
        host: "cdn.contentful.com",
      });

      const entries = await client.getEntries("products");
      const sanitizedEntries = entries.items
        .filter((cat) => cat.sys.contentType.sys.id === "products")
        .map((entry) => {
          return {
            ...entry?.fields,
            id: uuid(),
          };
        });

      const entriesCategories = await client.getEntries("categories");
      const sanitizedCategories = entriesCategories.items
        .filter(
          (e) => e?.fields?.value !== undefined && e?.fields?.name !== undefined
        )
        .map((cat) => {
          return {
            value: cat?.fields?.value,
            name: cat?.fields?.name,
          };
        });
      setProducts(sanitizedEntries);
      setCategories(sanitizedCategories);
      setIsLoading(false);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <main className="products">
      <h1>Galerija proizvoda</h1>

      <section className="products__btn-wrapper">
        {categories &&
          categories.map((cat) => (
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
