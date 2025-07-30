import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "@/services/productService";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAllProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.name} — {p.price}원
        </li>
      ))}
    </ul>
  );
}
