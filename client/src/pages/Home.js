import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";

const Home = (props) => {

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  let allProducts;
  let productList;
  let trendingProducts;

  if (data) {
    allProducts = data?.allProducts[0];
    trendingProducts = data?.allProducts?.slice(1, 4);
    productList = data?.allProducts?.slice(4, 8);
  }

  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return (
    <div>
      <h1>Welcome to our e-commerce site!</h1>
          {productList?.map((product) => (
            <Card
            key={product._id}
            name={product.name}
            description={product.description}
            image={product.image}
            price={product.price}
          />
          ))}
    </div>
  );
};

export default Home;